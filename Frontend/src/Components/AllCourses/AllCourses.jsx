import { Button } from "@material-tailwind/react";
import CourseCard from "../PhotoCard/CourseCard";


export default function AllCourses() {
  return (
    <div className="my-20">
      <h1 className="text-center montserrat-alternates text-4xl p-4 font-bold text-[goldenrod]">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
      </div>
      <div className=" my-6 flex justify-center items-center"><Button className="bg-[#00000060]">See More</Button></div>
    </div>

  )
}
