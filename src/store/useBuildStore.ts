// useBuildStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BuildItem, Item } from "@/lib/types/gameTypes";
import { ITEMS } from "@/data/items";
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
    resetBuild: (survivorId?: string) => void;
    saveCurrentBuild: (name: string, survivorId: string) => void;
    loadBuild: (buildId: string) => void;
    deleteBuild: (buildId: string) => void;
    importBuild: (buildData: {
      items: BuildItem[];
      survivorId: string;
    }) => void;
    getBuildsBySurvivor: (survivorId: string) => SavedBuild[];
  };
}

const useBuildStore = create<BuildState>()(
  persist(
    (set, get) => ({
      items: [],
      savedBuilds: [],
      actions: {
        addItem: (item) =>
          set((state) => {
            const existingItem = state.items.find((i) => i.item.id === item.id);
            if (existingItem) {
              return {
                items: state.items.map((i) =>
                  i.item.id === item.id ? { ...i, count: i.count + 1 } : i
                ),
              };
            }
            return { items: [...state.items, { item, count: 1 }] };
          }),
        updateItemCount: (itemId, newCount) =>
          set((state) => {
            if (newCount < 1) {
              return {
                items: state.items.filter((i) => i.item.id !== itemId),
              };
            }
            return {
              items: state.items.map((i) =>
                i.item.id === itemId ? { ...i, count: newCount } : i
              ),
            };
          }),
        removeItem: (itemId) =>
          set((state) => ({
            items: state.items.filter((i) => i.item.id !== itemId),
          })),
        resetBuild: (survivorId?) =>
          set(() => {
            if (survivorId && survivorId === "captain") {
              const defensiveMicrobots = ITEMS.find(
                (item) => item.id === "defensive-microbots"
              );
              if (defensiveMicrobots) {
                return {
                  items: [{ item: defensiveMicrobots, count: 1 }],
                };
              }
            }
            return { items: [] };
          }),
        saveCurrentBuild: (name, survivorId) =>
          set((state) => {
            if (state.items.length === 0) return state;

            const newBuild = {
              id: crypto.randomUUID(),
              name,
              survivorId,
              items: [...state.items],
              timestamp: Date.now(),
            };

            return { savedBuilds: [...state.savedBuilds, newBuild] };
          }),
        loadBuild: (buildId) =>
          set((state) => {
            const buildToLoad = state.savedBuilds.find((b) => b.id === buildId);
            return buildToLoad ? { items: [...buildToLoad.items] } : state;
          }),
        deleteBuild: (buildId) =>
          set((state) => ({
            savedBuilds: state.savedBuilds.filter((b) => b.id !== buildId),
          })),
        importBuild: (buildData) =>
          set(() => {
            return { items: buildData.items };
          }),
        getBuildsBySurvivor: (survivorId) => {
          return get().savedBuilds.filter((b) => b.survivorId === survivorId);
        },
      },
    }),
    {
      name: "build-storage",
      partialize: (state) => ({ savedBuilds: state.savedBuilds }),
    }
  )
);

// Selectores optimizados
export const useBuildActions = () => useBuildStore((state) => state.actions);
export const useCurrentBuild = () => useBuildStore((state) => state.items);
export const useSavedBuilds = () => useBuildStore((state) => state.savedBuilds);
