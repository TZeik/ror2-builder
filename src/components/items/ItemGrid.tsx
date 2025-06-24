"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { FiSearch, FiX } from "react-icons/fi";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Rarity } from "@/lib/types/gameTypes";
import { ITEMS } from "@/data/items";
import { useBuildActions } from "@/store/useBuildStore";
import { useDrag } from "react-dnd";

// Configuración de colores por rareza
const RARITY_STYLES: Record<
  Rarity,
  { bg: string; border: string; text: string }
> = {
  common: {
    bg: "bg-gray-500/20",
    border: "border-gray-500",
    text: "text-gray-100",
  },
  uncommon: {
    bg: "bg-green-500/20",
    border: "border-green-500",
    text: "text-green-300",
  },
  legendary: {
    bg: "bg-red-500/20",
    border: "border-red-500",
    text: "text-red-300",
  },
  boss: {
    bg: "bg-yellow-500/20",
    border: "border-yellow-500",
    text: "text-yellow-300",
  },
  void: {
    bg: "bg-purple-500/20",
    border: "border-purple-500",
    text: "text-purple-300",
  },
  lunar: {
    bg: "bg-blue-500/20",
    border: "border-blue-500",
    text: "text-blue-300",
  },
  equipment: {
    bg: "bg-orange-500/20",
    border: "border-orange-500",
    text: "text-orange-300",
  },
  lunarEquipment: {
    bg: "bg-cyan-400/20",
    border: "border-cyan-400",
    text: "text-cyan-300",
  },
  eliteEquipment: {
    bg: "bg-yellow-200/20",
    border: "border-yellow-200",
    text: "text-yellow-300",
  },
};

// Orden de las rarezas para los filtros
const RARITY_ORDER: Rarity[] = [
  "common",
  "uncommon",
  "legendary",
  "boss",
  "void",
  "lunar",
  "equipment",
  "lunarEquipment",
  "eliteEquipment",
];

const DraggableItem = ({ item }: { item: (typeof ITEMS)[0] }) => {
  const { addItem, removeItem } = useBuildActions();
  const rarityStyle = RARITY_STYLES[item.rarity];

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "ITEM",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);
  dragRef(ref);

  const handleItemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.type === "click") {
      addItem(item);
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      removeItem(item.id);
    }
  };

  return (
    <Tooltip.TooltipProvider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            ref={ref}
            className={`relative w-16 h-16 ${rarityStyle.bg} border ${
              rarityStyle.border
            } rounded-lg p-2 transition-colors cursor-pointer flex flex-col items-center justify-center ${
              isDragging ? "opacity-50" : "opacity-100"
            }`}
            onClick={handleItemClick}
            onContextMenu={handleItemClick}
          >
            <div
              className={`absolute top-0 right-0 w-2 h-2 rounded-full ${rarityStyle.bg} border ${rarityStyle.border}`}
            ></div>
            <div className="w-10 h-10 relative">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-contain"
                sizes="40px"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/items/default.png";
                }}
              />
            </div>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="max-w-[200px] bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm shadow-lg z-50"
            side="top"
            align="center"
          >
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className={`text-xs ${rarityStyle.text} capitalize`}>
                  {item.rarity} {item.category && `• ${item.category}`}
                </p>
                <p className="mt-1 text-xs text-gray-300">{item.description}</p>
              </div>
            </div>
            <Tooltip.Arrow className="fill-gray-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.TooltipProvider>
  );
};

export default function ItemGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarities, setSelectedRarities] = useState<Rarity[]>([]);

  // Filtrar ítems
  const filteredItems = ITEMS.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRarity =
      selectedRarities.length === 0 || selectedRarities.includes(item.rarity);
    return matchesSearch && matchesRarity;
  });

  // Manejar selección de rarezas
  const toggleRarity = (rarity: Rarity) => {
    setSelectedRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((r) => r !== rarity)
        : [...prev, rarity]
    );
  };

  // Manejar toggle de todas las rarezas
  const toggleAllRarities = () => {
    if (selectedRarities.length === RARITY_ORDER.length) {
      setSelectedRarities([]);
    } else {
      setSelectedRarities([...RARITY_ORDER]);
    }
  };

  return (
    <div className="space-y-10">
      {/* Filtros y búsqueda */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        {/* Barra de búsqueda */}
        <div className="relative flex max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search items..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <FiX className="text-gray-400 hover:text-white" />
            </button>
          )}
        </div>

        {/* Filtros por rareza */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={toggleAllRarities}
            className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 transition-colors ${
              selectedRarities.length === RARITY_ORDER.length
                ? "bg-gray-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current opacity-80"></span>
            All
          </button>

          {RARITY_ORDER.map((rarity) => (
            <button
              key={rarity}
              onClick={() => toggleRarity(rarity)}
              className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 transition-colors ${
                selectedRarities.includes(rarity)
                  ? `${RARITY_STYLES[rarity].bg} ${RARITY_STYLES[rarity].text}`
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedRarities.includes(rarity)
                    ? RARITY_STYLES[rarity].bg
                    : "bg-current opacity-80"
                }`}
              ></span>
              {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de ítems */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-14 gap-1">
          {filteredItems.map((item) => (
            <DraggableItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400">
          No items found matching your criteria
        </div>
      )}
    </div>
  );
}
