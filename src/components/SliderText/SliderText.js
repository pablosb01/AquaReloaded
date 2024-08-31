"use client";

import { bebas_neue } from "@/app/fonts";
import Slider from "react-slick/lib/slider";

function SliderText({ object }) {

  const firstArray = object

  const settings = {
    arrows: true,
    dots: true,
    fade: true,
    rows: 1,
    slidesPerRow: 1,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="p-8">
      <Slider {...settings} >
      {firstArray.map((item, index) => (
        <div id={index} className="box-border flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between text-slider h-fit lg:h-[500px] overflow-hidden">
          <div className="w-[100%] lg:w-[40%] lg:text-left text-center lg:pl-[2%] text-[15px] lg:text-[18px]">
            <h2
              className={`font-bold sombrita-tres text-4xl pb-4 ${bebas_neue.className}`}
            >
                {item.title}
            </h2>
            <p>
                {item.info}
            </p>
            <h2 className="font-bold sombrita-tres text-2xl py-4">
              Equipamiento:
            </h2>
              {item.equip && item.equip.map((equip, index) => (
                <p id={index}>{equip}</p>
              ))}
          </div>
          <div className="lg:w-[60%]">
            <img
              className={item.class}
              src={item.img}
            />
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default SliderText;