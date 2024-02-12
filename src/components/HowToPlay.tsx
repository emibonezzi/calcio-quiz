import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const HowToPlay = () => {
  return (
    <Flex
      borderRadius={{ base: 25, lg: 50 }}
      p={5}
      justifyContent="center"
      boxSize={{ base: "200px", lg: "400px" }}
      boxShadow="xl"
    >
      <Heading>Welcome!</Heading>
    </Flex>
  );
};

export default HowToPlay;
