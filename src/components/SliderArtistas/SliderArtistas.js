'use client';

import React from "react";
import Slider from "react-slick";

function SliderArtistas() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='slider-imguwu2'src='/lineup/global.jpg' />
        </div>
        <div>
          <img className='slider-imguwu2' src='/lineup/miercoles.jpg' />
        </div>
        <div>
          <img className='slider-imguwu2' src='/lineup/jueves.jpg' />
        </div>
        <div>
          <img className='slider-imguwu2' src='/lineup/viernes.jpg' />
        </div>
        <div>
          <img className='slider-imguwu2' src='/lineup/sabado.jpg' />
        </div>
        <div>
          <img className='slider-imguwu2' src='/lineup/domingo.jpg' />
        </div>
      </Slider>
    </div>
  );
}

export default SliderArtistas;

