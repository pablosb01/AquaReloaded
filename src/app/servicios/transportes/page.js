import { bebas_neue, roboto } from "@/app/fonts";

export default function transportes() {
    return(
        <main className={`w-full m-w-[2500px] min-h-[80vh] h-full ${roboto.className}`}>
            <div className="flex flex-col m-w-[2500px] w-full items-center py-8">
                <div className="lg:w-[70%] w-[90%] flex flex-col gap-12 items-center">
                <h2 className={`text-center text-6xl font-bold ${bebas_neue.className} sombrita`}><a href="#lanzaderas">LANZADERAS</a> / <a href="#buses">AUTOBUSES</a></h2>
                    <div className="flex flex-col items-center w-full gap-4 text-[18px]">
                        <img alt='not loading' src="https://aquasella.com/wp-content/uploads/2024/06/lanzaderas-web-1024x773.png" className="lg:w-[80%] w-full" id="lanzaderas"/>
                        <div className="flex flex-col items-center gap-4 lg:w-[85%] w-full lg:text-left text-center">
                            <h4 className="sombrita-tres font-bold lg:text-4xl text-2xl text-center">Lanzaderas Aquasella <br></br> Te llevamos al festival 💪</h4>
                            <p>Si te alojas en Cangas de Onís o alrededores, o simplemente quieres dejar el coche aparcado en Cangas de Onís por comodidad, ya puedes llegar al Prau con nuestro <strong className="text-rose-500">SERVICIO DE LANZADERAS </strong>Aquasella 2024. De esta forma podrás llegar y marcharte del festi de una forma más rápida, segura y sostenible.</p>
                            <p>Además, si estás alojado con tu Autocaravana en el Parking externo al festival que hemos habilitado, dispondrás de una parada muy próxima a este recinto.</p>
                            <h4 className="sombrita-tres font-bold text-2xl pb-4">HORARIOS</h4>
                            <div className="flex justify-between flex-wrap gap-6 text-center border-2 border-rose-500 p-4">
                                <div className="flex flex-col gap-2 w-full lg:w-[40%]">
                                    <h4 className="text-center text-rose-500 font-bold">Miércoles 14 Agosto</h4>
                                    <p>Salidas: Desde las 20:00h hasta las 23:00h</p>
                                    <p>Retornos (jueves): Desde las 00:00h hasta las 02:00h</p>
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-[40%]">
                                    <h4 className="text-center text-rose-500 font-bold">Jueves 15 Agosto</h4>
                                    <p>Salidas: Desde las 19:00h hasta las 23:00h</p>
                                    <p>Retornos (viernes): Desde las 05:00h hasta las 07:00h</p>
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-[40%]">
                                    <h4 className="text-center text-rose-500 font-bold">Viernes 16 Agosto</h4>
                                    <p>Salidas: Desde las 19h hasta las 23h</p>
                                    <p>Retornos (sábado): Desde las 08:00h hasta las 10:00h</p>
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-[40%]">
                                    <h4 className="text-center text-rose-500 font-bold">Sábado 17 Agosto</h4>
                                    <p>Salidas: Desde las 19h hasta las 23h</p>
                                    <p>Retornos (domingo): Desde las 10h hasta las 18h</p>
                                </div>
                            </div>
                            <p className={`text-2xl text-amber-500 text-bold ${bebas_neue.className} text-center`}>SALIDAS desde la Estación de Autobuses de Cangas de Onís.</p>
                            <p className={`text-2xl text-amber-500 text-bold ${bebas_neue.className} text-center`}>RETORNOS desde el recinto de AQUASELLA.</p>
                            <p className={`text-2xl text-rose-500 text-bold ${bebas_neue.className} text-center`}>* Este Servicio es exclusivo para los asistentes al festival. Se exigirá abono o entrada de día para acceder a las lanzaderas.</p>
                        </div>
                        <img alt='not loading' src="https://aquasella.com/wp-content/uploads/2024/03/2024.03.13_AQSPOST-825x1024.png" className="lg:w-[80%] w-full pt-12" id="buses"/>
                        <div className="flex flex-col gap-6 lg:w-[85%] w-full pb-12 lg:text-left text-center">
                            <p>Como cada edición, dispondremos de un Bus Oficial Aquasella con diversos puntos de salida desde todo el territorio nacional.</p>
                            <p>En el siguiente listado puedes consultar las ciudades de origen y destino de las diferentes rutas.</p>
                            <p>Oviedo · Gijón · Santander · León · Bilbao · Burgos · Vitoria · Palencia · Zamora · Lugo · San Sebastián · Valladolid · A Coruña · Logroño · Salamanca · Pamplona · Santiago · Ourense · Ávila · Vigo · Madrid · Zaragoza · Toledo · Cáceres · Merida · Badajoz · Tarragona · Barcelona · Castellón · Valencia · Sevilla</p>
                            <p><strong>Si tu ciudad no está en este listado</strong> o tienes cualquier duda respecto a los buses, escribe a <strong className="text-rose-500">aquasella@viajexpres.com o llama/WhatsApp al 676 680 774.</strong></p>
                        </div>
                        <div className="w-full h-[300px] box-border">
                            <iframe src="https://venta.enterticket.es/buy/?id=34319&amp;color=f43f5e" id="etktfrm34319" width="100%" frameborder="0" className="h-full min-h-fit"></iframe></div>
                        </div>
                </div>
            </div>
        </main>
    )
}