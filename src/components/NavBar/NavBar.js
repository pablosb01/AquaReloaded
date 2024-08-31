'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "../HamburguerMenu/HamburguerMenu";

export default function NavBar() {
  const pathname = usePathname()
  return (
    <>
      <header className="w-full h-fit bg-slate-100 py-2 lg:py-0 lg:pl-12 sticky top-0 z-40">
        <div className="flex justify-center lg:justify-between items-center"> 

          <HamburgerMenu/>

          <a href='/' className="hrd-icon w-fit h-full box-border">
            <div>
                <Image
                src ="../logoaqua.svg"
                alt = "logoaqua"
                width={250}
                height={100}
                className="sombrita-dos"
                />
            </div>
          </a>

          {/* MENU DE DESKTOP */}

          <div className="w-[50%] h-full overflow-hidden items-center box-border hidden lg:flex">
            <Link href="/" className={`w-full h-full flex justify-center 
              ${pathname === "/" ? 'bg-gradient-to-r from-amber-500 from-20% to-pink-600 to-60% text-stone-200' : 'text-stone-700'}`}>
              <div className="font-bold text-2xl py-6 flex hdr-link hdr-submenu-link">HOME</div>
            </Link>
            <Link href="/lineup" className={`w-full h-full flex justify-center
            ${pathname === "/lineup" ? 'bg-gradient-to-r from-amber-500 from-20% to-pink-600 to-60% text-stone-200' : 'text-stone-700' }`}>
              <div className="font-bold text-2xl py-6 flex hdr-link hdr-submenu-link">LINE UP</div>
            </Link>
            <div href="#" className={`w-full h-full flex justify-center hdr-link hdr-submenu-link box-border
              ${pathname === "/taquilla/abonos" || pathname === "/taquilla/bonocultural" || pathname === "/taquilla" ? 'bg-gradient-to-tr from-amber-500 from-25% to-pink-600 to-80% text-stone-200' : 'text-stone-700'}`}>
                <div href="/taquilla" className="text-2xl flex font-bold py-6"><Link href="/taquilla">TAQUILLA</Link><Image src={`${pathname === "/taquilla/abonos" || pathname === "/taquilla/bonocultural" || pathname === "/taquilla" ? '/w-arrow.svg' : '/arrow.svg'}`} alt="arrow" width={32} height={32} className="arrow-flip"/>
                  <div className="hdr-submenu h-fit w-64 text-xl absolute flex flex-col gap-5 top-10 mt-6 opacity-85 p-5 items-start">
                    <Link href="/taquilla/abonos"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ABONOS-ENTRADAS<Image src="/buy.svg" alt="buy icon" width={24} height={24}/></Link>
                    <Link href="/taquilla/bonocultural"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">BONO CULTURAL JOVEN<Image src="/perrosanxe.svg" alt="sanxe perro" width={24} height={24}/></Link>
                 </div>
                </div>
              </div>
            <div href="/#" className={`w-full h-full flex justify-center hdr-link hdr-submenu-link 
              ${pathname === "/servicios/zonadescanso" || pathname === "/servicios/zonavip" || pathname === "/servicios/parkingcaravanas" || pathname === "/servicios/lockers" || pathname === "/servicios/transportes"
                ? 'bg-gradient-to-tr from-amber-500 from-25% to-pink-600 to-80% text-stone-200' : 'text-stone-700' }`}>
               <div className="py-6 font-bold text-2xl flex">SERVICIOS 
                <Image src={`${pathname === "/servicios/zonadescanso" || pathname === "/servicios/zonavip" || pathname === "/servicios/parkingcaravanas" || pathname === "/servicios/lockers" || pathname === "/servicios/transportes"
                 ? '/w-arrow.svg' : '/arrow.svg'}`} alt="arrow" width={32} height={32} className="arrow-flip"/>
                <div className="hdr-submenu-long text-xl h-fit w-64 absolute flex flex-col gap-5 top-10 mt-6 opacity-85 p-5 items-start z-50">
                  <Link href="/servicios/zonadescanso"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ZONA DESCANSO<Image src="/camping.svg" alt="camping icon" width={24} height={24}/></Link>
                  <Link href="/servicios/zonavip"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ZONA VIP<Image src="/vip.svg" alt="vip icon" width={24} height={24}/></Link>
                  <Link href="/servicios/parkingcaravanas"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">PARKING AUTOCARAVANAS<Image src="/van.svg" alt="van icon" width={24} height={24}/></Link>
                  <Link href="/servicios/lockers"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">LOCKERS<Image src="/locker.svg" alt="locker icon" width={24} height={24}/></Link>
                  <Link href="/servicios/transportes"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">TRANSPORTES<Image src="/bus.svg" alt="bus icon" width={24} height={24}/></Link>
                  <Link target="_blank" rel="noopener noreferrer" href="https://www.globalcharger.fr/aquasella/"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">
                    BATERIAS MÓVILES
                    <Image src="/battery.svg" alt="charger icon" width={24} height={24} />
                  </Link>
                  <Link target="_blank" rel="noopener noreferrer" href="https://aquasellashop.com"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">MERCHANDISING<Image src="/merch.svg" alt="merch icon" width={24} height={24}/></Link>
                </div>
                </div>
              </div>
            <div href="" className={`w-full h-full flex justify-center hdr-link hdr-submenu-link 
              ${pathname === "/info/localizacion" || pathname === "/info/historia" ? 'bg-gradient-to-tr from-amber-500 from-25% to-pink-600 to-80% text-stone-200' : 'text-stone-700' }
                `}>
              <div className="font-bold text-2xl flex py-6"
                >INFO <Image src={`${pathname === "/info/localizacion" || pathname === "/info/historia" ? '/w-arrow.svg' : '/arrow.svg'}`} alt="arrow" width={32} height={32} className="arrow-flip"/>
                <div className="hdr-submenu text-xl h-fit w-64 absolute flex flex-col gap-5 top-10 mt-6 opacity-85 p-5 items-start">
                  <Link href="/info/localizacion"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">LOCALIZACIÓN<Image src="/location.svg" alt="location icon" width={24} height={24}/></Link>
                  <Link href="/info/historia"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">HISTORIA<Image src="/history.svg" alt="history icon" width={24} height={24}/></Link>
                </div>
              </div>
            </div>
              <Link href="/tour" className={`w-full h-full flex justify-center 
                ${pathname === "/tour" ? 'bg-gradient-to-r from-amber-500 from-20% to-pink-600 to-60% text-stone-300' : 'text-stone-700' }                
                `}>
                <div  className="py-6 font-bold text-2xl flex hdr-link hdr-submenu-link"
                  >TOUR</div>
              </Link>
          </div>

          {/* HAMBURGUER MENU MOVIL */}

          

        </div>
      </header>
    </>
    
  );
}
