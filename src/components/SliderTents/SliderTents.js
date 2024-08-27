"use client";

import { bebas_neue } from "@/app/fonts";
import React from "react";
import Slider from "react-slick";

function SliderTents() {
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
      <Slider {...settings}>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between text-slider h-fit lg:p-10 lg:h-[500px] overflow-hidden">
          <div className="w-[90%] lg:w-[50%] pl-[2%] text-[15px] lg:text-[18px]">
            <h2 className={`font-bold sombrita-tres text-4xl pb-4 ${bebas_neue.className}`}>
              Emperor Tent
            </h2>
            <p>
              Si lo vuestro es ir en grupo a todas partes, la Emperor Tent
              totalmente equipada es vuestra solución de alojamiento Premium
              hasta 8 personas.
            </p>
            <h2 className="font-bold sombrita-tres text-2xl py-4">
              Equipamiento:
            </h2>
            <p>Colchones espuma</p>
            <p>Juego completo de ropa de cama</p>
            <p>Mesilla y sillas</p>
            <p>Linterna</p>
            <p>Candado</p>
            <p>Welcome Drink</p>
            <p>Desayuno buffet</p>
            <p>
              Medidas aproximadas de la tienda: hasta 8m x 5m, con dos palos
            </p>
          </div>
          <img
            className="slidertent-img w-[5%] lg:w-[50%] pr-[2%]"
            src="https://aquasella.com/wp-content/uploads/2024/03/emperor-2-1024x768.jpg"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between text-slider h-fit lg:p-10 lg:h-[500px] overflow-hidden">
          <div className="w-[90%] lg:w-[50%] pl-[2%] text-[15px] lg:text-[18px]">
            <h2 className={`font-bold sombrita-tres text-4xl pb-4 ${bebas_neue.className}`}>Bell Tent</h2>
            <p>
              Cuando quieres ir al festival pero no quieres ni cargar, ni montar
              y desmontar tu tienda, la Bell Tent totalmente equipada es tu
              solución de alojamiento premium. Capacidad para alojar de 1 a 4
              personas.
            </p>
            <h2 className="font-bold sombrita-tres text-2xl py-4">
              Equipamiento:
            </h2>
            <p>Colchones espuma</p>
            <p>Juego completo de ropa de cama</p>
            <p>Mesilla y sillas</p>
            <p>Linterna</p>
            <p>Candado</p>
            <p>Wlcome Drink</p>
            <p>Desayuno buffet</p>
            <p>Medidas aproximadas de la tienda: hasta 5m de diámetro</p>
          </div>
          <img
            className="slidertent-img w-[5%] md:w-[50%] pr-[2%]"
            src="https://aquasella.com/wp-content/uploads/2024/03/bell-tent-colchn-espuma-image-50439681-2417x1813-1-1024x768.png"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between text-slider h-fit lg:p-10 md:h-[500px] overflow-hidden">
          <div className="w-[90%] md:w-[50%] pl-[2%] text-[15px] lg:text-[18px]">
            <h2 className={`font-bold sombrita-tres text-4xl pb-4 ${bebas_neue.className}`}>
              Deluxe Doble
            </h2>
            <p>
              Adaptamos el confort de las Bell Tent a un formato más económico y
              personal. Tiendas con capacidad para una o dos personas.
            </p>
            <h2 className="font-bold sombrita-tres text-2xl py-4">
              Equipamiento:
            </h2>
            <p>Colchones espuma</p>
            <p>Juego completo de ropa de cama</p>
            <p>Linterna</p>
            <p>Candado</p>
            <p>Wlcome Drink</p>
            <p>Desayuno buffet</p>
            <p>Medidas aproximadas de la tienda: 2,35m x 2,35m</p>
          </div>
          <img
            className="slidertent-img w-[5%] md:w-[50%] pr-[2%]"
            src="https://aquasella.com/wp-content/uploads/2024/03/deluxe-doble-colchn-espuma-image-50382593-2000x2666-1-1024x986.png"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between text-slider h-fit lg:p-10 md:h-[500px] overflow-hidden">
          <div className="w-[90%] md:w-[50%] pl-[2%] text-[15px] lg:text-[18px]">
            <h2 className={`font-bold sombrita-tres text-4xl pb-4 ${bebas_neue.className}`}>
              Deluxe Individual
            </h2>
            <p>Es el mismo concepto Deluxe Doble pero en formato Individual.</p>
            <h2 className="font-bold sombrita-tres text-2xl py-4">
              Equipamiento:
            </h2>
            <p>Colchones espuma</p>
            <p>Juego completo de ropa de cama</p>
            <p>Linterna</p>
            <p>Candado</p>
            <p>Wlcome Drink</p>
            <p>Desayuno buffet</p>
            <p>Medidas aproximadas de la tienda: 2,35m x 2,35m</p>
          </div>
          <img
            className="slidertent-img w-[5%] md:w-[50%] pr-[2%]"
            src="https://aquasella.com/wp-content/uploads/2024/03/deluxe-individual-colchn-espuma-image-67203329-2417x1813-1-1024x1024.png"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between text-slider h-fit lg:p-10 md:h-[500px] overflow-hidden">
          <div className="w-[90%] md:w-[50%] pl-[2%] text-[15px] lg:text-[18px]">
            <h2 className={`font-bold sombrita-tres text-4xl pb-4 ${bebas_neue.className}`}>Easy Tent</h2>
            <p>
              Tiendas ya montadas, en formato para hasta dos personas en la zona
              glamping del Festival, donde alojarte y disfrutar con total
              comodidad. Sin necesidad de cargar, montar y desmontar la tienda,
              ni pelear por un pedazo de terreno aceptable, nosotros lo tenemos
              todo listo para que cuando llegues solo te tengas que preocupar de
              divertirte.
            </p>
            <h2 className="font-bold sombrita-tres text-2xl py-4">
              Equipamiento:
            </h2>
            <p>Suelo acolchado (esterillas tipo yoga)</p>
            <p>Linterna</p>
            <p>Candado</p>
            <p>Medidas aproximadas de la tienda: 2,35m x 2,35m</p>
            <p>Buen rollo de serie</p>
          </div>
          <img
            className="slidertent-img w-[5%] md:w-[50%] pr-[2%]"
            src="https://aquasella.com/wp-content/uploads/2024/03/modificada-2000x3000-2-910x1024.png"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between text-slider h-fit lg:p-10 md:h-[500px] overflow-hidden">
          <div className="w-[90%] md:w-[50%] pl-[2%] text-[15px] lg:text-[18px]">
            <h2 className={`font-bold sombrita-tres text-4xl pb-4 ${bebas_neue.className}`}>Teepee tent</h2>
            <p>
            Las Teepee Tents son muy parecidas a las Bell Tent, con el mismo diámetro y capacidad para hasta 4 personas, pero más altas.
            </p>
            <h2 className="font-bold sombrita-tres text-2xl py-4">
              Equipamiento:
            </h2>
            <p>Colchones de espuma</p>
            <p>Juego completo de cama</p>
            <p>Mesilla y Papelera</p>
            <p>Linterna</p>
            <p>Candado</p>
            <p>Welcome Drink</p>
            <p>Desayuno Buffet</p>
            <p>Medidas aproximadas de la tienda: hasta 5m de diámetro</p>
          </div>
          <img
            className="slidertent-img w-[5%] md:w-[50%] pr-[2%]"
            src="https://aquasella.com/wp-content/uploads/2024/03/TEEPPEE-1-1024x768-1.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderTents;
