import { Box, Flex, Heading, Switch, Text } from "@chakra-ui/react";
import { PiSoccerBall } from "react-icons/pi";
import { MdOutlineScoreboard } from "react-icons/md";

const NavBar = () => {
  return (
    <Flex
      p={5}
      gap={{ base: 5 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box fontSize={{ base: "50px", lg: "80px" }}>
        <MdOutlineScoreboard color="#00887A"></MdOutlineScoreboard>
      </Box>
      <Heading
        color="#00887A"
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
