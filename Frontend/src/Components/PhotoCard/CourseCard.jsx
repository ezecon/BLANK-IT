

export default function CourseCard({data}) {
  const {name, price, oldPrice, image} =data;
  return (
    <div className="shadow-lg w-full rounded-xl border">
      <div className="w-full object-cover p-5">
        <img
          src={image}
          alt="Course"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="text-[goldenrod] flex flex-wrap gap-2 text-xs sm:text-sm montserrat-alternates justify-center py-2 underline-offset-4">
        <p className="border rounded-lg p-1 bg-[#00000013]">Batch-1</p>
        <p className="border rounded-lg p-1 bg-[#00000013]">Total Seat - 100</p>
        <p className="border rounded-lg p-1 bg-[#00000013]">Start From - 1st Oct</p>
      </div>
      <hr />
      <div>
        <h1 className="cursive text-lg sm:text-xl font-bold text-center py-5">
          {name}
        </h1>
        <p className="text-[goldenrod] text-center text-xs sm:text-sm md:text-base lg:text-lg px-8">
                ৳{price} <del className="text-xs">৳{oldPrice}</del>
        </p>
      </div>
    </div>
  );
}
