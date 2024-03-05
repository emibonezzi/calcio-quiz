import { Box, Heading, Select, Text } from "@chakra-ui/react";
import FilterSelector from "./FilterSelector";
import UserForm from "./UserForm";

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
      <Text>Are you up for the challenge? </Text>
      <FilterSelector />
    </Box>
  );
};

export default HomePage;
