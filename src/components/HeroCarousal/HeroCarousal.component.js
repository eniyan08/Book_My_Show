// react slick npm website 
import React from 'react'
import HeroSlider from "react-slick";
// Component
import {NextArrow, PrevArrow} from "./Arrows.component.js"
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settingsLG = {
        // arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <GrNext />,
        prevArrow: <GrPrevious />
    }
    const settings = {
        arrows: true,
        dots: true,  
        // centerPadding: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const images = [
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg",
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1694155301901_offeroftheweekdesktop.jpg",
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1694001640639_playcardwebbannerv2.jpg",
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1693805241270_lollapaloozadesktop.jpg",
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1693914698648_jawantamildesktop.jpg"
    ]
    return (
        <>
        <div className='lg:hidden'>
          <HeroSlider {...settings}>
          {
            images.map((image) => (
                <div className="w-full h-60 sm:60  py-3">
                    <img src={image} alt="testing" className='w-full h-full rounded-md'/>
                </div>
            ))
          }
        </HeroSlider>
        </div>

        <div className='hidden lg:block'>  
        {/* this is for large screen */}
          <HeroSlider {...settingsLG}>
          {
            images.map((image) => (
                <div className="w-full h-80 px-2 py-3">
                    <img src={image} alt="testing" className='w-full h-full rounded-md'/>
                </div>
            ))
          }
        </HeroSlider>
        </div>

        
        </>
      );
}

export default HeroCarousal