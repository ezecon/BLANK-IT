import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Hridoy() {
  return (
    <div className="shadow-lg w-full rounded-xl border">
      <div className="w-full   p-5">
        <img
          src="/atik.jpg"
          alt="Course"
          className="w-full h-[50vh] object-cover rounded-lg hover:scale-95 transition-transform duration-500"
        />
      </div>
      <div>
        <h1 className="text-[goldenrod] cursive text-lg sm:text-xl font-bold text-center py-5">
         Third Person
        </h1>
        <div className="text-[goldenrod] text-2xl flex justify-center pb-2 gap-3">
            <a href="https://www.facebook.com/atikcse59"><FaFacebook className="cursor-pointer"/></a>
            <a href="https://github.com/atik59"><FaGithub className="cursor-pointer"/></a>
        </div>
      <hr />
      
        <div className="text-[goldenrod] flex flex-wrap gap-2 text-xs sm:text-sm montserrat-alternates justify-center py-2 px-1 underline-offset-4">
        <p className="border rounded-lg p-1 bg-[#00000013]"> Department of CSE, BAIUST</p>
        <p className="border rounded-lg p-1 bg-[#00000013]"> Founder of DOT-iT</p>
      </div>


      </div>
    </div>
  )
}
