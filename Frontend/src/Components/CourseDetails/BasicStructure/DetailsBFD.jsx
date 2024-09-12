import { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TbManFilled } from "react-icons/tb";
import Instructor from "./Instructor";
import axios from 'axios';
import Atik from "../Instructors/Atik";
import Econ from "../Instructors/Econ";
import Hridoy from "../Instructors/Hridoy";

export function Details({ info }) {
  const {name,instructor} = info;
  const [activeTab, setActiveTab] = useState("outline");
  const [topic, setTopic] = useState([]);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await axios.get(`https://dot-it-server.vercel.app/api/topic`);
        if (res.status === 200) {
          setTopic(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopics();
  }, []); // Add empty dependency array to run this effect once

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get(`https://dot-it-server.vercel.app/api/resource`);
        if (res.status === 200) {
          setResource(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchResources();
  }, []); // Add empty dependency array to run this effect once

  const data = [
    {
      label: "Outline",
      value: "outline",
      desc: (
        <>
          {topic
            .filter(i => i.name === name)
            .map((i, index) => (
              <details key={index} className="montserrat-alternates font-bold group w-full py-10">
                <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
                  Class {index + 1}
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <TbManFilled className="text-2xl" />
                  </span>
                </summary>
                <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
                  <p className="text-gray-700">
                    <span className="font-bold">Topic: </span>
                    <span className="font-light">{i.topic}</span>

                  </p>
                </div>
              </details>
            ))}
        </>
      ),
    },
    {
      label: "Instructor",
      value: "react",
      desc: (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {instructor && typeof instructor === "object" ? (
              <>
                {instructor.econ && <Econ/>}
                {instructor.science && <Atik/>}
                {instructor.art && <Hridoy/>}
              </>
            ) : (
              <p>No instructor data available</p> // Fallback message when instructor is undefined or invalid
            )}
          </div>
        </>
      ),
    }
,    
    {
      label: "Resources",
      value: "resources",
      desc: (
        <>
          {resource
            .filter(i => i.name === name)
            .map((i, index) => (
              <details key={index} className="montserrat-alternates font-bold group w-full py-10">
                <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
                  Resource {index + 1}
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <TbManFilled className="text-2xl" />
                  </span>
                </summary>
                <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
                {i.resource?.length === 0 ? (
                    <p>Empty</p>
                  ) : (
                    <p className="text-gray-700">
                      <span className="font-bold">Details:</span>
                      <span><a href={i.resource}>{i.resource}</a></span>
                    </p>
                  )}
                </div>
              </details>
            ))}
        </>
      ),
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`montserrat-alternates text-[goldenrod] font-bold ${
              activeTab === value ? "" : ""
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
