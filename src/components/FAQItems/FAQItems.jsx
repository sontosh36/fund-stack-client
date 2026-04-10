import React, { useState } from "react";
import { motion } from "motion/react";

const FAQItems = ({ faq, isOpen, toggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="p-4 cursor-pointer"
      onClick={toggle}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-xl">{faq.question}</h3>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-sm"
        >
          {faq.answer}
        </motion.p>
      )}
    </motion.div>
  );
};

export default FAQItems;
