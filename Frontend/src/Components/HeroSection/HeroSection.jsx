import { Button, Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
}, []);
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
      <div className=" grid grid-cols-2 absolute inset-0 items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className={`pl-10 sm:pl-5  text-white text-center lg:text-left montserrat-alternates ${isLoading ? 'scrolled' : 'roll-left'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">DOT-iT</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 text">Place you can trust the most</p>
          <Button className="bg-[#00000060] text-white px-4 py-2 rounded-md text-sm sm:text-base">PURCHASE NOW</Button>
        </div>
        <div className={`text-white text-center lg:text-left montserrat-alternates ${isLoading ? 'scrolled' : 'roll-right'}`}>
          <div className="discount autoShow">
              <div className="img-container mt-3  sm:mt-10 border rounded-xl">
                  <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/447904043_122152796162229546_3833688701580616768_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeExtfjxeI-fkO9WkJhMMWH1UTRvkKS5MMRRNG-QpLkwxHKhf1CSFozn_DbVEBS1qa_dw_M3_ILlKl3zr4o8prbq&_nc_ohc=H_2bRQ_rEAQQ7kNvgFlodR1&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYBYkgs0mcjGuFzmJQKDHwv7Q9gR_7RZ7yPI4wmq9PTj3w&oe=66DB80E8" alt="Discount 1" />
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
