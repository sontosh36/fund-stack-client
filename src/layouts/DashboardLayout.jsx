import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  FaHandHoldingUsd,
  FaTimes,
  FaBars,
  FaHome,
  FaUserCog,
  FaFileInvoiceDollar,
  FaBusinessTime,
} from "react-icons/fa";
import { MdPending, MdVerified } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import useAuth from "../hooks/useAuth";
import { FaAddressCard } from "react-icons/fa6";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { role } = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const { users } = useAuth();
  const closeDrawer = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);
  return (
    <div className="min-h-screen bg-base-100 max-w-7xl mx-auto">
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
        ></div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
                        fixed top-0 left-0 z-50
                        h-screen w-64 bg-base-200 shadow-lg
                        transform transition-transform duration-300 ease-in-out

                        ${isOpen ? "translate-x-0" : "-translate-x-full"}

                        lg:translate-x-0 lg:static lg:block
                    `}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-2 border-b border-base-300">
            <Link
              to="/"
              className="text-2xl font-bold text-primary dark:text-white"
            >
              FundStack
            </Link>

            {/* Close button only mobile */}
            <button
              onClick={closeDrawer}
              className="btn btn-sm btn-ghost lg:hidden"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Sidebar Menu */}
          <ul className="menu p-2 space-y-2">
            <li>
              <NavLink
                to="/dashboard"
                onClick={closeDrawer}
                className="flex items-center gap-3 rounded-lg"
              >
                <FaHome size={18} />
                <span className="dark:text-white">Dashboard</span>
              </NavLink>
            </li>
            {role === "borrower" && (
              <>
                {/* My Loans */}
                <li>
                  <NavLink
                    to="/dashboard/my-loans"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <FaHandHoldingUsd size={18} />
                    <span className="dark:text-white"> My Loans</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <CgProfile size={18} />
                    <span className="dark:text-white">My Profile</span>
                  </NavLink>
                </li>
              </>
            )}
            {role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manage-users"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <FaUserCog size={18} />
                    <span className="dark:text-white">Manage Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/all-loan"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <FaFileInvoiceDollar size={18} />
                    <span className="dark:text-white">All Loans</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/loan-applications"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <SlEnvolopeLetter size={18} />
                    <span className="dark:text-white">Loan Applications</span>
                  </NavLink>
                </li>
              </>
            )}
            {role === "manager" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/add-loan"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <FaAddressCard size={18} />
                    <span className="dark:text-white">Add Loan</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-loans"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <FaBusinessTime size={18} />
                    <span className="dark:text-white">Manage Loans</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/pending-loans"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <MdPending size={18} />
                    <span className="dark:text-white">Pending Loans</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/approved-loans"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <MdVerified size={18} />
                    <span className="dark:text-white">Approved Loans</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-lg"
                  >
                    <CgProfile size={18} />
                    <span className="dark:text-white">My Profile</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col w-full">
          {/* Navbar */}
          <nav className="sticky top-0 z-30 bg-base-200 border-b border-base-300">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Left Side */}
              <div className="flex items-center gap-3">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn btn-ghost btn-sm lg:hidden"
                >
                  <FaBars size={20} />
                </button>

                <h1 className="text-lg md:text-2xl font-bold dark:text-white">
                  FundStack Dashboard
                </h1>
              </div>

              {/* Right Side */}
              <div className="flex items-center">
                <div className="">
                  <img
                    src={users?.photoURL}
                    alt={users?.displayName}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            </div>
          </nav>

          {/* Page Content */}
          <main className="flex-1 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
