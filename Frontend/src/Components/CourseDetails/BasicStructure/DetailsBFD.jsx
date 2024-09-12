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
    const fetchData = async () => {
      try {
        const [topicsRes, resourcesRes] = await Promise.all([
          axios.get('https://dot-it-server.vercel.app/api/topic'),
          axios.get('https://dot-it-server.vercel.app/api/resource')
        ]);
        if (topicsRes.status === 200) {
          setTopics(topicsRes.data);
        }
        if (resourcesRes.status === 200) {
          setResources(resourcesRes.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const groupedItems = (items, key) => {
    return items
      .filter(item => item.name === name)
      .reduce((acc, item) => {
        const group = acc.find(g => g.classno === item.classno);
        if (group) {
          group.items.push(item);
        } else {
          acc.push({ classno: item.classno, items: [item] });
        }
        return acc;
      }, []);
  };

  const topicGroups = groupedItems(topics, 'classno');

  const data = [
    {
      label: "Outline",
      value: "outline",
      desc: (
        <>
          {topicGroups.length > 0 ? (
            topicGroups.map((group, index) => (
              <details key={index} className="montserrat-alternates font-bold group w-full py-10">
                <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
                  Class {group.classno}
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <TbManFilled className="text-2xl" />
                  </span>
                </summary>
                <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
                  {group.items.map((item, idx) => (
                    <p key={idx} className="text-gray-700">
                      <span className="font-bold">Topic: </span>
                      <span className="font-light">{item.topic}</span>
                    </p>
                  ))}
                </div>
              </details>
            ))
          ) : (
            <p>No topics available</p>
          )}
        </>
      ),
    },
    {
      label: "Instructor",
      value: "react",
      desc: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {instructor ? (
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
      desc:  (
        <>
          {resources
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
                      <span className="font-light"><a href={i.resource}>{i.resource}</a></span>
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
