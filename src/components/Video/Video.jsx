"use client";

import NameRotator from "../NameRotator/NameRotator";
import { artistas } from './Artistas.js'

export default function Video() {
  return (
    <>
      <div className="box-border relative top-0 left-0 w-full h-[35vw] min-h-[480px] overflow-hidden z-0">
        <div className="absolute box-border flex flex-nowrap w-full h-full overflow-hidden">
          <iframe
              width="720"
              height="480"
              src={`https://www.youtube.com/embed/sT4lpLhzUYU?si=3TLGc-FuXAlYXauE?enablejsapi=1&end=220&rel=0&modestbranding=0&autoplay=1&mute=1&loop=1&controls=0&origin=https&fullscreen=1&playlist=sT4lpLhzUYU`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="relative top-0 left-0 video-embed overflow-hidden"
              allowFullScreen={true}
              title="YouTube Video Background"
          ></iframe>
        </div>
      {/* Aquí puedes agregar más contenido superpuesto si lo deseas */}
      <div className="relative z-10 gap-4 flex flex-col items-center justify-center w-full h-full text-white text-justify sombrita">
        <h1 className="text-5xl font-bold tracking-wide">14·15·16·17·18 AGO 2024</h1>
        <div className="text-7xl gap-2 flex-row flex font-bold">
          <h1>27</h1>
          <sup className="text-4xl">th</sup>
          <h1 className='tracking-wider'>EDITION</h1>
        </div>
        <h1 className={`text-5xl font-bold tracking-wider`}>ARRIONDAS,  CANGAS DE ONIS</h1>
        <NameRotator names={artistas}/>
      </div>
    </div>
    </>
  ); 
}