import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const Button = ({ name, item }) => {
  const {setCart} =useContext(CartContext);
  return (
    <button className='ring-1 ring-black px-3 py-1 rounded-full hover:ring-2 text-sm font-bold'
      onClick={(e) => {
        e.preventDefault();
        setCart(prevCart => [...prevCart, item]);

      }}>{name}</button>
  )
}

export default Button