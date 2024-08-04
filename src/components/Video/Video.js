export default function Video() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/sT4lpLhzUYU?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Faquasella.com&widgetid=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 left-0 w-full h-full object-cover"
            title="YouTube Video Background"
        ></iframe>
      {/* Aquí puedes agregar más contenido superpuesto si lo deseas */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center">
        <h1 className="text-4xl font-bold">Bienvenido a Mi Sitio Web</h1>
        <p className="text-xl mt-4">Disfruta de este video de fondo</p>
      </div>
    </div>
    </>
  );
}
