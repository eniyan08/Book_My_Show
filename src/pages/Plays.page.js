import React from "react";
import Poster from "../components/Poster/poster.component"
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const PlaysPage = () => {
    return (
        <>
          <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
              {/* !!!! row reversed !!!!*/}
              <div className="lg:w-8/12">
              <h2 className="text-2xl font-bold mb-4">Plays in Chennai</h2>
              <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster 
                  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00370063-lsnrsspcmy-portrait.jpg'
                  title='4Play'
                  subtitle='Tamil ₹300'/>
                </div>

                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster 
                  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00370063-lsnrsspcmy-portrait.jpg'
                  title='4Play'
                  subtitle='Tamil ₹300'/>
                </div>

                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster 
                  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00370063-lsnrsspcmy-portrait.jpg'
                  title='4Play'
                  subtitle='Tamil ₹300'/>
                </div>  

                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                  <Poster 
                  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00370063-lsnrsspcmy-portrait.jpg'
                  title='4Play'
                  subtitle='Tamil ₹300'/>
                </div> 
              </div>
              </div>

              <div className="lg:w-1/4">
                <h1 className='text-2xl font-bold mb-4'>Filters</h1>
                <div>
                  <PlaysFilter />
                </div>
              </div>
            </div>

          </div>
        </>
    )
}

export default PlaysPage