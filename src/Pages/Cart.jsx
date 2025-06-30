import { Helmet } from "react-helmet"
import CartWhenItem from "../Components/CartWhenItem"
import CartWhenNoItem from "../Components/CartWhenNoItem"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Helmet><title>Cart</title></Helmet>

      <div className='mt-[180px] mx-5 mb-[400px] flex flex-col gap-10 lg:px-40'>
        {cart.length !== 0 ? (
          <>
            <div className='text-xl'>
              <span className='font-bold'>Cart</span> <span>({cart.length} item{cart.length !== 1 ? 's' : ''})</span>
            </div>
            <CartWhenItem cart={cart} />
          </>
        ) : (
          <CartWhenNoItem />
        )}
      </div>
    </>
  )
}

export default Cart
