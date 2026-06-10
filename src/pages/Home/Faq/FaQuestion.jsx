import React, { useState } from "react";
import { motion } from "motion/react";
import FAQItems from "../../../components/FAQItems/FAQItems";

const FaQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How does LoanLink process loan applications?",
      answer:
        "LoanLink streamlines the loan application workflow by allowing users to submit requests online, upload required documents, and track approval status in real time.",
    },
    {
      question: "Is my personal and financial information secure?",
      answer:
        "Yes. We use encrypted communication, secure authentication, and role-based access controls to protect your data at every stage.",
    },
    {
      question: "Can administrators manage applications efficiently?",
      answer:
        "Absolutely. Administrators can review applications, verify documents, approve or reject requests, and monitor loan performance from a centralized dashboard.",
    },
    {
      question: "Does LoanLink support EMI tracking?",
      answer:
        "Yes. LoanLink provides automated EMI schedules, payment tracking, and borrower history management for better loan servicing.",
    },
    {
      question: "Can borrowers track application progress?",
      answer:
        "Borrowers receive status updates and can monitor their application progress directly from their personalized dashboard.",
    },
  ];

  return (
    <section className="bg-slate-50 py-10 md:py-14 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Find answers to common questions about LoanLink's loan management
            platform, security, approval workflows, and borrower experience.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItems
              key={index}
              faq={faq}
              isOpen={activeIndex === index}
              toggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaQuestion;
