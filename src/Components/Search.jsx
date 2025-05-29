import React from 'react'

const Search = () => {
  return (
        <div className=' flex flex-1 relative'>
          <input type="text" placeholder='Search' className='px-5
           placeholder-blue-800 h-11 rounded-full text-sm text-black lg:w-full focus:rounded-none flex-grow' />
          <button className='absolute right-2 bottom-2 size-7 rounded-full bg-blue-900'>🔍</button>
        </div>
  )
}

export default Search