import { bebas_neue, roboto } from "../fonts";
import { TourArray } from "@/components/Test/TestNewsPics";
import SliderThree from "@/components/SliderThree/SliderThree";
import SliderOne from "@/components/SliderOne/SliderOne";

export default function tour() {
    return (
        <main className={`w-full m-w-[2500px] min-h-[80vh] h-full ${roboto.className}`}>
            <div className="flex flex-col m-w-[2500px] w-full items-center py-8">
                <div className="lg:w-[80%] w-[95%] flex flex-col gap-12 items-center">
                    <h2 className={`text-center text-6xl font-bold ${bebas_neue.className} sombrita`}>AQUASELLA ON THE ROAD 2024</h2>
                        <div className="flex flex-col items-center w-full gap-12 text-[18px] lg:text-left text-center">
                            <img alt='not loading' src="https://aquasella.com/wp-content/uploads/2024/03/imagen-principal-tour.jpg" className="lg:w-[90%] w-full"/>
                            <div className="flex flex-col gap-4 w-[90%]">
                                <p>En cada edición y con la intención de generar sinergias con los promotores de salas y conectar directamente con nuestro público, el festival realiza una serie de presentaciones oficiales en los club y eventos más representativos de música electrónica de nuestro país.</p>
                                <p>En este 2024, el tour de presentaciones tendrá lugar entre los meses de marzo y agosto. Nuestro objetivo es llevar la experiencia Aquasella a todas las ciudades de España y haceros partícipes de este gran proyecto.</p>
                                <p>En los últimos tours en 2019, 2022 y 2023 visitamos más de 20 ciudades y clubes emblemáticos a lo largo del territorio español, llegando a varias ciudades de Francia y Portugal.</p>
                                <p>Además de todo esto, hemos repartido cientos de regalos y sorteado abonos que muchos Aquaseller@s han podido disfrutar a lo largo de estos años.</p>
                                <p>Después de este tour apasionante por todo el país, estaremos listos y deseosos de recibiros en la 27 Ed de Aquasella festival.</p>
                                <p>El festival se celebra este verano los días 14, 15, 16, 17 y 18 de agosto en los alrededores de la localidad asturiana de Arriondas, aunque el recinto se encuentra en el término municipal de Cangas de Onís.</p>
                            </div>
                            <div className="w-full hide-tour-slider-3 hidden sm:block">
                                <SliderThree object={TourArray}/>
                            </div>
                            <div className="w-[90%] hide-tour-slider sm:hidden block">
                                <SliderOne object={TourArray}/>
                            </div>
                            <div className="">
                                <h2 className={`text-center text-6xl font-bold ${bebas_neue.className} sombrita tracking-wide`}>FORMA PARTE DEL</h2>
                                <h2 className={`text-center text-8xl font-bold ${bebas_neue.className} sombrita tracking-wider`}>TOUR OFICIAL 2024</h2>
                            </div>
                            <div className="flex flex-col gap-6 items-center">
                                <p className={`text-center ${bebas_neue.className} text-2xl text-rose-500`}>Si después de todo lo que te hemos contado, te han entrado ganas de disfrutar este viaje con nosotros, te ofrecemos todas estas cosas:</p>
                                <div className="sombrita-tres font-bold text-center flex flex-col gap-2">
                                    <p>Plantillas para cartelería</p>
                                    <p>Sorteo de ABONO DOBLE VIP + CAMPING</p>
                                    <p>Regalos de merchandising</p>
                                    <p>Visuales Aquasella</p>
                                    <p>Contratación de artistas nacionales / internacionales</p>
                                    <p>Promoción del tour en redes sociales + newsletters</p>
                                    <p>Promoción de cada evento en redes de Peacock Agency</p>
                                    <p>El promotor recibirá dos ABONOS VIP de regalo</p>
                                </div>
                                <img alt='not loading' src="https://aquasella.com/wp-content/uploads/2023/03/faldon.png" className="w-full py-12"/>
                            </div>
                        </div>
                </div>
            </div>
        </main> 
    )
}