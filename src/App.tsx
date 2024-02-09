import { Grid, GridItem, Spinner } from "@chakra-ui/react";
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
  const { game, isLoading } = useMatch(answerStatus); // fetch match from API

  // on new Game setAnswerStatus to false
  useEffect(() => {
    setAnswerStatus(false);
  }, [game]);

  if (!isLoading) return <Spinner />;

  const correctScore = `${game?.goals.home}-${game?.goals.away}`;

  const checkScore = (userGuess: string, correct: string) => {
    if (!answerStatus) {
      if (userGuess === correct) {
        setAnswerStatus(true);
        setScore(score + 1);
        console.log("Correct");
      } else {
        console.log("Wrong!");
        setAttempts(attempts - 1);
      }
    }
  };

  return (
    <Grid
      gap={10}
      px={{ base: "0", lg: "20px" }}
      paddingY="20px"
      templateAreas={{
        base: `"navbar" "question" "score"`,
        lg: `"navbar navbar" "question score"`,
      }}
    >
      <GridItem mb={3} area="navbar">
        <NavBar />
      </GridItem>
      <GridItem area="question">
        <GameCard
          onGuess={(guess) => checkScore(guess, correctScore)}
          game={game}
        ></GameCard>
        {answerStatus ? <p>Correct!</p> : ""}
      </GridItem>
      <GridItem area="score">
        <ScoreCard
          score={score}
          attempts={attempts}
          personalBest={personalBest}
        ></ScoreCard>
      </GridItem>
    </Grid>
  );
}

export default App;
