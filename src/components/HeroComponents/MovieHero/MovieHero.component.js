import React, { useState } from "react";
import { AiFillStar } from 'react-icons/ai';
import { GrFormNext } from 'react-icons/gr';
import { BsShare, BsDot } from 'react-icons/bs';
const launchRazorPay = () => {
  let options = {
    key: "rzp_test_INrPOAYctSrk6s",
   
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://in.bmscdn.com/webin/common/icons/logo.svg",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  }
  let rzp = new window.Razorpay(options)
  rzp.open();
} 

const MovieHero = () => {
    
  const [isVisible, setIsVisible] = useState(false)
  const moreFunction = () => {
    setIsVisible(!isVisible)
  }
    return(
        <>
            
          {/* only for medium screen */}
          <div className="lg:hidden my-2 mx-4">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mark-antony-et00367366-1692281157.jpg"
                 alt="poster"
                 className="rounded-t-md"/>
            <div className="bg-gray-900 w-full rounded-b-md py-2">
              <h className='flex justify-center items-center text-sm text-white'>In Cinemas</h>
            </div>
            <div className="flex flex-col mt-4 w-full ">
              <div className="flex ">
                  <AiFillStar className="text-red-600 mt-2 mr-1 w-5 h-6"/>
                  <h className='font-bold mt-1 py-1 mr-2 text-md'>1.1/10</h> 
                  <h className='text-xs mt-3 '>34.5K Votes</h>
                  <GrFormNext className="mt-4 w-3 h-3"/>
              </div>
              <div className="flex mt-4 text-sm">
                  <h className='bg-navColor3-100 mr-2 px-2 rounded-sm pb-1'>2D</h>
                  <h className='bg-navColor3-100 px-2 rounded-sm pb-1'>Tamil, Hindi, Telugu</h>  
              </div>
              <div className="flex mt-2 text-sm ">
                  <h className=''>2h 31m</h>
                  <BsDot className="mt-1 mx-1"/>
                  <h className=''>Sci-Fi, Thriller</h>
                  <BsDot className="mt-1 mx-1"/>
                  <h className=''>UA</h>
                  <BsDot className="mt-1 mx-1"/>
                  <h className=''>15 Sep, 2023</h>
              </div>
              <div className="mt-2 w-full">
                <span>Mark, a skilled mechanic and the son of a former gangster, stumbles upon a time-travelling phone tha</span> 
                {isVisible ? "" : <span onClick={() => {moreFunction()}} className='text-red-600'>...more</span>}
                {isVisible ? <span>t can save his estranged mother from a grim fate, but he must navigate through dangerous consequences of altering the past while facing his own family's legacy.</span> : ""}
                {isVisible ? <span onClick={() => {moreFunction()}}  className='text-red-600'>...less</span> : ""}
                
              </div>

              <div className="flex bg-gray-200 mt-4 py-2 rounded-md">
                  <div className="flex flex-col px-4">
                      <h className='font-semibold text-md'>Add you rating & review</h>
                      <h className='text-sm'>Your ratings matter</h>
                  </div>
                  <div className="absolute right-6 ml-20 mt-2 mb-1 bg-white rounded-lg text-bold mr-6">
                      <h className='font-semibold text-black text-sm text-lg text-red-600 mb-1 px-2 py-1 border border-red-600 rounded-md'>Rate now</h>
                  </div>
              </div>
            </div>
            
          </div>
          <div className="lg:hidden fixed bottom-0 z-20 w-full bg-white py-3">
              <div className="bg-rose-500 rounded-lg mx-2 py-2">
                <h className='flex justify-center items-center text-semibold'>Book Tickets</h>
              </div>
            </div>

          {/* only for large screen */}
          <div className=" relative flex hidden lg:block" style={{ height: "30rem"}}>
            <div className="absolute w-full h-full "
                 style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
            />
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mark-antony-et00367366-1692281157.jpg"
                 alt="poster"
                 className="w-full h-full"
            />
            
              <div className=" absolute flex  w-full h-100 top-10 ">
                <div className="absolute flex w-full">
                  <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mark-antony-et00367366-1692281157.jpg"
                  alt="poster"
                  className="h-full w-64 rounded-lg ml-36"
                  />
                  
                  <div className=" flex flex-col text-white ml-8 mt-6 w-half h-full">
                    <h className='font-bold text-4xl'>Mark Antony</h>
                    <div className="flex pt-6 pb-4 ">
                      <AiFillStar className="text-red-600 mr-2 text-3xl"/>
                      <h className='font-bold pr-3 text-2xl'>1.1/10</h> 
                      <h className='text-sm mt-2'>34.5K Votes</h>
                      <GrFormNext className=" mt-3 text-sm ml-1"/>
                    </div>

                    <div className="flex w-full h-full pt-2 pb-3 bg-navColor2-700 w-1/2 rounded-lg">
                      <div className="flex flex-col px-4">
                        <h className='font-bold text-md'>Add you rating & review</h>
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
                      <button 
                        onClick={launchRazorPay}
                        className="font-bold text-lg bg-navRed-400 text-white text-sm rounded-lg px-16 py-4">
                        Book Tickets
                      </button>
                    </div>
                    
                  </div>

                  <div className="absolute right-0 text-white w-1/5">
                    
                    <div className=" flex w-1/2 ml-8  bg-navColor2-800 bg-opacity-60 px-4 py-3 w-32 rounded-md">
                    <BsShare className="text-2xl"/>
                    <h className='ml-4  b-1'>Share</h>
                    </div>
                  </div>
                </div>
                <div className="py-96 ml-4 z-20">
                   <p className="z-20 py-2 px-56 text-white text-sm">In cinemas</p> 
                </div>
              </div>   
          </div>


        </>
    )
}

export default MovieHero