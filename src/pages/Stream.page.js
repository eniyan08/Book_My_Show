import React, {useState, useEffect} from 'react';
// axios
import axios from 'axios';
// component
import StreamHero from "../components/HeroComponents/StreamHero/StreamHero.component";
// Carousal slider
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const StreamPage = () => {

    // TOP RATED MOVIES

    const [topMovies, setTopMovies] = useState([])
    useEffect(() => {
        const requestTopMoives = async () => {
            const getTopMovies = await axios.get('/movie/top_rated')
            setTopMovies(getTopMovies.data.results)
        }
        requestTopMoives()
    },[])

// ------------------------------------------------------------------------------------------------

    // PREMIERE MOVIE DATA

    const [premiereShows, setPremiereShows] = useState([])
    useEffect(() => {
      const requestPremiereShows = async () => {
        const getPremiereShows = await axios.get('/movie/upcoming')
        setPremiereShows(getPremiereShows.data.results)
      }
      requestPremiereShows()
    },[])

    // ------------------------------------------------------------------------------------------------

    // TV ON-THE-AIR

    const [tvontheAir, setTvontheAir] = useState([])
    useEffect(() => {
        const requestTvontheAir = async () => {
            const getTvontheAir = await axios.get('/tv/on_the_air')
            setTvontheAir(getTvontheAir.data.results)
        }
        requestTvontheAir()
    })

// -------------------------------------------------------------------------------------------------------------

    return (
        <>
            <StreamHero />
{/* ------------------------------------------------------------------------------------------------------------ */}
           
            {/* TOP RATED MOVIES */}

            <div className='container mx-auto pt-8 2xl:px-32 xl:px-10 sm:px-2'>
                <PosterSlider
                  images={topMovies}
                  title="Top Rated Movies"
                  subtitle=""
                  isDark={false}/>
            </div>
            
{/* ------------------------------------------------------------------------------------------ */}
        
            {/* PREMIERE MOVIE DATA */}
        
            <div className='container mx-auto pt-8 pb-8 2xl:px-32 xl:px-10 sm:px-2'>
                <PosterSlider
                  images={premiereShows}
                  title="Premiere Movies"
                  subtitle=""
                  isDark={false}/>
            </div>

{/* ------------------------------------------------------------------------------------------ */}
        
            {/* TV ON-THE-AIR DATA */}
        
            <div className='container mx-auto pb-8 2xl:px-32 xl:px-10 sm:px-2'>
                <PosterSlider
                  images={tvontheAir}
                  title="Currently Airing TV Shows"
                  subtitle=""
                  isDark={false}/>
            </div>

{/* --------------------------------------------------------------------------------------------------- */}
        </>
    )
}

export default StreamPage