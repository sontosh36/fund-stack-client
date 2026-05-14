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
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import MyLoans from "../pages/Dashboard/BorrowerDashboard/MyLoans";
import PaymentSuccess from "../pages/Dashboard/BorrowerDashboard/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/BorrowerDashboard/PaymentCancel";
import MyProfile from "../pages/Dashboard/BorrowerDashboard/MyProfile";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";

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
        path: '/contact',
        Component: Contact,
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
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-loans',
        Component: MyLoans,
      },
      {
        path:'profile',
        Component: MyProfile,
      },
      {
        path: 'manage-users',
        Component: ManageUsers,
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess,
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancel
      }
    ]
  }
]);
