import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import logo from '../../../assets/logo.jpg';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/service">Services</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-orange-400 my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className=" flex items-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className=" w-[100px] h-[100px]  -mt-6" src={logo} alt="" />
                    </Link>
                    <h1 className=" text-2xl font-bold">Survey<span className=" text-white">Man</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;