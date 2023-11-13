import React, { useState } from "react";
import Poster from "../components/Poster/poster.component"
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import Events from "../config/Events.config";
import { EventsData } from "../config/FilterData.config";
import { SlLocationPin } from 'react-icons/sl'
import { BiFilterAlt } from 'react-icons/bi'
import Filter from "./Filter.page";

const EventsPage = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [show, setShow] = useState(true)
  // Callback function to handle data received from the child component
  const handleCallback1 = () => {
    // Update the name in the component's state
    setShow(!show) 
  } 
  const handleCallback2 = () => {
    setIsVisible(!isVisible)
  }
    return (
      <>
      <div style={{visibility: isVisible ? "visible" : "hidden"}}
           disabled={!isVisible}
           className="relative z-0 container mx-auto xl:px-16 pt-4 lg:pt-14 md:pt-6 ">
        <div className="w-full lg:flex justify-center lg:flex-row-reverse md:flex flex-col-reverse gap-8 ">
          {/* !!!! row reversed !!!!*/}
          <div className="lg:w-8/12">
          <h2 className="text-2xl font-bold ml-3 mb-4">Events in Chennai</h2>
          <div className="flex flex-wrap">
          {Events.map((data) => {
            return(
              <div className="object-scale-down w-1/2 md:w-1/4 lg:w-1/4">
              <Poster {...data}
              isStatic={true}/>
            </div>
            )
          })}
            
          </div>
          </div>

          <div className="hidden lg:block lg:w-1/5 ">
            <h1 className='text-2xl font-bold mb-4'>Filters</h1>
            <div className=" flex flex-col gap-2">
            
            {EventsData.map((data) => {
              return (
                <div className='bg-white border-2 border-slate-50 rounded pl-2 py-1'>
                  <PlaysFilter 
                    {...data}
                  />
                </div>
              )
            })}

            </div>        
            <div className="border-2 border-red-400 rounded-md text-center py-1 mt-3">
              <h className='text-red-500'>Browse by Venues</h>
            </div>
          </div>
        </div>

        <div className="container mx-auto fixed bottom-8 lg:hidden z-20">
          <div className="relative container mx-auto flex">
            <div className="flex bg-navRed-400 ml-3 text-white text-md rounded-full px-4 py-3">            
              <SlLocationPin className="mt-1 mr-2"/>         
              <h className=''>Browse by Venues</h>               
            </div>  
            
            <button onClick={() => {setShow(!show);
                                    setIsVisible(!isVisible)}} 
            className="absolute right-3 md:mr-6 bg-navRed-400 text-white rounded-full px-2 py-1">
              <BiFilterAlt className='w-6 h-6 my-2 mx-1 '/>
            </button> 
        </div>
        </div>   
      </div>

{/* below part is only visible when filter button is clicked */}
      
      {/* Filter is the child component */}
      {/* This page (Plays.page.js) is the parent component */}
      <Filter status={show}
              parentCallback1 = {handleCallback1}
              parentCallback2 = {handleCallback2}
              filterData = {EventsData}/>

      
      
    </>
    )
}

export default EventsPage