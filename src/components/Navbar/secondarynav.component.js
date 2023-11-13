import React from "react";
import { Link } from 'react-router-dom'

const SecondaryNav = () => {
    return (
        <>
    <nav className="bg-gray-800  py-2 hidden lg:block">
            <div className="container mx-auto flex items-start gap-3 2xl:px-28 xl:px-12 lg:px-6 py-1 justify-between hover:text-white">
                <div className="flex items-center gap-4 px-7 text-gray-300 text-sm">
                  <Link to='/' className="hover:text-white cursor-pointer">Movies</Link>
                  <Link to='/streams'className="hover:text-white cursor-pointer">Stream</Link>
                  <Link to='/events'className="hover:text-white cursor-pointer">Events</Link>
                  <Link to='/plays' className="hover:text-white cursor-pointer">Plays</Link>
                  <Link to='/sports'className="hover:text-white cursor-pointer">Sports</Link>
                  <Link to='/activities'className="hover:text-white cursor-pointer">Activities</Link>
                  <Link to=''className="hover:text-white cursor-pointer">Buzz</Link>
                </div>

                <div className="flex items-end gap-4 text-gray-300 text-sm pr-8">
                  <Link to=''className="hover:text-white cursor-pointer">List Your Show</Link>
                  <Link to=''className="hover:text-white cursor-pointer">Corporates</Link>
                  <Link to=''className="hover:text-white cursor-pointer">Offers</Link>
                  <Link to='/'className="hover:text-white cursor-pointer">Gift Cards</Link>
                </div>
            </div>
            
          </nav>
    </>
    )
}
    


export default SecondaryNav