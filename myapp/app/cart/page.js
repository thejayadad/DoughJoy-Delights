'use client'
import React from 'react';

const CartPage = () => {
  // Dummy data for demonstration
  const cartItems = [
    { id: 1, name: 'Delicious Donut', price: 2.99, quantity: 2 },
    { id: 2, name: 'Chocolate Chip Cookie', price: 1.49, quantity: 1 },
    // Add more items as needed
  ];

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="px-4 py-8">
        <h2
        
        className='text-center'
        >Shopping Cart</h2>
        <div className='grid grid-cols-1 md:grid-cols-8 gap-6'>
            <div className='md:col-span-6 p-8'>
            <table className='max-w-2xl  divide-y divide-gray-200 mx-auto'>
                <thead>
                <tr>
                <th
                 className='cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

                >
                Product
                </th>
                <th
                 className='cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

                >
                Name
                </th>
                <th
                 className='cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

                >
                Extras
                </th>
                <th
                 className='cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

                >
                Price
                </th>
                <th
                 className='cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

                >
                Quantity
                </th>
                <th
                 className='cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

                >
                Total
                </th>
                </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    <td
                    className='px-6 py-4 whitespace-nowrap'
                    >
                        <img
                        src='https://images.pexels.com/photos/1395323/pexels-photo-1395323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        className='h-12'
                        />
                    
                    </td>
                    <td
                    className='px-6 py-4 whitespace-nowrap'
                    >
                    Name                   
                    </td>
                    <td
                    className='px-6 py-4 whitespace-nowrap'
                    >
                    Extras                 
                    </td>
                    <td
                    className='px-6 py-4 whitespace-nowrap'
                    >
                    Price                  
                    </td>
                    <td
                    className='px-6 py-4 whitespace-nowrap'
                    >
                    4                   
                    </td>
                    <td
                    className='px-6 py-4 whitespace-nowrap'
                    >
                    23.98                   
                    </td>
                </tbody>    
            </table>
            </div>  
            <div className='md:col-span-2 bg-purple-300 text-white   p-8'>
                checkout
            </div>
        </div>
    </section>
  );
};

export default CartPage;
