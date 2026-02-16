import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound";
import RootLayout from './../layouts/RootLayout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])