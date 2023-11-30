import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Header/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DetailPage from "../Pages/Details/DetailPage";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/UserDashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/UserDashboard/AllUsers/AllUsers";
import AddItems from "../Pages/UserDashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Register></Register>
            },
            {
                path: 'details/:id',
                element: <DetailPage></DetailPage>
            }
        ]
    },

    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // admin route 
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])

export default router;