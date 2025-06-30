import LoginPrompt from './LoginPrompt';
import heart from '../assets/icons/heart.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import butterfly from '../assets/images/butterfly.png'
import categories from '../Constants/category.json'
import Button from '../Buttons/Button';
import product from '../Constants/product.json'
import { Link } from 'react-router-dom';

const Contents = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 20
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 11
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};
const less = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

  return (

    <div className='px-6 flex flex-col gap-3'>
      <LoginPrompt />
      <div className='w-full grid grid-cols-2 gap-5'>
        <div>
          <img className='object-cover w-full h-28 sm:h-40 md:h-52 lg:h-96' src={butterfly} alt='shoe' />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <span className='font-bold text-xl'>Opt for Express Deilvery*</span>
              <span className='text-xs underline cursor-pointer'>view all</span>
            </div>
            <span className='text-xs text-gray-400'>Cookout & hosting picks in a hurry </span>
          </div>

          <div className='flex justify-evenly gap-4 overflow-x-auto whitespace-nowrap lg:whitespace-normal scrollbar-hide  p-4 '>
            {Array(3).fill(0).map((_,i)=>
            <div key={i}>
              <img src={butterfly} className='size-36' />
              <div className='flex flex-col items-start gap-2'>
                <span className='text-green-600 font-bold'>Now $2.63</span>
                <span className='text-sm text-wrap'>Nike black and white combo shoe in the what the hell </span>
                <button className='ring-1 ring-black px-3 py-1 rounded-full hover:ring-2 text-sm font-bold'>+ Add</button>
              </div>
            </div>)}


          </div>
        </div>
      </div>


      {/*  Get it all right here */}
      <div className="space-y-5">
        <div className='flex justify-between'>
          <h1 className="font-bold text-md">Get it all right here</h1>
          <span className='text-xs underline cursor-pointer'>view all</span>
        </div>

        <div>
          <Carousel infinite={true} responsive={responsive} itemClass="px-2">
          {categories.map((category)=>
            
            <div
              key={category.id}
              className="rounded-md flex-shrink-0 flex flex-col items-center gap-4 w-24 cursor-pointer "
            >
              <img className="w-full" draggable="false" src={category.image_url} />
              <span className="text-xs whitespace-nowrap">{category.category}</span>
            </div>
            
          )}
          </Carousel>
        </div>
      </div>

      {/* summer special */}
      <div className="space-y-5 ">
        <div className='flex justify-between'>
          <h1 className="font-bold text-md">Summer party must-haves</h1>
          <span className='text-xs underline cursor-pointer'>view all</span>
        </div>

        <div>
          <Carousel responsive={less} itemClass='px-2'>
          {Array(15).fill(0).map((_, i) => (
            
            <div key={i}
              className="rounded-md flex-shrink-0 h-full flex flex-col items-start gap-4  cursor-pointer relative "
            >
              <img className="object-cover" src={butterfly} draggable="false" alt={`Grocery ${i + 1}`} />
              <div className='absolute top-2 right-2 bg-white rounded-full '><img src={heart} className='size-7'/></div>
              <div className='flex flex-col items-start gap-2 pb-1'>
                <span className=' font-bold'>Now $203</span>
                <span className='text-sm text-wrap'>Premium golden multiple butterfly</span>
                <Button name='+ Add'/>
              </div>
            </div>
          ))}
          </Carousel>
        </div>
      </div>


      {/* available items */}
       <div className="space-y-5 ">
        <div className='flex justify-between'>
          <h1 className="font-bold text-md">Products available</h1>
          <span className='text-xs underline cursor-pointer'>view all</span>
        </div>

        <div>
          <Carousel responsive={less} itemClass='px-2'>
          {product.map((item, i) => (
            <Link key={i} to={`/product/${i}`}>
            <div
              
              className="rounded-md flex-shrink-0 h-full flex flex-col items-start gap-4   cursor-pointer relative "
            >
              <img className="object-cover size-[240px]" src={item.pictures[0].src} draggable="false" alt={`Grocery ${i}`} />
              <div className='absolute top-2 right-2 bg-white rounded-full '><img src={heart} className='size-7'/></div>
              <div className='flex flex-col items-start gap-2 pb-1'>
                <span className=' font-bold'>${item.price}</span>
                <span className='text-sm text-wrap'>{item.name}</span>
                <Button name='+ Add' item={item}/>
              </div>
            </div>
            </Link>
          ))}
          </Carousel>
        </div>
      </div>


      

    </div>










  );
};

export default Contents;
