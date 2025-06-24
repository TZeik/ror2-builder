"use client";
import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { SURVIVORS } from "@/data/survivors";
import { useBuildActions } from "@/store/useBuildStore";
import { ITEMS } from "@/data/items";

export default function SurvivorSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSurvivor, setSelectedSurvivor] = useState(SURVIVORS[0]);
  const { addItem, resetBuild } = useBuildActions();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (survivor: (typeof SURVIVORS)[0]) => {
    setSelectedSurvivor(survivor);
    setIsOpen(false);
    
    // Resetear el build primero
    resetBuild();
    
    // Si el survivor es Captain, añadir Defensive Microbots
    if (survivor.id === "captain") {
      const microbotsItem = ITEMS.find(item => item.id === "defensive-microbots");
      if (microbotsItem) {
        addItem(microbotsItem);
      }
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Survivor</h2>

      {/* Selector dropdown */}
      <div className="relative">
        {/* Botón selector */}
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left hover:bg-gray-600 transition-colors cursor-pointer"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <Image
                src={selectedSurvivor.iconUrl}
                alt={selectedSurvivor.name}
                width={32}
                height={32}
                className="rounded-sm object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/survivors/commando.png";
                }}
              />
            </div>
            <span className="font-medium">{selectedSurvivor.name}</span>
          </div>
          <FiChevronDown
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <ul role="listbox" className="py-1 max-h-60 overflow-auto">
              {SURVIVORS.map((survivor) => (
                <li
                  key={survivor.id}
                  role="option"
                  aria-selected={selectedSurvivor.id === survivor.id}
                  onClick={() => handleSelect(survivor)}
                  className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-600 transition-colors ${
                    selectedSurvivor.id === survivor.id ? "bg-gray-750" : ""
                  }`}
                >
                  <div className="w-6 h-6 relative mr-3">
                    <Image
                      src={survivor.iconUrl}
                      alt={survivor.name}
                      width={24}
                      height={24}
                      className="rounded-sm object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/survivors/default.png";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{survivor.name}</span>
                      {selectedSurvivor.id === survivor.id && (
                        <FiCheck className="text-orange-500" />
                      )}
                    </div>
                    <p className="text-xs text-gray-400">
                      {survivor.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Descripción del personaje seleccionado */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium text-orange-500 mb-1">
          {selectedSurvivor.name}
        </h3>
        <p className="text-gray-300 text-sm">{selectedSurvivor.description}</p>
        {selectedSurvivor.id === "captain" && (
          <p className="text-xs text-green-400 mt-2">
            Default item added: Defensive Microbots
          </p>
        )}
      </div>
    </div>
  );
}