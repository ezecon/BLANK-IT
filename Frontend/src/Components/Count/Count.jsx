

export default function Count() {
  return (
    <div className="my-10 px-1 text-xs sm:text-md md:text-lg lg:text-xl grid grid-cols-3 gap-1 montserrat-alternates">
        <div className="grid grid-rows-2 justify-center items-center text-white bg-gradient-to-r from-[#ff4066] to-[#fff16a] rounded-lg p-2 sm:p-4">
            <h1 className="text">Total Students</h1>
            <p className="text-center">100</p>
        </div>
        <div className="grid grid-rows-2 justify-center items-center text-white bg-gradient-to-r from-[#0700de] to-[#ddffc9] rounded-lg p-2 sm:p-4">
            <h1 className="text">Total Courses</h1>
            <p className="text-center">3</p>
        </div>
        <div className="grid grid-rows-2 justify-center items-center text-white bg-gradient-to-r from-[#6157ff] to-[#ee49fd] rounded-lg p-2 sm:p-4">
            <h1 className="text">Total Instructors</h1>
            <p className="text-center">5</p>
        </div>
    </div>
  )
}
