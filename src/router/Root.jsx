import { createBrowserRouter } from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../homelayout/Home";
import Orderpage from "../coffe/Orderpage";
import DetailsCoffee from "../pages/DetailsCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import SingUp from "../pages/SingUp";
import SingIn from "../pages/SingIn";

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
        },
        {
          path:"/coffees/:id",
          element:<DetailsCoffee/>
        },
        {
          path: "/update/:id",
          loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
          element:<UpdateCoffee/>
        },
        {
          path: "sing-up",
          element:<SingUp/>
        },
        {
          path: "sing-in",
          element:<SingIn/>
        }
    ]
  },
]);