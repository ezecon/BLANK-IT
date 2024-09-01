import { Avatar, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowUp, IoIosClose } from "react-icons/io";

export default function Nav() {
    const [openTop, setOpenTop] = useState(false);
    const openDrawerTop = () => setOpenTop(true);
    const closeDrawerTop = () => setOpenTop(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={`px-10 bebas-neue w-full rounded-xl ${isLoading ? 'scrolled' : ''}`}>
            <nav className='navbar'>
                <a href="">Home</a>
                <a href="">Gallery</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">Address</a>
                
            </nav>
            <div className='logo-container'>
                <img className='logo rounded-full' src="1.jpg" alt="" />
            </div>
            <nav className='navbar'>
                <p className="cursor-pointer flex gap-1 bg-[#d0d5dd] text-black rounded-lg p-3" onClick={openDrawerTop}>
                    All Courses <IoIosArrowUp />
                </p>
                <p className="cursor-pointer flex gap-1 bg-black text-white rounded-lg p-3">
                    Dashboard <MdOutlineDashboard className="text-lg" />
                </p>
                <Avatar className="avatar" src="econ.jpg" withBorder={true} color="green" alt="avatar" />
            </nav>

            {openTop && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-start z-50">
                    <div className="bg-white p-5 rounded-lg mt-10 w-3/4 max-w-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">All Courses</h2>
                            
                            <button onClick={closeDrawerTop}>
                                <IoIosClose className="text-2xl" />
                            </button>
                           
                        </div>
                        
                        <div className="cursor-pointer float-right text-sm">All Courses</div>
                        <br />
                        <hr />
                        <div className="grid gap-4 mt-4">
                            <div className="flex justify-between items-center gap-2 p-4 bg-gray-100 rounded-lg">
                              <img className="w-20 rounded-md" src="2.jpg" alt="" />
                              <p>Basic Frontend Development</p>
                              <Button className="bg-[#00000060]">DETAILS</Button>
                            </div>
                            <div className="flex justify-between items-center gap-2 p-4 bg-gray-100 rounded-lg">
                              <img className="w-20 rounded-md" src="2.jpg" alt="" />
                              <p>Basic Frontend Development</p>
                              <Button className="bg-[#00000060]">DETAILS</Button>
                            </div>
                            <div className="flex justify-between items-center gap-2 p-4 bg-gray-100 rounded-lg">
                              <img className="w-20 rounded-md" src="2.jpg" alt="" />
                              <p>Basic Frontend Development</p>
                              <Button className="bg-[#00000060]">DETAILS</Button>
                            </div>
                            <div className="flex justify-between items-center gap-2 p-4 bg-gray-100 rounded-lg">
                              <img className="w-20 rounded-md" src="2.jpg" alt="" />
                              <p>Basic Frontend Development</p>
                              <Button className="bg-[#00000060]">DETAILS</Button>
                            </div>
                            <div className="flex justify-between items-center gap-2 p-4 bg-gray-100 rounded-lg">
                              <img className="w-20 rounded-md" src="2.jpg" alt="" />
                              <p>Basic Frontend Development</p>
                              <Button className="bg-[#00000060]">DETAILS</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
