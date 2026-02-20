import React from "react";
import { Link } from "react-router";
import { easeInOut, motion } from "motion/react";
const LoanCard = ({ loan }) => {
  const {
    _id,
    image,
    title,
    category,
    description,
    interestRate,
    maxLoanLimit,
  } = loan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 , ease: easeInOut}}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
    >
      {/* Image */}
      <motion.div 
      initial={{opacity: 0, y: 80}}
      animate={{opacity: 1, y: 0}}
      transition={{ ease: easeInOut, delay: 0.3 }}
      className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div 
      initial={{opacity: 0, y: 80}}
      animate={{opacity: 1, y: 0}}
      transition={{ ease: easeInOut, delay: 0.4 }}
      className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          {title}
        </h2>
        <p className="text-gray-500 text-sm">{description}</p>

        {/* Loan Info */}
        <div className="flex justify-between items-center text-sm">
          <div>
            <p className="text-gray-400">Interest</p>
            <p className="font-semibold text-indigo-600">{interestRate}</p>
          </div>

          <div>
            <p className="text-gray-400">Max Amount</p>
            <p className="font-semibold text-green-600">${maxLoanLimit}</p>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/loan/${_id}`}
          className="block mt-4 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-300 font-medium"
        >
          View Details
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LoanCard;
