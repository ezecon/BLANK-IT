import { Avatar, Button, Drawer, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavAdmin() {

    const [displayComponentLeft, setDisplayComponentLeft] = useState(null);
    const [displayComponentRight, setDisplayComponentRight] = useState(null);
    const [openRight, setOpenRight] = useState(false);
    const [userID, setUserID] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const openDrawerRight = () => {
        setOpenRight(true);
      };
    
    useEffect(() => {
        const smMediaQuery = window.matchMedia('(max-width: 640px)');
    
        const handleScreenSizeChange = (e) => {
          if (e.matches) {
            // Small screen
            setDisplayComponentLeft(<CgDetailsMore onClick={openDrawerRight} className="avatar text-white text-2xl" />);
            setDisplayComponentRight(
                <nav className='navbar'>
                   
                    <Avatar className="avatar" src="econ.jpg" withBorder={true} color="green" alt="avatar" />
                </nav>
            )
          } else {
            // Large screen
            setDisplayComponentLeft(
              <div className={`${isLoading ? 'scrolled' : ''}`}>
                   <nav className={`navbar `}>
                    <Link to="/admin"><p>Home</p></Link>
                    <Link to="new-course"><p>New Course</p></Link>
                    <Link to="add-event"><p>Add Event</p></Link>
                    
                    </nav>
              </div>
             
            );
            setDisplayComponentRight(
                <nav className='navbar'>
                    <Link to="all-courses"><p className="cursor-pointer flex gap-1 bg-[#d0d5dd] text-black rounded-lg p-3">
                        All Courses <IoIosArrowUp />
                    </p></Link>
                   
                    <Avatar className="avatar" src="econ.jpg" withBorder={true} color="green" alt="avatar" />
                </nav>
            );
          }
        };
    
        handleScreenSizeChange(smMediaQuery);
        smMediaQuery.addEventListener('change', handleScreenSizeChange);
    
        return () => smMediaQuery.removeEventListener('change', handleScreenSizeChange);
      });
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={`px-10 bebas-neue w-full rounded-xl ${isLoading ? 'scrolled' : ''}`}>
            {displayComponentLeft}
            <div className='logo-container'>
                <img className='logo rounded-full' src="/1.jpg" alt="" />
            </div>
            {displayComponentRight}
            <Drawer
                placement="left"
                open={openRight}
                onClose={() => setOpenRight(false)}
                className="p-4"
            >
                <div className="mb-6 flex items-center justify-between">
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={() => setOpenRight(false)}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </IconButton>
                </div>
                {userID ? (
                <div className="flex flex-col montserrat-alternates-regular gap-y-4 h-full">
                    <div className="flex flex-col gap-3 justify-center items-center text-[green]">
                    <Link to="/profile">
                        <Avatar src={userInfo?.image} className="border-green-600 border-2" size="md" />
                    </Link>
                    <h1 className="montserrat-alternates-bold">{userInfo?.name}</h1>
                    {!userInfo && <p>Loading..</p>}
                    </div>
                    <div className="bg-[#cdcecd67] p-5 rounded-lg flex justify-between">
                    <Link to="/dashboard"><h1 className="text-[green] cursor-pointer hover:text-gray-300">Dashboard</h1></Link>
                    <Link to="/courses"><h1 className="text-[green] cursor-pointer hover:text-gray-300">All Courses</h1></Link>
                    <h1  className="text-[green] cursor-pointer hover:text-gray-300">Logout</h1>
                    </div>
                    <Link to="/carts"><h1 className="text-[green] cursor-pointer hover:text-gray-300">Cart</h1></Link>
                    <Link to="/products"><h1 className="text-[green] cursor-pointer hover:text-gray-300">Products</h1></Link>
                    <h1 className="text-[green] cursor-pointer hover:text-gray-300">About</h1>
                </div>
                ) : (
                <div className="flex justify-between px-10">
                    <Link to="/login"><Button className="bg-green-500">Login</Button></Link>
                    <Link to="/register"><Button className="text-black bg-white">Sign Up</Button></Link>
                </div>
                )}
            </Drawer>
        </header>
    );
}
