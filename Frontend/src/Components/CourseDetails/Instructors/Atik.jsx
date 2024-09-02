

export default function Atik() {
  return (
    <div className="shadow-lg w-full rounded-xl border">
      <div className="w-full   p-5">
        <img
          src="atik.jpg"
          alt="Course"
          className="w-full h-[50vh] object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="cursive text-lg sm:text-xl font-bold text-center py-5">
         Md. Atikur Rahman
        </h1>
      <hr />
      
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm montserrat-alternates justify-center py-2 underline-offset-4">
        <p className="border rounded-lg p-1 bg-[#00000013]"> Department of CSE, BAIUST</p>
        <p className="border rounded-lg p-1 bg-[#00000013]"> Founder of DOT-iT</p>
      </div>


      </div>
    </div>
  )
}
