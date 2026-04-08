import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <section className="text-center py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Get <span className="text-indigo-600"> In </span> Touch
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have Questions about FundStack? Whether you're a microfinance
          provider, NGOs or financial institution - we're here to help you
          streamline your loan operations.
        </p>
      </section>

      <section className="max-w-6xl mx-auto text-center px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-600 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p>support@fundstack.com</p>
        </div>
        <div className="bg-white dark:bg-gray-600 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p>+880 1328 567 571</p>
        </div>
        <div className="bg-white dark:bg-gray-600 rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2">Office</h3>
          <p>Dinajpur, Bangladesh</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto  dark:bg-gray-600 p-8 shadow rounded-2xl mb-16">
        <div className="flex justify-between">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Send us a message
        </h2>
        <p><RiFeedbackFill size={35}/></p>
        </div>
        <form action="#" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            className="border dark:border-gray-400 p-3 rounded-lg outline-none"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="border dark:border-gray-400 p-3 rounded-lg outline-none"
            placeholder="Email Address"
            required
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="border dark:border-gray-400 p-3 rounded-lg md:col-span-2 outline-0 resize-none"
          ></textarea>
          <button
            type="submit"
            className="font-semibold md:col-span-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="rounded-2xl text-center py-10 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Text */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Need faster support?
          </h2>

          <p className="mt-2 text-indigo-100 text-sm sm:text-base">
            Email us directly or reach out through our support channel.
          </p>

          {/* Button */}
          <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
            Contact Support
          </button>

          {/* Follow Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <h2 className="text-lg sm:text-xl flex items-center gap-2">
              Follow us <IoIosArrowForward />
            </h2>

            <div className="flex space-x-4">
              <Link
                className="w-8 h-8 rounded-full flex justify-center items-center bg-white border border-blue-200 text-blue-700"
                to="#"
                aria-label="facebook"
              >
                <FaFacebookF />
              </Link>

              <Link
                className="w-8 h-8 rounded-full flex justify-center items-center bg-white border border-blue-200 text-gray-800"
                to="https://github.com/sontosh36"
                aria-label="github"
              >
                <FaGithub />
              </Link>

              <Link
                className="w-8 h-8 rounded-full flex justify-center items-center bg-white border border-blue-200 text-blue-700"
                to="#"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
