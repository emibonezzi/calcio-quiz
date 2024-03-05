import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import GameCard from "./components/GameCard";
import NavBar from "./components/NavBar";
import ScoreCard from "./components/ScoreCard";

function App() {
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
        <GameCard></GameCard>
      </GridItem>
      <GridItem mb={3} area="score">
        <ScoreCard></ScoreCard>
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
