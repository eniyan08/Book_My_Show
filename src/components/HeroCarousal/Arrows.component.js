import React from 'react'
// import { GrNext } from 'react-icons/gr'
import prevArrow from './previous-arrows-svgrepo-com.svg';

export const NextArrow = (props) => {
    // const {className, style, onClick} = props
    return (
        <>

        <div
          className={props.className}
          style={{ ...props.style}}
          onClick={props.onClick}
        />   
        {/* there can be lot of styles. so destructuring and spreading all styles */}
         
        </>
    )
}

export const PrevArrow = (props) => {
    // const { className, style, onClick } = props;
    return (
        <>
        <div
          className={props.className}
          style={{ ...props.style, width: '50px', height: '50px', backgroundImage: `url(${prevArrow})` }}
          onClick={props.onClick}
        />

        </>
    )
}

