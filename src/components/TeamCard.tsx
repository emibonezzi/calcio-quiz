import { Flex, Heading, Image } from "@chakra-ui/react";

interface Props {
  logo: string;
  name: string;
}

const TeamCard = ({ logo, name }: Props) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Image mb={3} w={{ base: "50px", lg: "180px" }} src={logo}></Image>
      <Heading
        textAlign="center"
        color="#00887A"
        fontSize={{
          base: "12px",
          lg: "2xl",
        }}
      >
        {name}
      </Heading>
    </Flex>
  );
};

export default TeamCard;
