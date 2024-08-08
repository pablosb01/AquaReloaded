"use client"; // Para Next.js 13 si usas app directory
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

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
        className={`fixed top-0 left-0 w-64 h-screen gradient2 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        ref={menuRef} // Aplicamos ref al contenedor del menú
      >
        <nav className="flex flex-col p-4">
          <Link href="/">
            <p className="text-2xl flex font-bold py-6" onClick={toggleMenu}>
              HOME
            </p>
          </Link>
          <Link href="/lineup">
            <p className="text-2xl flex font-bold py-6" onClick={toggleMenu}>
              LINEUP
            </p>
          </Link>
          <details>
            <Link href="/taquilla/abonos">
              <p className="text-2xl flex font-bold py-6" onClick={toggleMenu}>
                ABONOS-ENTRADAS
              </p>
            </Link>
            <summary>
              <p className="text-2xl flex font-bold py-6" onClick={toggleMenu}>
                taquilla
                <Image
                  src={"/w-arrow.svg"}
                  alt="arrow"
                  width={32}
                  height={32}
                  className="arrow-flip"
                />
              </p>
            </summary>
          </details>
          <Link href="/tour">
            <p className="text-2xl flex font-bold py-6" onClick={toggleMenu}>
              Tour
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
}
