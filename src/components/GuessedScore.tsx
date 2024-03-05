import { Box, Heading } from "@chakra-ui/react";
import useUserGuessStore from "../state-management/user-guess/store";

const GuessedScore = () => {
  const { homeGoals, awayGoals } = useUserGuessStore();

  return (
    <>
      <Box display="flex">
        <Box w={{ base: "25px", lg: "50px" }} borderRadius="10px">
          <Heading>{homeGoals}</Heading>
        </Box>
        <Box w={{ base: "25px", lg: "50px" }}>
          <Heading>-</Heading>
        </Box>
        <Box w={{ base: "25px", lg: "50px" }} borderRadius="10px">
          <Heading>{awayGoals}</Heading>
        </Box>
      </Box>
    </>
  );
};

export default GuessedScore;
