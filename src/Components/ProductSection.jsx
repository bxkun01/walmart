import React from 'react'
import wassup from '../assets/photos/wassup.png'
import AboutItem from './AboutItem'
import MoreProductDetails from './MoreProductDetails'
import RatingnReview from './RatingnReview'

const ProductSection = () => {
  return (
    <div className='flex w-full h-full mt-[120px]'>
      <div className=' flex p-5 flex-col gap-10 '>
      <div className='flex gap-6'>
        <div className=' flex flex-row gap-2'>
          <div className='flex flex-col w-20 gap-2'>
            {
              Array(3).fill(0).map((_, i) => (
                <img
                  key={i}
                  className='rounded-md size-[75px] object-cover'
                  src={wassup}
                  alt={`Image ${i + 1}`}
                />
              ))
            }
          </div>

          <div className='flex size-[510px] relative' >
            <img className='w-2/6 rounded-lg flex-grow hover:ring-black hover:ring-1 object-cover' src={wassup} />
            <div className='absolute top-5 right-5 flex flex-col gap-3'>
              <span className='rounded-full  bg-white size-8 flex justify-center items-center'>@</span>
              <span className='rounded-full  bg-white size-8 flex justify-center items-center'>@</span>
              <span className='rounded-full  bg-white size-8 flex justify-center items-center'>@</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col divide-y divide-gray-300'>
          <div className=' flex flex-col gap-3 pb-5'>
            <a href='#' className='text-xs underline text-slate-600 hover:no-underline hover:text-blue-600'>unknown</a>
            <p className='font-semibold text-[15px]'>#1 Dad Hat Patch Proud Parent Embroidered Iron On</p>
            <div className='flex gap-1'>
              <img src={wassup} className='size-5 object-cover' />
              <span className='text-xs text-slate-400'>(No rating yet)</span>
            </div>
          </div>

          <div className='py-4 flex flex-col gap-2'>
            <p className='font-bold text-sm'>About this item</p>
            <p className='text-xs text-gray-700'>Patch Measures Approximately: 1.85" Wide X 1.75" Tall,100% Embroidered Patches,Perfect for Jeans, Jackets,
              Vests, Hats, Backpacks and much more!,With this high quality full color patch featuring awesome pop culture
              graphics you'll be able to show your personal style!,This patch comes with easy to apply iron on backing or
              simply have it sewn.</p>
            <a href='#' className='text-xs underline text-gray-600 hover:no-underline hover:text-blue-700'>View full item details</a>
          </div>

          <div className='py-4 flex flex-col gap-2'>
            <p className='font-bold text-sm'>At a glance</p>
            <div className='grid grid-cols-3 gap-2'>
              <div className='flex flex-col justify-center items-center bg-blue-100 w-36 h-16 rounded-md'>
                <span className='font-bold text-xs'>Brand</span>
                <span className='text-xs'>unknown</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-blue-100 w-36 h-16 rounded-md'>
                <span className='font-bold text-xs'>Brand</span>
                <span className='text-xs'>unknown</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-blue-100 w-36 h-16 rounded-md'>
                <span className='font-bold text-xs'>Brand</span>
                <span className='text-xs'>unknown</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-blue-100 w-36 h-16 rounded-md'>
                <span className='font-bold text-xs'>Brand</span>
                <span className='text-xs'>unknown</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-blue-100 w-36 h-16 rounded-md'>
                <span className='font-bold text-xs'>Brand</span>
                <span className='text-xs'>unknown</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-blue-100 w-36 h-16 rounded-md'>
                <span className='font-bold text-xs'>Brand</span>
                <span className='text-xs'>unknown</span>
              </div>
            </div>
            <a href='#' className='text-xs underline text-gray-600 hover:no-underline hover:text-blue-700'>View all specifications</a>
          </div>
        </div>
      </div>
      <AboutItem/>
      <RatingnReview/>
    </div>
    <MoreProductDetails />

      
    </div>
    

  )
}

export default ProductSection