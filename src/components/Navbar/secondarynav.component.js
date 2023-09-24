import React from "react";

const SecondaryNav = () => {
    return (
        <>
    <nav className="bg-gray-800 px-28 py-2 hidden lg:block">
            <div className="container mx-auto flex items-center gap-3 py-1 justify-between hover:text-white">
                <div className="flex items-center gap-4 px-7 text-gray-300 text-sm">
                  <a className="hover:text-white cursor-pointer">Movies</a>
                  <a className="hover:text-white cursor-pointer">Stream</a>
                  <a className="hover:text-white cursor-pointer">Events</a>
                  <a className="hover:text-white cursor-pointer">Plays</a>
                  <a className="hover:text-white cursor-pointer">Sports</a>
                  <a className="hover:text-white cursor-pointer">Activities</a>
                  <a className="hover:text-white cursor-pointer">Buzz</a>
                </div>

                <div className="flex items-end gap-4 text-gray-300 text-sm px-5">
                  <a className="hover:text-white cursor-pointer">List Your Show</a>
                  <a className="hover:text-white cursor-pointer">Corporates</a>
                  <a className="hover:text-white cursor-pointer">Offers</a>
                  <a className="hover:text-white cursor-pointer">Gift Cards</a>
                </div>
            </div>
            
          </nav>
    </>
    )
}
    


export default SecondaryNav