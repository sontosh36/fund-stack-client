import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { Link } from "react-router";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Logo from "../../../components/logo/Logo";
const Footer = () => {
  return (
    <footer className=" border-t border-base-300 bg-base-400">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          <div className="space-y-4">
            <Link to="/" className="">
              <Logo/>
            </Link>
            <p className="text-gray-500 leading-relaxed mt-2">
              Fund Stack is a web-based platform for managing microloan applications, approvals, EMI schedules, repayments, borrower records through a secure, centerlized and user-friendly dashboard.
            </p>
          </div>

          <div className="md:text-center">
            <h3 className="font-semibold mb-2 text-xl">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-500 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-loans"
                  className="text-gray-500 hover:underline"
                >
                  All Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-xl">Contact Us</h3>
            <ul className="space-y-3 mb-2">
              <li className="flex items-start space-x-3 text-gray-500">
                <FiMapPin size={25} />
                <span>Motijheel Commercial Area, Dhaka-1000, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <FaPhone size={18} />
                <span>+8801459621402</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <CiMail size={18} />
                <span>support.admin@fundstack.com</span>
              </li>
            </ul>

            <h3 className="font-semibold mb-2">Social Links</h3>
            <div className="flex space-x-4 pt-2">
              <Link
                className="w-10 h-10 rounded-full flex justify-center items-center bg-white border border-blue-200 text-blue-700"
                to="#"
                aria-label="facebook"
              >
                <FaFacebookF />
              </Link>
              <Link
                className="w-10 h-10 rounded-full flex justify-center items-center bg-white border border-blue-200 text-gray-800"
                to="https://github.com/sontosh36"
                aria-label="github"
              >
                <FaGithub />
              </Link>

              <Link
                className="w-10 h-10 rounded-full flex justify-center items-center bg-white border border-blue-200 text-blue-700"
                to="#"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-400">
            &copy; copyright {new Date().getFullYear()} FundStack. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
