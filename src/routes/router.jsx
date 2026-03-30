import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound";
import RootLayout from "./../layouts/RootLayout";
import AllLoans from "../pages/Shared/AllLoan/AllLoans";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import LoanDetails from "../components/LoanDetails/LoanDetails";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-loans",
        Component: AllLoans,
      },
      {
        path: "/loan/:id",
        element: (
          <PrivateRoute>
            <LoanDetails></LoanDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
