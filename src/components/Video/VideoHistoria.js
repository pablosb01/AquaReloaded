export default function VideoHistoria() {
  return (
    <div className="box-border relative top-0 left-0 w-full h-[25vw] min-h-[360px] overflow-hidden z-0">
      <div className="absolute box-border mx-auto flex flex-nowrap w-full h-full overflow-hidden">
        <iframe
          width="720"
          height="480"
          src={`https://www.youtube.com/embed/sT4lpLhzUYU?si=3TLGc-FuXAlYXauE?enablejsapi=1&end=60&rel=0&modestbranding=0&autoplay=1&mute=1&loop=1&controls=0&origin=https&fullscreen=1&playlist=sT4lpLhzUYU`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="relative top-0 left-0 video-embed m-h-[400px] overflow-hidden flex flex-nowrap"
          allowFullScreen={true}
          title="YouTube Video Background"
        ></iframe>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-[400px] text-white sombrita">
        <h1 className={`text-6xl font-bold tracking-wider`}>
          Nuestra historia
        </h1>
        <h2 className="text-3xl font-bold tracking-wider">AQUASELLA FEST DESDE 1997</h2>
      </div>
    </div>
  );
}
