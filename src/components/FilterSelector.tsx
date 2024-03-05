import { Box, Button, Select } from "@chakra-ui/react";
import React, { useRef } from "react";
import useFiltersStore from "../state-management/filters/store";
import { useNavigate } from "react-router-dom";

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
      <Box display="flex" gap={5}>
        <Select id="league" ref={leagueRef}>
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
      <Button mt={5} type="submit">
        Start quiz
      </Button>
    </form>
  );
};

export default FilterSelector;
