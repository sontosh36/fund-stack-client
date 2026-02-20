import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "./../../../hooks/useAuth";
import Logo from "./../../../components/logo/Logo";

const NavBar = () => {
  const { users } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
         className="hover:text-blue-500 font-semibold text-md"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-loans"
          className="hover:text-blue-500 font-semibold text-md"
        >
          All Loans
        </NavLink>
      </li>
      {users && (
        <>
          <li>
            <NavLink
              to="/dashbooard"
              className="hover:text-blue-500 font-semibold text-md"
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/about"
          className="hover:text-blue-500 font-semibold text-md"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="hover:text-blue-500 font-semibold text-md"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full backdrop-blur-xl navbar bg-base-100 shadow-sm sticky top-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className=" text-xl p-0 md:p-5">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center mr-4">
                <input type="checkbox" className="toggle" name="" />
              </div>
        {
          users? (
            <div className="flex items-center gap-3">
              
              <div className="">
                <img src={users?.photoURL} className="h-10 w-10 rounded-full" alt={users?.displayName} />
              </div>
              <button className="bg-indigo-600 text-center px-3 py-2 rounded-lg">Log Out</button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link to={'/login'}>
              <button className="bg-indigo-600 text-center rounded-lg px-3 py-2 font-medium hover:bg-indigo-700 duration-300 text-white">Login</button></Link>
              <Link to={'/register'}>
              <button className="bg-indigo-600 text-center rounded-lg px-3 py-2 font-medium hover:bg-indigo-700 duration-300 text-white">Register</button></Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default NavBar;
