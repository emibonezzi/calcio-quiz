import { Flex, Heading, Image } from "@chakra-ui/react";

interface Props {
  logo: string;
  name: string;
}

const TeamCard = ({ logo, name }: Props) => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={logo}></Image>
      <Heading>{name}</Heading>
    </Flex>
  );
};

export default TeamCard;
