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
}

const GameCard = ({ game }: Props) => {
  const correctScore = `${game.goals.home}-${game.goals.away}`;

  const checkScore = (userGuess: string, correct: string) => {
    if (userGuess === correct) {
      console.log("correct!");
    } else {
      console.log("wrong!");
    }
  };

  return (
    <Flex justifyContent="center">
      <Grid
        boxShadow="2xl"
        borderRadius={50}
        padding={10}
        gap={5}
        templateAreas={`"header header header" "home score away"`}
        templateColumns={"auto"}
      >
        <GridItem area="header">
          <Flex justifyContent="space-between">
            <Badge fontSize="15px" color="#a881af">
              {game.league.name}
            </Badge>
            <Badge fontSize="15px" color="#a881af">
              {new Date(game.fixture.date).toLocaleDateString()}
            </Badge>
          </Flex>
        </GridItem>
        <GridItem area="home">
          <TeamCard logo={game.teams.home.logo} name={game.teams.home.name} />
        </GridItem>
        <GridItem area="score">
          <ScoreGuesser onScore={(guess) => checkScore(guess, correctScore)} />
          {/* {game.goals.home}-{game.goals.away} */}
        </GridItem>
        <GridItem area="away">
          <TeamCard logo={game.teams.away.logo} name={game.teams.away.name} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default GameCard;
