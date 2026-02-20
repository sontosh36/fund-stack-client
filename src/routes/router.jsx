import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound";
import RootLayout from './../layouts/RootLayout';
import AllLoans from "../pages/Shared/AllLoan/AllLoans";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/all-loans',
                Component: AllLoans,
            }
        ]
    }
])