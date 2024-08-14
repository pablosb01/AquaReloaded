'use client'

import React from "react";
import Slider from "react-slick";
import NewsArray from "../Test/TestNewsPics";

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

    console.log(object)
    return(
        <div className="slider-container">
            <Slider {...settings}>
                {NewsArray.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} className={item.class} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderOne;