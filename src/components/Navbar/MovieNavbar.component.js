import React from "react";
import { BiChevronRight,BiChevronLeft, BiSearch, BiChevronDown, BiMenu, BiShareAlt } from "react-icons/bi"
import SecondaryNav from "./secondarynav.component";
const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full"/>
            </div>
        </div>
        </>
    )
}

const NavLg = () => {
    return(
    <>
    <div className="container mx-auto px-20 py-1 flex items-center justify-between">
        <div className="flex items-center w-1/2">
            <div className="w-half h-12 px-4">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="Bookmyshow" className="w-full h-full "/>
            </div>

            <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
                <BiSearch type="button" />
                <input type="search" className="w-full focus:outline-none   " placeholder="Search for movies, events, place, sport and activities"/>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                Chennai
                <BiChevronDown/>
            </span>
            <button className="bg-navRed-400 text-white text-sm rounded-md px-2 py-1 pb-2">
                Sign in
            </button>
            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full"/>
            </div>
        </div>
        
    </div>
    

    </>
    )
}

const MovieNavbar = () => {
    return (
        <>
          <nav className="absolute inset-x-0 z-30  bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative">
            <div className="md:hidden">
                {/* Mobile Screen */}
                <NavSm />
            </div>

            <div className="hidden lg:hidden md:block">
                {/* Tablet Screen */}
                <NavSm />
            </div>

            <div className="hidden lg:flex px-12 bg-gray-700 ">
                {/* Large Screen */}
                <NavLg/>
            </div>
          </nav>

          <SecondaryNav />
        </>
    )
}

export default MovieNavbar