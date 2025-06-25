"use client";
import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiCheck, FiPlus, FiMinus } from "react-icons/fi";
import { SURVIVORS } from "@/data/survivors";
import { useBuildActions } from "@/store/useBuildStore";
import { useSurvivor } from "@/context/SurvivorContext";
import { ITEMS } from "@/data/items";
import { useDevice } from "@/context/DeviceContext";

export default function SurvivorSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [level, setLevel] = useState(1);
  const { selectedSurvivor, setSelectedSurvivor } = useSurvivor();
  const { addItem, resetBuild } = useBuildActions();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (survivor: (typeof SURVIVORS)[0]) => {
    setSelectedSurvivor(survivor);
    setIsOpen(false);
    setLevel(1); // Resetear nivel al cambiar de personaje
    resetBuild();

    if (survivor.id === "captain") {
      const microbotsItem = ITEMS.find(
        (item) => item.id === "defensive-microbots"
      );
      if (microbotsItem) {
        addItem(microbotsItem);
      }
    }
  };

  const calculateStat = (base: number, perLevel: number) => {
    return base + perLevel * (level - 1);
  };

  const handleLevelChange = (newLevel: number) => {
    if (newLevel >= 1 && newLevel <= 94) {
      setLevel(newLevel);
    }
  };

  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-3">Survivor</h2>

        {/* Selector dropdown */}
        <div className="relative">
          {/* Botón selector */}
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-left hover:bg-gray-600 transition-colors cursor-pointer"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 relative">
                <Image
                  src={selectedSurvivor.iconUrl}
                  alt={selectedSurvivor.name}
                  width={24}
                  height={24}
                  className="rounded-sm object-cover border border-gray-400"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/survivors/commando.png";
                  }}
                />
              </div>
              <span className="font-medium text-sm">
                {selectedSurvivor.name}
              </span>
            </div>
            <FiChevronDown
              className={`text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              size={16}
            />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <ul role="listbox" className="py-1 max-h-48 overflow-auto">
                {SURVIVORS.map((survivor) => (
                  <li
                    key={survivor.id}
                    role="option"
                    aria-selected={selectedSurvivor.id === survivor.id}
                    onClick={() => handleSelect(survivor)}
                    className={`flex items-center px-3 py-1 cursor-pointer hover:bg-gray-600 transition-colors ${
                      selectedSurvivor.id === survivor.id ? "bg-gray-750" : ""
                    }`}
                  >
                    <div className="w-5 h-5 relative mr-2">
                      <Image
                        src={survivor.iconUrl}
                        alt={survivor.name}
                        width={20}
                        height={20}
                        className="rounded-sm object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/survivors/default.png";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">
                          {survivor.name}
                        </span>
                        {selectedSurvivor.id === survivor.id && (
                          <FiCheck className="text-orange-500" size={14} />
                        )}
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">
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
        <div className="mt-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
          {/* Imagen del personaje */}
          <div className="flex justify-center mb-3">
            <div className="w-20 h-20 relative">
              <Image
                src={selectedSurvivor.iconUrl}
                alt={selectedSurvivor.name}
                width={80}
                height={80}
                className="rounded-sm object-cover border border-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/survivors/default.png";
                }}
              />
            </div>
          </div>

          {/* Información y estadísticas */}
          <div>
            <h3 className="text-base font-medium text-orange-500 mb-1 text-center">
              {selectedSurvivor.name}
            </h3>
            <p className="text-gray-300 text-xs mb-3 text-center">
              {selectedSurvivor.description}
            </p>

            {/* Selector de nivel */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-gray-400 text-xs">Level:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleLevelChange(level - 1)}
                  disabled={level <= 1}
                  className="p-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                  <FiMinus size={12} />
                </button>
                <input
                  type="number"
                  min="1"
                  max="94"
                  value={level}
                  onChange={(e) =>
                    handleLevelChange(parseInt(e.target.value) || 1)
                  }
                  className="w-12 text-center bg-gray-700 border border-gray-600 rounded py-1 px-1 text-xs"
                />
                <button
                  onClick={() => handleLevelChange(level + 1)}
                  disabled={level >= 94}
                  className="p-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                  <FiPlus size={12} />
                </button>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-2 text-xs text-center">
              <div>
                <p className="text-gray-400">Health</p>
                <p className="font-medium">
                  {calculateStat(
                    selectedSurvivor.statistics.health,
                    selectedSurvivor.statistics.$health
                  ).toFixed(1)}
                  <span className="text-gray-400 text-xs">
                    {` (+${selectedSurvivor.statistics.$health})`}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400">Health Regen</p>
                <p className="font-medium">
                  {calculateStat(
                    selectedSurvivor.statistics.healthRegen,
                    selectedSurvivor.statistics.$healthRegen
                  ).toFixed(1)}
                  /s
                  <span className="text-gray-400 text-xs">
                    {` (+${selectedSurvivor.statistics.$healthRegen}/s)`}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400">Damage</p>
                <p className="font-medium">
                  {calculateStat(
                    selectedSurvivor.statistics.damage,
                    selectedSurvivor.statistics.$damage
                  ).toFixed(1)}
                  <span className="text-gray-400 text-xs">
                    {` (+${selectedSurvivor.statistics.$damage})`}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400">Speed</p>
                <p className="font-medium">
                  {selectedSurvivor.statistics.speed} m/s
                </p>
              </div>
              <div>
                <p className="text-gray-400">Armor</p>
                <p className="font-medium">
                  {selectedSurvivor.statistics.armor}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Mass</p>
                <p className="font-medium">
                  {selectedSurvivor.statistics.mass}
                </p>
              </div>
            </div>
          </div>

          {selectedSurvivor.id === "captain" && (
            <p className="text-xs text-green-400 mt-2 text-center">
              Default item: Defensive Microbots
            </p>
          )}
        </div>
      </div>
    );
  }

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
                className="rounded-sm object-cover border border-gray-400"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/survivors/commando.png";
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
        <div className="flex flex-col md:flex-row gap-10">
          {/* Imagen del personaje */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 relative">
              <Image
                priority={false}
                src={selectedSurvivor.iconUrl}
                alt={selectedSurvivor.name}
                width={128}
                height={128}
                className="rounded-sm object-cover border border-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/survivors/default.png";
                }}
              />
            </div>
          </div>

          {/* Información y estadísticas */}
          <div className="flex-1">
            <h3 className="text-lg font-medium text-orange-500 mb-1">
              {selectedSurvivor.name}
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              {selectedSurvivor.description}
            </p>

            {/* Selector de nivel */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-400 text-sm">Level:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleLevelChange(level - 1)}
                  disabled={level <= 1}
                  className="p-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                  <FiMinus size={14} />
                </button>
                <input
                  type="number"
                  min="1"
                  max="94"
                  value={level}
                  onChange={(e) =>
                    handleLevelChange(parseInt(e.target.value) || 1)
                  }
                  className="w-16 text-center bg-gray-700 border border-gray-600 rounded py-1 px-2"
                />
                <button
                  onClick={() => handleLevelChange(level + 1)}
                  disabled={level >= 94}
                  className="p-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-400">Health</p>
                <p className="font-medium">
                  {calculateStat(
                    selectedSurvivor.statistics.health,
                    selectedSurvivor.statistics.$health
                  ).toFixed(1)}
                  <span className="text-gray-400">
                    {` (+${selectedSurvivor.statistics.$health})`}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400">Health Regen</p>
                <p className="font-medium">
                  {calculateStat(
                    selectedSurvivor.statistics.healthRegen,
                    selectedSurvivor.statistics.$healthRegen
                  ).toFixed(1)}
                  /s
                  <span className="text-gray-400">
                    {` (+${selectedSurvivor.statistics.$healthRegen}/s)`}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400">Damage</p>
                <p className="font-medium">
                  {calculateStat(
                    selectedSurvivor.statistics.damage,
                    selectedSurvivor.statistics.$damage
                  ).toFixed(1)}
                  <span className="text-gray-400">
                    {` (+${selectedSurvivor.statistics.$damage})`}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400">Speed</p>
                <p className="font-medium">
                  {selectedSurvivor.statistics.speed} m/s
                </p>
              </div>
              <div>
                <p className="text-gray-400">Armor</p>
                <p className="font-medium">
                  {selectedSurvivor.statistics.armor}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Mass</p>
                <p className="font-medium">
                  {selectedSurvivor.statistics.mass}
                </p>
              </div>
            </div>
          </div>
        </div>

        {selectedSurvivor.id === "captain" && (
          <p className="text-xs text-green-400 mt-2">
            Default item added: Defensive Microbots
          </p>
        )}
      </div>
    </div>
  );
}
