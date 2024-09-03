"use client";

import { useState, useEffect } from "react";

export default function PopUp() {
  const [pop, setPop] = useState(true);

/*   useEffect(()=>{
    if(!pop){
        setPop(true)
    }
  },[]) */


  return (
    <div
      className={
        pop
          ? "fixed w-[100%] flex flex-col items-center justify-center h-screen bg-stone-900 bg-opacity-70 z-50 text-2xl md:text-3xl overflow-hidden pb-24"
          : "hidden"
      }
    >
      <div className="flex flex-col z-50 w-[90%] lg:w-[50%] justify-center items-center bg-stone-600 bg-opacity-90 p-6 rounded-xl">
        <button onClick={() => setPop(!pop)} className="z-50 self-end">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-4xl md:text-6xl sombrita">DISCLAIMER</h1>
        <p className="pt-6">
          Este sitio web ha sido desarrollado con fines educativos y/o
          comerciales en el caso de que la marca Aquasella así lo viese
          conveniente, pero nunca enfocada a un ámbito de plagio o robo de
          imagen de marca.
        </p>
        <p className='pt-4'>
          Todas las imágenes e información proporcionada en este sitio web ha
          sido extraída de los archivos públicos de Aquasella con el fin de
          rendir homenaje y representar nuestra visión ideal de su sitio oficial
          de la manera mas fiel posible, nunca con intención de suplantar o
          plagiar el contenido original.
        </p>
      </div>
    </div>
  );
}
