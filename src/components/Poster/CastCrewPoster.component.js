import React from "react"

const CastCrewPoster = (props) => {
    return (
        <>
        
          <div className="flex flex-col px-5 py-5 ">
            
              <img src={props.src} alt={props.title} className="rounded-full"/>
              <div className="flex flex-col">
                <h3 className='text-center'> {props.name} </h3>
                <p className='text-center'> {props.profession} </p>
              </div>

          </div>
        </>
    )
}

export default CastCrewPoster