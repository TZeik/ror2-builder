"use client";
import Image from "next/image";
import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiShare2,
  FiSave,
  FiDownload,
  FiUpload,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { useDrop } from "react-dnd";
import { useBuildActions, useCurrentBuild } from "@/store/useBuildStore";
import { ITEMS } from "@/data/items";
import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { BuildItem, Item } from "@/lib/types/gameTypes";
import { useSurvivor } from "@/context/SurvivorContext";
import { SURVIVORS } from "@/data/survivors";
import { useDevice } from "@/context/DeviceContext";

export default function BuildContainer() {
  const searchParams = useSearchParams();
  const buildItems = useCurrentBuild();
  const {
    addItem,
    updateItemCount,
    removeItem,
    resetBuild,
    saveCurrentBuild,
    loadBuild,
    importBuild,
    deleteBuild,
    getBuildsBySurvivor,
  } = useBuildActions();
  const [isImporting, setIsImporting] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [buildName, setBuildName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { selectedSurvivor, setSelectedSurvivor } = useSurvivor();
  const [selectKey, setSelectKey] = useState(0);
  const [selectedBuildId, setSelectedBuildId] = useState<string | null>(null);

  // Cargar build desde URL si existe
  useEffect(() => {
    const buildParam = searchParams.get("build");
    if (buildParam) {
      try {
        const buildData = JSON.parse(atob(buildParam));

        // Cambiar al survivor correspondiente
        if (buildData.survivorId) {
          const foundSurvivor = SURVIVORS.find(
            (s) => s.id === buildData.survivorId
          );
          if (foundSurvivor) {
            setSelectedSurvivor(foundSurvivor);
          }
        }

        if (buildData.items) {
          // Crear arreglo de items con sus cantidades
          const itemsToAdd: BuildItem[] = buildData.items
            .map(({ id, count }: { id: string; count: number }) => {
              const item = ITEMS.find((i) => i.id === id);
              return item ? { item, count } : null;
            })
            .filter(Boolean);

          // Añadir cada item con su cantidad correspondiente
          itemsToAdd.forEach(
            ({ item, count }: { item: Item; count: number }) => {
              for (let i = 0; i < count; i++) {
                addItem(item);
              }
            }
          );

          // Importar la build completa
          importBuild({ items: itemsToAdd, survivorId: buildData.survivorId });
        }

        toast.success("Build loaded from URL!");
        setSelectKey((prev) => prev + 1); // Forzar re-render si es necesario
      } catch (error) {
        toast.error("Invalid build URL");
        console.error(error);
      }
    }
  }, [addItem, importBuild, resetBuild, searchParams, setSelectedSurvivor]);

  // Configuración de drop
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "ITEM",
    drop: (item: { id: string }) => {
      const foundItem = ITEMS.find((i) => i.id === item.id);
      if (foundItem) {
        addItem(foundItem);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);
  dropRef(ref);

  // Compartir build
  const shareBuild = async () => {
    if (buildItems.length === 0) {
      toast.error("Build is empty");
      return;
    }

    const buildData = {
      items: buildItems.map(({ item, count }) => ({
        id: item.id,
        count,
      })),
      survivorId: selectedSurvivor?.id,
      timestamp: Date.now(),
    };

    const base64Data = btoa(JSON.stringify(buildData));
    const url = `${window.location.origin}${window.location.pathname}?build=${base64Data}`;

    try {
      // Verificar si el navegador soporta la API del clipboard
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not supported");
      }

      await navigator.clipboard.writeText(url);

      toast.success(
        <div className="flex items-center gap-2">
          <FiCheck className="text-green-500" />
          <span>Build link copied to clipboard!</span>
        </div>,
        {
          duration: 3000,
          position: "bottom-center",
          style: {
            background: "#1F2937",
            color: "#F9FAFB",
            borderRadius: "0.5rem",
            border: "1px solid #374151",
            padding: "0.75rem 1rem",
          },
        }
      );
    } catch (error) {
      console.error("Failed to copy:", error);

      // Fallback para navegadores que no soportan la API del clipboard
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          toast.success(
            <div className="flex items-center gap-2">
              <FiCheck className="text-green-500" />
              <span>Build link copied to clipboard!</span>
            </div>,
            {
              duration: 3000,
              position: "bottom-center",
            }
          );
        } else {
          throw new Error("Fallback copy failed");
        }
      } catch (fallbackError) {
        document.body.removeChild(textArea);
        console.error(fallbackError);
        toast.error(
          <div className="flex items-center gap-2">
            <FiX className="text-red-500" />
            <span>Failed to copy link. Please copy manually: {url}</span>
          </div>,
          {
            duration: 5000,
            position: "bottom-center",
          }
        );
      }
    }
  };

  // Guardar build con nombre
  const handleSaveBuild = () => {
    if (!buildName.trim()) {
      toast.error("Please enter a build name");
      return;
    }

    saveCurrentBuild(buildName.trim(), selectedSurvivor.id);
    toast.success(`Build "${buildName}" saved!`);
    setBuildName("");
    setSaveDialogOpen(false);
  };

  // Exportar build a JSON
  const exportBuild = () => {
    if (buildItems.length === 0) {
      toast.error("Build is empty");
      return;
    }

    const buildData = {
      items: buildItems.map(({ item, count }) => ({
        id: item.id,
        count,
      })),
      survivorId: selectedSurvivor.id,
      timestamp: Date.now(),
    };

    const dataStr = JSON.stringify(buildData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;

    const exportName = `ror2-build-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute("download", exportName);
    link.click();

    toast.success("Build exported successfully!");
  };

  const handleDeleteBuild = () => {
    if (!selectedBuildId) return;

    deleteBuild(selectedBuildId);
    toast.success("Build deleted successfully!");
    setSelectedBuildId(null); // Limpiamos la selección
    setDeleteDialogOpen(false);
    setSelectKey((prev) => prev + 1); // Forzar re-render del select
  };

  const handleImportBuild = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const buildData = JSON.parse(event.target?.result as string);
        // Cambiar al survivor correspondiente
        if (buildData.survivorId) {
          const foundSurvivor = SURVIVORS.find(
            (s) => s.id === buildData.survivorId
          );
          if (foundSurvivor) {
            setSelectedSurvivor(foundSurvivor);
          }
        }

        if (buildData.items) {
          // Crear arreglo de items con sus cantidades
          const itemsToAdd: BuildItem[] = buildData.items
            .map(({ id, count }: { id: string; count: number }) => {
              const item = ITEMS.find((i) => i.id === id);
              return item ? { item, count } : null;
            })
            .filter(Boolean);

          // Añadir cada item con su cantidad correspondiente
          itemsToAdd.forEach(
            ({ item, count }: { item: Item; count: number }) => {
              for (let i = 0; i < count; i++) {
                addItem(item);
              }
            }
          );

          // Importar la build completa
          importBuild({ items: itemsToAdd, survivorId: buildData.survivorId });
        }

        toast.success("Build imported successfully!");
      } catch (error) {
        toast.error("Invalid build file");
        console.error(error);
      } finally {
        setIsImporting(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    };

    reader.readAsText(file);
  };

  // Obtener builds guardadas para el survivor actual
  const savedBuilds = getBuildsBySurvivor(selectedSurvivor.id);

  useEffect(() => {
    setSelectKey((prev) => prev + 1);
  }, [savedBuilds.length]);

  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <div
        ref={ref}
        className={`bg-gray-800 border ${
          isOver ? "border-orange-500" : "border-gray-700"
        } rounded-lg p-3 h-fit sticky top-4 transition-colors`}
      >
        {/* Input oculto para importar */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept=".json"
          className="hidden"
        />
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Your Build</h2>
          <div className="flex gap-1">
            <button
              onClick={shareBuild}
              className="p-1 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
              title="Share build"
            >
              <FiShare2 size={16} />
            </button>

            {/* Dialog para guardar build */}
            <Dialog.Root open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
              <Dialog.Trigger asChild>
                <button
                  className="p-1 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                  title="Save build"
                >
                  <FiSave size={16} />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 border border-gray-700 rounded-lg p-4 w-[90%] max-w-xs">
                  <Dialog.Title className="text-lg font-semibold mb-3">
                    Save Build
                  </Dialog.Title>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={buildName}
                      onChange={(e) => setBuildName(e.target.value)}
                      placeholder="Enter build name"
                      className="w-full px-3 py-1 bg-gray-700 border border-gray-600 rounded text-sm"
                    />
                    <div className="flex justify-end gap-2">
                      <Dialog.Close className="px-3 py-1 rounded hover:bg-gray-700 text-sm">
                        Cancel
                      </Dialog.Close>
                      <button
                        onClick={handleSaveBuild}
                        className="px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded text-sm"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <button
              onClick={exportBuild}
              className="p-1 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
              title="Export build"
            >
              <FiDownload size={16} />
            </button>
            <button
              onClick={handleImportBuild}
              className="p-1 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
              title="Import build"
              disabled={isImporting}
            >
              <FiUpload size={16} />
            </button>
          </div>
        </div>

        {/* Dropdown para cargar builds con botón de eliminación */}
        <div className="flex gap-1 mb-3">
          <div className="relative flex-1">
            <select
              key={selectKey}
              onChange={(e) => {
                setSelectedBuildId(e.target.value);
                loadBuild(e.target.value);
              }}
              className="w-full bg-gray-700 border border-gray-600 rounded p-1 text-xs cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Load saved build...
              </option>
              {savedBuilds.length > 0 ? (
                savedBuilds.map((build) => (
                  <option
                    key={build.id}
                    value={build.id}
                    className="cursor-pointer"
                  >
                    {build.name} (
                    {new Date(build.timestamp).toLocaleDateString()})
                  </option>
                ))
              ) : (
                <option disabled>No saved builds</option>
              )}
            </select>
          </div>

          <button
            onClick={() => selectedBuildId && setDeleteDialogOpen(true)}
            disabled={!selectedBuildId}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete selected build"
          >
            <FiTrash2 size={16} />
          </button>
        </div>

        {/* Diálogo de confirmación para eliminar build */}
        <Dialog.Root open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 border border-gray-700 rounded-lg p-4 w-[90%] max-w-xs">
              <Dialog.Title className="text-lg font-semibold mb-3">
                Delete Build
              </Dialog.Title>
              <div className="space-y-3">
                <p className="text-sm">
                  Are you sure you want to delete this build? This action cannot
                  be undone.
                </p>
                <div className="flex justify-end gap-2">
                  <Dialog.Close className="px-3 py-1 rounded hover:bg-gray-700 text-sm">
                    Cancel
                  </Dialog.Close>
                  <button
                    onClick={handleDeleteBuild}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        {/* Lista de items */}
        <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
          {buildItems.length > 0 ? (
            buildItems.map(({ item, count }) => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-1 bg-gray-750 rounded border border-gray-700"
              >
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-medium truncate">{item.name}</h3>
                  <p className="text-2xs text-gray-400 capitalize">
                    {item.rarity}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateItemCount(item.id, count - 1)}
                    className="p-0.5 text-gray-400 hover:text-white rounded hover:bg-gray-700 cursor-pointer"
                  >
                    <FiMinus size={12} />
                  </button>

                  <span className="w-4 text-center text-xs">{count}</span>

                  <button
                    onClick={() => updateItemCount(item.id, count + 1)}
                    className="p-0.5 text-gray-400 hover:text-white rounded hover:bg-gray-700 cursor-pointer"
                  >
                    <FiPlus size={12} />
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-0.5 text-gray-400 hover:text-red-500 rounded ml-1 cursor-pointer"
                    title="Remove item"
                  >
                    <FiTrash2 size={12} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-3 text-gray-500 text-sm">
              Touch items to add
            </div>
          )}
        </div>

        {/* Estadísticas del build */}
        <div className="border-t border-gray-700 pt-3">
          <h3 className="font-medium mb-1 text-sm">Build Summary</h3>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <p className="text-gray-400">Total Items</p>
              <p className="font-medium">
                {buildItems.reduce((sum, item) => sum + item.count, 0)}
              </p>
            </div>
          </div>

          <button
            className="w-full mt-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs font-medium transition-colors"
            onClick={() => resetBuild()}
          >
            Reset Build
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`bg-gray-800 border ${
        isOver ? "border-orange-500" : "border-gray-700"
      } rounded-lg p-4 h-fit sticky top-4 transition-colors`}
    >
      {/* Input oculto para importar */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".json"
        className="hidden"
      />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Build</h2>
        <div className="flex gap-2">
          <button
            onClick={shareBuild}
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
            title="Share build"
          >
            <FiShare2 />
          </button>

          {/* Dialog para guardar build */}
          <Dialog.Root open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
            <Dialog.Trigger asChild>
              <button
                className="p-2 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                title="Save build"
              >
                <FiSave />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
              <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 border border-gray-700 rounded-lg p-6 w-full max-w-md">
                <Dialog.Title className="text-xl font-semibold mb-4">
                  Save Build
                </Dialog.Title>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={buildName}
                    onChange={(e) => setBuildName(e.target.value)}
                    placeholder="Enter build name"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
                  />
                  <div className="flex justify-end gap-2">
                    <Dialog.Close className="px-4 py-2 rounded hover:bg-gray-700">
                      Cancel
                    </Dialog.Close>
                    <button
                      onClick={handleSaveBuild}
                      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <button
            onClick={exportBuild}
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
            title="Export build"
          >
            <FiDownload />
          </button>
          <button
            onClick={handleImportBuild}
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
            title="Import build"
            disabled={isImporting}
          >
            <FiUpload />
          </button>
        </div>
      </div>

      {/* Dropdown para cargar builds con botón de eliminación */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <select
            key={selectKey}
            onChange={(e) => {
              setSelectedBuildId(e.target.value);
              loadBuild(e.target.value);
            }}
            className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-sm cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Load saved build...
            </option>
            {savedBuilds.length > 0 ? (
              savedBuilds.map((build) => (
                <option
                  key={build.id}
                  value={build.id}
                  className="cursor-pointer"
                >
                  {build.name} ({new Date(build.timestamp).toLocaleDateString()}
                  )
                </option>
              ))
            ) : (
              <option disabled>No saved builds</option>
            )}
          </select>
        </div>

        <button
          onClick={() => selectedBuildId && setDeleteDialogOpen(true)}
          disabled={!selectedBuildId}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          title="Delete selected build"
        >
          <FiTrash2 />
        </button>
      </div>

      {/* Diálogo de confirmación para eliminar build */}
      <Dialog.Root open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 border border-gray-700 rounded-lg p-6 w-full max-w-md">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Delete Build
            </Dialog.Title>
            <div className="space-y-4">
              <p>
                Are you sure you want to delete this build? This action cannot
                be undone.
              </p>
              <div className="flex justify-end gap-2">
                <Dialog.Close className="px-4 py-2 rounded hover:bg-gray-700">
                  Cancel
                </Dialog.Close>
                <button
                  onClick={handleDeleteBuild}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Lista de items */}
      <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
        {buildItems.length > 0 ? (
          buildItems.map(({ item, count }) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2 bg-gray-750 rounded border border-gray-700"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium truncate">{item.name}</h3>
                <p className="text-xs text-gray-400 capitalize">
                  {item.rarity}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateItemCount(item.id, count - 1)}
                  className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700 cursor-pointer"
                >
                  <FiMinus size={14} />
                </button>

                <span className="w-6 text-center">{count}</span>

                <button
                  onClick={() => updateItemCount(item.id, count + 1)}
                  className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700 cursor-pointer"
                >
                  <FiPlus size={14} />
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1 text-gray-400 hover:text-red-500 rounded ml-2 cursor-pointer"
                  title="Remove item"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">
            Drag items here or click to add
          </div>
        )}
      </div>

      {/* Estadísticas del build */}
      <div className="border-t border-gray-700 pt-4">
        <h3 className="font-medium mb-2">Build Summary</h3>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Total Items</p>
            <p className="font-medium">
              {buildItems.reduce((sum, item) => sum + item.count, 0)}
            </p>
          </div>
        </div>

        <button
          className="w-full mt-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
          onClick={() => resetBuild()}
        >
          Reset Build
        </button>
      </div>
    </div>
  );
}
