'use client';

import React from "react";
import Slider from "react-slick";

function SliderTour() {
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
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-03-at-19.02.34-1-731x1024.jpeg' />
        </div>
        <div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-03-at-17.06.10-1024x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-02-at-18.44.01.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-10-at-22.21.02-724x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-14.36.37-1021x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-27-at-10.54.22.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-08-at-14.44.36-819x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/05/BeRENATTA-06-07-AQUASELLA-POST.jpg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-15.13.00-819x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-15-at-15.36.58-1024x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-22-at-17.57.50-1024x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/04/feedaquasellaontheroad.jpg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/05/tour-ciudad-real-819x1024.png' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-15-at-13.35.44-819x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/04/posttttttttt-819x1024.jpg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-14-at-18.42.58.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-04-at-13.10.21-768x1076.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-12-at-16.52.16-819x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-14-at-20.13.24-818x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/03/Publi-06MarzFeed-819x1024.png' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-26-at-21.24.05.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-12-at-17.49.03-1024x1024.jpeg' />
        </div><div>
          <img className='tour-sldr-img'src='https://aquasella.com/wp-content/uploads/2024/03/post-ben-sims-819x1024.jpg' />
        </div>
      </Slider>
    </div>
  );
}

export default SliderTour;