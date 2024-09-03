import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { DetailsBFD } from "./DetailsBFD";
import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';

export default function BasicComputer() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    number: '',
    whatsappNumber: '',
    email: '',
    address: '',
  });

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const courses = "Basic Computer";
  const handleRegister = async () => {
    const data = {
      name: formData.fullName,
      number: formData.number,
      wNumber: formData.whatsappNumber,
      email: formData.email,
      address: formData.address,
      course: courses,
    };
  
    try {
      const res = await axios.post(`https://dot-it-server.vercel.app/api/course-purchases`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (res.status === 201) {
        // Successful registration
        toast.success("Registration Completed!");
        handleOpen(); // Close the dialog after successful registration
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle specific error code from backend (e.g., duplicate email)
        toast.error("Email already in use. Please use a different email.");
        handleOpen();
      } else {
        // Handle general errors
        console.error(error);
        toast.error("Registration Failed. Please try again.");
      }
    }
    
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div>
          <div className="pl-5 text-[goldenrod] text-left montserrat-alternates">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Basic Computer
            </h1>
            <p className="text-sm text-[#00000088] mb-6">
              The Basic Machine Learning Course is designed to take you from a beginner to a confident machine learning practitioner, capable of building and deploying intelligent models for a variety of applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
              <Button onClick={handleOpen} className="bg-[goldenrod] text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-lg">
                PURCHASE NOW
              </Button>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg px-8">
                ৳1000 <del className="text-xs">৳2000</del>
              </p>
            </div>
          </div>
          <div className="text-[goldenrod] flex flex-wrap gap-2 text-xs sm:text-sm montserrat-alternates justify-center py-4">
            <p className="border rounded-lg p-1 bg-[#00000013]">Batch-1</p>
            <p className="border rounded-lg p-1 bg-[#00000013]">Total Seat - 100</p>
            <p className="border rounded-lg p-1 bg-[#00000013]">Start From - 1st Oct</p>
            <p className="border rounded-lg p-1 bg-[#00000013]">Platform - Online</p>
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
        <DetailsBFD />
      </div>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-center flex justify-center items-center">Purchase Page</DialogHeader>
        <DialogBody className="grid grid-rows-5 gap-3 justify-center items-center">
          <div className="w-72">
            <Input type="text" name="fullName" label="Full Name" onChange={handleChange} value={formData.fullName} />
          </div>
          <div className="w-72">
            <Input type="number" name="number" min={0} label="Number" onChange={handleChange} value={formData.number} />
          </div>
          <div className="w-72">
            <Input type="number" name="whatsappNumber" min={0} label="What's App Number" onChange={handleChange} value={formData.whatsappNumber} />
          </div>
          <div className="w-72">
            <Input type="email" name="email" label="Email" onChange={handleChange} value={formData.email} />
          </div>
          <div className="w-72">
            <Input type="text" name="address" label="Address" onChange={handleChange} value={formData.address} />
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center items-center">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <button className="btn-31" onClick={handleRegister}>
            <span className="text-container">
              <span className="text">Register</span>
            </span>
          </button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
