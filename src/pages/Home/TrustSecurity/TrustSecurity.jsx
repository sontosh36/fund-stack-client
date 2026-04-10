import React from "react";
import { motion } from "motion/react";
import { FcDataEncryption } from "react-icons/fc";
import { RiShieldCheckFill } from "react-icons/ri";
import { LuBadgeCheck } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";

const TrustSecurity = () => {
  const trustItems = [
    {
      icon: <FcDataEncryption className="w-8 h-8 "/> ,
      title: "End-to-End Encryption",
      description:
        "All user data is encrypted to ensure maximum security and privacy.",
    },
    {
      icon: <RiShieldCheckFill className="w-8 h-8"/>,
      title: "Secure Transctions",
      description: "Track repayments and disbursements with complete safety.",
    },
    {
      icon: <LuBadgeCheck className="w-8 h-8"/>,
      title: "Verified Users",
      description: "Strict KYC ensures only verified borrower and managers.",
    },
    {
      icon: <FiFileText className="w-8 h-8"/>,
      title: "Transparent Policies",
      description: "Clear loan terms with no hidden charges.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div className="px-4 py-16 bg-gradient-to-br from-pink-400 to-blue-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Trust & Security</h2>
          <p className="mt-4">
            Your financial data is protected with industry-grade security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl text-center shadow hover:shadow-lg transition"
            >
              <div className="">
                <span className="mb-4 flex justify-center text-blue-500">{item.icon}</span>
                <h3 className="text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
