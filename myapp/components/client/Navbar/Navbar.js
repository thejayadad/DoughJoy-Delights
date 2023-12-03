'use client'
import Logo from '@/components/Logo/Logo'
import React from 'react'
import AuthLinks from './AuthLinks'
import MenuLinks from './MenuLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-12 border-b border-primary'>
        <div className='flex justify-between max-w-screen-xl mx-auto items-center'>
        <AuthLinks />
        <Logo />
        <MenuLinks />
        </div>
    </header>
  )
}

export default Navbar