import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
  personalBest: number;
  attempts: number;
}

const ScoreCard = ({ score, personalBest, attempts }: Props) => {
  return (
    <Flex
      borderRadius={{ base: 25, lg: 50 }}
      p={5}
      flexDirection="column"
      justifyContent="center"
      boxSize={{ base: "200px", lg: "400px" }}
      boxShadow="xl"
    >
      <Flex justifyContent="space-between">
        <Heading fontSize={{ base: "md", lg: "4xl" }}>Score:</Heading>
        <Heading fontSize={{ base: "md", lg: "4xl" }}>{score}</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize={{ base: "md", lg: "4xl" }}>Personal best:</Heading>
        <Heading fontSize={{ base: "md", lg: "4xl" }}>{personalBest}</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize={{ base: "md", lg: "4xl" }}>Attempts left:</Heading>
        <Heading fontSize={{ base: "md", lg: "4xl" }}>{attempts}</Heading>
      </Flex>
    </Flex>
  );
};

export default ScoreCard;
