

import { HeroSection } from "../HeroSection/HeroSection";
import AllCourses from "../AllCourses/AllCourses";
import Nav from "../Navbar/Nav";


export default function Main() {

  return (
    <div>
      <div className="flex-none fixed z-40  left-0 right-0 top-0  overflow-y-auto">
      <Nav/>
      </div>
      <div className="mx-auto max-w-screen-xl mt-10 py-8">
      <HeroSection />
      <AllCourses/>
      </div>
    </div>
  );
}
