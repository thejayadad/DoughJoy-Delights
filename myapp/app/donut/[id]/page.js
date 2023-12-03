'use client'
import React from 'react'

const SingleDonut = () => {
  return (
    <section className='px-4 py-8 min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-8'>
            <img
          src="https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Donut"
          className="w-full h-screen object-cover mb-4 md:mb-0"
        />
            </div>
            <div className='p-8 flex flex-col gap-12'>
            <h1 className="text-3xl font-semibold mb-2">Delicious Donut Title</h1>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada magna ut metus fringilla, nec gravida nisi fermentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada magna ut metus fringilla, nec gravida nisi fermentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada magna ut metus fringilla, nec gravida nisi fermentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada magna ut metus fringilla, nec gravida nisi fermentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada magna ut metus fringilla, nec gravida nisi fermentum.
          </p>
          <div className="flex space-x-4">
            <button
              className=
               'bg-blue-500 text-white' 
            >
              Single Donut
            </button>
            <button
              className=
              'bg-blue-500 text-white' 
            >
              6 Donuts
            </button>
            <button
          className=
          'bg-blue-500 text-white' 
            >
              12 Donuts
            </button>
          </div>
          <div className="mt-8">
            <button
              className="bg-green-500 text-white px-8 py-3"
            >
              Add to Cart
            </button>
          </div>
            </div>
        </div>
    </section>
  )
}

export default SingleDonut