import React from "react"

// components
import Navbar from "../components/Navbar/navbar.component"


const MovieLayout = (props) => {
    return (
        <>
        <div className="bg-slate-100">
        <Navbar />
        {props.children}
        </div>
        </>
    )
}

export default MovieLayout