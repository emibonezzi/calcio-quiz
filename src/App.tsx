import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import useMatch from "./hooks/useMatch";
import GameCard from "./components/GameCard";
import { useEffect, useState } from "react";

function App() {
  const { game, isLoading } = useMatch(); // fetch match from API
  const [score, currentScore] = useState();

  if (!isLoading) return <Spinner />;

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
        <GameCard game={game}></GameCard>
      </GridItem>
    </Grid>
  );
}

export default App;
