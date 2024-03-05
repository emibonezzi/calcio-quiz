import { create } from "zustand";
import { FixturesQuery } from "../../entities/FixturesQuery";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface FixturesFiltersStore {
  fixtureQuery: FixturesQuery;
  setLeague: (league: number) => void;
  setSeason: (season: number) => void;
}

const useFiltersStore = create<FixturesFiltersStore>((set) => ({
  fixtureQuery: {
    league: 32,
    season: 2022,
  },
  setLeague: (selectedLeague) =>
    set((store) => ({
      fixtureQuery: { ...store.fixtureQuery, league: selectedLeague },
    })),
  setSeason: (selectedSeason) =>
    set((store) => ({
      fixtureQuery: { ...store.fixtureQuery, season: selectedSeason },
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterStore", useFiltersStore);
}

export default useFiltersStore;
