import { Flex, Input, Heading, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  home: z.number(),
  away: z.number(),
});

type ScoreData = z.infer<typeof schema>;

interface Props {
  onScore: (guess: string) => void;
}

const ScoreGuesser = ({ onScore }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ScoreData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((event) => {
        let userGuess = `${event.home}-${event.away}`;
        onScore(userGuess);
        reset();
      })}
    >
      <Flex alignItems="center">
        <label htmlFor="home"></label>
        <Input
          {...register("home", { valueAsNumber: true })}
          id="home"
          fontWeight="bold"
          textAlign="center"
          type="number"
          fontSize={{ base: "initial", lg: "5xl" }}
          w={{ base: "45px", lg: "100px" }}
          h={{ base: "45px", lg: "100px" }}
        />
        {/* {errors.home && <p>{errors.home.message}</p>} */}
        <Heading color="#00887A" mx={2} fontSize={{ base: "20px", lg: "7xl" }}>
          -
        </Heading>
        <label htmlFor="away"></label>
        <Input
          {...register("away", { valueAsNumber: true })}
          id="away"
          fontWeight="bold"
          textAlign="center"
          type="number"
          fontSize={{ base: "initial", lg: "5xl" }}
          w={{ base: "45px", lg: "100px" }}
          h={{ base: "45px", lg: "100px" }}
        />
        {/*         {errors.away && <p>{errors.away.message}</p>} */}
        <Button display="none" type="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default ScoreGuesser;
