import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFiltersStore from "../state-management/filters/store";

const FilterSelector = () => {
  const leagueRef = useRef<HTMLSelectElement>(null);
  const seasonRef = useRef<HTMLSelectElement>(null);
  const { fixtureQuery, setLeague, setSeason } = useFiltersStore();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (leagueRef.current && seasonRef.current) {
          console.log(leagueRef.current.value);
          setLeague(parseInt(leagueRef.current.value));
          setSeason(parseInt(seasonRef.current.value));
          navigate("/quiz");
        }
      }}
    >
      <Box display="flex" flexDirection="column" gap={4} alignItems="center">
        {/*         <label>Enter your username:</label>
        <Input w="150px"></Input>
        <label>Select your favorite league and season</label> */}
        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          gap={5}
        >
          <Select
            fontSize={{ base: "14px", lg: "14px" }}
            id="league"
            ref={leagueRef}
          >
            <option value={39}>Premier League</option>
            <option value={135}>Serie A</option>
            <option value={140}>La Liga</option>
          </Select>
          <Select id="season" ref={seasonRef}>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </Select>
        </Box>
        <Button mt={5} w="100px" type="submit">
          Start quiz
        </Button>
      </Box>
    </form>
  );
};

export default FilterSelector;
