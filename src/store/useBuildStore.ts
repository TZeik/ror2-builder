import { create } from 'zustand';
import { Item } from '@/lib/types/gameTypes';

interface BuildItem {
  item: Item;
  count: number;
}

interface SavedBuild {
  id: string;
  name: string;
  survivorId: string;
  items: BuildItem[];
  timestamp: number;
}

interface BuildState {
  items: BuildItem[];
  savedBuilds: SavedBuild[];
  actions: {
    addItem: (item: Item) => void;
    updateItemCount: (itemId: string, newCount: number) => void;
    removeItem: (itemId: string) => void;
    resetBuild: () => void;
    saveCurrentBuild: (name: string, survivorId: string) => void;
    loadBuild: (buildId: string) => void;
    deleteBuild: (buildId: string) => void;
    importBuild: (buildData: { items: BuildItem[], survivorId: string }) => void;
  };
}

const useBuildStore = create<BuildState>((set) => ({
  items: [],
  actions: {
    addItem: (item) => set((state) => {
      const existingItem = state.items.find(i => i.item.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map(i => 
            i.item.id === item.id 
              ? { ...i, count: i.count + 1 } 
              : i
          )
        };
      }
      return { items: [...state.items, { item, count: 1 }] };
    }),
    updateItemCount: (itemId, newCount) => set((state) => {
      if (newCount < 1) {
        return { 
          items: state.items.filter(i => i.item.id !== itemId) 
        };
      }
      return {
        items: state.items.map(i => 
          i.item.id === itemId 
            ? { ...i, count: newCount } 
            : i
        )
      };
    }),
    removeItem: (itemId) => set((state) => ({
      items: state.items.filter(i => i.item.id !== itemId)
    })),
    resetBuild: () => set({ items: [] }),
    saveCurrentBuild: (name, survivorId) => set((state) => {
      if (state.items.length === 0) return state;
      
      const newBuild = {
        id: Date.now().toString(),
        name,
        survivorId,
        items: [...state.items],
        timestamp: Date.now()
      };
      
      const updatedBuilds = [...state.savedBuilds, newBuild];
      localStorage.setItem('savedBuilds', JSON.stringify(updatedBuilds));
      return { savedBuilds: updatedBuilds };
    }),
    loadBuild: (buildId) => set( (state) => {
      const buildToLoad = state.savedBuilds.find(b => b.id === buildId);
      if (!buildToLoad) return state;
      
      return { items: [...buildToLoad.items] };
    }),
    deleteBuild: (buildId) => set((state) => {
      const updatedBuilds = state.savedBuilds.filter(b => b.id !== buildId);
      localStorage.setItem('savedBuilds', JSON.stringify(updatedBuilds));
      return { savedBuilds: updatedBuilds };
    }),
    importBuild: (buildData) => set({
      items: buildData.items
    })
  },
  savedBuilds: []
}));

// Selectores optimizados
export const useBuildActions = () => useBuildStore((state) => state.actions);
export const useCurrentBuild = () => useBuildStore((state) => state.items);
export const useSavedBuilds = (survivorId?: string) => 
  useBuildStore((state) => 
    survivorId 
      ? state.savedBuilds.filter(b => b.survivorId === survivorId) 
      : state.savedBuilds
  );