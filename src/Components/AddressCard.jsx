import pickup from '../assets/photos/pickup.png'
import shipping from '../assets/photos/shipping.png'
import delivery from '../assets/photos/delivery.png'


const AddressCard = ({func}) => {

 


    return (
        <div className='absolute -bottom-[314px] z-[10000] bg-blue-700 w-full  text-sm font-bold flex flex-col gap-3 p-5'>

            <div className='flex gap-5 justify-center text-xs'>

                <div className='flex flex-col gap-2 items-center'>
                    <img src={pickup} className='w-12' alt="" />
                    <span>Pickup</span>
                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <img src={shipping} className='w-12' alt="" />
                    <span>Shipping</span>
                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <img src={delivery} className='w-12' alt="" />
                    <span>Delivery</span>
                </div>
            </div>

            <div className='text-[11px] flex flex-col  items-center bg-white rounded-md p-3'>
                <span className=' font-bold text-black'>Add an adddress for shipping and delivery</span>
                <span className='text-gray-600'>Sacremento, CA 95829</span>
                <button className=' p-2 rounded-full bg-blue-700 w-full'>Add Address</button>

            </div>
            <div className='text-[11px] flex flex-col  items-center bg-white rounded-md p-3'>
                <span className=' font-bold text-black'>Sacremento Supercenter</span>
                <span className='text-gray-400'>Sacremento, CA 95829</span>


            </div>




        </div>
    )
}

export default AddressCard