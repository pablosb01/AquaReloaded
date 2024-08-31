import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="gradient text-white py-4 relative bottom-0 w-full">
      <div className="flex flex-col gap-3 container mx-auto text-center">
        <div className="relative flex flex-col-reverse lg:flex-col w-full justify-center lg:text-xl gap-4 h-fit">
          <div className="flex flex-wrap lg:flex-row text-md lg:text-xl justify-center gap-4 lg:gap-10">
            <Link
              href="/politica-de-privacidad"
              className="w-1/2 lg:w-fit border-b-2 border-transparent hover:border-b-2 hover:border-white agrandar"
            >
              <p>Política de Privacidad</p>
            </Link>
            <Link
              href="/politica-de-cookies"
              className="w-1/2 lg:w-fit border-b-2 border-transparent hover:border-b-2 hover:border-white agrandar"
            >
              Política de Cookies
            </Link>
            <Link
              href="/aviso-legal"
              className="w-1/2 lg:w-fit border-b-2 border-transparent hover:border-b-2 hover:border-white agrandar"
            >
              Aviso Legal
            </Link>
            <Link
              href="/condiciones-generales"
              className="w-1/2 lg:w-fit border-b-2 border-transparent hover:border-b-2 hover:border-white agrandar"
            >
              Condiciones Generales
            </Link>
          </div>
          <div className='flex flex-row w-full justify-center gap-10'>
            <a target="_blank" href="https://www.instagram.com/aquasellafest" className="agrandar2">
              <Image src="../ig.svg" alt="instagram" width={24} height={24} />
            </a>
            <a target="_blank" href="https://www.facebook.com/aquasellafest" className="agrandar2">
              <Image src="../fb.svg" alt="facebook" width={24} height={24} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/user/AquasellaChannel"
              className="agrandar2"
            >
              <Image src="../yt.svg" alt="facebook" width={24} height={24} />
            </a>
          </div>
        </div>
        <p>&copy; AQUASELLA 2024 by LA REAL PRODUCCIONES</p>
      </div>
    </footer>
  );
}
