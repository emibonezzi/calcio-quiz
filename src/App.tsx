import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import useMatch from "./hooks/useMatch";
import GameCard from "./components/GameCard";
import { useEffect, useState } from "react";

function App() {
  const [answerStatus, setAnswerStatus] = useState(false);
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
        console.log("Correct");
      } else {
        console.log("Wrong!");
      }
    }
  };

  return (
    <Grid
      gap={10}
      px="20px"
      paddingY="20px"
      templateAreas={` "navbar" "question"`}
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
    </Grid>
  );
}

export default App;
