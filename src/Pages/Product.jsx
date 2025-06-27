import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import AboutItem from '../Components/AboutItem';
import MoreProductDetails from '../Components/MoreProductDetails';
import RatingnReview from '../Components/RatingnReview';

import heart from '../assets/icons/heartx.png';
import upload from '../assets/icons/upload.png';
import zoomIn from '../assets/icons/zoom-in.png';

import productData from '../Constants/product.json';
import ReactStars from "react-rating-stars-component";
import PageNotFound from '../Components/PageNotFound';
import { Helmet } from 'react-helmet';

const Product = () => {
  const { id } = useParams();
  const index = parseInt(id);
  const product = productData[index];

  if (!product) {
    return (
      <PageNotFound />


    );
  }

 

  const [currentImg, setCurrentImg] = useState(product.pictures[0].src);


  return (
    <>
     <Helmet>
    <title>{product.name}</title>
  </Helmet>
    <div className='flex w-full h-full mt-[120px]'>
      <div className='flex p-5 flex-col gap-10'>
        <div className='flex gap-6'>
          <div className='flex gap-2'>

            <div className='flex flex-col w-20 gap-2'>
              {product.pictures.map((picture, i) => (
                <img
                  key={i}
                  className='rounded-md w-[75px] h-[75px] object-cover cursor-pointer'
                  src={picture.src}
                  alt={`Image ${i + 1}`}
                  onMouseEnter={() => setCurrentImg(picture.src)}
                />
              ))}
            </div>

            <div className='flex w-[510px] relative'>
              <img
                className='w-full h-auto rounded-lg hover:ring-black hover:ring-1 object-cover'
                src={currentImg}
                alt="Main product"
              />
              <div className='absolute top-5 right-5 flex flex-col gap-3'>
                <span className='rounded-full hover:ring-2 hover:ring-black cursor-pointer bg-white w-8 h-8 flex justify-center items-center'>
                  <img src={heart} alt="heart icon" className='w-5' />
                </span>
                <span className='rounded-full hover:ring-2 hover:ring-black cursor-pointer bg-white w-8 h-8 flex justify-center items-center'>
                  <img src={upload} alt="upload icon" className='w-5' />
                </span>
                <span className='rounded-full hover:ring-2 hover:ring-black cursor-pointer bg-white w-8 h-8 flex justify-center items-center'>
                  <img src={zoomIn} alt="zoom icon" className='w-5' />
                </span>
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className='flex flex-col divide-y divide-gray-300'>
            <div className='flex flex-col gap-3 pb-5'>
              <a href='#' className='text-xs underline text-slate-600 hover:no-underline hover:text-blue-600'>
                {product.transportation?.shipper}
              </a>
              <p className='font-semibold text-[15px]'>{product.name}</p>
              <div className='flex gap-1 items-center'>
                <ReactStars
                  count={5}
                  value={product.rating}
                  size={24}
                  edit={false}
                  isHalf={true}
                  activeColor="#ffd700"
                />
                <span className='text-xs text-slate-400'>
                  {product.rating ? `(${product.rating} stars)` : '(No rating yet)'}
                </span>
              </div>
            </div>

            <div className='py-4 flex flex-col gap-2 items-start'>
              <p className='font-bold text-sm'>About this item</p>
              <p className='text-xs text-gray-700'>{product.about}</p>
              <button className='text-xs underline text-gray-600 hover:no-underline hover:text-blue-700'>
                View full item details
              </button>
            </div>

            <div className='py-4 flex flex-col gap-2'>
              <p className='font-bold text-sm'>At a glance</p>
              <div className='grid grid-cols-3 gap-2 max-lg:grid-cols-2 overflow-clip'>
                {Array(5).fill(0).map((_, index) => (
                  <div
                    key={index}
                    className='flex flex-col justify-center items-center bg-blue-100 w-36 h-16 rounded-md'
                  >
                    <span className='font-bold text-xs'>Brand</span>
                    <span className='text-xs capitalize'>Unknown</span>
                  </div>
                ))}
              </div>
              <a href='#' className='text-xs underline text-gray-600 hover:no-underline hover:text-blue-700'>
                View all specifications
              </a>
            </div>
          </div>
        </div>

        <AboutItem detail={product.aboutSections} />
        <RatingnReview />
      </div>

      <MoreProductDetails product={product} />
    </div>
    </>
  );
};

export default Product;
