import { Box } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import usePointsStore from "../state-management/points/store";

const Lives = () => {
  const { lives } = usePointsStore();

  return (
    <Box display="flex" gap={3}>
      {Array(lives)
        .fill(0)
        .map((item, index) => (
          <FaHeart key={index} name={item} />
        ))}
    </Box>
  );
};

export default Lives;
