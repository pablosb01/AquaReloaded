'use client';

import React from "react";
import Slider from "react-slick";

function MerchanSlider() {
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
        <a target='_blank' href="https://aquasellashop.com">
            <img className='slider-imguwu' src='/merch/mrc.png' />
          </a>
        </div>
        <div>
          <a target='_blank' href="https://aquasellashop.com/inicio/119-185-sudadera-gris.html#/2-tamano-m">
            <img className='slider-imguwu' src='/merch/sudadera-gris.jpg' />
          </a>
        </div>
        <div>
        <a target='_blank' href="https://aquasellashop.com/inicio/126-197-camiseta-sinte-aquasella-2024.html#/1-tamano-s">
            <img className='slider-imguwu' src='/merch/camiseta-sinte-aquasella-2024.jpg' />
          </a>
        </div>
        <div>
        <a target='_blank' href="https://aquasellashop.com/inicio/130-201-camiseta-techno-aquasella-2024-.html#/1-tamano-s">
            <img className='slider-imguwu' src='/merch/camiseta-techno-aquasella-2024-.jpg' />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default MerchanSlider;