import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../components/services/ServiceDetails";
import axios from "axios";
import Checkout from "../components/checkout/Checkout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivetRouter from "./PrivetRouter";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/service-details/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => axios.get(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <PrivetRouter><Checkout /></PrivetRouter>,
                loader: ({ params }) => axios.get(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])