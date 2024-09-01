
import Nav from "../Navbar/Nav";
import { HeroSection } from "../HeroSection/HeroSection";
import AllCourses from "../AllCourses/AllCourses";

export default function Main() {

  return (
    <div className="md:mx-24 lg:mx-56 pt-24">
      <Nav/>
      <HeroSection />
      <AllCourses/>
    </div>
  );
}
