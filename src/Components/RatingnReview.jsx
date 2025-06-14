import butterfly from '../assets/images/butterfly.png'
import user from '../assets/icons/user.png'
import apo from '../assets/photos/apothecary.png'
import Reviews from './Reviews'

const RatingnReview = () => {
    return (
        <div className='flex gap-4 flex-col divide-y divide-gray-400 text-xs '>
            <div className='flex gap-'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-bold'>4.8 out of 5</h1>
                    <div className='flex gap-3'>
                        <img src="#" alt="re" />
                        <span>25 ratings</span>
                        <span>|</span>
                        <span className='underline'>17 reviews</span>
                    </div>
                    <span className="font-bold">How item is calculated</span>
                    <button className='font-bold p-1 ring-1 ring-black rounded-full hover:ring-2'>View all reviews</button>
                </div>
            </div>

            <div className='pt-4 flex flex-col gap-5'>
                <span className='font-bold text-sm'>Customer images</span>
                <div className='grid grid-cols-6 gap-6'>
                    <img src={butterfly} alt="" className='object-contain' />
                    <img src={butterfly} alt="" className='object-contain' />
                    <img src={butterfly} alt="" className='object-contain' />
                    <img src={butterfly} alt="" className='object-contain' />
                    <img src={butterfly} alt="" className='object-contain' />
                    <img src={apo} alt="" className='object-contain' />
                </div>
                <div className='flex gap-5'>
                    <button className=' rounded-full p-2 text-sm bg-gray-100 hover:bg-gray-200'>All filters</button>
                    <button className=' rounded-full p-2 text-sm bg-gray-100 hover:bg-gray-200'>Star rating</button>
                    <button className=' rounded-full p-2 text-sm bg-gray-100 hover:bg-gray-200'>Verified purchase only</button>

                </div>
                <div className='pt-4 flex gap-5'>
                    {Array(6).fill(0).map(() => <button className=' rounded-sm p-2 ring-1 ring-gray-500 hover:ring-2 text-sm'>adjustment</button>)}
                    <button className=' rounded-sm p-2 ring-1 ring-gray-500 hover:ring-2 text-sm'>fine</button>
                </div>
                <Reviews/>
            </div>




        </div>
    )
}

export default RatingnReview