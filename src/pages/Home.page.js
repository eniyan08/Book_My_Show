import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.component'
// import Premier from '../components/Premier/premier.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
import TempPosters from '../config/TempPosters.config'
import { Premieres } from '../config/TempPosters.config'

const HomePage = () => {
    return (
        <>
        
        <div className='pt-4 pb-8'>
          <div className='container mx-auto px-4 lg:px-32 md:px-18 sm:px-8'>    
            <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png'
                 alt="STREAM" />
          </div>
        </div>

        <div className='pb-8'>
          <div className='container mx-auto px-28'>    
            <PosterSlider 
              images={TempPosters} 
              title="Recommended Movies"
              subtitle=""
              isDark={false} />
          </div>
        </div>

        <div className='conatiner mx-auto  lg:px-28 md:px-12 sm:px-4'>
          <h1 className='text-2xl font-bold text-gray-800 px-4'>
            The Best Of Live Events
          </h1>
          <EntertainmentCardSlider />          
        </div>

        <div className='bg-navColor-200 py-16'>
          <div className='container mx-auto px-28'>
            <div className='flex px-4'>
              <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png'
                 alt='Premiere Image'
                 className='w-full h-full'
              />
            </div>
            <PosterSlider
              images={Premieres} 
              title="Premieres" 
              subtitle="Brand new release very Friday"
              isDark={true} />
          </div>    
        </div>
        
        <div className='pt-8 md: lg: sm:'>
          <div className='container mx-auto px-28'>    
            <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png'
                 alt="ICC MEN'S CRICKET" />
          </div>
        </div>

        <div className='pt-8'>
          <div className='container mx-auto px-28'>    
            <PosterSlider 
              images={TempPosters} 
              title="Online Streaming Events"
              subtitle="Exclusives"
              isDark={false} />
          </div>
        </div>

        <div className='pt-8'>
          <div className='container mx-auto px-28'>    
            <PosterSlider 
              images={TempPosters} 
              title="Outdoor Events"
              subtitle=""
              isDark={false} />
          </div>
        </div>
        </>
    )
}

export default HomePage