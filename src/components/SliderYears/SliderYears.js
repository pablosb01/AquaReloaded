'use client';

import React from "react";
import Slider from "react-slick";

function SliderYears() {
  const settings = {
    infinite: true,
    speed: 1500,
    rows: 1,
    slidesToShow: 1,
    adaptativeHeight: true,
    slidesPerRow: 3,
    slidesPerScroll: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/1997-b-768x1086.jpg' />
        </div>
        <div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/1998-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/1999-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2000-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2001-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2002-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2003-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2004-b-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2005-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2006-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2007-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2008-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2009-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2010-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2011-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2012-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2013-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2014-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2015-768x1088.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2016-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2017-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/2018-768x1086.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2021/10/facebook-FULL-LINEUP-2019-768x1080.jpg' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2022/04/aqs2022_1080x1350-2-768x960.png' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2023/05/aqs_1080x1350-1-768x960.png' />
        </div><div>
          <img className='years-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/07/AQS_Cartel_1080x1350-2.png' />
        </div>
      </Slider>
    </div>
  );
}

export default SliderYears;