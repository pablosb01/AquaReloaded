import { roboto, bebas_neue } from "@/app/fonts.js";
import Link from "next/link";

export default function CondicionesGenerales() {
  return (
    <>
      <main
        className={`${roboto.className} h-fit flex flex-col pt-12 pb-24 max-w-[2500px] items-center`}
      >
        <div className="flex flex-col box-border justify-center items-center w-full h-full gap-12">
          <div className="flex flex-col items-center gap-4 w-[1200px] max-w-[85%]">
            <h2
              className={`text-center font-bold text-6xl w-full ${bebas_neue.className}`}
            >
              CONDICIONES GENERALES
            </h2>
            <div className="flex flex-col gap-12">
              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">
                  CONDICIONES GENERALES DE ACCESO Y PARTICIPACIÓN EN EL FESTIVAL
                  – AQUASELLA 2024
                </p>
                <p>
                  AZURASA 21, SL (en adelante, la Compañía), manifiesta su
                  respeto y cumplimiento de las disposiciones recogidas en la
                  Ley Orgánica 15/1999, de 13 de Diciembre, de Protección de
                  Datos de Carácter Personal. Por ello, le informa de su
                  política de protección de datos para que Usted determine
                  voluntariamente si desea facilitar sus datos personales a la
                  Compañía.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">1. Introducción</p>
                <p>
                  El Festival AQUASELLA es un evento musical que se celebra en
                  el entorno natural de Cangas de Onís – Arriondas (Asturias),
                  organizado por AZURASA 21, S.L. (en adelante, la
                  Organización), con CIF nº B-74417858 y domicilio en Oviedo
                  (Asturias), Calle Doctor Casal Nº4, 3ºD – 33001, inscrita en
                  el Registro Mercantil de Asturias al Tomo 4224, Libro 0, Folio
                  197, Sección 8 y Hoja AS 50481.
                </p>
                <p>
                  Los datos de contacto de la Organización son: Correo
                  Electrónico – info.aquasella@gmail.com
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">2. Objeto</p>
                <p>
                  Estas Condiciones Generales regulan el acceso y uso del
                  recinto en el que se celebra el Festival AQUASELLA por parte
                  de todas aquellas personas que hayan adquirido una entrada a
                  través de los cauces oficiales (en adelante, los usuarios).
                </p>
                <p>
                  Estas Condiciones Generales se complementan con las
                  Condiciones Particulares que regulan determinados servicios
                  ofrecidos por la Organización. En caso de contradicción entre
                  los términos recogidos en estas Condiciones Generales y en las
                  Condiciones Particulares, éstas prevalecerán sobre aquéllas si
                  bien tan sólo respecto de aquellos servicios sometidos a
                  ellas.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">3. Aceptación</p>
                <p>
                  La adquisición de una entrada al Festival, a través de los
                  cauces habilitados por la Organización, implica el
                  conocimiento y aceptación por los usuarios de las presentes
                  Condiciones.
                </p>
                <p>
                  Los usuarios declaran disponer de la capacidad legal necesaria
                  para aceptar estas Condiciones.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">4. Modificación</p>
                <p>
                  En la medida en que la organización del Festival depende de
                  diversos factores, ajenos a la Organización, estas Condiciones
                  pueden ser modificadas unilateralmente por ella cuando lo
                  considere oportuno o con la finalidad de adecuarse a los
                  cambios logísticos o legislativos futuros.
                </p>
                <p>
                  Estas modificaciones serán notificadas convenientemente a los
                  usuarios a través del correo electrónico o la página web
                  www.aquasella.com, siendo válidas desde la fecha que se
                  detalle en ellas. Si los usuarios no están de acuerdo con las
                  citadas modificaciones, antes de que comience el Festival
                  podrán solicitar la devolución del precio abonado por su
                  entrada. Una vez iniciado, no tendrán esta posibilidad.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">5. Celebración del Festival</p>
                <p>
                  El festival AQUASELLA se celebrará en Arriondas – Cangas de
                  Onís (Asturias) los días 14, 15, 16, 17 y 18 de agosto de
                  2024, conforme al cartel de artistas y horarios que figura en
                  www.aquasella.com, reservándose la Organización la posibilidad
                  de modificar los artistas y/u horarios que figuran en él,
                  cuando concurran causas de fuerza mayor o cualquier otra ajena
                  a su voluntad. En este supuesto, los usuarios no tendrán
                  derecho a la devolución del precio de entrada salvo que la
                  modificación sea esencial, entendiendo por tal, aquella que
                  afecte, al menos, al 50% de los artistas.
                </p>
                <p>
                  En el caso de que la suspensión o modificación del cartel se
                  produjese una vez iniciado el Festival, por razones de caso
                  fortuito o fuerza mayor, los usuarios no tendrán derecho a la
                  devolución de la entrada.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">
                  6. Condición de Usuario. Adquisición de la Entrada
                </p>
                <p>
                  Tendrán la condición de usuarios del Festival todas las
                  personas físicas, mayores de dieciocho (18) años, que
                  adquieran una entrada, previa aceptación de las Condiciones
                  Generales de Compra, a través de cualquiera de los siguientes
                  canales:
                </p>
                <div className="flex flex-col">
                  <p className="text-red-400 hover:text-red-600">
                    <Link href="/">- www.aquasella.com</Link>
                  </p>
                  <p>- Oficinas de Correos</p>
                  <p className="text-red-400 hover:text-red-600">
                    <a
                      target="_blank"
                      href="https://www.entradasatualcance.com/"
                    >
                      - www.entradasatualcance.com/
                    </a>
                  </p>
                  <p>– http://www.ticketswap.com (*)</p>
                  <p>– Taquillas instaladas en el recinto del Festival.</p>
                </div>
                <p>
                  La Organización no garantiza la validez de las entradas
                  adquiridas a través de canales distintos de los anteriormente
                  señalados, reservándose la posibilidad de no admitir en el
                  recinto del Festival a aquellas personas que las porten.
                </p>
                <i>
                  (*)
                  <a
                    href="http://www.ticketswap.com"
                    className="text-red-400 hover:text-red-600"
                  >
                    TicketSwap
                  </a>{" "}
                  es el único canal de reventa de tickets recomendado. Cuando el
                  evento esté sold-out, este será el único canal a través del
                  cual recomendamos comprar entradas con seguridad. En caso de
                  que hubiera alguna incidencia con alguna entrada comprada a
                  través de TicketSwap, debéis contactarles a cualquier hora por
                  chat, correo (info@ticketswap.com), o telf: +34 932 71 39 12 y
                  harán todo lo que esté en su mano mano para solucionarlo en la
                  mayor brevedad posible.
                </i>
                <p>
                  En caso de pérdida o deterioro de las entradas, la
                  Organización no asume ninguna responsabilidad y, en
                  consecuencia, los usuarios no podrán acceder al recinto del
                  Festival.
                </p>
                <p>
                  Una vez adquirida la entrada, ésta no será cambiada ni
                  devuelto su importe, excepto en casos de cancelación del
                  evento. Si por causa de fuerza mayor no pudiera empezar el
                  Festival, la Organización podrá señalar nuevo día y hora para
                  la celebración del mismo, siendo válida la entrada para la
                  fecha definitiva. En caso de suspensión del evento, la
                  Organización se compromete a devolver el importe de las
                  entradas en un plazo máximo de 15 días a contar desde la fecha
                  que conste en ellas.
                </p>
                <p>
                  La posesión de la entrada no da derecho a su poseedor o a
                  terceros a utilizar la misma o su contenido con fines
                  publicitarios, de marketing o de promoción (incluidos
                  concursos, regalos y/o sorteos). Si lo hiciera, la
                  Organización anulará la entrada, sin perjuicio de reclamar los
                  daños y perjuicios que esta situación le hubiese ocasionado.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold text-2xl">7. Admisión</p>
                <p>
                  En el recinto del Festival, el personal de la Organización
                  verificará la validez de la entrada y hará entrega al usuario
                  de una pulsera identificativa que le permitirá acceder al
                  mismo. Si la entrada se encuentra en mal estado, rota o
                  presenta indicios de falsificación, no se entregará la pulsera
                  que da acceso.
                </p>
                <p>
                  Para acceder al recinto es imprescindible llevar la pulsera.
                  La pulsera es personal e intransferible. En caso de pérdida o
                  robo de la misma, los usuarios perderán la posibilidad de
                  acceder al recinto.
                </p>
                <p>
                  El acceso al recinto puede resultar ocasionalmente lento, por
                  lo que la Organización aconseja a los usuarios prudencia y
                  paciencia. En algunos momentos es posible que se registren
                  colas y ligeras retenciones, por lo que se recomienda a los
                  usuarios que lleguen con puntualidad.
                </p>
                <p>
                  Las ZONAS DE DESCANSO y el PARKING del Festival estarán
                  habilitados desde el MIÉRCOLES 14 de agosto de 2024 a las
                  17:00h hasta el LUNES 19 de agosto de 2024 a las 13:00h.
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    En virtud de lo dispuesto en el art. 59.1e del Real Decreto
                    2816/82, de 27 de agosto de 1982, por el que se aprueba el
                    Reglamento General de Policía de Espectáculos Públicos y
                    Actividades Recreativas y en la Ley del Principado de
                    Asturias 8/2002, de 21 de octubre, de Espectáculos Públicos
                    y Actividades Recreativas:
                  </p>
                  <p>
                    A. Queda prohibida la entrada a menores de 18 años. Es
                    imprescindible para todas las personas llevar consigo el
                    Documento Nacional de Identidad.
                  </p>
                  <p>
                    B. Se reserva el derecho de admisión de toda persona cuya
                    actitud y presencia pueda ser considerada inadecuada,
                    ofensiva, violenta o dé muestras de encontrarse bajo los
                    efectos del alcohol y/o drogas.
                  </p>
                  <p>
                    C. Está prohibido introducir en el recinto del Festival
                    drogas u otro tipo de substancias prohibidas por la ley,
                    grabadoras de audio y vídeo, armas o instrumentos
                    contundentes, cortantes, que sean peligrosos a criterio de
                    la Organización o que estén prohibidos por la normativa
                    vigente.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Además:</p>
                  <p>
                    D. Queda expresamente prohibido realizar fotografías,
                    grabaciones o videos de los espectáculos que forman parte
                    del Festival, salvo que se cuente con la autorización
                    expresa de la Organización.
                  </p>
                  <p>
                    E. Queda expresamente prohibido acceder a los escenarios o
                    lugares de actuación de los artistas, salvo que esté
                    previsto en el desarrollo del propio espectáculo.
                  </p>
                  <p>
                    F. Los usuarios deben comportarse en el Recinto del Festival
                    actuando con absoluto respeto a los derechos de terceros.
                    Deben seguir con atención los consejos y pautas de
                    comportamiento que les traslade el personal de la
                    Organización pues son por su propio interés y seguridad, así
                    como la de todos los usuarios, con el objetivo de garantizar
                    que el Festival se desarrolla sin ningún tipo de percance.
                  </p>
                  <p>
                    G. Desde que se accede al recinto del Festival queda
                    absolutamente prohibida la introducción en el mismo de
                    cualquier tipo de comida o bebida. Sólo está permitido
                    introducir COMIDA EN LA ZONA DE DESCANSO.
                  </p>
                  <p>
                    I. El estacionamiento en el parking está reservado
                    únicamente para el público asistente al festival y es
                    gratuito. No se permitirá la entrada a la propiedad de
                    furgonetas u otro tipo de vehículos que tengan por objeto
                    realizar venta ambulante de ningún tipo. Cualquier
                    transporte sospechoso de dedicarse a esta actividad será
                    rechazado antes de su acceso al aparcamiento. El Parking se
                    destinará exclusivamente para el estacionamiento de
                    vehículos, no se podrán instalar tiendas de campaña ni
                    equipos de sonido alimentados por generadores. Tienes toda
                    la información en el apartado de Acampada.
                  </p>
                </div>
                <p>
                  La Organización podrá denegar el acceso o expulsar del recinto
                  a los usuarios que contravengan las normas recogidas en los
                  párrafos anteriores o que generen situaciones que la
                  Organización considere que pueden generar riesgos tanto para
                  ellos como para otros usuarios, responsabilizándose
                  personalmente de los daños y perjuicios que causen a terceros.
                </p>
              </div>
              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">
                  8. Imágenes obtenidas durante la celebración del festival
                </p>
                <p>
                  Durante la celebración del Festival tanto la Organización como
                  los medios de comunicación por ella habilitados podrán
                  realizar videos y fotografías en los que aparezcan imágenes de
                  los usuarios.
                </p>
                <p>
                  Los usuarios autorizan expresamente a la Organización para que
                  ésta pueda utilizar su imagen en los citados videos y
                  fotografías, que podrán ser empleados para confeccionar
                  material (impreso o audiovisual) destinado a promover,
                  difundir y dar a conocer el Festival AQUASELLA y cuyos
                  derechos de explotación (reproducción, distribución,
                  comunicación pública y transformación) corresponderán en
                  exclusiva a la Organización.
                </p>
                <p>
                  Igualmente, autoriza a los medios de comunicación habilitados
                  por la Organización para utilizar dicha imagen en la
                  publicación de noticias y/o reportajes relacionados con la
                  celebración del Festival.
                </p>
                <p>
                  Esta autorización se entenderá otorgada con carácter gratuito,
                  para el ámbito territorial mundial y por el plazo máximo que
                  fija la legislación aplicable.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">
                  9. Protección de Datos de carácter personal
                </p>
                <p>
                  En cumplimiento de la Ley Orgánica 15/1999, de 13 de
                  diciembre, de Protección de Datos de Carácter Personal y su
                  normativa de desarrollo, la Organización informa a los
                  usuarios de que los datos personales que faciliten a través de
                  los formularios de compra de entradas u otros servicios
                  accesorios/adicionales así como las imágenes que se obtengan
                  durante su participación en el Festival, serán almacenados en
                  un fichero responsabilidad de AZURASA 21, S.L. con la
                  finalidad de (i) gestionar el acceso y participación en el
                  Festival (ii) prestar los servicios accesorios/adicionales
                  contratados (iii) gestionar la facturación y contabilidad (iv)
                  garantizar el cumplimiento de estas Condiciones Generales.
                </p>
                <p>
                  Además, en el caso de las imágenes, éstas podrán ser
                  utilizadas para la confección de cualquier tipo de material
                  (impreso o audiovisual) destinado a promover, difundir y dar a
                  conocer el Festival AQUASELLA. Este material podrá ser
                  incluido en publicaciones impresas o electrónicas o difundido
                  a través de internet (webs, RSS, etc.) o cualquier otro medio
                  de comunicación que la Organización estime conveniente.
                </p>
                <p>
                  Todos los datos de los usuarios podrán ser comunicados a las
                  Fuerzas y Cuerpos de Seguridad del Estado, a las
                  Administraciones Públicas con competencias en materia de
                  eventos y a Juzgados y Tribunales en el curso de inspecciones,
                  procedimientos sancionadores y/o judiciales.
                </p>
                <p>
                  Al adquirir su entrada y aceptar estas Condiciones Generales,
                  los usuarios consienten expresamente el tratamiento de sus
                  datos personales en los términos antes expuestos.
                </p>
                <p>
                  Los usuarios que lo deseen pueden ejercitar gratuitamente los
                  derechos de acceso, rectificación, cancelación y oposición
                  dirigiéndose por escrito a AZURASA 21, S.L. CIF B-74417858,C/
                  Doctor Casal, nº4,3ºD,33001 Oviedo (Asturias), ESPAÑA o a
                  info.aquasella@gmail.com, indicando la petición que formulan y
                  adjuntando a su solicitud, una fotocopia de su DNI.
                </p>
              </div>
              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">10. Responsabilidad</p>
                <p>
                  La Organización suscribirá el correspondiente seguro de
                  Responsabilidad Civil obligatorio. No obstante lo anterior, la
                  Organización no se responsabiliza de las pérdidas, robos,
                  hurtos o cualquier daño que sufran las pertenencias de los
                  usuarios durante la celebración del Festival. Los usuarios son
                  los responsables de custodiarlas debidamente.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">11. Comunicaciones</p>
                <p>
                  A efectos de las presentes Condiciones y para cualquier
                  comunicación que sea precisa entre la Organización y los
                  Usuarios, éstos podrán dirigirse a aquélla por medio de correo
                  postal o electrónico enviado a las direcciones que figuran en
                  el apartado 1 de estas Condiciones Generales.
                </p>
                <p>
                  Los usuarios aceptan expresamente la utilización del correo
                  electrónico como procedimiento válido para la remisión de
                  comunicaciones.
                </p>
                <p>
                  En el supuesto de que deseen presentar alguna reclamación, se
                  les recuerda que tienen a su disposición las correspondientes
                  Hojas de Reclamaciones.
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">
                  12. Plataforma de Resolución de litigios en línea
                </p>
                <p>
                  Si ha adquirido la entrada a nuestro evento online y en el
                  eventual caso de que no haya sido posible resolver una
                  incidencia dirigiéndose al correo electrónico
                  <em className="text-red-300"> info@entradasatualcance.com</em>
                  , de conformidad con lo establecido en el artículo 14.1 del
                  Reglamento 524/2013, de 21 de mayo de 2013, sobre resolución
                  de litigios en línea en materia de consumo, le informamos de
                  que usted tiene la posibilidad de recurrir a una entidad de
                  resolución alternativa de litigios en materia de consumo
                  accesible a través de la dirección
                  <a
                    href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                    className="text-red-300 hover:text-red-500"
                  >
                    {" "}
                    https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage
                  </a>
                </p>
              </div>

              <div className="text-left text-xl w-full px-6 gap-4 flex flex-col">
                <p className="font-bold">13. Legislación aplicable</p>
                <p>
                  Las presentes Condiciones Generales se rigen por la
                  legislación española.
                </p>
                <p>
                  Para cuantas cuestiones pudieran suscitarse sobre la
                  interpretación, aplicación, cumplimiento o incumplimiento de
                  lo establecido en estas Condiciones Generales, los usuarios,
                  con renuncia expresa a cualquier otro fuero que pudiera
                  corresponderles, se someterán a la jurisdicción de los
                  Juzgados y Tribunales de Cangas de Onís (Asturias), lugar de
                  cumplimiento de la obligación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
