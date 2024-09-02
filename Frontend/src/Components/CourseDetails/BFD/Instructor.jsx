import Atik from "../Instructors/Atik";
import Econ from "../Instructors/Econ";


export default function Instructor() {
  return (
    <div className="grid grid-cols-2 gap-1">
        <Atik/>
        <Econ/>
    </div>
  )
}
