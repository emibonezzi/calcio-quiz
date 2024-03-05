import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useFiltersStore from "../state-management/filters/store";
import ms from "ms";
import { FetchResponse } from "../entities/FetchResponse";
import useFixtureStore from "../state-management/current-game/store";
import { Fixture } from "../entities/Fixture";

const apiClient = new APIClient("/fixtures");

const useFixtures = () => {
  const { fixtureQuery } = useFiltersStore();
  let filteredGames: Fixture[] | undefined;

  const {
    data: games,
    isLoading,
    error,
  } = useQuery<FetchResponse>({
    queryKey: ["fixtures", fixtureQuery],
    queryFn: () => apiClient.getAll({ params: fixtureQuery }),
    staleTime: ms("24h"),
  });

  return { games, isLoading };
};

export default useFixtures;
