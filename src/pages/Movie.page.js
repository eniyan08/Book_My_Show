import React from 'react'
import { MdMovieFilter } from 'react-icons/md'
// component
import MovieHero from '../components/MovieHero/MovieHero.component'
// slider
import CastCrewSlider from '../components/PosterSlider/CastCrewSlider.component'
// data config
import Cast from '../config/Cast&CrewData.config'
import { Crew } from '../config/Cast&CrewData.config'

const MoviePage = () => {
    return (
        <>
          <MovieHero />
          <div className='my-12 container mx-auto px-4 lg:w-2/3 lg:ml-48'>
            <div className='flex flex-col items-start gap-3'>
              <h2 className='font-bold text-2xl text-gray-800'>About the movie</h2>
              <p className='text-md'>Mark, a skilled mechanic and the son of a former gangster, stumbles upon a time-travelling phone that can save his estranged mother from a grim fate, but he must navigate through dangerous consequences of altering the past while facing his own family's legacy.</p>
            </div>

            <div className='my-8'>
              <hr/>
            </div>

            <div  className='flex flex-col gap-3'>
              <h1 className='font-bold text-2xl'>Applicable Offers</h1> 
                      
              <div className=' flex flex-row items-start gap-2 bg-yellow-100 border-dashed border-2 border-yellow-400 rounded-md p-3 w-96'>
                <MdMovieFilter className='mt-1 w-8 h-6'/>
                  <div className='flex flex-col items-start'>
                    <h3 className='text-gray-800 text-lg'>Filmy Pass</h3>
                    <p className='text-gray-600 text-sm'>Get Rs.75* off on 3 movies you buy/rent on Stream. Buy filmy pass @Rs.99</p>
                  </div>
              </div>

            </div>

            <div className='my-8'>
              <hr/>
            </div>

            <div className='flex flex-col '>
              <h className='font-bold text-2xl'>Cast</h>

              <CastCrewSlider 
                images={Cast} 
                title=""
                subtitle=""
              />
              
            </div>

            <div className='my-8'>
              <hr/>
            </div>

            <div className='container mx-auto justify-items-start'>
              <h className='font-bold text-2xl'>Crew</h>

              <CastCrewSlider 
                images={Crew} 
                title=""
                subtitle=""
              />
              
            </div>
          </div>
        </>
    )
}

export default MoviePage