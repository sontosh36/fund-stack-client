import React from "react";
import { motion } from "motion/react";
import { FcDataEncryption } from "react-icons/fc";
import { RiShieldCheckFill } from "react-icons/ri";
import { LuBadgeCheck } from "react-icons/lu";
import { FiFileText, FiShield } from "react-icons/fi";

const TrustSecurity = () => {
  const trustItems = [
    {
      icon: <FcDataEncryption className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description:
        "All customer information and financial records are protected with advanced encryption standards.",
    },
    {
      icon: <RiShieldCheckFill className="w-8 h-8 text-blue-600" />,
      title: "Secure Transactions",
      description:
        "Every loan application, approval, and repayment is processed through secure channels.",
    },
    {
      icon: <LuBadgeCheck className="w-8 h-8 text-blue-600" />,
      title: "Verified Users",
      description:
        "Strict identity verification ensures trusted borrowers, lenders, and administrators.",
    },
    {
      icon: <FiFileText className="w-8 h-8 text-blue-600" />,
      title: "Transparent Policies",
      description:
        "Clear loan terms, repayment schedules, and policies with no hidden conditions.",
    },
  ];

  const stats = [
    {
      value: "256-bit",
      label: "SSL Encryption",
    },
    {
      value: "99.9%",
      label: "Platform Uptime",
    },
    {
      value: "25K+",
      label: "Protected Accounts",
    },
    {
      value: "100%",
      label: "Verified Users",
    },
  ];
  const fundSecurity = [
    "Encrypted User Data",
    "Verified User Accounts",
    "Protected Loan Transactions",
    "Transparent Loan Policies",
  ];
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-16 md:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14 lg:mb-20"
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-5">
            Trust & Security
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Built With Security
            <span className="block text-blue-600">At Every Layer</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Your privacy and financial information are protected with
            enterprise-grade security standards, ensuring every transaction
            remains safe, transparent, and reliable.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 shadow-sm">
              <div className="w-20 h-20 rounded-3xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <FiShield className="w-10 h-10 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Enterprise Grade Protection
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                FundStack uses modern security practices to safeguard customer
                data, financial records, and transaction activities across the
                entire platform.
              </p>

              <div className="space-y-3">
                {fundSecurity.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 mx-auto sm:mx-0 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 text-center shadow-sm"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSecurity;
