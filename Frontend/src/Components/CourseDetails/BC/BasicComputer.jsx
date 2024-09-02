import { Button } from "@material-tailwind/react";
import { DetailsBFD } from "./DetailsBFD";

export default function BasicComputer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div>
          <div className="pl-5 text-[goldenrod] text-left montserrat-alternates">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Basic Computer
            </h1>
            <p className="text-sm text-[#00000088] mb-6">
              The Basic Computer Course is designed to take you from a beginner to a
              confident frontend developer, capable of creating stunning,
              responsive websites and web applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
              <Button className="bg-[goldenrod] text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-lg">
                PURCHASE NOW
              </Button>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg px-8">
                $1000
              </p>
            </div>
          </div>
          <div className="text-[goldenrod] flex flex-wrap gap-2 text-xs sm:text-sm montserrat-alternates justify-center py-4">
            <p className="border rounded-lg p-1 bg-[#00000013]">Batch-1</p>
            <p className="border rounded-lg p-1 bg-[#00000013]">Total Seat - 100</p>
            <p className="border rounded-lg p-1 bg-[#00000013]">Start From - 1st Oct</p>
          </div>
        </div>
        <div className="p-3">
          <img
            className="rounded-xl shadow-lg hover:scale-95 transition-transform duration-500 w-full h-auto"
            src="2.jpg"
            alt="Course Preview"
          />
        </div>
      </div>
      <div className="">
        <DetailsBFD/>
      </div>
    </div>
  );
}
