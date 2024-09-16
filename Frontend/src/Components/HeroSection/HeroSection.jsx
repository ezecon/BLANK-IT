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
              DOT-iT
            </h1>
            <p className="text text-xs sm:text-sm md:text-base lg:text-lg mb-6">
              Place you can trust the most
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
                  <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/447961412_122152796060229546_7969611286801420143_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFE1cI_YOhXfhwymyF4V8YbGVaLRh3t5A8ZVotGHe3kDxdsAE58EpnC19OFhdBQSRT2Ord0m_xgWwch5YOJo3f2&_nc_ohc=quIs82QlWF8Q7kNvgGu5Rem&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYA7FJstXmfa7ypP0NaWajq0oMyc_WozRn6ekpoNApiLDA&oe=66DB76F8" alt="Discount 2" />
              </div>
              <div className="img-container mt-3  sm:mt-10 border rounded-xl">
                  <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/447965287_122152795952229546_2274761917519809072_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHomnySE_SBqR-f2sssV3UNRO8fbdAHGvBE7x9t0Aca8K8WyXckV4HaRHHKF1jz5BhcGlVPslT6NYdmznsLmU5I&_nc_ohc=CD0lsQfyaJcQ7kNvgGX3vGv&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYBUCSeJvjdxD7vz27PIuNy8paNk6yaGMoHscbc0B7g3Xw&oe=66DB6900" alt="Discount 3" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
