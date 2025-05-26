import React from 'react'
import BentoGrid from '../Components/BentoGrid'
import Products from  '../Components/Products'

const Home = () => {
  return (
    <main className='mb-14 border border-b-gray-400 pb-5'>
    <BentoGrid/>

    <Products/>
    </main>
  )
}

export default Home