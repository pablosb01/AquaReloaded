import { roboto, bebas_neue } from "@/app/fonts.js";

export default function PoliticaCookies() {
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
              Política de Cookies
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-left text-xl w-full px-6 font-bold">
                Puede usted permitir, bloquear o eliminar las cookies instaladas
                en su equipo mediante la configuración de las opciones del
                navegador instalado en su ordenador.
              </p>
              <p className="text-left text-xl w-full px-6">
                Si no está seguro sobre qué tipo y versión de navegador usa para
                acceder a internet:
              </p>
              <p className="text-left text-xl w-full px-6">
                Para Windows: click en ‘Ayuda’ en la parte superior de la
                ventana de su navegador y seleccione la opción ‘Acerca de’.
              </p>
              <p className="text-left text-xl w-full px-6 font-bold">
                Google Chrome
              </p>
              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. Haz clic en el menú de Chrome Chrome situado en la barra de
                  herramientas del navegador.
                </p>{" "}
                <p>2. Selecciona “Configuración”.</p>{" "}
                <p>3. Haz clic en “Mostrar opciones avanzadas…”</p>{" "}
                <p>
                  4. En la sección “Privacidad”, haz clic en el botón
                  “Configuración de contenido…”.
                </p>{" "}
                <p>
                  5. En la sección “Cookies”, puedes configurar las opciones que
                  se indican a continuación: Eliminar cookies, bloquear o
                  permitir las cookies de forma predeterminada, incluir
                  excepciones de cookies de dominios o sitios web específicos.
                  6. Para mayor detalle consulta la ayuda de Google Chrome.
                </p>
              </p>
              <p className="text-left text-xl w-full px-6 font-bold">
                Microsoft Internet Explorer 7.0 y 8.0
              </p>
              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. Haga clic en el botón “Herramientas” y después en “Opciones
                  de Internet”.
                </p>{" "}
                <p>
                  2. Haga clic en la ficha “Privacidad” y, a continuación, mueva
                  el control deslizante a una posición intermedia entre los
                  extremos superior e inferior, de manera que no se bloqueen ni
                  permitan todas las cookies.
                </p>{" "}
                <p>3. Haga clic en “Sitios”.</p>{" "}
                <p>
                  4. En el cuadro “Dirección del sitio web”, escriba la
                  dirección de un sitio web y, después, haga clic en “Bloquear”
                  o “Permitir”.
                </p>{" "}
                <p>
                  5. Mientras escriba, irá apareciendo una lista de las páginas
                  web que ya haya visitado. Si hace clic en un elemento de la
                  lista, se mostrará en el cuadro Dirección del sitio web.
                </p>
                <p>6. Al finalizar, haga clic en “Aceptar”.</p>
                <p>
                  7. Vuelva a colocar el control deslizante en su posición
                  original y haga clic en “Aceptar”.
                </p>
                <p>
                  8. Puedes consultar la ayuda de Windows para más información.
                </p>
              </p>

              <p className="text-left text-xl w-full px-6 font-bold">Safari</p>
              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. En la parte superior de la ventana de Firefox, haz clic en
                  el botón Firefox y selecciona “Opciones”.
                </p>{" "}
                <p>2. Selecciona el panel “Privacidad”.</p>{" "}
                <p>
                  3. En “Firefox podrá:” elige “Usar una configuración
                  personalizada para el historial”.{" "}
                </p>{" "}
                <p>
                  4. Marca la opción “Aceptar cookies” para activarlas, y
                  desmárcala para desactivarlas.
                </p>{" "}
                <p>
                  5. Si no quieres recibir cookies de teceros desmarca “Aceptar
                  cookies de terceros”.
                </p>
                <p>
                  6. Puedes consultar la ayuda de Mozilla para más información
                  Safari
                </p>
              </p>

              <p className="text-left text-xl w-full px-6 font-bold">Opera</p>

              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. Haga clic en “Safari” en la parte superior de la ventana de
                  su navegador y seleccione la opción ‘Preferencias’.
                </p>{" "}
                <p>2. Haga clic en “Privacidad”.</p>{" "}
                <p>
                  3. En el apartado “Bloquear cookies” seleccione una de las
                  siguientes opciones según le interese: “De publicidad y
                  terceros”, “Siempre”, o “Nunca”. Opera{" "}
                </p>{" "}
              </p>
              <p className="text-left text-xl w-full px-6 font-bold">
                Mozilla Firefox
              </p>
              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. Haga clic en “Configuración” en la parte superior de la
                  ventana del navegador y selecciona ‘Opciones’.
                </p>{" "}
                <p>
                  2. A continuación seleccione la pestaña “Avanzado” y en la
                  lista de la izquierda seleccionar “Cookies”.{" "}
                </p>{" "}
                <p>3. A continuación, seleccione “Aceptar cookies”.</p>{" "}
                <p>
                  4. Dispone de tres opciones según su preferencia: “Aceptar
                  cookies”, “Aceptar cookies solo del sitio visitado” o “No
                  aceptar cookies nunca”.
                </p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
