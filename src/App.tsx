import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Question from "./components/Question";
import Answers from "./components/Answers";

function App() {
  return (
    <Grid
      gap={10}
      px="20px"
      paddingY="20px"
      templateAreas={` "navbar" "question" "answer"`}
    >
      <GridItem mb={3} area="navbar">
        <NavBar />
      </GridItem>
      <GridItem area="question">
        <Question />
      </GridItem>
      <GridItem area="answer">
        <Answers />
      </GridItem>
    </Grid>
  );
}

export default App;
