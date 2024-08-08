import { bebas_neue, roboto } from "@/app/fonts";

export default function zonadescanso() {
    return (
        <main className="w-full m-w-[2500px] h-fit">
            <div className={`relative flex flex-col gap-6 items-center w-full h-fit box-border md:py-16 py-4 ${roboto.className}`}>
                <div className="relative w-full flex flex-col items-center justify-center md:h-[400px] h-[300px] overflow-hidden">
                    <div className="absolute w-full flex justify-center">
                        <img src="https://aquasella.com/wp-content/uploads/2023/05/CAMPING-1024x576.jpg" className="m-w-auto h-auto md:w-[50%] w-[80%]"/>
                    </div>
                    <p className={`md:text-6xl text-4xl font-bold ${bebas_neue.className} sombrita`}>Zona <a href="#rest-zone">descanso</a> y gampling</p>
                    {/*<p className={`md:text-2xl text-xl font-bold ${bebas_neue.className} sombrita`}>pulsa para ver más</p>*/}
                </div>
                <div id="rest-zone" className="relative flex flex-col gap-12 w-full py-24 box-border items-center">
                    <div className="relative flex flex-col gap-4 md:w-[50%] w-[80%] text-[18px]">
                        <h4 className="sombrita-tres self-center text-3xl">ZONA DESCANSO</h4>
                        <p>Como cada año, podrás alojarte en nuestra Zona de Descanso instalada en el recinto del festival, que permanecerá abierta desde el miércoles 14 a las 17:00h hasta el lunes 19 de agosto a las 12:00h de forma ininterrumpida.</p>
                        <p>Para poder acceder a la zona de Descanso, es necesario disponer de uno de estos productos: <br/> <strong className="text-rose-500">Abono general + Zona de Descanso </strong>*</p>
                        <p>También podrás tener acceso a la Zona de Descanso si ya tienes tu Abono General y adquieres el <strong className="text-rose-500">UPGRADE ZONA DE DESCANSO </strong>*</p>
                        <p className={`self-center font-bold text-amber-500 text-2xl tracking-wide ${bebas_neue.className}`}>* Cada ticket corresponde a una persona y no a una tienda de campaña.</p>
                    </div>
                    <div className="relative w-full flex flex-col items-center justify-center md:h-[400px] h-[300px] overflow-hidden">
                    <div className="absolute w-full flex justify-center">
                        <img src="https://aquasella.com/wp-content/uploads/2023/11/zona-descanso-2-1024x683.jpg" className="m-w-auto h-auto md:w-[50%] w-[80%]"/>
                    </div>
                    <p className={`md:text-6xl text-4xl font-bold ${bebas_neue.className} sombrita`}>Servicios de la zona de descanso</p>
                    {/*<p className={`md:text-2xl text-xl font-bold ${bebas_neue.className} sombrita`}>pulsa para ver más</p>*/}
                    </div>
                    <div className="relative flex flex-col gap-4 md:w-[50%] w-[80%] text-[18px]">
                        <p>Zonas de BAÑO Y DUCHAS,  con agua caliente *.</p>
                        <p>Sanitarios provistos de Baños, Lavabos, Espejos, Enchufes y atendidos por un equipo de mantenimiento y limpieza 24h. </p>
                        <p>Amplias Zonas de Sombra.</p>
                        <p>Fuentes con agua potable *.</p>
                        <p>Espacio para RECARGA DE MÓVILES</p>
                        <p>Zona Bar para adquirir bebidas y hielo. Dispondremos de PACKS A LA VENTA que incluirán botella + vasos + hielo + refresco.</p>
                        <p className={`self-center font-bold text-amber-500 text-2xl tracking-wide ${bebas_neue.className}`}>*Agua potable en todo el recinto.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}