import React from "react";
import { AiFillStar } from 'react-icons/ai';
import { FcNext } from 'react-icons/fc';
import { BsShare, BsDot } from 'react-icons/bs';

const MovieHero = () => {
    return(
        <>

          {/* only for small screen,for medium and large screen it is hidden  */}
          <div className="md:hidden" style={{ height: "calc(180vw)"}}> 
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mark-antony-et00367366-1692281157.jpg"
                 alt="poster"
            />
          </div>
            
            {/* only for medium screen */}
          <div className="hidden md:block lg:hidden">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mark-antony-et00367366-1692281157.jpg"
                 alt="poster"
            />
          </div>

          {/* only for large screen */}
          <div className="relative flex hidden lg:block" style={{ height: "30rem"}}>
            <div className="absolute flex w-full h-full z-5"
                 style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
            />

            
              <div className=" absolute flex z-10 w-full h-100 top-10 ">
                <div className="absolute flex w-full">
                  <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mark-antony-et00367366-1692281157.jpg"
                  alt="poster"
                  className="h-full w-64 rounded-lg ml-36"
                  />
                  {/* <img src={image}
                  alt="poster"
                  className="h-full w-64 rounded-lg ml-36"
                  /> */}
                  
                  <div className="flex flex-col text-white ml-8 mt-6">
                    <h className='font-bold text-4xl'>Mark Antony</h>
                    <div className="flex pt-6 pb-4 ">
                      <AiFillStar className="mr-2 text-3xl"/>
                      <h className='font-bold pr-3 text-2xl'>1.1/10</h> 
                      <h className='text-sm mt-2'>34.5K Votes</h>
                      <FcNext className=" mt-3 text-sm ml-1"/>
                    </div>

                    <div className="flex w-full pt-2 pb-3 bg-navColor2-700 rounded-lg">
                      <div className="flex flex-col px-4">
                        <h className='font-bold text-lg'>Add you rating & review</h>
                        <h>Your ratings matter</h>
                      </div>
                      <div className="flex ml-20 mt-2 mb-1 bg-white rounded-lg text-bold mr-6">
                        <h className='font-semibold text-black text-lg mb-1 px-2 py-1'>Rate now</h>
                      </div>

                    </div>

                    <div className="flex mt-6">
                      <h className='bg-navColor3-100 text-black mr-2 px-2 rounded-sm pb-1'>2D</h>
                      <h className='bg-navColor3-100 text-black px-2 rounded-sm pb-1'>Tamil, Hindi, Telugu</h>  
                    </div>

                    <div className="flex text-white mt-4">
                      <h className=''>2h 31m</h>
                      <BsDot className="mt-1 mx-1"/>
                      <h className=''>Sci-Fi, Thriller</h>
                      <BsDot className="mt-1 mx-1"/>
                      <h className=''>UA</h>
                      <BsDot className="mt-1 mx-1"/>
                      <h className=''>15 Sep, 2023</h>
                    </div>

                    <div className="mt-8">
                      <h className="font-bold text-lg bg-navRed-400 text-white text-sm rounded-lg px-16 py-4">Book Tickets</h>
                    </div>
                    
                  </div>

                  <div className="text-white ml-96">
                    <div className=" flex bg-navColor2-800 bg-opacity-60 px-4 py-3 ">
                    <BsShare className="text-2xl"/>
                    <h className='ml-4  b-1'>Share</h>
                    </div>
                  </div>
                </div>
                <div className="flex py-96 ml-4 z-20">
                   <p className="z-20 py-2 px-56 text-white text-sm">In cinemas</p> 
                </div>
              </div>   


            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mark-antony-et00367366-1692281157.jpg"
                 alt="poster"
                 className="w-full h-full"
            />
          </div>
        </>
    )
}

export default MovieHero