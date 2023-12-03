'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DonutCard from './DonutCard';

const DonutList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <section className="px-4 py-8">
      <div ref={ref} className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-primary text-5xl"
        >
          DonutLists
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-64 h-64 mx-auto rounded-full"
        >
            
        <img src='/donutlist.png' alt="Donut" className="w-64 h-64 object-cover rounded-full" />

        </motion.div>
        <div className='bg-orange-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[800px] gap-4'>
        <DonutCard />
        <DonutCard />
        <DonutCard />

        </div>
      </div>
    </section>
  );
};

export default DonutList;
