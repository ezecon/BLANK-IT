import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import AllCourses from "../AllCourses/AllCourses";
import BasicFrontendDevelopment from "../CourseDetails/BFD/BasicFrontendDevelopment";
import BasicComputer from "../CourseDetails/BC/BasicComputer";
import BasicMachineLeaning from "../CourseDetails/BML/BasicMachineLeaning";
import UnderConstruction from "../UnderConstruction/UnderConstruction";


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

        ]
    }
]);

export default router;
