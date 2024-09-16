import { useState, useEffect } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['2.jpg', '3.jpg', '4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel relative w-full mx-auto p-4">
      <h1 className="text-center montserrat-alternates text-4xl p-4 font-bold text-[goldenrod]">Events</h1>
      <div className="carousel-wrapper overflow-hidden relative h-[254px] sm:h-[288px] md:h-[500px] lg:h-[600px] xl:h-[612px] rounded-lg shadow-lg">
        <div
          className="carousel-slide flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-[254px] sm:h-[288px] md:h-[500px] lg:h-[600px] xl:h-[612px] object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
              <div className="montserrat-alternates absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 text-white flex flex-col justify-end items-center">
                <h1 className="text-xl font-bold montserrat-alternates">Jani na</h1>
                <p>kichu ekta hobe</p>
              </div>
            </div>
          ))}
                    
        </div>
      </div>
    </div>
  );
};

export default Gallery;
