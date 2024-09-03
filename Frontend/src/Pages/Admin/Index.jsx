import { Outlet } from "react-router-dom";
import NavAdmin from "../../Components/Navbar/NavAdmin";


export default function Index() {
  return (
    <div>
      <div className="flex-none fixed z-40  left-0 right-0 top-0  overflow-y-auto">
      <NavAdmin/>
      </div>
      <div className="mx-auto max-w-screen-xl mt-10 py-8">
      <Outlet/>
      </div>
    </div>
  )
}
