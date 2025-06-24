import { useState } from "react"
import home from '../assets/photos/home.png'

const CartItem = () => {
    const [cartCount, setCartCount] = useState(0)

    const handleCartIncrementCount = () => {

        setCartCount(prev => prev + 1)
    }

    const handleCartDecrementCount = () => {
        if (cartCount > 0) {
            setCartCount(prev => prev - 1)

        }
    }
    return (
        <div className='p-4 text-sm text-gray-600 flex flex-col gap-2 w-full'>
            <div className='flex flex-col gap-2'>
                <span>Sold and shipped by ReinHart</span>
                <span className='text-blue-700 text-xs'>Free shipping</span>
            </div>
            <div className='flex gap-5 justify-evenly items-center'>
                <div className='flex gap-2 items-center overflow-clip '>
                    <img src={home} alt="" className='object-contain size-28' />
                    <div className='flex flex-col gap-2'>
                        <span className='flex-wrap w-[400px]'>Home of the Dead from the wonderland the world is the
                            kldsjfkldsjf dsfkldsj flskdf jdslkf jsdlfks djflkds fjsdlkf jdslfkdsj flkdssfj sdffsdlfjldskfjsdlkfjdsklvlkfjdslfkdsjfkldfsdklfjdslkfjdsk
                        </span>


                        <div className='flex  gap-5 text-green-600 sm:hidden items-center'>
                            <span className='text-lg font-bold'>$44,000</span>
                            <span className='line-through text-gray-500'>$50</span>
                            <div className='whitespace-nowrap'><span className='bg-green-100 text-xs p-1'>You save</span> $6 </div>
                        </div>






                        <span className='text-xs'>Free 30 days return</span>
                    </div>
                </div>


                <div className='flex flex-col gap-2 text-green-600 max-sm:hidden'>
                    <span className='text-lg font-bold'>$44,000</span>
                    <span className='line-through text-gray-500'>$50</span>
                    <div className='whitespace-nowrap'><span className='bg-green-100 text-xs p-1'>You save</span> $6 </div>
                </div>
            </div>

            <div className='flex gap-10 justify-end items-center'>
                <span className='underline text-xs'>Remove</span>
                <span className='underline text-xs'>Save for later</span>
                <div className='w-20 flex justify-center gap-5 text-lg ring-1  ring-black rounded-full'><button onClick={handleCartIncrementCount}>+</button> {cartCount} <button onClick={handleCartDecrementCount}>-</button></div>
            </div>

        </div>

    )
}

export default CartItem