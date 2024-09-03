import AllCourses from "../../Components/AllCourses/AllCourses";
import Count from "../../Components/Count/Count";
import { Footer } from "../../Components/Footer/Footer";
import Gallery from "../../Components/Gallery/Gallery";
import { HeroSection } from "../../Components/HeroSection/HeroSection";


export default function Home() {
  return (
    <div>
        <HeroSection />
        <AllCourses/>
        <Gallery/>
        <Count/>
        <Footer/>
    </div>
  )
}
