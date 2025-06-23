import walmart from '/src/assets/icons/spark-icon.svg'
import phone from '/src/assets/icons/image.png'
import hamburger from '/src/assets/icons/hamburger.svg'
import Department from '../Buttons/Department'
import Services from '../Buttons/Services'
import cart from '../assets/icons/shopping-cart.png'
import heart from '../assets/icons/heart.png'
import login from '../assets/icons/login.png'
import Search from './Search'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import chevronUp from '../assets/icons/chevron-up.png'
import chevronDown from '../assets/icons/chevron-down.png'

const Nav = ({ toggleSidebar }) => {
  const items = ['Get it fast', 'My Items', 'Memorial', 'Dinner Solutions', 'Pharmacy Delivery',
    "Father's Day", 'Graduation', 'New Arrivals', 'Auto Services', 'Only At Walmart ', 'Registry', 'Walmart +']



  const [openLocationCard, setLocationCard] = useState(false)
  const [count, setCount] = useState(0)

  function handleLocationCart() {
    setLocationCard(() => !openLocationCard)
  }

  const handleCartCount = (value) => {
    setCount(value)
  }



  return (
    <>

      <header className='flex flex-col fixed top-0 w-full z-[9999]'>

        <nav className="bg-blue-600 h-20 flex gap-6 px-4 py-9 items-center text-white">

          <img
            src={hamburger}
            alt='hamburger'
            className='w-5 hidden max-sm:max-lg:flex cursor-pointer'
            onClick={toggleSidebar}
          />
          <Link to='/'><img src={walmart} alt="icon" className='w-7' /></Link>

          <div className='flex p-1 gap-3 items-center bg-black bg-opacity-45 rounded-full hover:bg-opacity-65 max-sm:hidden max-lg:hidden px-2'>
            <img src={phone} alt="phone-image" className='w-8' />
            <div className='flex items-center'>
              <div className='flex flex-col p-1'>
                <span className='font-bold text-sm'>How do you want your items?</span>
                <span className='text-xs'>Sacramento, 95829 .Sacremento Supe...</span>
              </div>
              <button className='text-2xl' onClick={handleLocationCart}><img src={openLocationCard ? chevronUp : chevronDown} className='object-contain w-5' /></button>
            </div>
          </div>


          <Search />

          <div className='flex gap-7'>
            <div className='hover:bg-black hover:bg-opacity-55 p-2 rounded-full items-center hidden sm:flex cursor-pointer gap-1 '>
              <img src={heart} alt='heart-icon' className='size-8' />
              <div className='flex flex-col'>
                <span className='text-xs'>Reorder</span><span className='font-bold text-sm'>My items</span>
              </div>
            </div>

            <Link to='/login'>
              <div className='hover:bg-black hover:bg-opacity-55 p-2 rounded-full items-center hidden sm:flex cursor-pointer gap-2'>
                <img src={login} alt='login-icon' className='size-4' />
                <div className='flex flex-col'>
                  <span className='text-xs'>Sign In</span><span className='font-bold text-sm'>Account</span>
                </div>
              </div>
            </Link>

            <Link to='/cart'>
              <div className='hover:bg-black hover:bg-opacity-55 p-2 rounded-full cursor-pointer space-y-1 relative'>
                <div className='relative'>
                  <img src={cart} className='size-5' />
                  <span className='absolute -top-2 right-0 bg-yellow-400 text-black size-4 flex items-center justify-center text-sm font-bold rounded-full'>0</span>
                </div>
                <p className='text-xs'>$0.22</p>
              </div>
            </Link>
          </div>

        </nav>

        <div className='p-1 items-center w-full bg-blue-600 border border-transparent border-t-white px-4 text-white flex justify-between lg:hidden'>
          <div className='flex gap-2 items-center'>
            <img src={phone} alt="phone-image" className='w-6' />
            <span className='text-xs font-bold'>Pick up or Delivery?</span>
          </div>
          <span className='text-xs'>Sacramento,95829</span>
        </div>

        <div className='bg-blue-50 flex px-6 text-xs text-blue-800 space-x-4  lg:py-1 '>
          <div className='flex gap-5 items-center text-blue-900 font-bold text-sm '>
            <Department />
            <Services />
            <span>|</span>
          </div>
          <ul className='flex gap-5 mx-5 items-center overflow-x-auto whitespace-nowrap lg:overflow-visible relative scrollbar-hide '>
            {items.map((item, index) => (
              <li className='list-none hover:underline cursor-pointer' key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Nav
