import { bebas_neue, roboto } from "@/app/fonts";
import LockGT from "@/components/LockGT/LockGT";
import QuestTableLock from "@/components/QuestTable/QuestTableLock";

export default function lockers() {
    return(
        <main className={`w-full m-w-[2500px] min-h-[80vh] h-full ${roboto.className}`}>
            <div className="flex flex-col py-8 items-center text-[18px] w-full justify-center">
                <div className="w-[99%] items-center lg:w-[80%] h-fit flex flex-col gap-10">
                    <h2 className={`text-center text-6xl font-bold ${bebas_neue.className} sombrita`}>RESERVA TU CONSIGNA / LOCKER PARA AQUASELLA</h2>
                    <div className="w-[90%] p-[1%] flex flex-col gap-2 lg:text-left text-center">
                        <p>En nuestra 27Ed. de Aquasella, dispondremos del <strong className="text-rose-500">Servicio de Consignas (Lockers)</strong> durante el festival para que guardes tus pertenencias.</p>
                        <p className="font-bold sombrita-tres text-center">Los lockers estarán todos ubicados en la Zona de día, en un área estratégica entre las zonas de descanso y el recinto de conciertos.</p>
                    </div>                
                    <div className="flex lg:flex-row flex-col-reverse gap-4 items-center w-[90%]">
                        <div className="flex flex-col gap-4 lg:w-[50%]">
                            <p>Estos lockers se pueden abrir ilimitadamente con un código, este código se puede compartir con otras personas para poder compartir un locker.</p>
                            <p>Todos tienen un enchufe con dos USB y un USB-C para carga de móviles (no incluye el cable).</p>
                            <p>Sólo habrá la posibilidad de reservar lockers online para todos los días del festival. Las reservas de un sólo día sólo se podrán hacer en el propio festival.</p>
                            <p>Se ubicarán todos en la Zona de día, en un área estratégica entre las zonas de descanso y el recinto de conciertos.</p>
                        </div>
                        <img src="https://aquasella.com/wp-content/uploads/2024/06/2.-Festival-8ft.jpg" className="lg:w-[50%] w-full"/>
                    </div>
                    <div className="flex flex-col gap-6 w-[90%]">
                        <a href="https://reservations.be.mlunit.eu/iframe/78" target="_blank" className={`box-border flex self-center text-4xl text-stone-800 bg-rose-500 hover:scale-105 hover:text-stone-200 loca-link lockers-btn tracking-wide ${bebas_neue.className}`}>
                            <p className="translate-y-0.5">RESERVA AQUÍ</p>
                        </a>
                        <p className="text-center lg:text-left">Las reservas se pueden hacer online exclusivamente hasta el mismo día de la apertura del festival a las 10.00h. A partir de esta hora ya sólo se podrán realizar en el propio festival (y sólo si quedan disponibles).</p>
                        <h4 className={`text-center font-bold text-3xl tracking-wide sombrita-tres ${bebas_neue.className}`}>RESERVA TU CONSIGNA/LOCKER SEGÚN EL TAMAÑO QUE NECESITES:</h4>
                        <div className="box-border relative flex lg:flex-row flex-col gap-1 items-center">
                            <div className="lockers-box flex flex-col w-full">
                                <h4 className="border-b-2 border-stone-700 py-2 text-2xl text-center font-bold">CONSIGNA TAMAÑO S</h4>
                                <div className="py-4 px-1">
                                    <p>Locker pequeño con enchufe USB.</p>
                                    <p>Medidas: 15x30x35 cm</p>
                                    <strong>Precio Locker: 15€</strong>
                                </div>
                            </div>
                            <div className="lockers-box flex flex-col w-full">
                                <h4 className="border-b-2 border-stone-700 py-2 text-2xl text-center font-bold">CONSIGNA TAMAÑO M</h4>
                                <div className="py-4 px-1">
                                    <p>Locker mediano con enchufe USB.</p>
                                    <p>Medidas: 25X28X40 cm</p>
                                    <strong>Precio Locker: 21€</strong>
                                </div>
                            </div><div className="lockers-box flex flex-col w-full">
                                <h4 className="border-b-2 border-stone-700 py-2 text-2xl text-center font-bold">CONSIGNA TAMAÑO L</h4>
                                <div className="py-4 px-1">
                                    <p>Locker grande con enchufe USB.</p>
                                    <p>Medidas: 30x30x40 cm</p>
                                    <strong>Precio Locker: 30€</strong>
                                </div>
                            </div><div className="lockers-box flex flex-col w-full">
                                <h4 className="border-b-2 border-stone-700 py-2 text-2xl text-center font-bold">CONSIGNA TAMAÑO LD</h4>
                                <div className="py-4 px-1">
                                    <p>Locker grande – profundo con enchufe USB.</p>
                                    <p>Medidas: 30x30x50 cm</p>
                                    <strong>Precio Locker: 35€</strong>
                                </div>
                            </div><div className="lockers-box flex flex-col w-full">
                                <h4 className="border-b-2 border-stone-700 py-2 text-2xl text-center font-bold">CONSIGNA TAMAÑO XL</h4>
                                <div className="py-4 px-1">
                                    <p>Locker extragrande con enchufe USB.</p>
                                    <p>Medidas: 33x40x53 cm</p>
                                    <strong>Precio Locker: 45€</strong>
                                </div>
                            </div>
                        </div>
                        <a href="https://reservations.be.mlunit.eu/iframe/78" target="_blank" className={`box-border flex self-center text-4xl text-stone-800 bg-rose-500 hover:scale-105 hover:text-stone-200 loca-link lockers-btn tracking-wide ${bebas_neue.className}`}>
                            <p className="translate-y-0.5">RESERVA AQUÍ</p>
                        </a>
                        <p>Las reservas se pueden hacer online exclusivamente hasta el mismo día de la apertura del festival a las 10.00h. A partir de esta hora ya sólo se podrán realizar en el propio festival (y sólo si quedan disponibles).</p>
                    </div>
                    <div className="w-[90%] flex flex-col gap-6">
                        <h4 className={`text-center font-bold text-3xl tracking-wide sombrita-tres ${bebas_neue.className}`}>PREGUNTAS FRECUENTES SOBRE LAS CONSIGNAS/LOCKERS</h4>
                        <QuestTableLock/>
                        <h4 className={`text-center font-bold text-3xl tracking-wide sombrita-tres ${bebas_neue.className}`}>CONDICIONES GENERALES RELATIVAS A LAS RESERVAS MOBILE LOCKER – STORE & ENJOY</h4>
                        <LockGT/>
                    </div>
                </div>
            </div>
        </main>
    )
}