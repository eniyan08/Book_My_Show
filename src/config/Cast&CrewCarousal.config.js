const CarousalSettings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1280,   // for above 1024 pixels
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },  
        {
            breakpoint: 1024,   // for 1024 pixels
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },    
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
}

export default CarousalSettings