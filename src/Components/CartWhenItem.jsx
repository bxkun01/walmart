import React, { useState } from 'react'
import chevronUp from '../assets/icons/chevron-up.png'
import chevronDown from '../assets/icons/chevron-down.png'
import walmartPhone from '../assets/icons/walmartPhone.svg'
import pickup from '../assets/photos/pickup.png'
import shipping from '../assets/photos/shipping.png'
import delivery from '../assets/photos/delivery.png'
import canon from '../assets/photos/canon.png'
import home from '../assets/photos/home.png'
import CartItem from './CartItem'

const CartWhenItem = () => {
  const [openSections, setOpenSections] = useState({
    options: false,
    items: false,
  });



  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <div className='flex flex-col gap-7'>
        {/* Pickup and delivery options header */}
        <div className='flex gap-2 items-center'>
          <img src={walmartPhone} className='w-7' />
          <span className='font-bold text-xl'>Pickup and delivery options</span>
          <img
            src={openSections.options ? chevronUp : chevronDown}
            className='w-7 cursor-pointer'
            onClick={() => toggleSection('options')}
          />
        </div>

        {/* Options dropdown */}
        {openSections.options && (
          <div className='flex gap-5 mt-4'>
            <div className='flex flex-col items-center justify-center gap-1 border-2 border-black px-16 py-2 rounded-lg'>
              <img src={shipping} className='w-10' />
              <span className='font-bold text-sm'>Shipping</span>
              <span className='text-xs text-gray-500'>All items available</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-1 border-2 border-black px-16 py-2 rounded-lg'>
              <img src={pickup} className='w-10' />
              <span className='font-bold text-sm'>Pickup</span>
              <span className='text-xs text-gray-500'>Not available available</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-1 border-2 border-black px-16 py-3 rounded-lg'>
              <img src={delivery} className='w-10' />
              <span className='font-bold text-sm'>Delivery</span>
              <span className='text-xs text-gray-500'>Not available available</span>
            </div>
          </div>
        )}

        {/* Shipping summary and items dropdown */}
        <div className='border-1 border-gray-200 shadow-md'>
          <div className='flex gap-5 bg-blue-50 p-5'>
            <img src={shipping} className='w-12 object-contain' />
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-xl '>
                Shipping, arrives between tomorrow, Jun 23 – Tue, Jun 24
              </span>
              <span className='text-xs underline'>95829</span>
            </div>
          </div>

          {/* Cart items header */}
          <div className='flex justify-between items-center p-4'>
            <span className='font-medium'>2 items</span>
            <img
              src={openSections.items ? chevronUp : chevronDown}
              className='w-7 cursor-pointer'
              onClick={() => toggleSection('items')}
            />
          </div>

          {openSections.items == false && (
            <div className='flex gap-2 flex-wrap'>
              <img src={home} alt="items" className='size-20' />
              <img src={canon} className='size-20' alt="items" />
            </div>
          )
          }

          {openSections.items && (
            <div>
              <CartItem/>
              <CartItem/>
           
            
            </div>

            
          )}
        </div>
      </div>
    </div>
  )
} 

export default CartWhenItem
