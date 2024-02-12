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
      logo: string;
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
        paddingX={{ base: 3, lg: 10 }}
        py={10}
        gap={5}
        templateAreas={`"header header header" "home score away"`}
        templateColumns={"auto"}
      >
        <GridItem area="header">
          <Flex justifyItems="center" justifyContent="space-between">
            <Badge fontSize={{ base: "10px", lg: "15px" }} color="#00887A">
              {game.league.name}
            </Badge>
            <Badge fontSize={{ base: "10px", lg: "15px" }} color="#00887A">
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
