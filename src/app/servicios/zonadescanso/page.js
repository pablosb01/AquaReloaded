import { bebas_neue, roboto } from "@/app/fonts";
import QuestTable from "@/components/QuestTable/QuestTable";
import SliderCamp from "@/components/SliderCamp/SliderCamp";
import SliderTents from "@/components/SliderTents/SliderTents";
import Link from "next/link";

export default function zonadescanso() {
    return (
        <main className="w-full m-w-[2500px] h-fit">
            <div className={`relative flex flex-col gap-6 items-center w-full h-fit box-border md:py-16 py-4 ${roboto.className}`}>
                <div className="relative w-full flex flex-col items-center justify-center md:h-[400px] h-[300px] overflow-hidden">
                    <div className="absolute w-full flex justify-center">
                        <img src="https://aquasella.com/wp-content/uploads/2023/05/CAMPING-1024x576.jpg" className="m-w-auto h-auto md:w-[50%] w-[95%]"/>
                    </div>
                    <p className={`md:text-6xl text-4xl font-bold ${bebas_neue.className} sombrita`}><a href="#rest-zone">Zona descanso</a> y <a href="#glamping">glamping</a></p>
                    {/*<p className={`md:text-2xl text-xl font-bold ${bebas_neue.className} sombrita`}>pulsa para ver más</p>*/}
                </div>
                <div id="rest-zone" className="relative flex flex-col gap-12 w-full md:py-24 py-12 box-border items-center">
                    <div className="relative flex flex-col gap-4 md:w-[50%] w-[90%] text-[18px]">
                        <h4 className="sombrita-tres self-center text-3xl">ZONA DESCANSO</h4>
                        <p>Como cada año, podrás alojarte en nuestra Zona de Descanso instalada en el recinto del festival, que permanecerá abierta desde el miércoles 14 a las 17:00h hasta el lunes 19 de agosto a las 12:00h de forma ininterrumpida.</p>
                        <p>Para poder acceder a la zona de Descanso, es necesario disponer de uno de estos productos: <br/> <strong className="text-rose-500">Abono general + Zona de Descanso </strong>*</p>
                        <p>También podrás tener acceso a la Zona de Descanso si ya tienes tu Abono General y adquieres el <strong className="text-rose-500">UPGRADE ZONA DE DESCANSO </strong>*</p>
                        <p className={`self-center font-bold text-amber-500 text-2xl tracking-wide ${bebas_neue.className}`}>* Cada ticket corresponde a una persona y no a una tienda de campaña.</p>
                    </div>
                    <div className="relative w-full flex flex-col items-center justify-center md:h-[400px] h-[300px] overflow-hidden">
                    <div className="absolute w-full flex justify-center">
                        <img src="https://aquasella.com/wp-content/uploads/2023/11/zona-descanso-2-1024x683.jpg" className="m-w-auto h-auto md:w-[50%] w-[95%]"/>
                    </div>
                    <p className={`md:text-6xl text-4xl font-bold ${bebas_neue.className} sombrita text-center`}>Servicios de la zona de descanso</p>
                    {/*<p className={`md:text-2xl text-xl font-bold ${bebas_neue.className} sombrita`}>pulsa para ver más</p>*/}
                    </div>
                    <div className="relative flex flex-col gap-4 md:w-[50%] w-[90%] text-[18px]">
                        <p>Zonas de BAÑO Y DUCHAS,  con agua caliente *.</p>
                        <p>Sanitarios provistos de Baños, Lavabos, Espejos, Enchufes y atendidos por un equipo de mantenimiento y limpieza 24h. </p>
                        <p>Amplias Zonas de Sombra.</p>
                        <p>Fuentes con agua potable *.</p>
                        <p>Espacio para RECARGA DE MÓVILES</p>
                        <p>Zona Bar para adquirir bebidas y hielo. Dispondremos de PACKS A LA VENTA que incluirán botella + vasos + hielo + refresco.</p>
                        <p className={`self-center font-bold text-amber-500 text-2xl tracking-wide ${bebas_neue.className}`}>*Agua potable en todo el recinto.</p>
                        <p className="pt-10"><strong className="text-rose-500 font-bold">IMPORTANTE:</strong> Los Usuarios que accedan a la zona de descanso están obligados a respetar la convivencia y a no perturbar el descanso de los demás.</p>
                    </div>
                    <div className="md:w-[65%] w-[99%]">
                        <SliderCamp/>
                    </div>


                    {/* SE QUE TENGO QUE HACER LA TABLA ESTA PERO DE VERDAD ME DABA MUCHA PEREZA HOY*/}
                    
                    
                    <div className="relative flex flex-col gap-4 md:w-[50%] w-[90%] text-[18px]">
                        <p>También en 2024, podrás disfrutar del servicio de glamping, para lo que es necesario adquirir el Abono con Descanso. Para más información, consulta nuestro apartado de <a href="#glamping" className="loca-link text-amber-500 hover:text-rose-500">GLAMPING</a>. Próximamente podrás contratar el servicio de Glamping.</p>
                        <p>A continuación os dejamos unas <span className="text-rose-500">dudas / consultas frecuentes</span> sobre la Zona de Descanso.</p>
                        <QuestTable/>
                        <div id="glamping"></div>
                    </div>
                </div>
                <div className="relative flex flex-col gap-12 w-full md:py-6 py-3 box-border items-center">
                <div className="relative flex flex-col gap-4 md:w-[50%] w-[90%] text-[18px]">
                        <h4 className="sombrita-tres self-center text-3xl">GLAMPING</h4>
                        <p>Un año más, puedes disfrutar una experiencia de lujo alojándote en la ZONA DE GLAMPING del festival. Descubre todas las opciones que te ofrecemos y elige la que mejor se adapte a tus necesidades. No dejes pasar la oportunidad y disfruta de una estancia con las MISMAS COMODIDADES DE UN HOTEL, bajo las estrellas.</p>
                        <p>Este área mantendrá <strong className="text-rose-500">los mismos horarios que la Zona de Descanso.</strong></p>
                        <p className="font-bold text-amber-500">Apertura Zona Glamping- míercoles 14 de agosto a las 17h. <br/> Cierre Zona Glamping –  lunes 19 de agosto a las 12h.</p>
                        <p>Recuerda que para acceder a la Zona de Glamping, debes tener también adquirido tu <strong className="text-rose-500">ABONO GENERAL CON ZONA DE DESCANSO.</strong></p>
                        <p>Los precios del Glamping son por tienda, no por persona (evidentemente, cada opción lleva un máximo de personas permitido).</p>
                        <p>Si tienes algún tipo de duda, puedes consultar con <span className="text-rose-500">hola@festents.com</span></p>
                    </div>
                    <div className="md:w-[70%] w-[99%]">
                        <h2 className={`md:text-6xl text-4xl font-bold ${bebas_neue.className} sombrita text-center py-8`}>NUESTRAS TIENDAS DE GLAMPING</h2>
                        <SliderTents/>
                    </div>
                </div>
            </div>
        </main>
    )
}