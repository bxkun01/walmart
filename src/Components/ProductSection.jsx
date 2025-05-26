import React from 'react'

const ProductSection = () => {
  return (
    <div className='w-full flex p-5'>
        <div className='flex'>
          <div className=' flex flex-row gap-2'>
            <div className='flex flex-col w-[70px] gap-2'>
            {
          Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              className='rounded-md'
              src="https://i5.walmartimages.com/asr/08840eb1-fa0d-47ec-9f84-3506c6bfd078.09ceab1538453e42e78f04197e5796fb.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
              alt={`Image ${i + 1}`}
            />
          ))
            }
            </div>

            <div className='flex h-72 w-52 sm:h-auto sm:w-auto flex-1' >
              <img className='w-2/6 rounded-lg flex-grow hover:ring-black hover:ring-1 object-cover' src="https://i5.walmartimages.com/asr/08840eb1-fa0d-47ec-9f84-3506c6bfd078.09ceab1538453e42e78f04197e5796fb.jpeg?odnHeight=2000&amp;odnWidth=2000&amp;odnBg=FFFFFF"/>
            </div>
          
          </div>

          <div className='flex flex-col'>

          </div>
          <div className=''></div>

        </div>

    </div>
  )
}

export default ProductSection