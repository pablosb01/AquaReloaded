import Image from "next/image";
import Link from "next/link";
import tickets from "../../../public/ticketsABONOS.png";
import bono from "../../../public/ticketsBONO.png";

export default function taquilla() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/mimictears.png')",
        backgroundPosition: "center bottom",
        paddingBottom: "3rem",
        paddingTop: "8rem",
      }}
    >
      <div className="flex flex-grow items-center -translate-y-[15%]">
        <div className="flex flex-row justify-around items-center h-full w-full">
          <a href="/taquilla/abonos">
            <Image
              src={tickets}
              alt="tickets"
              width={600}
              className="levitation sombrita-dos question-list"
            />
          </a>
          <a href="/taquilla/bonocultural">
            <Image
              src={bono}
              alt="bono"
              width={600}
              className="levitation2 sombrita-dos question-list"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
