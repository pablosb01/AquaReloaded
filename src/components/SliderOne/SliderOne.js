'use client'

import React from "react";
import Slider from "react-slick";

function SliderOne({ object }){
    const settings = {
        infinite : true,
        speed: 1000,
        rows: 1,
        slidesToShow: 1,
        adaptativeHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };    

    return(
        <div className="slider-container">
            <Slider {...settings}>
                {object.map((item, index) => (
                    <div key={index} className="object-cover">
                        <img src={item.img} className={item.class}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderOne;