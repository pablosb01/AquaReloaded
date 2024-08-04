import { inter, roboto_mono, bebas_neue } from "../../app/fonts";

export default function Video() {
  return (
    <>
      <div className="border-box absolute top-0 left-0 w-full pt-6 h-[700px] overflow-hidden z-0">
        <div className="absolute flex w-full h-full">
          <iframe
              width="720"
              height="480"
              src={`https://www.youtube.com/embed/sT4lpLhzUYU?si=3TLGc-FuXAlYXauE?enablejsapi=1&autoplay=1&mute=1&loop=1&controls=0&origin=https&fullscreen=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="relative top-0 left-0 object-cover my-0 mx-auto video-embed"
              allowFullScreen={true}
              title="YouTube Video Background"
          ></iframe>
        </div>
      {/* Aquí puedes agregar más contenido superpuesto si lo deseas */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center">
        <h1 className="text-4xl font-bold">14·15·16·17·18 AGO 2024</h1>
        <h1 className="text-6xl font-bold">27<sup className="text-4xl">th</sup>E D I T I O N</h1>
        <h1 className={`text-3xl font-bold`}>A R R I O N D A S ,  C A N G A S D E O N I S</h1>
      </div>
    </div>
    </>
  ); 
}