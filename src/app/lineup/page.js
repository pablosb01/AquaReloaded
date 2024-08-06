import SliderArtistas from "@/components/SliderArtistas/SliderArtistas";

export default function LineUp() {
  return (
    <>
      <div className='flex justify-center'>
        <div className="h-fit flex flex-col items-center m-5 pb-8 w-fit">
          <div className="self-center pb-5">
            <p className="text-4xl">Line Up</p>
          </div>
          <div className="w-[700px]">
            <SliderArtistas />
          </div>
        </div>
      </div>
    </>
  );
}
