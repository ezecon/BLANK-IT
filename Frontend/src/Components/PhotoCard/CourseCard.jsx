import { FaArrowRight } from "react-icons/fa6";

export default function CourseCard() {
  return (
    <div className="shadow-lg w-full rounded-xl border">
      <div className="w-full object-cover p-5">
        <img
          src="https://cdn.ostad.app/course/cover/2024-01-24T10-16-02.941Z-ASP-NET-core-career-track.jpg"
          alt="Course"
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
          Basic Frontend Development
        </h1>
        <p className="bg-[#eaecf0] mx-4 sm:mx-10 md:mx-16 lg:mx-28 p-2 sm:p-3 md:p-4 my-2 rounded-xl cursor-pointer hover:bg-[#d0d5dd] flex justify-center items-center gap-2 text-sm sm:text-md md:text-lg montserrat-alternates">
           DETAILS <FaArrowRight className="text-sm sm:text-lg md:text-xl" />
        </p>


      </div>
    </div>
  );
}
