import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface PointsStore {
  points: number;
  lives: number;
  setPoints: () => void;
  setLives: () => void;
  gameOver: () => void;
}

const usePointsStore = create<PointsStore>((set) => ({
  points: 0,
  lives: 3,
  setPoints: () => set((store) => ({ points: store.points + 1 })),
  setLives: () => set((store) => ({ ...store, lives: store.lives - 1 })),
  gameOver: () => set(() => ({ points: 0, lives: 3 })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("PointsStore", usePointsStore);
}

export default usePointsStore;
