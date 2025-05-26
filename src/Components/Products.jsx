import React from 'react';
import shoe from '../assets/images/shoe4.svg'
import LoginPrompt from './LoginPrompt';
import heart from '../assets/icons/heart.png'

const Contents = () => {

  return (

    <div className='px-6 flex flex-col gap-3'>
      <LoginPrompt />
      <div className='w-full grid grid-cols-2 gap-5'>
        <div>
          <img className='object-cover w-full h-28 sm:h-40 md:h-52 lg:h-96' src={shoe} alt='shoe' />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <span className='font-bold text-xl'>Opt for Express Deilvery*</span>
              <span className='text-xs underline cursor-pointer'>view all</span>
            </div>
            <span className='text-xs text-gray-400'>Cookout & hosting picks in a hurry </span>
          </div>

          <div className='flex justify-evenly gap-4 overflow-x-auto whitespace-nowrap lg:whitespace-normal scrollbar-hide  p-4 '>
            {Array(3).fill(0).map((_,i)=>
            <div key={i}>
              <img src={shoe} className='size-36' />
              <div className='flex flex-col items-start gap-2'>
                <span className='text-green-600 font-bold'>Now $2.63</span>
                <span className='text-sm text-wrap'>Nike black and white combo shoe in the what the hell </span>
                <button className='ring-1 ring-black px-3 py-1 rounded-full hover:ring-2 text-sm font-bold'>+ Add</button>
              </div>
            </div>)}


          </div>
        </div>
            




      </div>


      {/*  Get it all right here */}
      <div className="space-y-5">
        <div className='flex justify-between'>
          <h1 className="font-bold text-md">Get it all right here</h1>
          <span className='text-xs underline cursor-pointer'>view all</span>
        </div>

        <div className="flex gap-6 px-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {Array(15).fill(0).map((_, i) => (
            <div
              key={i}
              className="rounded-md flex-shrink-0 flex flex-col items-center gap-4 w-24 cursor-pointer "
            >
              <img className="w-20" src={shoe} alt={`Grocery ${i + 1}`} />
              <span className="text-xs">Grocery</span>
            </div>
          ))}
        </div>
      </div>

      {/* summer special */}
      <div className="space-y-5 ">
        <div className='flex justify-between'>
          <h1 className="font-bold text-md">Summer party must-haves</h1>
          <span className='text-xs underline cursor-pointer'>view all</span>
        </div>

        <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {Array(15).fill(0).map((_, i) => (
            <div
              key={i}
              className="rounded-md flex-shrink-0 h-full flex flex-col items-center gap-4 size-48  cursor-pointer relative"
            >
              <img className="object-cover" src={shoe} alt={`Grocery ${i + 1}`} />
              <div className='absolute top-2 right-2 bg-white rounded-full '><img src={heart} className='size-7'/></div>
              <div className='flex flex-col items-start gap-2 pb-1'>
                <span className=' font-bold'>Now $2.63</span>
                <span className='text-sm text-wrap'>Nike black and white combo shoe in the what the hell </span>
                <button className='ring-1 ring-black px-3 py-1 rounded-full hover:ring-2 text-sm font-bold'>+ Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>






  );
};

export default Contents;
