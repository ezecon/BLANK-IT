import Atik from "../Instructors/Atik";
import Econ from "../Instructors/Econ";


export default function Instructor({data}) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {data.science && <Atik />}
        {data.econ && <Econ />}
    </div>
  )
}
