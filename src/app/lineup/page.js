import SliderOne from "@/components/SliderOne/SliderOne";
import { ArtistArray } from "@/components/Test/TestNewsPics";

export default function LineUp() {
  return (
    <>
      <div
        className="flex justify-center bg-contain xl:bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/mimictears.png')",
          backgroundPosition: "center bottom",
          /* paddingBottom: "3rem", */
        }}
      >
        <div className="h-fit flex flex-col items-center m-5 p-12 md:pb-8 w-fit">
          <div className="self-center pb-5">
            <p className="text-3xl md:text-4xl">Line Up</p>
          </div>
          <div className="w-[300px] sm:w-[700px] sm:h-[700px]">
            <SliderOne object={ArtistArray} />
          </div>
        </div>
      </div>
    </>
  );
}
