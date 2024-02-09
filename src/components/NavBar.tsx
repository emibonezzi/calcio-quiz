import { Box, Flex, Heading, Switch, Text } from "@chakra-ui/react";
import { PiSoccerBall } from "react-icons/pi";

const NavBar = () => {
  return (
    <Flex gap={{ base: 5 }} justifyContent="space-between" alignItems="center">
      <Box fontSize={{ base: "50px", lg: "80px" }}>
        <PiSoccerBall color="green"></PiSoccerBall>
      </Box>
      <Heading
        fontFamily="sans-serif"
        display="flex"
        alignItems="center"
        fontSize={{ base: "xl", lg: "5xl" }}
      >
        GuessTheScore
      </Heading>
      <Switch size={{ base: "md", lg: "lg" }} colorScheme="green" />
    </Flex>
  );
};

export default NavBar;
