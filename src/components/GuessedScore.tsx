import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useUserGuessStore from "../state-management/user-guess/store";

const GuessedScore = () => {
  const { homeGoals, awayGoals } = useUserGuessStore();

  return (
    <>
      <Box display="flex">
        <Box
          w={{ base: "25px", lg: "50px" }}
          bgColor="#3b444b"
          borderRadius="10px"
        >
          <Heading>{homeGoals}</Heading>
        </Box>
        <Box w="50px">
          <Heading>-</Heading>
        </Box>
        <Box
          w={{ base: "25px", lg: "50px" }}
          bgColor="#3b444b"
          borderRadius="10px"
        >
          <Heading>{awayGoals}</Heading>
        </Box>
      </Box>
    </>
  );
};

export default GuessedScore;
