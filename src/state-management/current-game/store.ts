import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { FetchResponse } from "../../entities/FetchResponse";
import { Fixture } from "../../entities/Fixture";

interface FixtureStore {
  fixture: Fixture | null;
  setFixture: (fixture: Fixture | undefined) => void;
  getRandomFixture: (games: FetchResponse | undefined) => void;
}

const useFixtureStore = create<FixtureStore>((set) => ({
  fixture: null,
  setFixture: (newFixture) =>
    set((store) => ({
      fixture: newFixture,
    })),
  getRandomFixture: (games) =>
    set(() => ({
      fixture: games?.response[Math.floor(Math.random() * games.results)],
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FixtureStore", useFixtureStore);
}

export default useFixtureStore;
