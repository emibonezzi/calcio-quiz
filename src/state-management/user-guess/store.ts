import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface UserGuessStore {
  homeGoals: number | string;
  awayGoals: number | string;
  setHomeGoals: (goals: number) => void;
  setAwayGoals: (goals: number) => void;
  reset: () => void;
}

const useUserGuessStore = create<UserGuessStore>((set) => ({
  homeGoals: "...",
  awayGoals: "...",
  setHomeGoals: (userHomeGuess) =>
    set((store) => ({ ...store, homeGoals: userHomeGuess })),
  setAwayGoals: (userAwayGuess) =>
    set((store) => ({ ...store, awayGoals: userAwayGuess })),
  reset: () => set(() => ({ homeGoals: "...", awayGoals: "..." })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("UserGuessStore", useUserGuessStore);
}

export default useUserGuessStore;
