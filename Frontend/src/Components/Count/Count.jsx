

export default function Count() {
  return (
    <div className="px-1 text-xs sm:text-md md:text-lg lg:text-xl grid grid-cols-3 gap-1 montserrat-alternates">
        <div className="flex flex-col justify-center items-center text-white bg-[#95e7f1f1] rounded-lg p-2 sm:p-4">
            <h1 className="rotate">Total Students:</h1>
            <p>100</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white bg-[#95f1a9f1] rounded-lg p-2 sm:p-4">
            <h1 className="rotate">Total Courses:</h1>
            <p>3</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white bg-[#cc95f1f1] rounded-lg p-2 sm:p-4">
            <h1 className="rotate">Total Instructors:</h1>
            <p>5</p>
        </div>
    </div>
  )
}
