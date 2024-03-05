import { Box, Button } from "@chakra-ui/react";
import getRandomGame from "../hooks/getRandomGame";
import useFixtureStore from "../state-management/current-game/store";
import useUserGuessStore from "../state-management/user-guess/store";
import { IoIosCheckmarkCircle } from "react-icons/io";
import usePointsStore from "../state-management/points/store";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ScoreChecker = () => {
  const { homeGoals, awayGoals, resetUserFields } = useUserGuessStore();
  const { fixture, setFixture } = useFixtureStore();
  const { randomGame } = getRandomGame();
  const { lives, points, setPoints, setLives, gameOver } = usePointsStore();
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Button
      bgColor="transparent"
      size={{ base: "md", lg: "lg" }}
      onClick={() => {
        if (
          fixture?.goals.home === homeGoals &&
          fixture?.goals.away === awayGoals
        ) {
          setPoints();
        } else {
          if (lives > 1) {
            setLives();
          } else {
            gameOver();
            navigate("/");
            toast({
              title: "Game over!",
              description: `Points: ${points}`,
              position: "top",
            });
          }
        }
        resetUserFields();
        setFixture(randomGame);
      }}
    >
      <Box fontSize={{ base: "36px", lg: "50px" }}>
        <IoIosCheckmarkCircle />
      </Box>
    </Button>
  );
};

export default ScoreChecker;
