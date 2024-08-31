import React from "react";
import Video from "@/components/Video/Video.jsx";
import SliderOne from "@/components/SliderOne/SliderOne";
import { NewsArray, MerchArray } from "@/components/Test/TestNewsPics"; // Updated import path for consistency

export default function Home() {
  return (
    /* Hiding content on mobile for now */
    <main
      className="min-h-fit h-fit flex flex-col items-center bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/mimictears.png')",
        backgroundPosition: "center bottom",
        backgroundSize: "cover", // Ensures the background image covers the entire area
        /* paddingBottom: "3rem", */
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
          <div className="w-[99%] lg:w-[100%] h-fit pb-[50%]">
            <SliderOne object={MerchArray} />
          </div>
        </div>
      </div>
    </main>
  );
}
