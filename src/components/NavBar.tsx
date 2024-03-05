import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Timer from "./Timer";
import Points from "./Points";
import Lives from "./Lives";

const NavBar = () => {
  return (
    <Grid
      w="100%"
      alignItems="center"
      alignContent="center"
      justifyItems="center"
      templateAreas={`"lives timer points"`}
      templateColumns={"1fr 1fr 1fr"}
      boxShadow="2xl"
      py={{ base: 2, lg: 5 }}
      fontSize={{ base: "18px", lg: "30px" }}
    >
      <GridItem area="lives">
        <Lives />
      </GridItem>
      <GridItem area="points">
        <Points />
      </GridItem>
    </Grid>
  );
};

export default NavBar;
