import React from "react";
import usePointsStore from "../state-management/points/store";
import { FaStar } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

const Points = () => {
  const { points } = usePointsStore();
  return (
    <Box display="flex" justifyContent="center" gap={1} alignItems="center">
      <FaStar />
      <div>{points}</div>
    </Box>
  );
};

export default Points;
