import useAnswerStore from "../state-management/answer/store";
import { sampleResponse } from "../utils/sampleResponse";

const useFixture = () => {
  const games = sampleResponse;
  const { answerStatus } = useAnswerStore();
  // const { games, isLoading } = useFixtures();
  const randomGame = games?.response[Math.floor(Math.random() * games.results)];

  return { randomGame };
};

export default useFixture;
