import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { sampleResponse } from "../utils/sampleResponse";

interface Fixture {
  fixture: {
    date: string;
  };
  league: {
    name: string;
    log: string;
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

const useMatch = (answerStatus: boolean) => {
  const [game, setGame] = useState<Fixture>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const randomGame = Math.floor(
      Math.random() * sampleResponse.response.length - 1
    );
    setGame(sampleResponse.response[randomGame]);
  }, [answerStatus]);

  /*   useEffect(() => {
    apiClient
      .get("/fixtures", {
        params: { league: 2, season: 2022 },
      })
      .then((res) => {
        setIsLoading(true);
        console.log(res.data);
        const randomGame = Math.floor(
          Math.random() * res.data.response.length - 1
        );
        setGame(res.data.response[randomGame]);
      })
      .catch((err) => console.log(err.message));
  }, [answerStatus]); */

  return { game, isLoading };
};

export default useMatch;
