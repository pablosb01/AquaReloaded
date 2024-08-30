'use client'

import React from "react";
import Slider from "react-slick";

function SliderOne({ object }){
    const settings = {
        infinite : true,
        speed: 1500,
        rows: 1,
        slidesToShow: 1,
        adaptativeHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };    

    return(
        <div className="slider-container">
            <Slider {...settings}>
                {object.map((item, index) => (
                    <a key={index} href={item.href} className="object-cover loca-link" target="_blank">
                        <img src={item.img} className={item.class}/>
                    </a>
                ))}
            </Slider>
        </div>
    )
}

export default SliderOne;