'use client'
import Link from 'next/link'
import React from 'react'
import donutlogo from "../../public/donutlogo.png"
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href={'/'}>
        <Image
        src={donutlogo}
    style={{height: '300px', width: '280px'}}
        />
    </Link>
  )
}

export default Logo