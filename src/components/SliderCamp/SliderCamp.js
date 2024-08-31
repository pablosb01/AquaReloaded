'use client';

import React from "react";
import Slider from "react-slick";

function SliderCamp() {
  const settings = {
    arrows: false,
    fade: true,
    rows: 1,
    slidesPerRow: 2,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div>
            <img className='slidercamp-img' src='https://aquasella.com/wp-content/uploads/2023/11/zona-descanso-3-1024x683.jpg' />
        </div>
        <div>
            <img className='slidercamp-img' src='https://aquasella.com/wp-content/uploads/2023/11/zona-descanso-4-1024x683.jpg' />
        </div>
        <div>
            <img className='slidercamp-img' src='https://aquasella.com/wp-content/uploads/2023/11/zona-descanso-6-1024x683.jpg' />
        </div>
        <div>
            <img className='slidercamp-img' src='https://aquasella.com/wp-content/uploads/2023/02/IMG_3827-1024x683.jpg' />
        </div>
        <div>
            <img className='slidercamp-img' src='https://aquasella.com/wp-content/uploads/2023/11/zona-descanso-7-1024x683.jpg' />
        </div>
        <div>
            <img className='slidercamp-img' src='https://aquasella.com/wp-content/uploads/2023/11/zona-descanso-8jpg-1024x683.jpg' />
        </div>
      </Slider>
    </div>
  );
}

export default SliderCamp;