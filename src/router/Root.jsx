import { createBrowserRouter } from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../homelayout/Home";
import Orderpage from "../coffe/Orderpage";
import DetailsCoffee from "../pages/DetailsCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SingUp";
import PrivateRoot from "./PrivateRoot";


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
          element: <PrivateRoot><Orderpage/></PrivateRoot>
        },
        {
          path:"/coffees/:id",
          element:<DetailsCoffee/>
        },
        {
          path: "/update/:id",
          loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
          element:<PrivateRoot><UpdateCoffee/></PrivateRoot>
        },
        {
          path: "sign-up",
          element:<SignUp/>
        },
        {
          path: "sign-in",
          element:<SignIn/>
        }
    ]
  },
]);