export default function Video() {
  return (
    <>
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/sT4lpLhzUYU?si=3TLGc-FuXAlYXauE?enablejsapi=1&start=50&autoplay=1&mute=1&loop=1&controls=0&origin=https" 
        title="YouTube video player" 
        frameborder="0" 
        className="absolute top-0 left-0 w-[2400px] h-[1048px] object-cover video-embed"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
         {/* <iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/sT4lpLhzUYU?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Faquasella.com&amp;widgetid=1;autoplay=1&mute=1&loop=1`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 left-0 w-full h-full object-cover video-embed"
            title="YouTube Video Background"
        ></iframe> */}
      {/* Aquí puedes agregar más contenido superpuesto si lo deseas */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full my-auto mx-auto text-white text-center">
        <h1 className="text-4xl font-bold">Bienvenido a Mi Sitio Web</h1>
        <p className="text-xl mt-4">Disfruta de este video de fondo</p>
      </div>
    </div>
    </>
  );
}
