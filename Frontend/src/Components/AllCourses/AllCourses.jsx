import { Button } from "@material-tailwind/react";
import CourseCard_ from "../PhotoCard/CourseCard_";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllCourses() {
  const [data, setData] = useState([]); // State for storing course data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://dot-it-server.vercel.app/api/course`);

        if (res.status === 200) {
          setData(res.data); // Set the data
          console.log(res.data); // Log the fetched data
        }
      } catch (error) {
        console.log("Error fetching courses:", error); // Error handling
      }
    };

    fetchData();
  }, []); // Dependency array ensures the effect runs only once on component mount

  return (
    <div className="my-20">
      <h1 className="text-center montserrat-alternates text-4xl p-4 font-bold text-[goldenrod]">
        All Courses
      </h1>
      
      {/* Grid layout for the courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.length === 0 ? ( // Check if data is still loading
          <p>Loading...</p>
        ) : (
          data.map((course) => (
            <div key={course._id}>
              <CourseCard_ data={course} /> 
            </div>
          ))
        )}
      </div>
      
      {/* Button for "See More" */}
      <div className="my-6 flex justify-center items-center">
        <Button className="bg-[#00000060]">See More</Button>
      </div>
    </div>
  );
}
