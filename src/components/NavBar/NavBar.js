import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header className="w-full h-fit bg-slate-100 pt-2 pb-2 pl-12 pr-12 sticky top-0 z-50">
        <div className="flex justify-between items-center"> 
          <a href='/'>
            <div>
                <Image
                src ="/logoaqua.svg"
                alt = "logoaqua"
                width={250}
                height={100}
                />
            </div>
          </a>
          <div className="flex gap-12 justify-end w-fit overflow-hidden items-center">
            <Link href="/" className="text-stone-700 font-bold text-2xl flex hdr-link">HOME</Link>
            <Link href="/lineup" className="text-stone-700 font-bold flex text-2xl gap-2 hdr-link items-center">LINE UP <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip" /></Link>
            <div href="/taquilla" className="text-stone-700 font-bold flex gap-2 text-2xl hdr-link items-center">TAQUILLA <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip" />
              <div className="hdr-submenu h-fit w-64 text-xl absolute flex flex-col gap-5 top-10 mt-6 opacity-85 p-5 items-start">
                <Link href="/taquilla/abonos"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ABONOS-ENTRADAS<Image src="/buy.svg" alt="buy icon" width={24} height={24}/></Link>
                <Link href="/taquilla/bonocultural"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">BONO CULTURAL JOVEN<Image src="/perrosanxe.svg" alt="sanxe perro" width={24} height={24}/></Link>
              </div>
            </div>
            <div href="/servicios" className="text-stone-700 text-2xl font-bold flex gap-2 hdr-link items-center">SERVICIOS <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip"/>
              <div className="hdr-submenu text-xl h-fit w-64 absolute flex flex-col gap-5 top-10 mt-6 opacity-85 p-5 items-start">
                <Link href="/servicios/zonadescanso"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ZONA DESCANSO<Image src="/camping.svg" alt="camping icon" width={24} height={24}/></Link>
                <Link href="/servicios/zonavip"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ZONA VIP<Image src="/vip.svg" alt="vip icon" width={24} height={24}/></Link>
                <Link href="/servicios/parkingcaravanas"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">PARKING AUTOCARAVANAS<Image src="/van.svg" alt="van icon" width={24} height={24}/></Link>
                <Link href="/servicios/lockers"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">LOCKERS<Image src="/locker.svg" alt="locker icon" width={24} height={24}/></Link>
                <Link href="/servicios/transportes"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">TRANSPORTES<Image src="/bus.svg" alt="bus icon" width={24} height={24}/></Link>
                
                <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.globalcharger.fr/aquasella/"
                className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between"
                >
                BATERIAS MÓVILES
                <Image src="/battery.svg" alt="charger icon" width={24} height={24} />
                </Link>

                <Link target="_blank" rel="noopener noreferrer" href="https://aquasellashop.com"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">MERCHANDISING<Image src="/merch.svg" alt="merch icon" width={24} height={24}/></Link>
              </div>
            </div>
            <Link href="/info" className="text-stone-700 font-bold flex gap-2 text-2xl hdr-link items-center">INFO <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip"/></Link>
            <Link href="/" className="text-stone-700 font-bold text-2xl hdr-link">TOUR</Link>
          </div>
        </div>
      </header>
    </>
    
  );
}
