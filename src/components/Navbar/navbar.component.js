import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi"
import SecondaryNav from "./secondarynav.component";
const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                    Chennai <BiChevronRight/>
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    )
}
const NavMd = () => {
    return(
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
            <BiSearch />
            <input type="search" className="w-full focus:outline-none   " placeholder="Search for movies, events, place, sport and activities"/>
        </div>
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
                <input type="search" className="w-full focus:outline-none   " placeholder="Search for Movies, Events, Place, Sport and Activities"/>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                Chennai
                <BiChevronDown/>
            </span>
            <button className="bg-navRed-400 text-white text-sm rounded-sm px-2 py-1 pb-1">
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

const Navbar = () => {
    return (
        <>
          <nav className="px-12 bg-gray-700 ">
            <div className="md:hidden">
                {/* Mobile Screen */}
                <NavSm />
            </div>

            <div className="hidden lg:hidden md:flex">
                {/* Tablet Screen */}
                <NavMd />
            </div>

            <div className="hidden lg:flex">
                {/* Large Screen */}
                <NavLg/>
            </div>
          </nav>
      
          <SecondaryNav />
          
        </>
    )
}

export default Navbar