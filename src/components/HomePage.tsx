import { Box, Heading, Select, Text } from "@chakra-ui/react";
import FilterSelector from "./FilterSelector";

const HomePage = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gap={5}
    >
      <Heading>Welcome to GuessTheScore!</Heading>
      <Text>This game will test your footie knowledge, are you ready?</Text>
      <Text>Select your favorite league and season</Text>
      <FilterSelector />
    </Box>
  );
};

export default HomePage;
