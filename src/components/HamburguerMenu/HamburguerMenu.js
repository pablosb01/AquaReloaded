"use client"; // Para Next.js 13 si usas app directory
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [arriba, setArriba] = useState(true);
  const [arriba2, setArriba2] = useState(true);
  const [arriba3, setArriba3] = useState(true);

  const toggleArriba = () => {
    setArriba((prev) => !prev);
  };

  const toggleArriba2 = () => {
    setArriba2((prev) => !prev);
  };

  const toggleArriba3 = () => {
    setArriba3((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Añadir el event listener al montar el componente
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative lg:hidden pr-5 z-50">
      <button
        onClick={toggleMenu}
        className="p-2 text-white bg-[#CE733B] rounded-md focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 w-max h-screen gradient2 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        ref={menuRef} // Aplicamos ref al contenedor del menú
      >
        <nav className="flex flex-col p-4">
          <Link href="/" className="flex flex-row">
            <p className="text-2xl flex font-bold py-2" onClick={toggleMenu}>
              HOME
            </p>
          </Link>
          <Link href="/lineup" className="flex flex-row">
            <p className="text-2xl flex font-bold py-2" onClick={toggleMenu}>
              LINEUP
            </p>
          </Link>
          <details>
            <summary>
              <div
                className="text-2xl flex font-bold py-2 "
                onClick={toggleArriba2}
              >
                taquilla
                <Image
                  src={"/w-arrow.svg"}
                  alt="arrow"
                  width={32}
                  height={32}
                  className={`${arriba2 ? "arrow-flip" : "arrow-flipper"}`}
                />
              </div>
            </summary>
            <div>
              <Link href="/taquilla/abonos" className="flex flex-row gap-2">
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  ABONOS-ENTRADAS
                </p>
                <Image src="/buy.svg" alt="buy icon" width={24} height={24} />
              </Link>
              <Link
                href="/taquilla/bonocultural"
                className="flex flex-row gap-2"
              >
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  BONO CULTURAL JOVEN
                </p>
                <Image
                  src="/perrosanxe.svg"
                  alt="sanxe perro"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </details>
          <details>
            <summary>
              <div
                className="text-2xl flex font-bold py-2 "
                onClick={toggleArriba}
              >
                servicios
                <Image
                  src={"/w-arrow.svg"}
                  alt="arrow"
                  width={32}
                  height={32}
                  className={`${arriba ? "arrow-flip" : "arrow-flipper"}`}
                />
              </div>
            </summary>
            <div>
              <Link
                href="/servicios/zonadescanso"
                className="flex flex-row gap-2"
              >
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  zona descanso
                </p>
                <Image
                  src="/camping.svg"
                  alt="camping icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/servicios/zonavip" className="flex flex-row gap-2">
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  zona vip
                </p>
                <Image src="/vip.svg" alt="vip icon" width={24} height={24} />
              </Link>
              <Link
                href="/servicios/parkingcaravanas"
                className="flex flex-row gap-2"
              >
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  parking autocaravanas
                </p>
                <Image src="/van.svg" alt="van icon" width={24} height={24} />
              </Link>
              <Link href="/servicios/lockers" className="flex flex-row gap-2">
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  LOCKERS
                </p>
                <Image
                  src="/locker.svg"
                  alt="locker icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="/servicios/transportes"
                className="flex flex-row gap-2"
              >
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  transportes
                </p>
                <Image src="/bus.svg" alt="bus icon" width={24} height={24} />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.globalcharger.fr/aquasella/"
                className="flex flex-row gap-2"
              >
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  BATERIAS MÓVILES
                </p>
                <Image
                  src="/battery.svg"
                  alt="charger icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://aquasellashop.com"
                className="flex flex-row gap-2"
              >
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  MERCHANDISING
                </p>
                <Image
                  src="/merch.svg"
                  alt="merch icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </details>

          <details>
            <summary>
              <div
                className="text-2xl flex font-bold py-2 "
                onClick={toggleArriba3}
              >
                info
                <Image
                  src={"/w-arrow.svg"}
                  alt="arrow"
                  width={32}
                  height={32}
                  className={`${arriba3 ? "arrow-flip" : "arrow-flipper"}`}
                />
              </div>
            </summary>
            <div>
              <Link href="/info/localizacion" className="flex flex-row gap-2">
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  localizacion
                </p>
                <Image src="/location.svg" alt="location icon" width={24} height={24}/>
              </Link>
              <Link
                href="/info/historia"
                className="flex flex-row gap-2"
              >
                <p
                  className="text-2xl flex font-bold py-3 pl-10"
                  onClick={toggleMenu}
                >
                  historia
                </p>
                <Image src="/history.svg" alt="history icon" width={24} height={24}/>
              </Link>
            </div>
          </details>

          <Link href="/tour" className="flex flex-row">
            <p className="text-2xl flex font-bold py-2" onClick={toggleMenu}>
              Tour
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
}
