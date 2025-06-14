import React from 'react';
import photo from '../assets/photos/wassup.png';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-3 p-3 px-5 pt-40 lg:pt-32">
      <div className="flex flex-col gap-4 col-span-1">
        <div className="aspect-video"> {/* 16:9 */}
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
        <div className="aspect-[3/4]"> {/* 3:4 */}
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
        <div className="aspect-[5/5.7]"> {/* Custom ratio */}
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-4">
        <div className="aspect-[5/2]"> {/* 5:2 */}
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square"> {/* 1:1 */}
            <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
          </div>
          <div className="aspect-square"> {/* 1:1 */}
            <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
          </div>
        </div>
        <div className="aspect-[15/10]">
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-3 col-span-1">
        <div className="aspect-video">
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
        <div className="aspect-square"> 
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
        <div className="aspect-[3/5.9]">
          <img className="rounded-md w-full h-full object-cover" src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;