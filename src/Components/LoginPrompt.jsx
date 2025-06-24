import React from 'react'
import img from '../assets/icons/img.png'

const LoginPrompt = () => {
  return (
    <div className='flex justify-center gap-5 items-center shadow-sm border border-transparent border-t-gray-200 shadow-slate-400 p-2'>
        <div className='h-full w-12'><img src={img} className='object-contain' /></div>
        <div className='flex flex-col items-center text-xs gap-2 sm:flex-row sm:text-sm sm:gap-5 h-full'>
            <h1 className='text-blue-800'>Sign in for personalized recommendations and more!</h1>
            <button className='ring-black ring-1 sm:px-2 hover:ring-2 rounded-full font-bold p-1'>Sign in or create an account</button>
        </div>

    </div>
  )
}

export default LoginPrompt