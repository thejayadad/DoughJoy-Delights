'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DonutCard from './DonutCard';
import { Parallax } from 'react-parallax';


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
          className="text-primary text-4xl md:text-6xl lg:text-8xl"
        >
          DonutLists
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="lg:w-[400px] lg:h-[400px] mx-auto rounded-full"
        >
            
        <img src='/donutlist.png' alt="Donut" className="lg:w-[400px] lg:h-[400px] object-cover rounded-full" />

        </motion.div>
        <Parallax
        bgImage="/donutbg.png"
        strength={500}
        >
            <div
              className='p-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />
                <DonutCard />

            </div>
        </Parallax>
      </div>
    </section>
  );
};

export default DonutList;
