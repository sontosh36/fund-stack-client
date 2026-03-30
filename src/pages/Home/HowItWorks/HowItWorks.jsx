import React from "react";
import { FaFileSignature, FaSearchDollar, FaCheckCircle } from "react-icons/fa";
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaFileSignature size={28} />,
      title: "Apply for Loan",
      description:
        "Fill out a simple online application form with your basic information and loan amount.",
    },
    {
      id: 2,
      icon: <FaSearchDollar size={28} />,
      title: "Review & Verification",
      description:
        "Our team reviews your documents and verifies your eligibility within 24 hours.",
    },
    {
      id: 3,
      icon: <FaCheckCircle size={28} />,
      title: "Loan Approval",
      description:
        "Once approved, you receive a confirmation with repayment schedule details.",
    },
  ];
  return (
    <section className="pb-8 md:pb-13 bg-gray-50 pt-2 md:pt-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-gray-700 text-3xl md:text-4xl font-bold mt-9">How It Works</h2>
          <p className="text-gray-500 mt-3">
            Simple. Fast. Secure Microloan Process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-3 md:p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center items-center mb-4 text-indigo-600">
                {step.icon}
              </div>

              <h4 className="text-gray-700 font-bold text-xl mb-3">{step.title}</h4>

              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
