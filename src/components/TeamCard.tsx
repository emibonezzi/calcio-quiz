import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import useFixtureStore from "../state-management/current-game/store";

interface Props {
  type: "home" | "away";
}

const TeamCard = ({ type }: Props) => {
  const { fixture } = useFixtureStore();

  return (
    <Grid
      justifyContent="center"
      justifyItems="center"
      gap={3}
      gridTemplateAreas={`"image" "heading"`}
    >
      <GridItem area="image">
        <Image
          boxSize={{ base: "90px", lg: "200px" }}
          objectFit="scale-down"
          p={3}
          src={fixture?.teams[type].logo}
        />
      </GridItem>
      <GridItem area="heading">
        <Heading
          w={{ base: "90px", lg: "120px" }}
          h={{ base: "10px", lg: "30px" }}
          size={{ base: "sm", lg: "md" }}
        >
          {fixture?.teams[type].name}
        </Heading>
      </GridItem>
    </Grid>
  );
};

export default TeamCard;
