import emptyCart from '../assets/icons/empty-cart.svg'

const CartWhenNoItem = () => {
    return (
        <div className='flex items-center flex-col gap-5'>
            <div>
                <img src={emptyCart} alt='empty cart' />
            </div>
            <div className='flex flex-col items-center'>
                <span className='font-bold text-md'>Time to start shopping!</span>
                <span className='font-bold text-sm'>Your cart is empty</span>
            </div>
            <span className='text-sm text-gray-500'>Fill it up with savings from these popular departments.</span>
            <div className='flex gap-4 justify-center items-center flex-wrap'>
                <button className='ring-1 ring-black hover:ring-2 rounded-full p-[6px]  text-xs font-bold'>Shop Grocery</button>
                <button className='ring-1 ring-black hover:ring-2 rounded-full p-[6px] text-xs font-bold'>Shop Electronics</button>
                <button className='ring-1 ring-black hover:ring-2 rounded-full p-[6px] text-xs font-bold'>Shop Toys</button>
                <button className='ring-1 ring-black hover:ring-2 rounded-full p-[6px] text-xs font-bold'>Shop Home</button>
            </div>


        </div>
    )
}

export default CartWhenNoItem