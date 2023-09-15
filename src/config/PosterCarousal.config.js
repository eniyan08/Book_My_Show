
const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1280,   // for 1024 pixels
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },  
        {
            breakpoint: 1024,   // for 1024 pixels
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },    
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
}

export default settings