import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useUserGuessStore from "../state-management/user-guess/store";

const GuessedScore = () => {
  const { homeGoals, awayGoals } = useUserGuessStore();

  return (
    <>
      <Box display="flex" gap={3}>
        <Box w="50px" border="2px" borderRadius="10px">
          <Heading>{homeGoals}</Heading>
        </Box>
        <Box w="50px">
          <Heading>-</Heading>
        </Box>
        <Box w="50px" border="2px" borderRadius="10px">
          <Heading>{awayGoals}</Heading>
        </Box>
      </Box>
    </>
  );
};

export default GuessedScore;
