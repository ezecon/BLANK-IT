

import { HeroSection } from "../HeroSection/HeroSection";
import AllCourses from "../AllCourses/AllCourses";
import NavMenu from "../Navbar/Navbar";

export default function Main() {

  return (
    <div>
      <div className="flex-none fixed z-40  left-0 right-0 top-0  overflow-y-auto">
      <NavMenu/>
      </div>
      <div className="mx-auto max-w-screen-xl mt-8 py-8">
      <HeroSection />
      <AllCourses/>
      </div>
    </div>
  );
}
