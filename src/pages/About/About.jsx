import React from "react";
import { motion } from "motion/react";

const About = () => {
  const features = [
    {
      title: "Easy Loan Management",
      description:
        "Manage all loan requests, approvals and repayments in one dashboard.",
    },
    {
      title: "Fast Verification",
      description:
        "Quickly verify user information and approve loans efficiently.",
    },
    {
      title: "Track EMIs",
      description:
        "Keep track of monthly installments and repayment schudules easily.",
    },
  ];
  const team = [
    {
      name: "Sarah Jenkins",
      role: "Senior Vice President",
      image: "https://i.ibb.co.com/7NLrmPX2/sarah-jenkins-or.jpg",
    },
    {
      name: "Steve Wyremski",
      role: "Executive Vice Precident",
      image: "https://i.ibb.co.com/rRq7jFxK/steve-wyremski.jpg",
    },
    {
      name: "Jamie Dimon",
      role: "Chief Executive officer",
      image: "https://i.ibb.co.com/Q3PFNzjW/jamie-dimon.jpg",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-5">
      <div className=" flex flex-col items-center py-16 ">
        {/* hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mb-10"
        >
          <h1 className="text-4xl font-bold mb-4">About FundStack</h1>
          <p className="text-lg">
            FundStack is a modern microloan management system that helps NGOs
            and financial organizations streamline loan processes efficiently.
          </p>
        </motion.div>

        {/* mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 text-gray-700 p-8 text-center md:text-left rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              To simplify and digitize microloan management by reducing mamual
              work, increasing transparency and providing efficient tools for
              organizations.
            </p>
          </motion.div>

          {/* vission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-indigo-300 to-blue-500 text-white p-8 text-center md:text-left rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold mb-4">Our Vission</h2>
            <p>
              To became a leading digital platform for microfinance institutions
              worldwide, enabling smarter and faster financial services.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="bg-gray-50 text-gray-700 p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
        {/* team section */}
        <div className="text-center mt-16">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-3xl font-bold mb-10"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-200 mb-4"
                />
                <h2 className="text-gray-800 font-semibold text-lg">{member.name}</h2>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
