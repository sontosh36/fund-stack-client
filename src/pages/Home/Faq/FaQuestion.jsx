import React, { useState } from "react";
import { motion } from "motion/react";
import FAQItems from "../../../components/FAQItems/FAQItems";

const FaQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Who can apply for a loan?",
      answer:
        "Any verified user who meets the eligibility criteria can apply for loans.",
    },
    {
      question: "How long does approval take?",
      answer:
        "Loan approvals typically take 24-72 hours depending on verification.",
    },
    {
      question: "Can I repay early?",
      answer: "Yes, early repayment is allowed without additional penalties.",
    },
    {
      question: "How is EMI calculator?",
      answer:
        "EMI is calculated based on loan amount,  tenure and interest rate.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-16 px-4 bg-gray-200 dark:bg-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold pt-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItems
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaQuestion;
