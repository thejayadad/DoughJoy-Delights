'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import hero from "../../../public/donuthero.png"

const Hero = () => {
  return (
    <Parallax bgImage="/donuthero.png" strength={500}>
      <section className="h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4"
          >
            DoughJoy Delights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl"
          >
            The Destination For All Donut Lovers
          </motion.p>
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;
