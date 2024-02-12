import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import useMatch from "./hooks/useMatch";
import GameCard from "./components/GameCard";
import { useEffect, useState } from "react";
import ScoreCard from "./components/ScoreCard";

function App() {
  const [answerStatus, setAnswerStatus] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [personalBest, setPersonalBest] = useState(0);
  const toast = useToast();
  const { game, isLoading } = useMatch(answerStatus); // fetch match from API

  // on new Game setAnswerStatus to false
  useEffect(() => {
    setAnswerStatus(false);
  }, [game]);

  if (!isLoading) return <Spinner />;

  const correctScore = `${game?.goals.home}-${game?.goals.away}`;

  const checkGuess = (userGuess: string, correct: string) => {
    if (!answerStatus) {
      if (userGuess === correct) {
        setAnswerStatus(true);
        setScore(score + 1);
        toast({
          title: "Correct!",
          colorScheme: "green",
          position: "top",
          duration: 1000,
        });
      } else {
        console.log("Wrong!");
        if (attempts > 1) {
          setAttempts(attempts - 1);
          toast({
            title: "Wrong!",
            colorScheme: "red",
            position: "top",
            duration: 1000,
          });
        } else {
          toast({
            title: "Game over",
            colorScheme: "red",
            position: "top",
            duration: 5000,
          });
          setAnswerStatus(true);
          setAttempts(5);
          setScore(0);
        }
      }
    }
  };

  return (
    <Grid
      backgroundColor="#F7F9FB"
      alignItems="center"
      justifyItems={{ lg: "normal", base: "center" }}
      gap={5}
      px={{ base: "0px", lg: "0px" }}
      templateAreas={{
        base: `"navbar" "question" "score" "footer"`,
        lg: `"navbar navbar navbar" "question question score" "footer footer footer"`,
      }}
    >
      <GridItem mb={3} area="navbar">
        <NavBar />
      </GridItem>
      <GridItem area="question">
        <GameCard
          onGuess={(guess) => checkGuess(guess, correctScore)}
          game={game}
        ></GameCard>
      </GridItem>
      <GridItem mb={3} area="score">
        <ScoreCard
          score={score}
          attempts={attempts}
          personalBest={personalBest}
        ></ScoreCard>
      </GridItem>
      <GridItem color="#00887A" area="footer">
        <Flex
          borderTop="2px"
          h={{ base: "80px", lg: "150px" }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize={{
              base: "12px",
              lg: "20px",
            }}
          >
            Developed by Emiliano Bonezzi
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
