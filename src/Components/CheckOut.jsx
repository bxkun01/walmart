import React from 'react'

const CheckOut = () => {
    return (
        <div className='flex flex-col gap-4 border border-gray-300 bg-white 
         py-5 divide-y max-xl:hidden shadow-lg rounded-md w-[350px] h-full'>
            <div className='flex flex-col gap-5 px-10'>
                <button className=' text-sm font-bold hover:bg-blue-800 bg-blue-700 text-white rounded-full p-1'>Continue to checkout</button>
                <span className='text-xs '>For the best shopping experience, sign in</span>
            </div>

            <div className='flex flex-col gap-2 p-3'>
                <div className='flex justify-between'>
                    <span className='font-bold'>Subtotal</span>
                    <span className='text-green-700'>$399</span></div>
                <div className='flex justify-between'>
                    <span className='font-bold'>Savings</span>
                    <span className='text-green-700'>-$9</span>
                </div>

            </div>

            <div className='p-3'>
                <div className='flex text-xs justify-between '>
                    <span>Shipping</span><span className='text-green-700'>Free</span>
                </div>
                                <div className='flex justify-between'>
                    <span className='font-bold'>Taxes</span>
                    <span className='text-sm'>Calculated at checkout</span>
                </div>
            </div>

                <div className='p-3 flex flex-col gap-10'>
                            <div className='flex justify-between '>
                    <span className='font-bold'>Estimated total</span>
                    <span className='text-green-700'>$390</span>
                </div>

                <div className='flex flex-col  items-end'>
                    <span className='text-xs'>
                        Monthly payments available for eligible items.
                    </span>
                    <span className='underline text-xs'>Continue with Affirm</span>
                </div>
                </div>
        

            

        </div>
    )
}

export default CheckOut