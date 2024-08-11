import { bebas_neue, roboto } from "@/app/fonts";

export default function lockers() {
    return(
        <main className={`w-full m-w-[2500px] min-h-[80vh] h-full ${roboto.className}`}>
            <div className="flex flex-col py-8 items-center text-[18px] w-full justify-center">
                <div className="w-[90%] items-center lg:w-[70%] h-fit flex flex-col gap-8">
                    <h2 className={`text-center text-6xl font-bold ${bebas_neue.className} sombrita`}>RESERVA TU CONSIGNA / LOCKER PARA AQUASELLA</h2>
                    <div className="w-[90%] p-[1%] flex flex-col gap-2">
                        <p>En nuestra 27Ed. de Aquasella, dispondremos del <strong className="text-rose-500">Servicio de Consignas (Lockers)</strong> durante el festival para que guardes tus pertenencias.</p>
                        <p className="font-bold sombrita-tres text-center">Los lockers estarán todos ubicados en la Zona de día, en un área estratégica entre las zonas de descanso y el recinto de conciertos.</p>
                    </div>                
                    <div className="flex gap-4 items-center w-[90%]">
                        <div className="flex flex-col gap-4 w-[50%]">
                            <p>Estos lockers se pueden abrir ilimitadamente con un código, este código se puede compartir con otras personas para poder compartir un locker.</p>
                            <p>Todos tienen un enchufe con dos USB y un USB-C para carga de móviles (no incluye el cable).</p>
                            <p>Sólo habrá la posibilidad de reservar lockers online para todos los días del festival. Las reservas de un sólo día sólo se podrán hacer en el propio festival.</p>
                            <p>Se ubicarán todos en la Zona de día, en un área estratégica entre las zonas de descanso y el recinto de conciertos.</p>
                        </div>
                        <img src="https://aquasella.com/wp-content/uploads/2024/06/2.-Festival-8ft.jpg" className="w-[50%]"/>
                    </div>
                    <div className="flex flex-col gap-4 w-[90%]">
                        <a className="self-center text-2xl text-amber-500 hover:text-rose-500 loca-link">
                            RESERVA AQUI
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}