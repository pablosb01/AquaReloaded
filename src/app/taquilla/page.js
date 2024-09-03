import Image from "next/image";
import Link from "next/link";
import tickets from "../../../public/ticketsABONOS.png";
import bono from "../../../public/ticketsBONO.png";

export default function taquilla() {
  return (
    <div
      className="flex flex-col min-h-screen bg-contain xl:bg-cover bg-no-repeat bg-center xl:pt-8 xl:pb-3"
      style={{
        backgroundImage: "url('/mimictears.png')",
        backgroundPosition: "center bottom",
        
      }}
    >
      <div className="flex flex-grow items-center xl:-translate-y-[15%]">
        <div className="flex flex-row justify-around items-center h-full w-full">
          <Link href="/taquilla/abonos">
            <Image
              src={tickets}
              alt="tickets"
              width={600}
              className="levitation sombrita-dos question-list"
            />
          </Link>
          <Link href="/taquilla/bonocultural">
            <Image
              src={bono}
              alt="bono"
              width={600}
              className="levitation2 sombrita-dos question-list"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
