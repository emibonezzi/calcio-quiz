import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { PiSoccerBall } from "react-icons/pi";

const NavBar = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={4}>
      <Heading
        display="flex"
        alignItems="center"
        fontSize={{ base: "5xl", lg: "9xl" }}
      >
        CalcioQuiz <PiSoccerBall color="green"></PiSoccerBall>
      </Heading>
    </Flex>
  );
};

export default NavBar;
