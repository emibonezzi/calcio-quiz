import {
  Badge,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import useFixtures from "../hooks/useFixtures";
import useFixtureStore from "../state-management/current-game/store";
import GuessedScore from "./GuessedScore";
import NavBar from "./NavBar";
import NumberGuesser from "./NumberGuesser";
import ScoreChecker from "./ScoreChecker";
import TeamCard from "./TeamCard";

const GameCard = () => {
  const { games, isLoading, error } = useFixtures();
  const { fixture, setFixture } = useFixtureStore();

  useEffect(() => {
    const randomGame =
      games?.response[Math.floor(Math.random() * games.results)];
    setFixture(randomGame);
  }, [games]);

  if (isLoading) return <Spinner />;

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      {error && <Text>{error.message}</Text>}
      <NavBar />
      <Grid
        alignItems="center"
        boxShadow="2xl"
        borderRadius={{ base: 25, lg: 50 }}
        paddingX={{ base: 2, lg: 10 }}
        pt={5}
        pb={3}
        gap={{ base: 2, lg: 5 }}
        templateAreas={`"header header header" "home score away" "homeGuesser spacer awayGuesser" "check check check"`}
        templateColumns={"auto"}
      >
        <GridItem area="header">
          <Flex justifyItems="center" justifyContent="space-between">
            <Badge fontSize={{ base: "10px", lg: "15px" }}>
              {fixture?.league.name}
            </Badge>
            <Badge fontSize={{ base: "10px", lg: "15px" }}>
              {new Date(fixture?.fixture.date || "").toDateString()}
            </Badge>
          </Flex>
        </GridItem>
        <GridItem area="home">
          <TeamCard type="home" />
        </GridItem>
        <GridItem area="score">
          <GuessedScore />
        </GridItem>
        <GridItem area="away">
          <TeamCard type="away" />
        </GridItem>
        <GridItem area="homeGuesser">
          <NumberGuesser type="home" />
        </GridItem>
        <GridItem area="spacer">
          <Spacer />
        </GridItem>
        <GridItem area="awayGuesser">
          <NumberGuesser type="away" />
        </GridItem>
        <GridItem py={2} area="check">
          <ScoreChecker />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default GameCard;
