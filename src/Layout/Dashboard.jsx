import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaVoteYea } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (   
      <>
      <Helmet>
                <title>survey-Man / Dashboard</title>
            </Helmet>
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaVoteYea></FaVoteYea>
                                    Add Vote</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Vote</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                             <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    My Vote Cart</NavLink>
                            </li>
                            </>
                    }
                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
      </>
    );
};

export default Dashboard;