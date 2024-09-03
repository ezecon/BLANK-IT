import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import AllCourses from "../AllCourses/AllCourses";
import BasicFrontendDevelopment from "../CourseDetails/BFD/BasicFrontendDevelopment";
import BasicComputer from "../CourseDetails/BC/BasicComputer";
import BasicMachineLeaning from "../CourseDetails/BML/BasicMachineLeaning";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import Confirm from "../Confirm/Confirm";
import Index from "../../Pages/Admin/Index";
import { Students } from "../../Pages/Admin/Students/Students";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"all-courses",
                element:<AllCourses/>
            },
            {
                path:"basic-frontend-development",
                element:<BasicFrontendDevelopment/>
            },
            {
                path:"basic-computer",
                element:<BasicComputer/>
            },
            {
                path:"basic-machine-learning",
                element:<BasicMachineLeaning/>
            },
            {
                path:"gallery",
                element:<UnderConstruction/>
            },
            {
                path:"blog",
                element:<UnderConstruction/>
            },
            {
                path:"contact",
                element:<UnderConstruction/>
            },
            {
                path:"about",
                element:<UnderConstruction/>
            },
            {
                path:"dashboard",
                element:<UnderConstruction/>
            },
            {
                path:"confirmation",
                element:<Confirm/>
            },

        ]
    },
    {
        path:'/admin',
        element:<Index/>,
        children:[
            {
                path:'',
                element:<Students/>
            }
        ]
    }
]);

export default router;
