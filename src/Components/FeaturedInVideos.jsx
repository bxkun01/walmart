import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import butterfly from "../assets/images/butterfly.png";
import video from "../assets/videos/video.mp4";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 5 },
  xl: { breakpoint: { max: 1536, min: 1280 }, items: 4 },
  lg: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
  md: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  sm: { breakpoint: { max: 768, min: 0 }, items: 2 },
};

const HoverVideo = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <video
      ref={videoRef}
      src={video}
      className="w-full aspect-[9/16] object-cover cursor-pointer"
      loop
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

const FeaturedInVideos = () => {
  return (
    <div className="px-5 pt-5">
      <div className="flex flex-col pb-3">
        <span className="text-lg font-bold">Featured in videos</span>
        <span className="text-xs text-gray-600">See what creators are sharing</span>
      </div>

      <Carousel responsive={responsive} itemClass="flex justify-center px-2">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              className="shadow-md w-full max-w-[320px] md:max-w-[360px] flex flex-col gap-2 pb-3"
              key={i}
            >
              <HoverVideo />
              <div className="pl-4 flex gap-3 items-center">
                <img src={butterfly} className="object-contain w-16" alt="" />
                <div className="flex flex-col gap-1 text-xs">
                  <span className="text-lg font-bold">$70.99</span>
                  <span>East point relax dret</span>
                  <span>game, 5ft tall sturdy</span>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedInVideos;
