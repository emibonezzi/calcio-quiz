import {
  AbsoluteCenter,
  Badge,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import useMatch from "../hooks/useMatch";
import TeamCard from "./TeamCard";
import ScoreGuesser from "./ScoreGuesser";

export interface Props {
  game: {
    fixture: {
      date: string;
    };
    league: {
      name: string;
    };
    teams: {
      home: { name: string; logo: string };
      away: { name: string; logo: string };
    };
    goals: {
      home: number;
      away: number;
    };
  };
  onGuess: (guess: string) => void;
}

const GameCard = ({ game, onGuess }: Props) => {
  return (
    <Flex justifyContent="center">
      <Grid
        alignItems="center"
        boxShadow="2xl"
        borderRadius={{ base: 25, lg: 50 }}
        padding={{ base: 7, lg: 10 }}
        gap={5}
        templateAreas={`"header header header" "home score away"`}
        templateColumns={"auto"}
      >
        <GridItem area="header">
          <Flex justifyContent="space-between">
            <Badge fontSize={{ base: "7px", lg: "15px" }} colorScheme="green">
              {game.league.name}
            </Badge>
            <Badge fontSize={{ base: "7px", lg: "15px" }} colorScheme="green">
              {new Date(game.fixture.date).toLocaleDateString()}
            </Badge>
          </Flex>
        </GridItem>
        <GridItem area="home">
          <TeamCard logo={game.teams.home.logo} name={game.teams.home.name} />
        </GridItem>
        <GridItem area="score">
          <ScoreGuesser onScore={(guess) => onGuess(guess)} />
          {/*           {game.goals.home}-{game.goals.away} */}
        </GridItem>
        <GridItem area="away">
          <TeamCard logo={game.teams.away.logo} name={game.teams.away.name} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default GameCard;
