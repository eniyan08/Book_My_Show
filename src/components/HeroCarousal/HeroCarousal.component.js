// react slick npm website 
import React from 'react'
import HeroSlider from "react-slick";
// hooks
import {useState, useEffect} from 'react'
// axios
// import axios from 'axios'
// Component
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}
         className="absolute z-10 2xl:top-36 xl:top-36 lg:top-24 md:top-24 sm:top-24 left-0 bg-navColor2-800 bg-opacity-50 rounded-r-md md:pl-2 2xl:pl-3 pl-1 pr-1 py-1">
      <MdNavigateBefore
        className="text-white text-4xl w-full h-full"
      />
    </div>
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}
         className="absolute z-10 2xl:top-36 xl:top-36 lg:top-24 md:top-24 sm:top-24 right-0 bg-navColor2-800 bg-opacity-50 rounded-l-md md:pr-2 2xl:pr-3 pr-1 pl-1 py-1">
    <MdNavigateNext
      className="text-white text-4xl"
    />  
    </div>
  );
}

const HeroCarousal = () => {
    
    const settingsLG = {
        // arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "132px",
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    }
    const settings = {
        arrows:true,  
        autoplay: true,
        // centerPadding: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    }

    const settingsSM = {
      arrows:false,
      autoplay: true,
      // centerPadding: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
  }
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //   const requestNowPlayingMovies = async() => {
    //     const getImages = await axios.get("/movie/now_playing")
    //     setImages(getImages.data.results)
    //   }
    //   requestNowPlayingMovies()
    // }, [])

    const images = [
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1695984008899_icccricketwcoctdesktop.jpg",
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1696597158375_missionimpossibldesktop.jpg",
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1695986750593_lolladesktop.jpg",
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1696591997073_roanandesktop.jpg"
    ]
    return (
        <>
        <div className='sm:hidden'>
          {/* this is for very small screen */}
          <HeroSlider {...settingsSM}>
          {
            images.map((image) => (
              <div className="w-full h-44 sm:60  py-3">
              <img 
              src={image}
              // src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
              alt="testing" 
              className='w-full h-full rounded-md'/>
              </div>
            ))
          }
          
          </HeroSlider>
        </div>


        <div className='hidden sm:block lg:hidden'>
          {/* this is for small and medium screen */}
          <HeroSlider {...settings}>
          {
            images.map((image) => (
              <div className="w-full h-60 sm:60  py-3">
              <img 
              src={image}
              // src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
              alt="testing" 
              className='w-full h-full rounded-md'/>
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
              <div className="w-full h-full px-2 py-3">
              <img 
              src={image}
              // src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
              alt="testing" 
              className='w-full h-full rounded-md'/>
              </div>
            ))
          }
          
        </HeroSlider>
        </div>

        
        </>
      );
}

export default HeroCarousal