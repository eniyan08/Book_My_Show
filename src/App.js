import { Route } from "react-router-dom"
// axios
import axios from "axios"
// HOC
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from "./HOC/Movie.HOC";
// Pages
import HomePage from "./pages/Home.page"
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.page";
import EventsPage from "./pages/Events.page";
import SportsPage from "./pages/Sports.page";
import ActivitiesPage from "./pages/Activities.page";
import StreamPage from "./pages/Stream.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {
  return (
    <> 
      <DefaultHOC path="/" exact component={HomePage} 
                                 isHome={true} />
      {/* isHome is used to determine whether that page has Hero Carousal or not */}
      <MovieHOC path="/movie/:id" exact component={MoviePage}/>
      <DefaultHOC path="/plays" exact component={PlaysPage}
                                      isHome={false}/>
      <DefaultHOC path="/events" exact component={EventsPage}
                                      isHome={false}/>
      <DefaultHOC path="/sports" exact component={SportsPage}
                                      isHome={false}/>
      <DefaultHOC path="/activities" exact component={ActivitiesPage}
                                      isHome={false}/>
      <DefaultHOC path="/streams" exact component={StreamPage}
                                      isHome={false}/>
    </>
    // this empty tag is called fragments
  ); 
}

export default App;
