import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function CourseCard_({data}) {
  const {name, price, oldPrice, image,URI} =data;


  return (
    <div className="shadow-lg w-full rounded-xl border">
      <div className="w-full object-cover p-5">
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex flex-wrap gap-2 text-xs sm:text-sm montserrat-alternates justify-center py-2 underline-offset-4">
        <p className="border rounded-lg p-1 bg-[#00000013]">Batch-1</p>
        <p className="border rounded-lg p-1 bg-[#00000013]">Total Seat - 100</p>
        <p className="border rounded-lg p-1 bg-[#00000013]">Start From - 1st Oct</p>
      </div>
      <hr />
      <div>
        <h1 className="cursive text-lg sm:text-xl font-bold text-center py-5">
          {name}
        </h1>
  
      </div>
    </div>
  );
}
