import React from "react";
import Video from "@/components/Video/Video.jsx";
import MerchanSlider from "@/components/MerchanSlider/MerchanSlider";
import SliderOne from "@/components/SliderOne/SliderOne";
import { NewsArray, MerchArray } from "../components/Test/TestNewsPics";

/* import SimpleSlider from "../components/SimpleSlider/SimpleSlider";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */
/* import Image from "next/image";
import Link from "next/link"; */

export default function Home() {
  return (
    /* ESCONDO TODO EL CONTENIDO DE LA PAGINA EN MOVIL DE MOMENTO */

    <main
      className="min-h-fit h-fit flex flex-col items-center bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/mimictears.png')",
        backgroundPosition: "center bottom",
        paddingBottom: "3rem",
      }}
    >
      <Video />
      <div className="flex flex-col justify-between w-[90%] lg:flex-row h-fit px-4">
        <div className="h-fit flex flex-col items-center lg:w-[40%] w-full box-border lg:p-5 my-5 mx-auto lg:m-5 pb-8">
          <div className="lg:self-start pb-5">
            <p className="lg:text-6xl text-4xl text-white sombrita">Noticias</p>
          </div>
          <div className="w-[99%] lg:w-[100%]">
            <SliderOne object={NewsArray} />
          </div>
        </div>
        <div className="h-fit flex flex-col items-center lg:w-[40%] w-full box-border lg:p-5 my-5 mx-auto lg:m-5 pb-8">
          <div className="lg:self-end pb-5">
            <p className="lg:text-6xl text-4xl text-white sombrita">
              MERCHANDISING
            </p>
          </div>
          <div className="w-[99%] lg:w-[100%] h-fit">
            <SliderOne object={MerchArray} />
          </div>
        </div>
      </div>
    </main>
  );
}
