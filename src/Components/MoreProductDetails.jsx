import delivery from '../assets/photos/delivery.png'
import shipping from '../assets/photos/shipping.png'
import pickup from '../assets/photos/pickup.png'

const MoreProductDetails = () => {
    return (
        <div className='bg-gray-50 flex flex-col p-3 divide-y divide-gray-400 gap-4 h-full sticky right-0 top-10'>
            <div className=''>
                <p className='font-bold text-2xl'>$13.39</p>
                <span className='text-xs'>Price when purchased online</span>
                <div className='text-xs flex gap-5'>
                    <div><span>Free shipping</span></div>
                    <div><span>Free 30-day return</span></div>
                </div>
                <button className='bg-blue-700 text-white font-bold w-full rounded-full text-sm hover:bg-blue-800 h-9'>Add to cart</button>
            </div>

            <div className='pt-2'>
                <span className='font-bold text-sm'>How you'll get this item:</span>
                <div className='flex gap-2'>
                    <button className='border-2 border-gray-400 size-24 flex flex-col items-center justify-center gap-1 rounded-md  focus:border-black'>
                        <img src={shipping} alt="random" className='object-contain w-7' />
                        <span className='font-bold text-sm'>Shipping</span>
                        <span className='text-xs'>Arrives Jun 15</span>
                    </button>
                    <button className='border-2 border-gray-400 size-24 flex flex-col items-center justify-center gap-1 rounded-md  focus:border-black'>
                        <img src={pickup} alt="random" className='object-contain w-7' />
                        <span className='font-bold text-sm'>Pickup</span>
                        <span className='text-xs'>Arrives Jun 15</span>
                    </button>
                    <button className='border-2 border-gray-400 size-24 flex flex-col items-center justify-center gap-1 rounded-md focus:border-black'>
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
                <div className='flex gap-4'><img src='#' />
                    <div className='flex flex-col gap-2'>
                        <span className='text-xs'>Sold and shipped by <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Half IT</a></span>
                        <div className='text-xs flex gap-1'>
                            <img src='#' /><span>(4.4)</span>
                            <span className='ml-5'>475 sellers reviews</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'><img src='#' /><span className='text-xs'><bold>Free 60-day returns</bold> <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Details</a></span> </div>
            </div>


            <div className='flex justify-between pt-4 text-xs'>
                <div className='flex gap-4'>
                    <img src='#' />
                    <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Add to List</a>
                </div>
                <div className='flex gap-4'>
                    <img src='#' />
                    <a href='#' className='underline hover:no-underline
               hover:text-blue-600'>Add to registry</a>
                </div>
            </div>
        </div>
    )
}

export default MoreProductDetails