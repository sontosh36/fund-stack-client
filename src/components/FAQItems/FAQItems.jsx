import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQItems = ({ faq, isOpen, toggle }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
      >
        <h3 className="text-base font-semibold text-slate-800 md:text-lg dark:text-white">
          {faq.question}
        </h3>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
          }`}
        >
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="border-t border-slate-200 px-5 py-5 dark:border-slate-700 md:px-6">
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItems;
