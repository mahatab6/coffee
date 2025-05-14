import { createBrowserRouter } from "react-router";
import Mainlayout from "./Mainlayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>
  },
]);