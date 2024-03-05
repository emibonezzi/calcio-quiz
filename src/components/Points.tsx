import React from "react";
import usePointsStore from "../state-management/points/store";

const Points = () => {
  const { points } = usePointsStore();
  return <div>{points}</div>;
};

export default Points;
