import { useQuery } from "@tanstack/react-query";
import { FixturesQuery } from "../entities/FixturesQuery";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/fixtures");

const useMatch = (answerStatus: boolean, fixturesQuery: FixturesQuery) => {
  const {
    data: game,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fixtures", answerStatus],
    queryFn: () => apiClient.getAll(fixturesQuery),
  });

  return { game, isLoading };
};

export default useMatch;
