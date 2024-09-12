import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewCourses() {
  const [formData, setFormData] = useState({
    courseName: '',
    image: '',
    courseBio: '',
    price: '',
    oldPrice: '',
    URI: '',
    isEcon: false,
    isScience: false,
    isArt: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRegister = async () => {
    const data = {
      name: formData.courseName,
      image: formData.image,
      bio: formData.courseBio,
      price: formData.price,
      oldPrice: formData.oldPrice,
      URI: formData.URI,
      instructor: {
        econ: formData.isEcon,
        science: formData.isScience,
        art: formData.isArt,
      },
    };

    try {
      const res = await axios.post(`https://dot-it-server.vercel.app/api/course`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 200) {
        toast.success("Course Added Successfully!");
      
      }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="mt-10">
        <h1 className="text-center font-bold text-[goldenrod] montserrat-alternates p-5 text-xl">Add New Courses</h1>
      <form className="grid grid-rows-5 gap-3 justify-center items-center">
        <div className="w-72">
          <Input
            type="text"
            name="courseName"
            label="Course Name"
            onChange={handleChange}
            value={formData.courseName}
          />
        </div>
        <div className="w-72">
          <Input
            type="text"
            name="image"
            label="Image URL"
            onChange={handleChange}
            value={formData.image}
          />
        </div>
        <div className="w-72">
          <Input
            type="text"
            name="courseBio"
            label="Course Bio"
            onChange={handleChange}
            value={formData.courseBio}
          />
        </div>
        <div className="w-72">
          <Input
            type="number"
            name="price"
            min={0}
            label="Price"
            onChange={handleChange}
            value={formData.price}
          />
        </div>
        <div className="w-72">
          <Input
            type="number"
            name="oldPrice"
            min={0}
            label="Old Price"
            onChange={handleChange}
            value={formData.oldPrice}
          />
        </div>
        <div className="w-72">
          <Input
            type="text"
            name="URI"
            label="URL"
            onChange={handleChange}
            value={formData.URI}
          />
        </div>
        
        <div className="w-72 montserrat-alternates">
            <label>
                <input
                type="checkbox"
                name="isEcon"
                onChange={handleChange}
                checked={formData.isEcon}
                />
                <span className="ml-2">Econ</span>
            </label>
            </div>
            <div className="w-72 montserrat-alternates">
            <label>
                <input
                type="checkbox"
                name="isScience"
                onChange={handleChange}
                checked={formData.isScience}
                />
                <span className="ml-2">Atik</span>
            </label>
            </div>
            <div className="w-72 montserrat-alternates">
            <label>
                <input
                type="checkbox"
                name="isArt"
                onChange={handleChange}
                checked={formData.isArt}
                />
                <span className="ml-2">Hridoy</span>
            </label>
            </div>

        <div>
          <button type="button" className="btn-31" onClick={handleRegister}>
            <span className="text-container">
              <span className="text">Add Course</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
