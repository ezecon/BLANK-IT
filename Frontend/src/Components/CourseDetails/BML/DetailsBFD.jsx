import { useState } from "react";
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
import Instructor from "./Instructor";
 
export function DetailsBFD() {
  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
      label: "Outline",
      value: "html",
      desc: ( <details className="montserrat-alternates font-bold group w-full  py-10">
        <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
            Class 1
            <span className="transform transition-transform duration-300 group-open:rotate-180">
                <TbManFilled className="text-2xl" />
            </span>
        </summary>
        <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
            <p className="text-gray-700">
                <span className="font-bold ">Topic:</span>
                <br />
                <div>
                    <p>1</p>
                    <p>2</p>
                </div>
            </p>
        </div>
    </details>),
    },
    {
      label: "Instructor",
      value: "react",
      desc: (
        <Instructor/>
      ),
    },
    {
      label: "Resources",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
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
            className={`montserrat-alternates text-[goldenrod]  font-bold${activeTab === value ? "text-gray-900" : ""}`}
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