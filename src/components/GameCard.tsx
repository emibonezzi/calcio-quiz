import {
  Badge,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";
import useFixture from "../hooks/useFixture";
import NumberGuesser from "./NumberGuesser";
import useUserGuessStore from "../state-management/user-guess/store";
import GuessedScore from "./GuessedScore";
import ScoreChecker from "./ScoreChecker";

const GameCard = () => {
  const { randomGame } = useFixture();

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Grid
        alignItems="center"
        boxShadow="2xl"
        borderRadius={{ base: 25, lg: 50 }}
        paddingX={{ base: 3, lg: 10 }}
        py={10}
        gap={5}
        templateAreas={`"header header header" "home score away" "homeGuesser spacer awayGuesser" "check check check"`}
        templateColumns={"auto"}
      >
        <GridItem area="header">
          <Flex justifyItems="center" justifyContent="space-between">
            <Badge fontSize={{ base: "10px", lg: "15px" }}>
              {randomGame?.league.name}
            </Badge>
            <Badge fontSize={{ base: "10px", lg: "15px" }}>
              {new Date(randomGame?.fixture.date || "").toDateString()}
            </Badge>
          </Flex>
        </GridItem>
        <GridItem area="home">
          <Image src={randomGame?.teams.home.logo} />
        </GridItem>
        <GridItem area="score">
          <GuessedScore />
        </GridItem>
        <GridItem area="away">
          <Image src={randomGame?.teams.away.logo} />
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
        <GridItem mt={5} area="check">
          <ScoreChecker />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default GameCard;
