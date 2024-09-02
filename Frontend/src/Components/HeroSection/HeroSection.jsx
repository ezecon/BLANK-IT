import { Button, Carousel } from "@material-tailwind/react";

export function HeroSection() {
  return (
    <div className="relative">
      <Carousel loop={true} autoplay={true} className="rounded-xl">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen">
          <img
            src="2.jpg"
            alt="image 1"
            className="h-full w-full object-cover object-center rounded-xl blur-img"
          />
        </div>
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen">
          <img
            src="3.jpg"
            alt="image 2"
            className="h-full w-full object-cover object-center rounded-xl blur-img"
          />
        </div>
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen">
          <img
            src="4.jpg"
            alt="image 3"
            className="h-full w-full object-cover object-center rounded-xl blur-img"
          />
        </div>
      </Carousel>
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="text-white text-center lg:text-left montserrat-alternates">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">DOT-iT</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 text">Place you can trust the most</p>
          <Button className="bg-[#00000060] text-white px-4 py-2 rounded-md text-sm sm:text-base">PURCHASE NOW</Button>
        </div>
      </div>
    </div>
  );
}
