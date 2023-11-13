import React from "react"

// components
import Navbar from "../components/Navbar/navbar.component"
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component"

const DefaultLayout = (props) => {
    return (
        <>
        <div className="bg-slate-100">
        {/* <Navbar/> */}
        {/* {props.isHome ? <HeroCarousal />: <div/>} */}
        <Navbar carousal = {props.isHome}/>
        
        
        {props.children}
        </div>
        </>
    )
}

export default DefaultLayout