import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
      <footer className="gradient text-white py-4 relative bottom-0 w-full">
        <div className="flex flex-col gap-3 container mx-auto text-center">
          <div className="relative flex flex-row w-full justify-center text-xl gap-10 h-fit">

            <Link href='/politica-de-privacidad' className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
              <p>Política de Privacidad</p>
            </Link>
            <Link href='/politica-de-cookies' className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
              Política de Cookies
            </Link>
            <Link href='/aviso-legal' className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
              Aviso Legal
            </Link>
            <Link href='/condiciones-generales' className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
              Condiciones Generales
            </Link>
            <a target='_blank' href="https://www.instagram.com/aquasellafest">
              <Image src="../ig.svg" alt="instagram" width={24} height={24}/>
            </a>
            <a target='_blank' href="https://www.facebook.com/aquasellafest">
              <Image src="../fb.svg" alt="facebook" width={24} height={24}/>
            </a>
            <a target='_blank' href="https://www.youtube.com/user/AquasellaChannel">
              <Image src="../yt.svg" alt="facebook" width={24} height={24}/>
            </a>

          </div>
          <p>&copy; AQUASELLA 2024 by LA REAL PRODUCCIONES</p>
        </div>
      </footer>
    );
  }