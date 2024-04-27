import Error from "../pages/Error";
import Root from "../layout/Root";

import {
    createBrowserRouter
} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddItem from "../pages/AddItem";
import Home from "../pages/home/Home";
import PrivateRoute from "../components/protected/PrivateRoute";
import AllArtAndCraftItems from "../pages/All_Art_craft_Items.jsx/AllArtAndCraftItems";
import MyArtCraftList from "../pages/My_Art&Craft_List/MyArtCraftList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,

                loader: () => fetch("https://sr-painting-server.vercel.app/items")

            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/addItem",
                element: <PrivateRoute> <AddItem /></PrivateRoute>
            },
            {
                path: "/AllArtAndCraftItems",
                element: <AllArtAndCraftItems />,
                loader: () => fetch("https://sr-painting-server.vercel.app/items")
            },
            {
                path: "/MyArtCraftList",
                element: <PrivateRoute> <MyArtCraftList /></PrivateRoute>

            },

        ]
    },
]);



export default router;
