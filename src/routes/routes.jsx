import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../components/services/ServiceDetails";
import axios from "axios";
import Checkout from "../components/checkout/Checkout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivetRouter from "./PrivetRouter";
import Cart from "../components/cart/Cart";
import ErrorPage from "../pages/ErrorPage";
import Notification from "../pages/dashboard/notification/Notification";
import Services from "../pages/dashboard/services/Services";
import User from "../pages/dashboard/users/User";
import Help from "../pages/dashboard/help/Help";
import DashboardLayout from "../pages/dashboard/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Setting from "../pages/dashboard/settings/Setting";
import Contact from "../pages/contact/Contact";
import Order from "../pages/dashboard/order/Order";
import AllOrder from "../pages/dashboard/order/AllOrder";
import Pending from "../pages/dashboard/order/Pending";
import Approved from "../pages/dashboard/order/Approved";
import AddService from "../pages/dashboard/services/AddService";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
            , {
                path: "/cart",
                element: <PrivetRouter><Cart /></PrivetRouter>
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRouter><DashboardLayout /></PrivetRouter>,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/dashboard/notifications",
                element: <Notification />
            },
            {
                path: "/dashboard/services",
                element: <Services />
            },
            {
                path: "/dashboard/users",
                element: <User />
            },
            {
                path: "/dashboard/add-service",
                element: <AddService />
            },
            {
                path: "/dashboard/help",
                element: <Help />
            },
            {
                path: "/dashboard/settings",
                element: <Setting />
            },
            {
                path: "/dashboard/order",
                element: <Order />,
                children: [
                    {
                        index: true,
                        element: <AllOrder />
                    },
                    {
                        path: "/dashboard/order/pending",
                        element: <Pending />
                    },
                    {
                        path: "/dashboard/order/approved",
                        element: <Approved />
                    }
                ]
            }
        ]

    }
])