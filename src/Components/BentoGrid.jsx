import pictures from '../Constants/picture.json';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-3 p-3 px-5 pt-40 lg:pt-32"> 
      
      
      <div className="grid grid-rows-3 gap-4 col-span-1">
        <div className="row-span-1">
          <img className="rounded-md w-full h-full object-cover"loading="lazy"  src={pictures[0]} alt="" />
        </div>
        <div className="row-span-1">
          <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[1]} alt="" />
        </div>
        <div className="row-span-1"> 
          <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[2]} alt="" />
        </div>
      </div>

      {/* Center column (2 cols wide) */}
      <div className="col-span-2 grid grid-rows-3 gap-4">
        <div className="row-span-1">
          <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[3]} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-4 row-span-1">
          <div>
            <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[4]} alt="" />
          </div>
          <div> 
            <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[5]} alt="" />
          </div>
        </div>
        <div className="row-span-1">
          <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[6]} alt="" />
        </div>
      </div>

      {/* Right column */}
      <div className="grid grid-rows-3 gap-4 col-span-1">
        <div className="row-span-1">
          <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[7]} alt="" />
        </div>
        <div className="row-span-1"> 
          <img className="rounded-md w-full h-full object-cover" loading="lazy"  src={pictures[8]} alt="" />
        </div>
        <div className="row-span-1">
          <img className="rounded-md w-full h-full object-cover"  loading="lazy" src={pictures[9]} alt="" />
        </div>
      </div>

    </div>
  );
};

export default BentoGrid;
