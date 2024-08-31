import { roboto, bebas_neue } from "@/app/fonts.js";

export default function location() {
  return (
    <main
      className={`${roboto.className} h-fit flex flex-col pt-12 pb-24 max-w-[2500px] items-center`}
    >
      <div className="flex flex-col box-border justify-center items-center w-full h-full gap-12">
        <div className="flex flex-col items-center gap-4 w-[1200px] max-w-[85%]">
          <h2
            className={`text-center font-bold text-6xl w-full sombrita ${bebas_neue.className}`}
          >
            Bienvenidos a Aquasella Festival
          </h2>
          <p className="text-center lg:text-left text-xl w-full px-6">
            Aquasella se celebra cada verano en El Valle de la Música, un
            verdadero paraíso natural enclavado en el entorno del Río Sella,
            recurso económico y generador de riqueza en la Comarca de los Picos
            de Europa, situado entre las localidades de Arriondas y Cangas de
            Onís (Principado de Asturias, España).
          </p>
          <img
            src="https://aquasella.com/wp-content/uploads/2024/06/foto-aqs-1024x576.jpg"
            alt="as location"
            width="1150px"
          />
        </div>
        <div className="lg:w-[75%] max-w-[85%] flex flex-col justify-center items-center">
          <h2
            className={`text-center font-bold text-6xl w-full sombrita ${bebas_neue.className}`}
          >
            Localización de Aquasella Festival
          </h2>
          <div className="maps-container flex w-[100%] h-fit object-cover overflow-hidden flex-col items-center pt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.1484094582324!2d-5.180720924314523!3d43.3948273691041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3618f04e7c2acb%3A0xc89991659918d963!2sAquasella%20Fest!5e0!3m2!1ses!2ses!4v1722957178927!5m2!1ses!2ses"
              width="1200"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between gap-4 lg:gap-0 items-center w-[1200px] max-w-[90%]">
          <div className="lg:w-[40%] flex flex-col lg:gap-6 gap-2">
            <h2 className="text-2xl font-bold sombrita">Coordenadas GPS</h2>
            <p className="">
              43.39334325750229, -5.178212494848635 <br /> Aquasella <br />{" "}
              Arriondas/Cangas de Onís, Asturias <br /> 33547
            </p>
          </div>
          <div className="lg:w-[60%] flex flex-col lg:text-right text-[18px] gap-3">
            <p>
              <strong>Ruta en coche desde Madrid: </strong>Haz&nbsp;
              <a
                className="text-orange-400 loca-link hover:text-rose-500"
                href="https://www.google.com/maps/dir/Madrid/Arriondas,+Asturias/@41.9076874,-7.0418154,7z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd422997800a3c81:0xc436dec1618c2269!2m2!1d-3.7037902!2d40.4167754!1m5!1m1!1s0xd36188aa0414dcf:0x416f43e046cb5710!2m2!1d-5.187554!2d43.3863298!3e0?entry=ttu"
                target="_blank"
              >
                Click aquí
              </a>
              &nbsp;para ver la ruta
            </p>
            <p>
              <strong>Ruta en coche desde A Coruña: </strong>Haz&nbsp;
              <a
                className="text-orange-400 loca-link hover:text-rose-500"
                href="https://www.google.com/maps/dir/A+Coru%C3%B1a,+La+Coru%C3%B1a/Arriondas,+Asturias/@43.3630384,-8.1154248,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd2e7cfcf174574d:0x6a47350d095cdfee!2m2!1d-8.4115401!2d43.3623436!1m5!1m1!1s0xd36188aa0414dcf:0x416f43e046cb5710!2m2!1d-5.187554!2d43.3863298!3e0?entry=ttu"
                target="_blank"
              >
                Click aquí
              </a>
              &nbsp;para ver la ruta
            </p>
            <p>
              <strong>Ruta en coche desde Bilbao: </strong>Haz&nbsp;
              <a
                className="text-orange-400 loca-link hover:text-rose-500"
                href="https://www.google.com/maps/dir/Bilbao,+Vizcaya/Arriondas,+Asturias/@43.3455932,-5.3805671,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd4e4e27664b89b9:0x6534acc41e95a645!2m2!1d-2.9349852!2d43.2630126!1m5!1m1!1s0xd36188aa0414dcf:0x416f43e046cb5710!2m2!1d-5.187554!2d43.3863298!3e0?entry=ttu"
                target="_blank"
              >
                Click aquí
              </a>
              &nbsp;para ver la ruta
            </p>
            <p>
              <strong>Ruta en coche desde Aeropuerto Asturias: </strong>
              Haz&nbsp;
              <a
                className="text-orange-400 loca-link hover:text-rose-500"
                href="https://www.google.com/maps/dir/Aeropuerto+de+Asturias+(OVD)+(OVD),+AI-82,+Santiago+del+Monte/Arriondas,+Asturias/@43.4499908,-6.2639883,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd369f2c3c3b0a1b:0x7bd91d14f2f85da!2m2!1d-6.0334978!2d43.5623825!1m5!1m1!1s0xd36188aa0414dcf:0x416f43e046cb5710!2m2!1d-5.187554!2d43.3863298!3e0?entry=ttu"
                target="_blank"
              >
                Click aquí
              </a>
              &nbsp;para ver la ruta
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[1200px] max-w-[90%] gap-6">
          <h2
            className={`text-center font-bold text-6xl w-full sombrita ${bebas_neue.className}`}
          >
            Localización / Cómo Llegar
          </h2>
          <div className="flex flex-col gap-4 text-[18px]">
            <p>
              Aquasella apuesta por una movilidad sostenible, por lo que
              recomendamos venir al festival en transporte colectivo, reduciendo
              así la huella de carbono.
            </p>
            <p>
              {" "}
              Para llegar al recinto de Aquasella, os dejamos las siguientes
              alternativas:
            </p>
          </div>
          <div className="flex flex-col items-center gap-12 mt-6">
            <h4 className={`sombrita text-3xl ${bebas_neue.className}`}>
              AUTOBUSES OFICIALES [RECOMENDADO]
            </h4>
            <div className="flex flex-col text-left gap-3 text-[18px]">
              <p>
                Desde el festival te ofrecemos rutas de autobuses desde gran
                parte de la península. Esta edición hemos aumentado tanto el
                número de plazas como el número de ciudades de salida para
                llegar al festival
              </p>
              <p>
                Te recogen en tu ciudad para dejarte directamente en el recinto
                del festival y viceversa.
              </p>
              <p className="sombrita-tres">
                <strong>
                  Conoce todas las rutas y ciudades en el siguiente{" "}
                  <a
                    className="hover:text-rose-500 loca-link"
                    href="https://aquasella.com/bus-oficial/"
                  >
                    ENLACE AL BUS OFICIAL
                  </a>
                </strong>
              </p>
            </div>
            <h4 className={`sombrita text-3xl ${bebas_neue.className}`}>
              BUSES NO OFICIALES [ALSA]
            </h4>
            <div className="flex flex-col text-left gap-3 text-[18px]">
              <p>
                Si decides venir en autobús, pero por tu cuenta, puedes ir desde
                tu ciudad en ruta hasta Oviedo, Gijón o Avilés y una vez llegues
                a una de estas tres ciudades, dispondrás de líneas hasta la
                estación de Arriondas, situada a menos de 3 km del recinto del
                festival. Una vez allí podrás desplazarte fácilmente: el recinto
                está a 30 minutos a pie, y si no te apetece cargar con todo el
                equipaje y material de acampada dispones de servicios de taxi.
              </p>
              <p className="sombrita-tres">
                <strong>
                  Conoce todas las rutas Alsa desde el siguiente{" "}
                  <a
                    className="hover:text-rose-500 loca-link"
                    href="https://www.alsa.es/"
                    target="_blank"
                  >
                    ENLACE
                  </a>
                </strong>
              </p>
            </div>
            <h4 className={`sombrita text-3xl ${bebas_neue.className}`}>
              TREN
            </h4>
            <div className="flex flex-col text-left gap-3 text-[18px] w-full">
              <p>
                Para llegar al festival en tren es seleccionar la ruta desde tu
                ciudad hasta Oviedo.
              </p>
              <a
                className="font-bold text-amber-500 hover:text-rose-500 w-fit loca-link"
                href="https://aquasella.com/bus-oficial/"
              >
                Web de renfe
              </a>
              <p>
                Una vez llegues a la Estación de trenes Oviedo, dentro de la
                propia estación , puedes coger la línea local tren hasta Oviedo
                (FEVE).
              </p>
              <p>
                <a
                  className="font-bold text-amber-500 hover:text-rose-500 w-fit loca-link"
                  href="https://www.renfe.com/es/ca/cercanias/cercanias-feve"
                  target="_blank"
                >
                  Aquí puedes consultar todas las líneas de trenes FEVE
                </a>{" "}
                desde Oviedo, y también desde Gijón y Avilés hasta Arriondas.
              </p>
              <p>
                Desde la estación de tren, también podrás cambiar la ruta a bus
                ALSA para que te sea más leve el trayecto y de ahí desplazarte
                hasta la estación de Arriondas, disponiendo de rutas tanto de
                autobuses como de trenes de cercanías. También podrás coger un
                taxi.
              </p>
            </div>
            <h4 className={`sombrita text-3xl ${bebas_neue.className}`}>
              AVIÓN
            </h4>
            <div className="flex flex-col text-left gap-3 text-[18px] w-full">
              <p>
                El aeropuerto más cercano es el de Asturias. ({" "}
                <a
                  className="font-bold text-amber-500 hover:text-rose-500 w-fit loca-link"
                  href="https://www.aena.es/es/asturias.html"
                  target="_self"
                >
                  Visita aquí su web
                </a>{" "}
                ). Desde aquí salen buses coincidentes con las llegadas de todos
                los vuelos, hacia Oviedo, Gijón y Avilés. Desde estas ciudades,
                ya sabéis cómo llegar al prau
              </p>
            </div>
            <h4 className={`sombrita text-3xl ${bebas_neue.className}`}>
              VEHÍCULO PARTICULAR
            </h4>
            <div className="flex flex-col text-left gap-3 text-[18px] w-full">
                <p>Podrás llegar hasta Aquasella directamente desde tu casa si vienes en tu coche, y dejar el vehículo en nuestro parking gratuito, cuyo aforo es limitado.</p>
                <p>Aquasella recomienda el vehículo compartido, para minimizar el número de vehículos y reducir así las emisiones contaminantes.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
