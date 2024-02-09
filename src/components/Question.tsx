import { Button, Flex, Heading } from "@chakra-ui/react";
import { sampleResponse } from "../utils/sampleResponse";
import GameCard from "./GameCard";
import { Fixture } from "../hooks/useMatch";

const Question = (game) => {
  return (
    <Flex justifyContent="center">
      <GameCard></GameCard>
    </Flex>
  );
};

export default Question;
