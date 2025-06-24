'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiPlus, FiMinus, FiTrash2, FiShare2, FiSave, FiDownload } from 'react-icons/fi';

// Tipos (deben coincidir con tus definiciones globales)
type Item = {
  id: string;
  name: string;
  imageUrl: string;
  rarity: string;
};

type BuildItem = {
  item: Item;
  count: number;
};

export default function BuildContainer() {
  // Estado de ejemplo (luego se conectará con el store global)
  const [buildItems, setBuildItems] = useState<BuildItem[]>([
    {
      item: {
        id: 'soldiers-syringe',
        name: "Soldier's Syringe",
        imageUrl: '/items/syringe.png',
        rarity: 'Common'
      },
      count: 3
    },
    {
      item: {
        id: 'atg-missile',
        name: "ATG Missile",
        imageUrl: '/items/missile.png',
        rarity: 'Uncommon'
      },
      count: 2
    },
    {
      item: {
        id: 'brilliant-behemoth',
        name: "Brilliant Behemoth",
        imageUrl: '/items/behemoth.png',
        rarity: 'Legendary'
      },
        count: 1
    }
  ]);

  // Manejar cambios en la cantidad
  const updateItemCount = (itemId: string, newCount: number) => {
    if (newCount < 1) {
      removeItem(itemId);
      return;
    }

    setBuildItems(prev => 
      prev.map(buildItem => 
        buildItem.item.id === itemId 
          ? { ...buildItem, count: newCount } 
          : buildItem
      )
    );
  };

  // Eliminar item
  const removeItem = (itemId: string) => {
    setBuildItems(prev => prev.filter(buildItem => buildItem.item.id !== itemId));
  };

  // Calcular estadísticas
  const totalItems = buildItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-fit sticky top-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Build</h2>
        <div className="flex gap-2">
          <button 
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors"
            title="Share build"
          >
            <FiShare2 />
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors"
            title="Save build"
          >
            <FiSave />
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-orange-500 transition-colors"
            title="Export build"
          >
            <FiDownload />
          </button>
        </div>
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
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium truncate">{item.name}</h3>
                <p className="text-xs text-gray-400 capitalize">{item.rarity}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateItemCount(item.id, count - 1)}
                  className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                
                <span className="w-6 text-center">{count}</span>
                
                <button 
                  onClick={() => updateItemCount(item.id, count + 1)}
                  className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
                
                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-1 text-gray-400 hover:text-red-500 rounded ml-2"
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
            <p className="font-medium">{totalItems}</p>
          </div>
        </div>

        {/* Botón para resetear */}
        <button
          className="w-full mt-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
          onClick={() => setBuildItems([])}
        >
          Reset Build
        </button>
      </div>
    </div>
  );
}