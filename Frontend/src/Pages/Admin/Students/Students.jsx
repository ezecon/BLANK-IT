import { useEffect, useState } from "react";
import {
  Select,
  Option,
  Input,
  Button,
} from "@material-tailwind/react";
import { TbManFilled } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";

export function Students() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [resource, setResource] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`https://dot-it-server.vercel.app/api/course`);
        if (res.status === 200) {
          setDatas(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []); // Dependency array to avoid multiple requests

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          `https://dot-it-server.vercel.app/api/course-purchases`
        );
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudents();
  }, []); // Dependency array to avoid multiple requests

  const handleCourseChange = (value) => {
    setSelectedCourse(value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleResourceChange = (e) => {
    setResource(e.target.value);
  };

  const handleTopic = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (topic === '') {
      toast.error("Enter Topic");
    } else {
      try {
        const res = await axios.post(`https://dot-it-server.vercel.app/api/topic`, {
          name: selectedCourse,
          topic: topic,
        });
        if (res.status === 200) {
          toast.success("Topic Added");
          setTopic(""); // Clear the input after submission
        }
      } catch (error) {
        console.log("Error adding topic:", error.response?.data || error.message);
        toast.error("Failed to add topic. Please try again.");
      }
    }
  };

  const handleResource = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (resource === '') {
      toast.error("Enter Resource");
    } else {
      
      try {
        const res = await axios.post(`https://dot-it-server.vercel.app/api/resource`, {
          name: selectedCourse,
          resource: resource,
        });
        if (res.status === 200) {
          toast.success("Resource Added");
          setResource(""); // Clear the input after submission
        }
      } catch (error) {
        console.log("Error adding resource:", error.response?.data || error.message);
        toast.error("Failed to add resource. Please try again.");
      }
    }
  };

  return (
    <div>
      <h1 className="montserrat-alternates text-center text-[goldenrod] py-5 font-bold text-xl">
        Course Information
      </h1>
      <div className="w-72">
        <Select label="Select Course" onChange={handleCourseChange}>
          {datas.map((i) => (
            <Option key={i._id} value={i.name} className="text-[goldenrod]">
              {i.name}
            </Option>
          ))}
        </Select>
      </div>

      <div>
        <details className="montserrat-alternates font-bold group w-full py-10">
          <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
            Students
            <span className="transform transition-transform duration-300 group-open:rotate-180">
              <TbManFilled className="text-2xl" />
            </span>
          </summary>
          <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
            <div className="mt-5">
              {data
                .filter((i) => i.course === selectedCourse)
                .map((i, index) => (
                  <div key={i.email} className="mb-4 font-normal">
                    <p>Serial No: {index + 1}</p>
                    <p>Name: {i.name}</p>
                    <p>Email: {i.email}</p>
                    <p>Number: {i.number}</p>
                    <p>WhatsApp: {i.wNumber}</p>
                    <p>Address: {i.address}</p>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </details>
      </div>

      <div>
        <details className="montserrat-alternates font-bold group w-full py-10">
          <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
            Class Topic:
            <span className="transform transition-transform duration-300 group-open:rotate-180">
              <TbManFilled className="text-2xl" />
            </span>
          </summary>
          <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
            <form onSubmit={handleTopic}>
              <div className="w-72 py-2">
                <Input
                  required
                  value={topic}
                  label="Topic"
                  onChange={handleTopicChange}
                />
              </div>
              <div>
                <Button type="submit">Add Topic</Button>
              </div>
            </form>
          </div>
        </details>
      </div>

      <div>
        <details className="montserrat-alternates font-bold group w-full py-10">
          <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
            Resources
            <span className="transform transition-transform duration-300 group-open:rotate-180">
              <TbManFilled className="text-2xl" />
            </span>
          </summary>
          <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
            <form onSubmit={handleResource}>
              <div className="w-72 py-2">
                <Input
                  required
                  value={resource}
                  label="Resource"
                  onChange={handleResourceChange}
                />
              </div>
              <div>
                <Button type="submit">Add Resource</Button>
              </div>
            </form>
          </div>
        </details>
      </div>
    </div>
  );
}
