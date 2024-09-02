import { bebas_neue, roboto } from "@/app/fonts";

export default function parkingcaravanas(){
    return(
        <main className={`w-full m-w-[2500px] min-h-[80vh] h-full ${roboto.className}`}>
            <div className="flex flex-col py-8 items-center w-full justify-center">
                <div className="lg:w-[70%] w-[90%] flex flex-col gap-4 items-center">
                    <h2 className={`text-center text-6xl font-bold ${bebas_neue.className} sombrita`}>Parking Autocaravanas <br></br> En el recinto del Festival</h2>
                    <img alt='not loading' src="https://aquasella.com/wp-content/uploads/2024/08/web-autocaravanas-1-1024x706.png" className="lg:w-[70%] w-full"/>
                </div>
                <div className="flex flex-col gap-4 w-[90%] lg:w-[60%] h-fit py-6 text-[18px]">
                    <p>AQUASELLA quiere facilitar la experiencia de descanso y, tras múltiples peticiones, hemos podido reubicar los parkings de autocaravanas 1 y 2 en un Parking para Autocaravanas en el recinto del festival.</p>
                    <p>Para todxs lxs que hayan comprado Suplemento Autocaravanas, avisamos que hemos habilitado un parking específico en el propio recinto del festival, por lo que los 2 parking externos anunciados no estarán disponibles. <br></br>
                    No es necesario ningún cambio en vuestro ticket: Los suplementos &quot;Parking Autocaravanas&quot; y  &quot;Parking Autocaravanas 2&quot; serán totalmente válidos y os dará acceso al nuevo <strong className="text-rose-500">parking de autocaravanas localizado en el recinto del festival.</strong></p>
                    <p className={`text-2xl text-amber-500 text-bold ${bebas_neue.className} text-center`}>* Imprescindible para acceder tener abono para el festival</p>
                    <p>Para poder acceder a este parking, es necesario tener el <strong className="text-rose-500">&quot;Suplemento Autocaravanas&quot;</strong>, que tiene un precio por vehículo de 60€ + g.g. y puede adquirirse en el <a href="/taquilla/abonos" className="text-amber-500 loca-link hover:text-rose-500">apartado TAQUILLA de esta web.</a></p>
                    <p>El Suplemento Autocaravanas * incluye:</p>
                    <div className="sombrita-tres flex flex-col gap-2 text-center lg:text-left">
                        <p>5 Noches de estancia, desde el miércoles 14 de agosto a las 17:00h hasta el lunes 19 de agosto a las 12:00h</p>
                        <p>Parking con iluminación y vigilancia privada 24h</p>
                    </div>
                    <p className={`text-2xl text-amber-500 text-bold ${bebas_neue.className} text-center`}>* Imprescindible para acceder tener abono para el festival</p>
                    <p className={`text-2xl text-amber-500 text-bold ${bebas_neue.className} text-center`}>* Se pondrán a la venta un número reducido de suplementos, debido a las dimensiones de ambas áreas.</p>
                </div>
            </div>
        </main>
    )
}