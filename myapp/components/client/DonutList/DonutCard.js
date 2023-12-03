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
          src="https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Donut"
          className="w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-black text-white opacity-0"
        >
          <button className="bg-primary px-4 py-2 rounded-full">
            Details
          </button>
        </motion.div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Donut Title</h3>
          <h5 className="text-sm">Price</h5>
        </div>
      </motion.div>
  );
};

export default DonutCard;
