import { Helmet } from "react-helmet"
import CartWhenItem from "../Components/CartWhenItem"
import CartWhenNoItem from "../Components/CartWhenNoItem"


const Cart = () => {
  return (
    <>
    <Helmet><title>Cart</title></Helmet>
    <div className='mt-[180px] mx-5 mb-[400px] flex flex-col gap-10 lg:px-40'>
        <div className='text-xl'><span className='font-bold'>Cart</span> <span>(0 items)</span></div>
        <CartWhenItem/>
    </div>
    </>
  )
}

export default Cart