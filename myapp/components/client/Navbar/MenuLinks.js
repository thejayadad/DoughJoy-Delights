'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SocialIcons from '@/components/Icons/Icons';

const MenuLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer text-5xl z-[100]"
        style={{ zIndex: 100 }}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <span className="text-primary z-50" onClick={toggleMenu}>
            ✕
          </span>
        ) : (
          <span>☰</span>
        )}
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-secondary opacity-75 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu} // Close menu when overlay is clicked
            ></motion.div>
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-gray-300 text-white p-8 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5 }}
            >
                <header className="p-4 text-white">
                <div className="text-center text-4xl font-bold">DoughJoy Delights</div>
            </header>
            <div className="border-t-2 border-dotted border-secondary"></div>
            <nav className="bg-secondary-500 p-4 text-white">
                <ul className="flex flex-col cursor-pointer items-center gap-y-6">
                <li className="hover:text-accent">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="hover:text-accent">
                    <Link href={'/about'}>About</Link>
                </li>
                <li className="hover:text-accent">
                    <Link href={'/contact'}>Contact</Link>
                </li>
                </ul>
            </nav>
            <div className="border-t-2 border-dotted border-secondary"></div>
            <section className="p-8">
            <p className="text-gray-800 text-center">
            Welcome to DoughJoy Delights, your one-stop destination for delicious and delightful donuts. Explore our menu and satisfy your sweet cravings!
            </p>
        </section>
            <div className="border-t-2 border-dotted border-secondary"></div>
            <div className="flex space-x-4 mt-2 items-center bg-gray-700 h-24 justify-center">
                <SocialIcons />
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuLinks;
