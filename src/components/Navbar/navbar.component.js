import React, { useState } from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi"
import SecondaryNav from "./secondarynav.component";
import Menu from "./Menu.component";
import HeroCarousal from "../HeroCarousal/HeroCarousal.component";


const NavSm = (props) => {
    return (
        <>
        <div className="container mx-auto text-white flex items-center justify-between">
            <div className="px-2 py-1 flex flex-col">
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                    Chennai <BiChevronRight/>
                </span>
            </div>
            <div className="px-2">
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
            </div>
        </div>
        {/* {props.Carousal ? <HeroCarousal/> : <div/>} */}
        </>
    )
}
const NavMd = (props) => {
    return(
        <>
        <div className="bg-gray-800 w-full px-2 py-1">
        <div className="w-full flex items-center bg-white gap-3 px-6 py-2 rounded-lg">
            <BiSearch />
            <input type="search" className="w-full focus:outline-none   " placeholder="Search for movies, events, place, sport and activities"/>
        </div>
        </div>
        {/* {props.Carousal ? <HeroCarousal/> : <div/>} */}
        </>
    )
}
const NavLg = (props) => {

    const [menu, setMenu] = useState(false)
    const handleCallback = () => {
        setMenu(!menu)
    }
    // const ref = useRef();
    return(
    <>
    <div className="flex flex-col bg-gray-700 ">
    <div className="container mx-auto  2xl:px-32 xl:px-16 lg:px-10 py-1 flex items-center justify-between">
        <div className="flex items-center w-1/2">
            <div className="w-half h-12 px-4">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="Bookmyshow" className="w-full h-full "/>
            </div>

            <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
                <BiSearch type="button" />
                <input type="search" className="w-full focus:outline-none   " placeholder="Search for Movies, Events, Place, Sport and Activities"/>
            </div>
        </div>
        
        <div className="flex items-center gap-3 pr-2">
            <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                Chennai
                <BiChevronDown/>
            </span>
            <button className="bg-navRed-400 text-white text-sm rounded-sm px-2 py-1 pb-1">
                Sign in
            </button>
            <div className="w-8 h-8 text-white">
                <BiMenu onClick={() => {setMenu(!menu)}} 
                        className="w-full h-full"
                />
                
            </div>
        </div>
        
    </div>
    
    <SecondaryNav />
    
    </div>
    {props.Carousal ? <HeroCarousal/> : <div/>}
    <Menu show={menu}
          parentCallback = {handleCallback}
          onClickOutside={() => {setMenu(!menu)}}/>
    {/* onClickOutside is also a parentCallback */}
    </>
    )
}

const Navbar = (props) => {
    return (
        <>
          
            <div className=" bg-gray-800 md:hidden">
                {/* Mobile Screen */}
                <NavSm Carousal = {props.carousal}/>
            </div>

            <div className="hidden lg:hidden md:flex">
                {/* Tablet Screen */}
                <NavMd Carousal = {props.carousal}/>
            </div>

            <div className="hidden lg:block">
                {/* Large Screen */}
                <NavLg Carousal = {props.carousal}/>
            </div>
          
      
          
          
        </>
    )
}

export default Navbar