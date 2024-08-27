"use client";

import { bebas_neue } from "@/app/fonts";
import Slider from "react-slick/lib/slider";

function SliderText({ object }) {
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
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="p-10">
      <Slider {...settings} >
      {object.map((index, item) => (
        <div id={index} className="flex flex-col lg:flex-row gap-12 items-center justify-between text-slider h-fit lg:p-10 lg:h-[500px] overflow-hidden">
          <div className="w-[90%] lg:w-[50%] pl-[2%] text-[15px] lg:text-[18px]">
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
              {item.equip && item.equip.map((index, equip) => (
                <p id={index}>{equip}</p>
              ))}
          </div>
          <img
            className={item.class}
            src={item.img}
          />
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default SliderText;