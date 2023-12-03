'use client'
import React, { useState } from 'react';

const SingleDonut = () => {
  // State for selected options
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Handle quantity selection
  const handleQuantitySelect = (quantity) => {
    setSelectedQuantity(quantity);
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log('Product added to cart:', {
      quantity: selectedQuantity,
    });
  };

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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-2">
            Delicious Donut Title
          </h1>
          <p className="text-gray-600 lg:text-2xl">
            {/* Your long description here */}
          </p>
          <div className="flex space-x-4">
            {[1, 6, 12].map((quantity) => (
              <button
                key={quantity}
                className={`${
                  selectedQuantity === quantity
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                } px-4 py-2 rounded-full`}
                onClick={() => handleQuantitySelect(quantity)}
              >
                {quantity} Donuts
              </button>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <button
                className="bg-pink-300 text-white px-4 py-2 rounded-l-full"
                onClick={() =>
                  handleQuantitySelect(selectedQuantity > 1 ? selectedQuantity - 1 : 1)
                }
              >
                -
              </button>
              <span className="mx-4 text-xl">{selectedQuantity}</span>
              <button
                className="bg-pink-300 text-white px-4 py-2 rounded-r-full"
                onClick={() => handleQuantitySelect(selectedQuantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-pink-300 text-white px-8 py-3 mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex justify-around border p-8">
            <button
              className={`${
                activeTab === 'description'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-full`}
              onClick={() => handleTabChange('description')}
            >
              Description
            </button>
            <button
              className={`${
                activeTab === 'reviews'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-full`}
              onClick={() => handleTabChange('reviews')}
            >
              Reviews
            </button>
          </div>
          <div className="mt-8">
            {activeTab === 'description' ? (

            <p className="text-gray-600 lg:text-2xl">
            Indulge in the heavenly delight of our Delicious Donut! This exquisite treat is crafted with the finest ingredients, ensuring a perfect balance of flavors. The outer layer is delicately crispy, giving way to a soft and fluffy interior that melts in your mouth with each bite.

            Our signature donut is glazed to perfection, creating a sweet and glossy coating that adds an extra layer of deliciousness. Whether you're a fan of classic flavors or crave something more adventurous, our Delicious Donut is sure to satisfy your taste buds.

            Elevate your snacking experience with the irresistible charm of our artisanal donut. Perfect for any occasion or as a delightful indulgence during your coffee break. Don't miss out on the joyous flavors that await you in every bite of our Delicious Donut!
            </p>


           
            ) : (
              <div>
                <p>Reviews content goes here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleDonut;
