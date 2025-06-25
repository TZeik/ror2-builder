"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { FiSearch, FiX, FiPlus } from "react-icons/fi";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Rarity } from "@/lib/types/gameTypes";
import { ITEMS } from "@/data/items";
import { useBuildActions } from "@/store/useBuildStore";
import { useDrag } from "react-dnd";
import { useDevice } from "@/context/DeviceContext";
import * as Popover from "@radix-ui/react-popover";

// Rarity color configuration
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

// Rarity order for filters
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

const DraggableItem = ({
  item,
  isMobile,
}: {
  item: (typeof ITEMS)[0];
  isMobile: boolean;
}) => {
  const { addItem } = useBuildActions();
  const rarityStyle = RARITY_STYLES[item.rarity];
  const [open, setOpen] = useState(false);

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
    if (isMobile) {
      e.preventDefault();
      setOpen(true);
    } else {
      addItem(item);
    }
  };

  const handleAddItem = () => {
    addItem(item);
    setOpen(false);
  };

  // Contenido común para Tooltip y Popover
  const content = (
    <div className="max-w-[200px] bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm shadow-lg z-50">
      <div className="flex items-start gap-2">
        <div className={`relative ${isMobile ? "w-8 h-8" : "w-10 h-10"} flex-shrink-0`}>
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            sizes={isMobile ? "32px" : "40px"}
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
      {isMobile && (
        <button
          onClick={handleAddItem}
          className="w-full mt-2 py-1 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded text-xs font-medium flex items-center justify-center gap-1"
        >
          <FiPlus size={14} />
          Add Item
        </button>
      )}
    </div>
  );

  return isMobile ? (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <div
          ref={ref}
          className={`relative w-12 h-12 p-1 ${rarityStyle.bg} border ${rarityStyle.border} rounded-lg transition-colors cursor-pointer flex flex-col items-center justify-center ${
            isDragging ? "opacity-50" : "opacity-100"
          }`}
          onClick={handleItemClick}
        >
          <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${rarityStyle.bg} border ${rarityStyle.border}`}></div>
          <div className="relative w-8 h-8">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="object-contain"
              sizes="32px"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/items/default.png";
              }}
            />
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          align="center"
          className="z-50"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {content}
          <Popover.Arrow className="fill-gray-700" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ) : (
    <Tooltip.TooltipProvider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            ref={ref}
            className={`relative w-16 h-16 p-2 ${rarityStyle.bg} border ${rarityStyle.border} rounded-lg transition-colors cursor-pointer flex flex-col items-center justify-center ${
              isDragging ? "opacity-50" : "opacity-100"
            }`}
            onClick={handleItemClick}
            onContextMenu={(e) => {
              e.preventDefault();
              addItem(item);
            }}
          >
            <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${rarityStyle.bg} border ${rarityStyle.border}`}></div>
            <div className="relative w-10 h-10">
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
            className="z-50"
            side="top"
            align="center"
          >
            {content}
            <Tooltip.Arrow className="fill-gray-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.TooltipProvider>
  );
};

export default function ItemGrid() {
  const { isMobile } = useDevice();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarities, setSelectedRarities] = useState<Rarity[]>(
    isMobile ? ["common"] : []
  );

  // Filter items
  const filteredItems = ITEMS.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRarity =
      selectedRarities.length === 0 || selectedRarities.includes(item.rarity);
    return matchesSearch && matchesRarity;
  });

  // Handle rarity selection (single selection on mobile)
  const toggleRarity = (rarity: Rarity) => {
    if (isMobile) {
      setSelectedRarities([rarity]);
    } else {
      setSelectedRarities((prev) =>
        prev.includes(rarity)
          ? prev.filter((r) => r !== rarity)
          : [...prev, rarity]
      );
    }
  };

  // Toggle all rarities (desktop only)
  const toggleAllRarities = () => {
    if (selectedRarities.length === RARITY_ORDER.length) {
      setSelectedRarities([]);
    } else {
      setSelectedRarities([...RARITY_ORDER]);
    }
  };

  return (
    <div className={`space-y-${isMobile ? "4" : "6"}`}>
      {/* Search and filters */}
      <div
        className={`flex flex-col ${
          isMobile ? "gap-3" : "sm:flex-row gap-4 justify-between mb-8"
        }`}
      >
        {/* Search bar */}
        <div className="relative flex max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" size={isMobile ? 16 : 18} />
          </div>
          <input
            type="text"
            placeholder="Search items..."
            className={`w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
              isMobile ? "text-sm" : ""
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <FiX
                className="text-gray-400 hover:text-white"
                size={isMobile ? 16 : 18}
              />
            </button>
          )}
        </div>

        {/* Rarity filters */}
        <div className="flex flex-wrap gap-2">
          {!isMobile && (
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
          )}

          {RARITY_ORDER.map((rarity) => (
            <button
              key={rarity}
              onClick={() => toggleRarity(rarity)}
              className={`px-${
                isMobile ? "2" : "3"
              } py-1 text-xs font-medium rounded-full flex items-center gap-1 transition-colors ${
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

      {/* Items grid */}
      {filteredItems.length > 0 ? (
        <div
          className={`grid ${
            isMobile
              ? "grid-cols-6 sm:grid-cols-12"
              : "sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-14"
          } gap-1`}
        >
          {filteredItems.map((item) => (
            <DraggableItem key={item.id} item={item} isMobile={isMobile} />
          ))}
        </div>
      ) : (
        <div
          className={`text-center py-8 text-gray-400 ${
            isMobile ? "text-sm" : ""
          }`}
        >
          No items found matching your criteria
        </div>
      )}
    </div>
  );
}
