import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { sampleResponse } from "../utils/sampleResponse";

interface Fixture {
  fixture: {
    date: string;
  };
  league: {
    name: string;
  };
  teams: {
    home: { name: string; logo: string };
    away: { name: string; logo: string };
  };
  goals: {
    home: number;
    away: number;
  };
}

const useMatch = () => {
  const [game, setGame] = useState<Fixture>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setGame(sampleResponse.response[11]);
  }, []);

  /*   useEffect(() => {
    apiClient
      .get("/fixtures", {
        params: { league: 39, season: 2020 },
      })
      .then((res) => {
        setIsLoading(true);
        setGame(res.data.response[2]);
      })
      .catch((err) => console.log(err.message));
  }, []); */

  return { game, isLoading };
};

export default useMatch;
