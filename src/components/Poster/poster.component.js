import React from "react"
import { Link } from 'react-router-dom'
const Poster = (props) => {
    return (
        <>
        
          <div className="flex flex-col items-start px-3 pt-3">
           {/* Conditional Rendering */}
           {/* Some use data from TMDB, some use Static data given */}
           {props.isStatic ? (
            <div className="lg:h-80 md:h-60 sm:h-50 rounded-xl">
                <img 
                src={props.src}
                alt={props.original_title} 
                className=" w-full h-full rounded-xl"/>
            </div>
           ) : (
            <Link to='/movie/123' className="lg:h-80 md:h-60 sm:h-50 rounded-xl">
            <img 
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title} 
            className=" w-full h-full rounded-xl"/>
            </Link>
           ) }

            <h3
            className={`text-lg font-bold pt-2 ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}>
                {props.title}
                {props.name}</h3>

            <p
            className={`text-sm font-medium ${
                props.isDark ? "text-white" : "text-gray-500"
            }`}>
                {props.subtitle}</p>
            
            <p
            className={`text-sm font-medium ${
                props.isDark ? "text-white" : "text-gray-500"
            }`}>
                {props.cost}</p>
          </div>
        </>
    )
}

export default Poster