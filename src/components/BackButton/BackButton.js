import Image from "next/image";

export default function BackButton () {
  return (
    <div className="absolute h-fit w-full">
      <a data-mdb-smooth-scroll-init href='#bck'className="btn-effect rounded-[3px] fixed bottom-[30px] right-[30px] leading-[40px] w-[40px] z-10 transition-opacity duration-300">
        <Image
          src="/up-arrow.svg"
          alt="up logo"
          width={32}
          height={32}
          className=""
        />
      </a>
    </div>
  );
}
