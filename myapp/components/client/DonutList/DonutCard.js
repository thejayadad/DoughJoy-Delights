'use client'
import React from 'react';
import { motion } from 'framer-motion';

const DonutCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden"
    >
      <img
        src="/donut1.png"
        alt="Donut"
        className="w-full h-96 object-cover bg-white"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center text-white bg-pink-500 bg-opacity-1"
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Donut Title</h3>
          <p className="text-sm">Description or additional details</p>
          <p className="text-sm font-bold">Price: $5.99</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DonutCard;
