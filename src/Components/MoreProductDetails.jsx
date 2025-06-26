import delivery from '../assets/photos/delivery.png'
import shipping from '../assets/photos/shipping.png'
import pickup from '../assets/photos/pickup.png'
import { useState } from 'react'
import heart from '../assets/icons/heartx.png'
import gift from '../assets/icons/gift.png'
import office from '../assets/icons/office.png'
import returnD from '../assets/icons/return.png'


const MoreProductDetails = ({product}) => {
    const [cartCount, setCartCount] = useState(0)

    const handleCartIncrementCount = () => {
        setCartCount(prev => prev + 1)
    }

    const handleCartDecrementCount = () => {
        setCartCount(prev => prev - 1)
    }

    return (
        <div className='p-3  w-full max-xl:hidden '>
            <div className='bg-gray-50 flex flex-col  divide-y divide-gray-400 gap-4'>
                <div className=''>
                    <p className='font-bold text-2xl'>${product.price}</p>
                    <span className='text-xs'>Price when purchased online</span>
                    <div className='text-xs flex gap-5'>
                        <div><span>Free shipping</span></div>
                        <div><span>Free 30-day return</span></div>
                    </div>
                    {cartCount == 0 && (
                        <button onClick={handleCartIncrementCount} className='bg-blue-700 text-white font-bold w-full rounded-full text-sm hover:bg-blue-800 h-9'>Add to Cart</button>
                    )}
                    {cartCount > 0 && (
                        <button className='bg-blue-700 text-white font-bold w-full rounded-full text-sm
                  h-9 flex justify-between px-5 items-center'>
                            <button className='text-3xl hover:bg-black px-1' onClick={handleCartDecrementCount}>-</button><span>{cartCount} added</span>
                            <button className='text-xl hover:bg-black px-1' onClick={handleCartIncrementCount}>+</button></button>

                    )}
                </div>

                <div className='pt-2'>
                    <span className='font-bold text-sm'>How you'll get this item:</span>
                    <div className='flex gap-2'>
                        <button className='border-2 border-gray-400 size-24 flex flex-col items-center justify-center gap-1 rounded-md  focus:border-black'
                        disabled={!product.transportation.available_methods.shipping}>
                            <img src={shipping} alt="random" className='object-contain w-7' />
                            <span className='font-bold text-sm'>Shipping</span>
                            <span className='text-xs'>Arrives Jun 15</span>
                        </button>
                        <button className='border-2 border-gray-400 size-24 flex flex-col items-center justify-center gap-1 rounded-md  focus:border-black'
                        disabled={!product.transportation.available_methods.pickup}>
                            <img src={pickup} alt="random" className='object-contain w-7' />
                            <span className='font-bold text-sm'>Pickup</span>
                            <span className='text-xs'>Arrives Jun 15</span>
                        </button>
                        <button className='border-2 border-gray-400 size-24 flex flex-col items-center justify-center gap-1 rounded-md focus:border-black'
                        disabled={!product.transportation.available_methods.delivery}>
                            <img src={delivery} alt="random" className='object-contain w-7' />
                            <span className='font-bold text-sm'>Delivery</span>
                            <span className='text-xs'>Arrives Jun 15</span>
                        </button>
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                        <span className='text-xs'><b>Sacramento, 95829</b> <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Change</a></span>
                        <span className='text-xs'>Arrives by <b>Tue, Jun 17</b> <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>More options</a></span>
                    </div>
                </div>

                <div className='pt-3 flex flex-col gap-1'>
                    <div className='flex gap-4'><img src={office} className='size-4 items-center' />
                        <div className='flex flex-col gap-2'>
                            <span className='text-xs'>Sold and shipped by <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>{product.transportation.shipper}</a></span>
                            <div className='text-xs flex gap-1'>
                                <img src='#' /><span>(4.4)</span>
                                <span className='ml-5'>475 sellers reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'><img src={returnD} className='size-5' /><span className='text-xs'><bold>Free 60-day returns</bold> <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Details</a></span> </div>
                </div>


                <div className='flex justify-between pt-4 text-xs'>
                    <div className='flex gap-4 items-center'>
                        <img src={heart} className='size-4' />
                        <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Add to List</a>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img src={gift} className='size-5' />
                        <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Add to registry</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreProductDetails