import React from 'react'
import walmart from '/src/assets/icons/spark-icon.svg'

const Sidebar = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 text-sm text-slate-500 px-5 shadow-xl w-72 z-[666]'>
      
      <div className='pb-5 pt-10  border border-transparent border-b-gray-300'>
        <div className='gap-3 flex items-center pb-10 '>        
          <img src={walmart} className='size-7'/>
          <span className='bg-blue-600 font-bold rounded-full p-1 cursor-pointer text-sm text-white hover:bg-blue-800'>Sign or create account</span>
        </div>

        <div className='gap-3 flex items-center'>
          <img src={walmart} className='size-4'/>
          <span>Walmart+</span>
        </div>
      </div>

      <div>
        <div className='flex flex-col border border-transparent border-b-gray-300 py-5'>
          <span>Purchase History</span>
          <span>My Items</span>
          <span>Account</span>
        </div>

        <div className='flex flex-col border border-transparent border-b-gray-300 pb-5 justify-center py-5'>Help</div>

        <div  className='flex flex-col border border-transparent border-b-gray-300 pb-5 justify-center py-5'>
          <span>Lists</span>
          <span>Registries</span>
          </div>

        <div  className='flex flex-col border border-transparent border-b-gray-300 pb-5 justify-center py-5'>
          <span>Department</span>
          <span>Services</span>
        </div>

        <div className='flex flex-col border border-transparent border-b-gray-300 pb-5 justify-center py-5'>Give Feedback</div>
        
      </div>
    </div>
  )
}

export default Sidebar