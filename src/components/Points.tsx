import { Box } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import usePointsStore from "../state-management/points/store";

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
