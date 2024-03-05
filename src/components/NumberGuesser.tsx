import { Box, IconButton } from "@chakra-ui/react";
import {
  RiNumber0,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
} from "react-icons/ri";
import useUserGuessStore from "../state-management/user-guess/store";

interface Props {
  type: string;
}

const guesses = [
  { value: 0, icon: <RiNumber0 /> },
  { value: 1, icon: <RiNumber1 /> },
  { value: 2, icon: <RiNumber2 /> },
  { value: 3, icon: <RiNumber3 /> },
  { value: 4, icon: <RiNumber4 /> },
  { value: 5, icon: <RiNumber5 /> },
  { value: 6, icon: <RiNumber6 /> },
  { value: 7, icon: <RiNumber7 /> },
  { value: 8, icon: <RiNumber8 /> },
  { value: 9, icon: <RiNumber9 /> },
  {
    value: 10,
    icon: (
      <>
        <RiNumber1 />
        <RiNumber0 />{" "}
      </>
    ),
  },
  {
    value: 11,
    icon: (
      <>
        <RiNumber1 />
        <RiNumber1 />{" "}
      </>
    ),
  },
];

const NumberGuesser = ({ type }: Props) => {
  const { setHomeGoals, setAwayGoals } = useUserGuessStore();

  const updateToggle = type === "home" ? setHomeGoals : setAwayGoals;

  return (
    <Box
      mt={6}
      display="grid"
      gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={3}
    >
      {guesses.map((item) => {
        return (
          <IconButton
            size={{ base: "xs", lg: "md" }}
            key={item.value}
            onClick={() => updateToggle(item.value)}
            aria-label={item.toString()}
            icon={item.icon}
          ></IconButton>
        );
      })}
    </Box>
  );
};

export default NumberGuesser;
