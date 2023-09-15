// HOC - Higher order components
// Transforms component into another component
// Adding additional functionalities to existing component
// ... is called spread property of React js

import React, { Component } from "react"
import { Route } from "react-router-dom"

// Layouts
import DefaultLayout from "../layouts/Default.layout"

const DefaultHOC = ({ component: Component, ...also_props}) => {
    // destructuring the component and spreading the property

    return(
        <>
          
          <Route 
          {...also_props} 

          component = {(props) => (
             <DefaultLayout>  {/*  DefaultLayout is the parent */}
                <Component {...props} /> {/* Component is the child */}
            </DefaultLayout>
          )}
          />

        </>
    )
}

export default DefaultHOC