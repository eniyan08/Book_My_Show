import React from "react";
import CastCrewPoster from "../Poster/CastCrewPoster.component";
import CarousalSettings from "../../config/Cast&CrewCarousal.config";
import Slider from "react-slick";

const CastCrewSlider = (props) => {
    return (
        <>
          <Slider {...CarousalSettings}>
                {props.images.map((data)=> {
                    return(
                      <CastCrewPoster {...data}/>
                    )
                })}
            </Slider>
        </>
    )
}

export default CastCrewSlider