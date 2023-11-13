import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import HeroSlider from 'react-slick';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { FaPlayCircle } from 'react-icons/fa';
import { PiMonitorPlayFill } from 'react-icons/pi';
import { BsDot } from 'react-icons/bs';
import StreamData from "../../../config/StreamData.config";
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}
         className="absolute z-10 lg:top-48 md:top-40 left-0 bg-navColor2-800 bg-opacity-50 rounded-r-md pl-3 pr-1 py-1">
      <MdNavigateBefore
        className="text-white text-4xl "
      />
    </div>
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}
         className="absolute z-10 lg:top-48 md:top-40 right-0 bg-navColor2-800 bg-opacity-50 rounded-l-md pr-3 pl-1 py-1">
    <MdNavigateNext
      className="text-white text-4xl"
    />
    </div>
  );
}
const StreamHero = () => {
  const settingsLG = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
}
const settings = {
    arrows: true,
    dots: false, 
    autoplay: true, 
    // centerPadding: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    
}
    return(
        <>
          
            {/* For Medium and Large screens */}
            <div className="hidden md:block">
            <HeroSlider {...settingsLG}>
            {
              StreamData.map((sdata) => (
                <div>
                
                <div className="relative w-full lg:h-full md:h-96">
                  <div className="absolute w-full lg:h-full md:h-96"
                      style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
                  />
                  <div className="w-full h-96" style={{ height: "30rem"}}>
                    <img src={sdata.src1}
                      alt="poster"
                      className="w-full md:h-4/5 lg:h-full  object-cover"
                    />  
                  </div>
                  <div className=" absolute flex  w-full lg:h-96 md:h-72 top-10">
                    <div className="absolute container mx-auto flex w-full h-full ">
                      <img src={sdata.src1}
                        alt="poster"
                        className="h-full lg:w-64 md:w-56 rounded-lg lg:ml-24 md:ml-16 ml-32"
                      />
                      <div className="flex flex-col text-white pl-8 lg:pt-8 md:pt-4">
                        <div className="flex gap-2 bg-gray-800 w-fit rounded-full pr-2 ">
                          <FaPlayCircle className="text-red-600 mt-1"/>
                          <span className="font-semibold">PREMIERE</span>
                        </div>
                        <span className="lg:mt-2 md:mt-1">Brand new releases every Friday</span>
                        <span className="lg:text-3xl md:text-2xl font-bold lg:py-8 md:py-4">{ sdata.movieName }</span>
                        <div className="flex">
                          <span>{ sdata.duration }</span>
                          <BsDot className="mt-1 mb-1"/>
                          <span>{ sdata.genre }</span>
                          <BsDot className="mt-1 mb-1"/>
                          <span>{ sdata.age }</span>
                        </div>
                        <span className="lg:pt-4 md:pt-2">{ sdata.language }</span>
                        <span className="lg:pt-4 md:pt-2 w-5/6" >{ sdata.about }</span>
                      </div>
                    </div>
                    <div className="absolute flex right-10 ml-8 flex bg-navColor2-800 text-white bg-opacity-60 lg:gap-3 md:gap-2 px-3 py-3 rounded-md">
                      <PiMonitorPlayFill className="lg:text-3xl md:text-2xl md:mt-1 lg:mt-0"/>
                      <span className="lg:text-xl md:text-lg">Video Library</span>
                      <MdNavigateNext className="text-white lg:text-3xl md:text-2xl md:mt-1 lg:mt-0"/>
                    </div>
                  </div> 
                </div>
                </div>    
              ))
            }
            </HeroSlider>
            </div>

            {/* For Small screen */}
            
            <div className="relative md:hidden bg-gray-800 py-4">
            <span className="text-white font-semibold text-2xl w-full px-3">SPOTLIGHT</span>
              <HeroSlider {...settings}>
              {
              StreamData.map((sdata) => (

                  <div className="pt-4 px-4 pb-3">
                    <img src={sdata.src1}
                      alt="poster"
                      className="rounded-lg"
                    />  
                  </div>
                     
              ))
            }
              </HeroSlider>
            </div>
        </>
    )
}

export default StreamHero;