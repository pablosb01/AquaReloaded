
import React from "react";
import Video from "@/components/Video/Video.jsx";
import MerchanSlider from "@/components/MerchanSlider/MerchanSlider";
import SliderOne from "@/components/SliderOne/SliderOne";
import {NewsArray, MerchArray} from "../../public/TestNewsPics";

/* import SimpleSlider from "../components/SimpleSlider/SimpleSlider";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */
/* import Image from "next/image";
import Link from "next/link"; */

export default function Home() {
  return (

    /* ESCONDO TODO EL CONTENIDO DE LA PAGINA EN MOVIL DE MOMENTO */

    <main className="min-h-fit h-fit flex flex-col items-center">
      <Video />
      <div className="flex flex-col justify-center w-[90%] lg:flex-row gap-10">
        <div className="h-fit flex flex-col items-center lg:w-[45%] w-full box-border lg:p-5 my-5 mx-auto lg:m-5 pb-8">
          <div className="lg:self-start pb-5">
            <p className="text-4xl text-white">Noticias</p>
          </div>
          <div className="w-[99%] lg:w-[100%]">
            <SliderOne object={NewsArray}/>
          </div>
        </div>
        <div className="h-fit flex flex-col items-center lg:w-[45%] w-full box-border lg:p-5 my-5 mx-auto lg:m-5 pb-8">
          <div className="lg:self-end pb-5">
            <p className="text-4xl text-white">MERCHANDISING</p>
          </div>
          <div className="w-[99%] lg:w-[100%]">
            <SliderOne object={MerchArray}/>
          </div>
        </div>
      </div>

      {/* <header className="w-full h-fit bg-slate-100 pt-2 pb-2 pl-12 pr-12 sticky top-0 z-50">
        <div className="flex justify-between items-center"> 
          <div>
            <Image
            src ="/logoaqua.svg"
            alt = "logoaqua"
            width={250}
            height={100}
            />
          </div>
          <div className="flex gap-12 justify-end w-fit overflow-hidden items-center">
            <Link href="/" className="text-stone-700 font-bold flex hdr-link">HOME</Link>
            <Link href="/lineup" className="text-stone-700 font-bold flex gap-2 hdr-link items-center">LINE UP <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip" /></Link>
            <div href="#" className="text-stone-700 font-bold flex gap-2 hdr-link items-center">TAQUILLA <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip" />
              <div className="hdr-submenu h-fit w-64 absolute flex flex-col gap-5 top-10 mt-6 text-sm opacity-85 p-5 items-start">
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ABONOS-ENTRADAS<Image src="/buy.svg" alt="buy icon" width={24} height={24}/></Link>
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">BONO CULTURAL JOVEN<Image src="/perrosanxe.svg" alt="sanxe perro" width={24} height={24}/></Link>
              </div>
            </div>
            <div href="/" className="text-stone-700 font-bold flex gap-2 hdr-link items-center">SERVICIOS <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip"/>
              <div className="hdr-submenu h-fit w-64 absolute flex flex-col gap-5 top-10 mt-6 text-sm opacity-85 p-5 items-start">
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ZONA DESCANSO<Image src="/camping.svg" alt="camping icon" width={24} height={24}/></Link>
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">ZONA VIP<Image src="/vip.svg" alt="vip icon" width={24} height={24}/></Link>
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">PARKING AUTOCARAVANAS<Image src="/van.svg" alt="van icon" width={24} height={24}/></Link>
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">LOCKERS<Image src="/locker.svg" alt="locker icon" width={24} height={24}/></Link>
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">TRANSPORTES<Image src="/bus.svg" alt="bus icon" width={24} height={24}/></Link>
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">BATERIAS MÓVILES<Image src="/battery.svg" alt="charger icon" width={24} height={24}/></Link>
                <Link href="#"className="hdr-submenu-link w-full flex text-stone-100 items-center justify-between">MERCHANDISING<Image src="/merch.svg" alt="merch icon" width={24} height={24}/></Link>
              </div>
            </div>
            <Link href="/" className="text-stone-700 font-bold flex gap-2 hdr-link items-center">INFO <Image src="/arrow.svg" alt="arrow" width={32} height={32} className="arrow-flip"/></Link>
            <Link href="/" className="text-stone-700 font-bold hdr-link">TOUR</Link>
          </div>
        </div>
      </header>
      <button className="btn-effect absolute bottom-12 right-16">
      <Image
      src="/up-arrow.svg"
      alt="up logo"
      width={32}
      height={32}
      className=""
      />
      </button> */}
    </main>

    /* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
        <Image
            src="/up-arrow.png"
            alt="my logo"
            width={24}
            height={24}
            />
      </div>
    </main> */
  );
}
