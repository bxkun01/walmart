import React from 'react';
import photo from '../assets/images/photo.jpg';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-6 gap-3 p-3 px-5 pt-40 lg:pt-32">
      <div className="flex flex-col gap-3 col-span-1">
        <img className="rounded-md object-cover h-20 w-full" src={photo} alt="" />
        <img className="rounded-md object-cover h-44 w-full " src={photo} alt="" />
        <img className="rounded-md object-cover h-20 w-full" src={photo} alt="" />
      </div>

      <div className="col-span-4 flex flex-col gap-3">
        <img className="rounded-md object-cover h-40" src={photo} alt="" />

        <div className="grid grid-cols-2 gap-3">
          <img className="rounded-md object-cover h-24 w-full " src={photo} alt="" />
          <img className="rounded-md object-cover h-24 w-full " src={photo} alt="" />
        </div>

        <img className="rounded-md object-cover h-20 w-full" src={photo} alt="" />
      </div>

      <div className="flex flex-col gap-3 col-span-1">
        <img className="rounded-md object-cover h-20 w-full" src={photo} alt="" />
        <img className="rounded-md object-cover h-20 w-full" src={photo} alt="" />
        <img className="rounded-md object-cover h-44 w-full" src={photo} alt="" />
      </div>
    </div>
  );
};

export default BentoGrid;
