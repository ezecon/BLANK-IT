import { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TbManFilled } from "react-icons/tb";
import Atik from "../Instructors/Atik";
import Econ from "../Instructors/Econ";
import Hridoy from "../Instructors/Hridoy";
import axios from 'axios';

export function Details({ info }) {
  const { name, instructor } = info;
  const [activeTab, setActiveTab] = useState("outline");
  const [topics, setTopics] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await axios.get(`https://dot-it-server.vercel.app/api/topic`);
        if (res.status === 200) {
          setTopics(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get(`https://dot-it-server.vercel.app/api/resource`);
        if (res.status === 200) {
          setResources(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchResources();
  }, []);

  const data = [
    {
      label: "Outline",
      value: "outline",
      desc: (
        <>
          {topics
            .filter(topic => topic.name === name)
            .reduce((acc, topic) => {
              const existingClass = acc.find(item => item.classNo === topic.classNo);
              if (existingClass) {
                existingClass.topics.push(topic);
              } else {
                acc.push({ classNo: topic.classNo, topics: [topic] });
              }
              return acc;
            }, [])
            .map((group, index) => (
              <details key={index} className="montserrat-alternates font-bold group w-full py-10">
                <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
                  Class {group.classNo}
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <TbManFilled className="text-2xl" />
                  </span>
                </summary>
                <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
                  {group.topics.map((i, idx) => (
                    <p key={idx} className="text-gray-700">
                      <span className="font-light">{i.topic}</span>
                    </p>
                  ))}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {instructor && typeof instructor === "object" ? (
            <>
              {instructor.econ && <Econ />}
              {instructor.science && <Atik />}
              {instructor.art && <Hridoy />}
            </>
          ) : (
            <p>No instructor data available</p>
          )}
        </div>
      ),
    },
    {
      label: "Resources",
      value: "resources",
      desc: (
        <>
          {resources
            .filter(resource => resource.name === name)
            .reduce((acc, resource) => {
              const existingClass = acc.find(item => item.classNo === resource.classNo);
              if (existingClass) {
                existingClass.resources.push(resource);
              } else {
                acc.push({ classNo: resource.classNo, resources: [resource] });
              }
              return acc;
            }, [])
            .map((group, index) => (
              <details key={index} className="montserrat-alternates font-bold group w-full py-10">
                <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
                  Resource {group.classNo}
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <TbManFilled className="text-2xl" />
                  </span>
                </summary>
                <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
                  {group.resources.length === 0 ? (
                    <p>Empty</p>
                  ) : (
                    group.resources.map((i, idx) => (
                      <p key={idx} className="text-gray-700">
                        <span className="font-bold">Details: </span>
                        <span className="font-light">
                          <a href={i.resource}>{i.resource}</a>
                        </span>
                      </p>
                    ))
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
          className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`montserrat-alternates text-[goldenrod] font-bold ${activeTab === value ? "bg-gray-200" : ""}`}
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
