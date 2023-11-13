import React, {useState, useEffect} from 'react'
// axios
import axios from 'axios'
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.component'
// import Premier from '../components/Premier/premier.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
import TempPosters from '../config/TempPosters.config'
import { OutdoorEvents } from '../config/TempPosters.config'
import { Premieres } from '../config/TempPosters.config'

const HomePage = () => {


  // RECOMMENDED MOVIES DATA

  const [popularMovies, setPopularMovies] = useState([])
  // popularMovies is current state
  // setPopularMovies is the function used to update the current state
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get('/movie/popular')
      // console.log(getPopularMovies.data.results)
      setPopularMovies(getPopularMovies.data.results)
    }
    requestPopularMovies() //calling the function
    
  },[]) //empty array is given to execute it only once
  
{/* ------------------------------------------------------------------------------------------ */}

  // ONLINE TV SHOWS DATA

  const [onlineShows, setOnlineShows] = useState([])
  useEffect(() => {
    const requestOnlineShows = async () => {
      const getOnlineShows = await axios.get('/tv/top_rated')
      setOnlineShows(getOnlineShows.data.results)
    }
    requestOnlineShows()
  },[] )
  
{/* ------------------------------------------------------------------------------------------ */}

  // PREMIERE MOVIE DATA

  const [premiereShows, setPremiereShows] = useState([])
  useEffect(() => {
    const requestPremiereShows = async () => {
      const getPremiereShows = await axios.get('/movie/upcoming')
      setPremiereShows(getPremiereShows.data.results)
    }
    requestPremiereShows()
  },[])

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
        <>
{/* ENDLESS ENTERTAINMENT */}        
        <div className='pt-4 pb-8 hidden sm:block'>
          <div className='container mx-auto px-2 2xl:px-36 xl:px-12 lg:px-12 md:px-12 sm:px-4'>    
            <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png'
                 alt="STREAM" 
                 />
          </div>
        </div>

{/* ------------------------------------------------------------------------------------------ */}
{/* RECOMMENDED MOVIES */}
        
        <div className='container mx-auto 2xl:px-32 xl:px-10 lg:px-10 md:px-10 sm:px-2  '>    
          <PosterSlider 
            images={popularMovies} 
            title="Recommended Movies"
            subtitle=""
            isDark={false} />
        </div>
        
{/* ------------------------------------------------------------------------------------------ */}
{/* NAVRATRI FEVER */}
        <div className='pt-8 pb-8 hidden sm:block'>
          <div className='container mx-auto px-4 2xl:px-36 xl:px-12 lg:px-12 md:px-12 sm:px-4'>    
            <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/slug-navratri-collection-202309251241.jpg'
                 alt="STREAM" 
                 className='rounded-xl sm:rounded-md'/>
          </div>
        </div>

{/* ------------------------------------------------------------------------------------------ */}
{/* BEST OF LIVE EVENTS */}
        <div className='container mx-auto 2xl:px-32 xl:px-10 lg:px-10 md:px-10 sm:px-2'>
          <h1 className='text-2xl font-bold text-gray-800 px-4'>
            The Best Of Live Events
          </h1>
          <EntertainmentCardSlider />          
        </div>
{/* ------------------------------------------------------------------------------------------ */}
{/* PREMIERE */}
        <div className='bg-navColor-200 py-4 md:py-16'>
          <div className='container mx-auto 2xl:px-32 xl:px-10 lg:px-10 md:px-10 sm:px-2'>
            <div className='flex px-4 hidden sm:block'>
              <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png'
                 alt='Premiere Image'
                 className='w-full h-full'
              />
            </div>
            <PosterSlider
              images={premiereShows} 
              title="Premieres" 
              subtitle="Brand new release very Friday"
              isDark={true} />
          </div>    
        </div>

{/* ------------------------------------------------------------------------------------------ */}
{/* ICC TOURNAMENT */}
        <div className='pt-8 hidden sm:block'>
          <div className='container mx-auto px-4  2xl:px-36 xl:px-12 lg:px-12 md:px-12 sm:px-4 '>    
            <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png'
                 alt="ICC MEN'S CRICKET"
                 className='sm:rounded-md' />
          </div>
        </div>

{/* ------------------------------------------------------------------------------------------ */}
{/* ONLINE TV SHOWS */}
        <div className='pt-8'>
          <div className='container mx-auto 2xl:px-32 xl:px-10 lg:px-10 md:px-10 sm:px-2'>    
            <PosterSlider 
              images={onlineShows} 
              title="Online TV Shows"
              subtitle="Exclusives"
              isDark={false} />
          </div>
        </div>

{/* ------------------------------------------------------------------------------------------ */}
{/* OUTDOOR EVENTS */}
        <div className='pt-8'>
          <div className='container mx-auto 2xl:px-32 xl:px-10 lg:px-10 md:px-10 sm:px-2'>    
            <PosterSlider 
              images={OutdoorEvents} 
              title="Outdoor Events"
              subtitle=""
              isDark={false} 
              isStatic={true}/>
          </div>
        </div>
        </>
    )
}

export default HomePage