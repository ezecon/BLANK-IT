import { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TbManFilled } from "react-icons/tb";
import axios from "axios";

export function Students() {
  const [activeTab, setActiveTab] = useState("html");
  const [datas, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const res = await axios.get(`https://dot-it-server.vercel.app/api/course-purchases`);
            if(res.status===200){
                setData(res.data)
            }
        }
        catch(error){
            console(error)
        }
    }
    fetchData()
  })
  const data = [
    {
      label: "BC",
      value: "html",
      desc: ( <details className="montserrat-alternates font-bold group w-full  py-10">
        <summary className="mx-5 cursor-pointer bg-gradient-to-r from-[goldenrod] to-[#edfa37] text-white px-6 py-3 rounded-md text-lg font-semibold flex justify-between items-center">
            Basic Computer
            <span className="transform transition-transform duration-300 group-open:rotate-180">
                <TbManFilled className="text-2xl" />
            </span>
        </summary>
        <div className="mx-5 mt-2 bg-gray-100 p-4 rounded-md shadow-inner">
            <p className="text-gray-700">
                <span className="font-bold ">Students:</span>
                <br />
                <div>
                {
                    datas
                        .filter(i => i.course === 'Basic Computer')
                        .map((i, index) => (
                        <div key={i.email} className="mb-4">
                            <p>Serial No: {index + 1}</p>
                            <p>Name: {i.name}</p>
                            <p>Email: {i.email}</p>
                            <p>Number: {i.number}</p>
                            <p>WhatsApp: {i.wNumber}</p>
                            <p>Address: {i.address}</p>
                        </div>
                        ))
                    }

                </div>
            </p>
        </div>
    </details>),
    },
    {
      label: "BML",
      value: "react",
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
      label: "BFD",
      value: "vue",
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