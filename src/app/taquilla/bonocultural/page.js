import { bebas_neue, roboto } from "@/app/fonts";

export default function bonocultural () {
    return (
        <main className={`w-full m-w-[2500px] h-fit ${roboto.className}`}>
            <div className="flex flex-col items-center py-8 gap-4">
                <div className="w-[90%] h-fit flex flex-col items-center lg:text-left text-center gap-12">
                    <h2 className={`${bebas_neue.className} text-center text-4xl lg:text-6xl sombrita`}>VENTA BONO CULTURAL JOVEN (ABONOS) AQUASELLA 27ª ED.</h2>
                    <img alt='not loading' src="https://aquasella.com/wp-content/uploads/2024/07/sold-out-web-1024x700.jpg" className="lg:w-[65%] h-auto"/>
                    <div className="lg:text-xl text-[18px] lg:w-[65%] flex flex-col gap-8">
                        <p><strong className="text-rose-500">IMPORTANTE:</strong> Sólo podrán comprar en esta modalidad aquellxs que tengan en su poder el <span className="text-rose-500">BONO CULTURAL JOVEN * </span>. Resto de compras se realizarán en la Taquilla general. </p>
                        <h4 className="sombrita-tres text-center">* El Bono Cultural Joven es una tarjeta prepago, virtual o física que solamente funciona en los comercios, empresas y entidades culturales adheridas como AQUASELLA. Esta tarjeta es personal e intransferible.</h4>
                        <div className="text-left w-full flex flex-col gap-2">
                            <p>Aquasella es un festival <strong className="text-rose-500">exclusivamente para mayores de 18 años.</strong></p>
                            <p><strong className="text-rose-500">Los abonos/entradas comprados son nominativos</strong> tendrás que dar tu Nombre y apellidos y DNI.</p>
                            <p>Sólo se permite un Abono/Entrada por comprador.</p>
                        </div>
                        <p className="sombrita-tres">Puedes encontrar más información sobre la obtención y las condiciones de uso del Bono Cultural Joven aquí:</p>
                        <div className="flex flex-col gap-2">
                            <a href="https://beneficiarios.bonoculturajoven.gob.es" target="_blank" className="loca-link text-amber-500 hover:text-rose-500">Info. Bono cultural</a>
                            <a href="https://bonoculturajoven.gob.es/faq.html" target="_blank" className="loca-link text-amber-500 hover:text-rose-500">Info. Beneficiarios del bono cultural</a>
                        </div>
                        <p>Si tienes alguna incidencia en la compra, debes contactar con el email <strong className="text-rose-500">info@entradasatualcance.com</strong></p>
                        <p>Si tienes alguna incidencia de otro tipo, puedes consultarnos en <strong className="text-rose-500">info.aquasella@gmail.com</strong></p>
                        <p>Todos los Abonos, Entradas y Upgrades están agotados. Si por alguna razón no puedes asistir, te recomendamos que vendas tu Ticket a través de la plataforma TICKETSWAP.</p>
                    </div>
                    <h4 className="sombrita-tres text-center text-2xl">LOS ABONOS/ENTRADAS DE AQUASELLA 2024 ESTÁN AGOTADOS.</h4>
                </div>
            </div>
        </main>
    )
}