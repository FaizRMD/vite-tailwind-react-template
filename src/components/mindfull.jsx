// src/components/Mindfull.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaBrain } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBrain className="text-[#4a90a4] text-3xl" />,
    title: "Fokus & Kesadaran",
    desc: "Meningkatkan konsentrasi dan ketenangan pikiran.",
  },
  {
    icon: <FaHeart className="text-[#4a90a4] text-3xl" />,
    title: "Kesehatan Emosional",
    desc: "Membantu mengelola stres dan emosi negatif.",
  },
  {
    icon: <FaLeaf className="text-[#4a90a4] text-3xl" />,
    title: "Keseimbangan Batin",
    desc: "Menciptakan keharmonisan antara tubuh dan jiwa.",
  },
];

const mindfull = () => {
  return (
    <section className="relative z-10 px-6 md:px-20 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#2C3E50] mb-12"
      >
        Manfaat Meditasi
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{item.title}</h3>
            <p className="text-[#34495E] text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default mindfull;
