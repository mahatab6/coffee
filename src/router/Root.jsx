import { createBrowserRouter } from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../homelayout/Home";
import Orderpage from "../coffe/Orderpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
        {
            index: true,
            loader: () => fetch('http://localhost:5000/coffees'),
            element: <Home/>
        },
        {
          path: "coffee-order",
          element: <Orderpage/>
        }
    ]
  },
]);