import { bebas_neue, roboto } from "@/app/fonts";
import SliderThree from "@/components/SliderThree/SliderThree";
import { YearsArray } from "@/components/Test/TestNewsPics";
import VideoHistoria from "@/components/Video/VideoHistoria";

export default function historia() {
  return (
    <main className="box-border w-full h-full m-w-[2500px]">
      <div className="flex flex-col items-center gap-6 w-full h-full pb-12">
        <div className="w-full overflow-hidden h-[400px]">
          <VideoHistoria />
        </div>
        <div className="flex flex-col w-[95%] py-12">
            <h2
              className={`text-center font-bold md:text-6xl text-4xl w-full sombrita ${bebas_neue.className}`}
            >
              Érase una vez Aquasella...
            </h2>
            <div className={`flex flex-col gap-6 md:gap-0 pt-12 h-fit w-full items-center box-border ${roboto.className}`}>
              <div className="flex flex-col gap-5 w-[95%] lg:w-[60%] h-full px-4 pb-10">
                <p className="text-left text-xl w-full">
                  Corría 1997 cuando el festival Aquasella nacía como un evento
                  musical creado por unos fanáticos del TECHNO. Empezó como una
                  fiesta para amigos, para gente que cada fin de semana se
                  encontraba en clubes de la zona norte de España con el único nexo
                  común, en muchos casos, de ser aficionados a la música
                  electrónica.
                </p>
                <p className="text-left text-xl w-full">
                  Han pasado 26 años desde entonces y el festival ha evolucionado en
                  diversos sentidos, pero lo que no hay cambiado ni un ápice es que
                  sigue siendo un evento para amig@s. Aunque seáis miles los que nos
                  acompañéis continúa existiendo la esencia original, la del buen
                  rollo, la del ambiente familiar y, sobre todo, esa pasión por la
                  música.
                </p>
                <p className="text-left text-xl w-full">
                  En 2023 cumplimos 26 ediciones y pudimos celebrar juntos un SOLD
                  OUT en LA MEJOR edición de Aquasella de la historia… ¡hasta el
                  momento!
                </p>
              </div>
              <div className="box-border px-12 lg:w-[75%] w-full h-fit">
                <SliderThree object={YearsArray}/>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}
