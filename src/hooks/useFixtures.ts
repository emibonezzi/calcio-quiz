import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse } from "../entities/FetchResponse";
import APIClient from "../services/api-client";
import useFiltersStore from "../state-management/filters/store";

const apiClient = new APIClient("/fixtures");

const useFixtures = () => {
  const { fixtureQuery } = useFiltersStore();

  const {
    data: games,
    isLoading,
    error,
  } = useQuery<FetchResponse>({
    queryKey: ["fixtures", fixtureQuery],
    queryFn: () => apiClient.getAll({ params: fixtureQuery }),
    staleTime: ms("24h"),
  });

  return { games, isLoading, error };
};

export default useFixtures;
