import useFixtures from "./useFixtures";

const getRandomGame = () => {
  // const games = sampleResponse;
  const { games } = useFixtures();
  const randomGame = games?.response[Math.floor(Math.random() * games.results)];

  return { randomGame };
};

export default getRandomGame;
