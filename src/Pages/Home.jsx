import React from 'react'
import BentoGrid from '../Components/BentoGrid'
import Products from '../Components/Products'
import FeaturedInVideos from '../Components/FeaturedInVideos'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
    <Helmet><title>Walmart | Save money</title></Helmet>
      <main className='mb-14 border border-b-gray-400 pb-5'>
        <BentoGrid />

        <Products />
        <FeaturedInVideos />
      </main></>


  )
}

export default Home