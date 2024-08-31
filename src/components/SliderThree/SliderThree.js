'use client'

import Slider from "react-slick/lib/slider";

function SliderThree({ object }){
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
    autoplaySpeed: 5000,
    pauseOnHover: true,
    };
    return (
        <div className="slider-container">
            <Slider {... settings}>
                {object.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} className={item.class}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}


export default SliderThree;