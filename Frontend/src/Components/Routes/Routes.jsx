import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import AllCourses from "../AllCourses/AllCourses";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import Confirm from "../Confirm/Confirm";
import Index from "../../Pages/Admin/Index";
import { Students } from "../../Pages/Admin/Students/Students";
import NewCourses from "../../Pages/Admin/NewCourse/NewCourses";
import AllCoursesAdmin from "../../Pages/Admin/AllCourses/AllCourses";
import Course from "../CourseDetails/BasicStructure/Course";


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
                path:"courses/:id",
                element:<Course/>
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
            },
            {
                path:'new-course',
                element:<NewCourses/>
            },
            {
                path:'all-courses',
                element:<AllCoursesAdmin/>
            },
        ]
    }
    ,{
        path:'*',

        element:<UnderConstruction/>
    }
]);

export default router;
