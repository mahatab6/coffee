import { createBrowserRouter } from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../homelayout/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
    ]
  },
]);