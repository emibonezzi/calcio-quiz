import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import GameCard from "./components/GameCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/quiz", element: <GameCard /> },
    ],
  },
]);

export default router;
