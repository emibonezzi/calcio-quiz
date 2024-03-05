import axios, { AxiosRequestConfig } from "axios";
import { FixturesQuery } from "../entities/FixturesQuery";
import { FetchResponse } from "../entities/FetchResponse";

const axiosInstance = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3",
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com/v3",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
