import { Button } from "@chakra-ui/react";
import React from "react";
import useFixture from "../hooks/useFixture";
import useAnswerStore from "../state-management/answer/store";
import useUserGuessStore from "../state-management/user-guess/store";

const ScoreChecker = () => {
  const { answerStatus, setAnswerStatus } = useAnswerStore();
  const { reset } = useUserGuessStore();

  return (
    <Button
      size="lg"
      onClick={() => {
        setAnswerStatus();
        reset();
      }}
    >
      Check!
    </Button>
  );
};

export default ScoreChecker;
