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
} from "react-icons/fi";
import { useDrop } from "react-dnd";
import { useBuildActions, useCurrentBuild, useSavedBuilds } from "@/store/useBuildStore";
import { ITEMS } from "@/data/items";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import * as Dialog from '@radix-ui/react-dialog';

export default function BuildContainer() {
  const searchParams = useSearchParams();
  const buildItems = useCurrentBuild();
  const { addItem, updateItemCount, removeItem, resetBuild, saveCurrentBuild, loadBuild } = useBuildActions();
  const [isImporting, setIsImporting] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [buildName, setBuildName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedSurvivorId = "captain"; // Esto debería venir de tu SurvivorSelector

  // Cargar build desde URL si existe
  useEffect(() => {
    const buildParam = searchParams.get('build');
    if (buildParam) {
      try {
        const buildData = JSON.parse(atob(buildParam));
        const itemsToAdd = buildData.items.map(({ id, count }) => {
          const item = ITEMS.find(i => i.id === id);
          return item ? { item, count } : null;
        }).filter(Boolean);
        
        resetBuild();
        itemsToAdd.forEach(({ item, count }) => {
          for (let i = 0; i < count; i++) {
            addItem(item);
          }
        });
        toast.success("Build loaded from URL!");
      } catch (error) {
        toast.error("Invalid build URL");
        console.error(error);
      }
    }
  }, [addItem, resetBuild, searchParams]);

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
  const shareBuild = () => {
    if (buildItems.length === 0) {
      toast.error("Build is empty");
      return;
    }

    const buildData = {
      items: buildItems.map(({ item, count }) => ({
        id: item.id,
        count
      })),
      timestamp: Date.now()
    };

    const base64Data = btoa(JSON.stringify(buildData));
    const url = `${window.location.origin}${window.location.pathname}?build=${base64Data}`;
    
    navigator.clipboard.writeText(url)
      .then(() => toast.success("Build link copied to clipboard!"))
      .catch(() => toast.error("Failed to copy link"));
  };

  // Guardar build con nombre
  const handleSaveBuild = () => {
    if (!buildName.trim()) {
      toast.error("Please enter a build name");
      return;
    }

    saveCurrentBuild(buildName.trim(), selectedSurvivorId);
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
        count
      })),
      survivorId: selectedSurvivorId,
      timestamp: Date.now()
    };

    const dataStr = JSON.stringify(buildData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportName = `ror2-build-${new Date().toISOString().slice(0, 10)}.json`;
    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute("download", exportName);
    link.click();
    
    toast.success("Build exported successfully!");
  };

  // Importar build desde JSON
  const importBuild = () => {
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
        const itemsToAdd = buildData.items.map(({ id, count }) => {
          const item = ITEMS.find(i => i.id === id);
          return item ? { item, count } : null;
        }).filter(Boolean);
        
        resetBuild();
        itemsToAdd.forEach(({ item, count }) => {
          for (let i = 0; i < count; i++) {
            addItem(item);
          }
        });
        
        toast.success("Build imported successfully!");
      } catch (error) {
        toast.error("Invalid build file");
        console.error(error)
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
  const savedBuilds = useSavedBuilds(selectedSurvivorId);

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
            <Dialog.Title className="text-xl font-semibold mb-4">Save Build</Dialog.Title>
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
          <button
            onClick={exportBuild}
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
            title="Export build"
          >
            <FiDownload />
          </button>
          <button
            onClick={importBuild}
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
            title="Import build"
            disabled={isImporting}
          >
            <FiUpload />
          </button>
        </div>
      </div>

      {/* Dropdown para cargar builds */}
      <div className="relative mb-4">
        <select
          onChange={(e) => loadBuild(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-sm"
          defaultValue=""
        >
          <option value="" disabled>Load saved build...</option>
          {savedBuilds.length > 0 ? (
            savedBuilds.map((build) => (
              <option key={build.id} value={build.id}>
                {build.name} ({new Date(build.timestamp).toLocaleDateString()})
              </option>
            ))
          ) : (
            <option disabled>No saved builds</option>
          )}
        </select>
      </div>

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