import React from "react";
import { FaFileSignature, FaSearchDollar, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      icon: <FaFileSignature size={28} />,
      title: "Apply for Loan",
      description:
        "Complete a quick online application with your personal details and required loan amount.",
    },
    {
      id: "02",
      icon: <FaSearchDollar size={28} />,
      title: "Review & Verification",
      description:
        "Our specialists review your information and verify eligibility within 24 hours.",
    },
    {
      id: "03",
      icon: <FaCheckCircle size={28} />,
      title: "Get Approved",
      description:
        "Receive approval confirmation and access your personalized repayment schedule.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-10 md:py-14 lg:py-17">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute right-0 top-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute left-1/2 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-5">
            How It Works
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Get Your Loan In
            <span className="block text-blue-600">Three Simple Steps</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Experience a seamless loan application process designed for speed,
            transparency, and security.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-slate-700 dark:via-blue-700 dark:to-slate-700"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute right-5 top-5 text-4xl font-bold text-slate-100 dark:text-slate-700">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-center text-slate-900 dark:text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-center text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-16 mx-auto rounded-full bg-blue-600"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-14 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 px-6 py-4 shadow-sm">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Need funds quickly?
            </span>

            <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
