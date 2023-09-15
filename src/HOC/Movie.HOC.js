import React from "react"
import { Route } from "react-router-dom"

// Layouts
import MovieLayout from "../layouts/Movie.layout"

const MovieHOC = ({ component: Component, ...also_props}) => {
    // destructuring the component and spreading the property

    return(
        <>
          
          <Route 
          {...also_props} 

          component = {(props) => (
            <MovieLayout>  {/*  MovieLayout is the parent */}
                <Component {...props} /> {/* Component is the child */}
            </MovieLayout>
          )}
          />

        </>
    )
}

export default MovieHOC