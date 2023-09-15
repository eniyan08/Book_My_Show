import React from 'react'
import Slider from "react-slick";


const EntertainmentCard = (props) => {
    return (
        <>
        <div className='w-full h-30 lg:pb-12 md:pb-4 sm:pb-2 px-4 pt-4'>
            <img className='w-full h-full sm:w-full h-full rounded-3xl '
                 src={props.src}
                 alt="Entertainment Image"
            />    
        </div>
        </>
    )
}

const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/upskill-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/dance-classes-collection-202211140440.png",
    ];

    const settingsMD = {
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 4,
        InitialSlide: 0,
        rows: 2
    }

    const settingsLG = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        InitialSlide: 0,
        
    }

    const settingsSM = {
        infinite: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        InitialSlide: 0,
        rows: 2
    }

    return (
        <>
        <div className='hidden 2xl:block' >
            {/* this is for extra large screen */}
        <Slider {...settingsLG}>
            {EntertainmentImage.map((image) => (
                <EntertainmentCard src={image} />
            ))}
        </Slider>
        </div>
        

        <div className='hidden 2xl:hidden md:block sm:hidden'>
        <Slider {...settingsMD}>
            {/* this is for medium screen */}
            {EntertainmentImage.map((image) => (
                <EntertainmentCard src={image} />
            ))}
        </Slider>
        </div>

        

        <div className='md:hidden sm:block'>
            {/* this is for small screen */}
        <Slider {...settingsSM}>
            {EntertainmentImage.map((image) => (
                <EntertainmentCard src={image} />
            ))}
        </Slider>
        </div>
        </>
    )
}


export default EntertainmentCardSlider