import React from 'react'
import Slider from 'react-slick'

// component
import Poster from '../Poster/poster.component'

// Config
import settings from '../../config/PosterCarousal.config'
import PremierImages from '../../config/TempPosters.config'


const Premier = () => {
    return (
        <>
        <div className='flex flex-col items start py-4 px-4'>
            <h3 className='text-white text-xl font-bold'>Premiers</h3>
            <p className='text-white text-sm'>Brand new release very Friday</p>
        </div>
          <Slider {...settings}>
            {PremierImages.map((data)=> {
                return(
                    <Poster {...data} isDark />
                )
            })}
          </Slider>
        </>
    )
}

export default Premier