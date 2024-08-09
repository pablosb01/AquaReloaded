import { bebas_neue, roboto } from "@/app/fonts";

export default function zonavip() {
    return(
        <main className={` m-w-[2500px] w-full min-h-[80vh] h-fit ${roboto.className}`}>
            <div className="relative w-full h-fit box-border py-12 flex flex-col items-center gap-12">
                <div className="relative w-full flex flex-col items-center justify-center md:h-[400px]">
                    <div className="absolute w-[90%] md:w-[60%] flex justify-center">
                        <img src="https://aquasella.com/wp-content/uploads/2023/11/zona-vip-1-1024x439.jpg" className="m-w-auto h-[150px] md:h-full w-full"/>
                    </div>
                    <p className={`md:text-8xl text-6xl font-bold ${bebas_neue.className} sombrita`}>ZONA VIP</p>
                </div>
                <div className="w-[90%] md:w-[60%] text-[18px] flex flex-col gap-4">
                    <p>Como cada año, podrás acceder a nuestras Zonas VIP situadas en los escenarios principales para disfrutar de la experiencia AQS desde un punto de vista privilegiado y sin agobios. Las Zonas VIP permanecerán abiertas desde el <i className="text-rose-500">jueves 15 hasta el domingo 18 de agosto</i>, en los mismos horarios que los escenarios.</p>
                    <p>Para poder acceder a las Zonas VIP, es <strong className="text-rose-500">necesario adquirir el UPGRADE VIP </strong>* y disponer de uno de estos productos: </p>
                    <div className="sombrita-tres">
                        <p>Abono General</p>
                        <p>Abono  General + Descanso</p>
                        <p>Entrada de Día **</p>
                    </div>
                    <div className="relative flex flex-col gap-6 pt-8">
                        <p className={`text-center font-bold text-amber-500 text-2xl tracking-wide ${bebas_neue.className}`}>* El “UPGRADE VIP” NO ES UNA ENTRADA. Es imprescindible presentar este Upgrade junto con un Abono General, a un Abono General + Zona de Descanso ó una Entrada de Día.</p>
                        <p className={`text-center font-bold text-amber-500 text-2xl tracking-wide ${bebas_neue.className}`}>** El Upgrade para las Entradas de Día, tendrá un precio reducido de 40€ y sólo se podrá adquirir en la taquilla del festival.</p>
                    </div>
                    </div>  
                    <div className="relative w-[90%] flex gap-10 items-center md:h-fit box-border justify-center">
                        <img src="https://aquasella.com/wp-content/uploads/2023/11/zona-vip-2-1024x683.jpg" className="vip-img"/>
                        <img src="https://aquasella.com/wp-content/uploads/2023/11/zona-vip-3-1-1024x683.jpg" className="vip-img"/>
                    </div>
                    <div className="relative flex flex-col gap-4 md:w-[60%] w-[90%] text-[18px]">
                        <h4 className={`sombrita self-center md:text-6xl text-4xl tracking-wide ${bebas_neue.className}`}>SERVICIOS ZONA VIP</h4>
                        <p>Con tu Abono ó Entrada + Upgrade VIP, tendrás acceso a los servicios más exclusivos de Aquasella como son:</p>
                        <div className="sombrita-tres flex flex-col gap-2">
                            <p>Terraza y Tribuna con vistas a los escenarios principales  (Open Air y El Bosque)</p>
                            <p>Barras con bebidas premium y baños propios, evitando las colas de espera</p>
                            <p>Zonas con mobiliario de descanso</p>
                            <p>Zona de restauración</p>
                            <p>Catering gratuito de fruta fresca y golosinas</p>
                        </div>
                    </div>
                    <div className="relative w-[90%] md:w-[75%] flex flex-wrap-reverse gap-10 items-center md:h-[400px] box-border justify-center">
                        <img src="https://aquasella.com/wp-content/uploads/2023/11/cacique-3-1024x683.jpg" className="vip-img2"/>
                        <img src="https://aquasella.com/wp-content/uploads/2023/11/cacique-2-1024x683.jpg" className="vip-img2"/>
                        <img src="https://aquasella.com/2018/assets/images/noticias/zona-vip/zona-vip-4.jpg" className="vip-img2"/>
                    </div>
            </div>
        </main>
    )
}