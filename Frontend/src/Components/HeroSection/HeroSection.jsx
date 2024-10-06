import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    },2000);

    return () => clearTimeout(timer);
}, []);
  return (
    <div className="relative">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen">
          <img
            src="bg.jpg"
            alt="image 1"
            className="h-full w-full object-cover object-center rounded-xl blur-img"
          />
        </div>

      <div className=" grid grid-cols-2 absolute inset-0 items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className={`pl-10 sm:pl-5  text-white text-center lg:text-left montserrat-alternates ${isLoading ? '' : 'roll-left'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              BLANK-iT
            </h1>
            <p className="text text-xs sm:text-sm md:text-base lg:text-lg mb-6">
              Place you can trust the most for journey
            </p>
            <Link to="all-courses"><Button className="bg-black bg-opacity-60 text-white px-3 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-lg">
              PURCHASE NOW
            </Button></Link>
        </div>
        <div className={`text-white text-center lg:text-left montserrat-alternates ${isLoading ? '' : 'roll-op'}`}>
          <div className="discount autoShow">
              <div className="img-container mt-3  sm:mt-10 border rounded-xl">
                  <img src="https://c4.wallpaperflare.com/wallpaper/125/663/689/high-tech-earth-hd-wallpaper-wallpaper-preview.jpg" alt="Discount 1" />
              </div>
              <div className="img-container mb-3  sm:mb-10 border rounded-xl">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQv1XZqq4sHW5YsjuewaP7EhAtxe4KRbq9Q&s" alt="Discount 2" />
              </div>
              <div className="img-container mt-3  sm:mt-10 border rounded-xl">
                  <img src="https://wallpapers.com/images/hd/4k-tech-2k2jzc0qemh7y38n.jpg" alt="Discount 3" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
