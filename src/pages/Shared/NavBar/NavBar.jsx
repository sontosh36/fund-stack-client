import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "./../../../hooks/useAuth";
import Logo from "./../../../components/logo/Logo";
import { toast } from "react-toastify";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  const { users, logOut } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const logOutUser = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinkClass = ({ isActive }) =>
    `font-semibold text-sm lg:text-base transition-colors duration-300 ${
      isActive ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-500"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-loans" className={navLinkClass}>
          Explore Loans
        </NavLink>
      </li>

      {users && (
        <li>
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
        </li>
      )}

      <li>
        <NavLink to="/about" className={navLinkClass}>
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink to="/blogs" className={navLinkClass}>
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-gray-100 dark:bg-slate-800 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-3 md:px-5">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost"
            >
              {mobileMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="text-xl">
            <Logo />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3 md:gap-3">
          {/* Theme Toggle */}
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle toggle-sm md:toggle-md"
          />

          {users ? (
            <>
              {/* Mobile + Desktop User Dropdown */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <img
                    src={users?.photoURL}
                    alt={users?.displayName}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover cursor-pointer"
                  />
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[100] mt-3 w-72 rounded-xl bg-white dark:bg-slate-700 shadow-lg p-4"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={users?.photoURL}
                      alt={users?.displayName}
                      className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
                    />

                    <h3 className="mt-3 font-semibold text-slate-800 dark:text-white">
                      {users?.displayName || "User"}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-300 break-all">
                      {users?.email}
                    </p>
                  </div>

                  <div className="divider my-3"></div>
                  <button
                    onClick={logOutUser}
                    className="btn btn-sm w-full bg-blue-500 hover:bg-blue-600 text-white border-none transition"
                  >
                    Logout
                  </button>
                </ul>
              </div>

              {/* Desktop Logout Button */}
              <button
                onClick={logOutUser}
                className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link to="/login">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-lg border-t border-gray-200 dark:border-slate-700 z-50 pt-3">
          {/* Menu Links */}
          <ul className="flex flex-col items-center gap-5 pb-6">
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all-loans"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore Loans
              </NavLink>
            </li>

            {users && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={navLinkClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </NavLink>
            </li>
            <hr className="border-gray-100 dark:border-gray-700 border w-full" />
            <div className="w-full px-5 pt-1">
              {users ? (
                <button
                  onClick={() => {
                    logOutUser();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
