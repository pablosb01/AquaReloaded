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
                Para Windows: click en &quot;Ayuda&quot; en la parte superior de la
                ventana de su navegador y seleccione la opción &quot;Acerca de&quot;.
              </p>
              <p className="text-left text-xl w-full px-6 font-bold">
                Google Chrome
              </p>
              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. Haz clic en el menú de Chrome Chrome situado en la barra de
                  herramientas del navegador.
                </p>
                <p>2. Selecciona &quot;Configuración&quot;.</p>
                <p>3. Haz clic en &quot;Mostrar opciones avanzadas…&quot;</p>
                <p>
                  4. En la sección &quot;Privacidad&quot;, haz clic en el botón
                  &quot;Configuración de contenido…&quot;.
                </p>
                <p>
                  5. En la sección &quot;Cookies&quot;, puedes configurar las opciones que
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
                  1. Haga clic en el botón &quot;Herramientas&quot; y después en &quot;Opciones
                  de Internet&quot;.
                </p>
                <p>
                  2. Haga clic en la ficha &quot;Privacidad&quot; y, a continuación, mueva
                  el control deslizante a una posición intermedia entre los
                  extremos superior e inferior, de manera que no se bloqueen ni
                  permitan todas las cookies.
                </p>{" "}
                <p>3. Haga clic en &quot;Sitios&quot;.</p>{" "}
                <p>
                  4. En el cuadro &quot;Dirección del sitio web&quot;, escriba la
                  dirección de un sitio web y, después, haga clic en &quot;Bloquear&quot;
                  o &quot;Permitir&quot;.
                </p>{" "}
                <p>
                  5. Mientras escriba, irá apareciendo una lista de las páginas
                  web que ya haya visitado. Si hace clic en un elemento de la
                  lista, se mostrará en el cuadro Dirección del sitio web.
                </p>
                <p>6. Al finalizar, haga clic en &quot;Aceptar&quot;.</p>
                <p>
                  7. Vuelva a colocar el control deslizante en su posición
                  original y haga clic en &quot;Aceptar&quot;.
                </p>
                <p>
                  8. Puedes consultar la ayuda de Windows para más información.
                </p>
              </p>

              <p className="text-left text-xl w-full px-6 font-bold">Safari</p>
              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. En la parte superior de la ventana de Firefox, haz clic en
                  el botón Firefox y selecciona &quot;Opciones&quot;.
                </p>{" "}
                <p>2. Selecciona el panel &quot;Privacidad&quot;.</p>{" "}
                <p>
                  3. En &quot;Firefox podrá:&quot; elige &quot;Usar una configuración
                  personalizada para el historial&quot;.{" "}
                </p>{" "}
                <p>
                  4. Marca la opción &quot;Aceptar cookies&quot; para activarlas, y
                  desmárcala para desactivarlas.
                </p>{" "}
                <p>
                  5. Si no quieres recibir cookies de teceros desmarca &quot;Aceptar
                  cookies de terceros&quot;.
                </p>
                <p>
                  6. Puedes consultar la ayuda de Mozilla para más información
                  Safari
                </p>
              </p>

              <p className="text-left text-xl w-full px-6 font-bold">Opera</p>

              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. Haga clic en &quot;Safari&quot; en la parte superior de la ventana de
                  su navegador y seleccione la opción ‘Preferencias’.
                </p>{" "}
                <p>2. Haga clic en &quot;Privacidad&quot;.</p>{" "}
                <p>
                  3. En el apartado &quot;Bloquear cookies&quot; seleccione una de las
                  siguientes opciones según le interese: &quot;De publicidad y
                  terceros&quot;, &quot;Siempre&quot;, o &quot;Nunca&quot;. Opera{" "}
                </p>{" "}
              </p>
              <p className="text-left text-xl w-full px-6 font-bold">
                Mozilla Firefox
              </p>
              <p className="text-left text-xl w-full px-6 gap-2">
                <p>
                  1. Haga clic en &quot;Configuración&quot; en la parte superior de la
                  ventana del navegador y selecciona ‘Opciones’.
                </p>{" "}
                <p>
                  2. A continuación seleccione la pestaña &quot;Avanzado&quot; y en la
                  lista de la izquierda seleccionar &quot;Cookies&quot;.{" "}
                </p>{" "}
                <p>3. A continuación, seleccione &quot;Aceptar cookies&quot;.</p>{" "}
                <p>
                  4. Dispone de tres opciones según su preferencia: &quot;Aceptar
                  cookies&quot;, &quot;Aceptar cookies solo del sitio visitado&quot; o &quot;No
                  aceptar cookies nunca&quot;.
                </p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
