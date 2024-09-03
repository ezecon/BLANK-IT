import { useState, useEffect } from "react";

export default function UnderConstruction() {
  // Set the initial countdown duration (e.g., 30 days in seconds)
  const initialTime = 30 * 24 * 60 * 60; // 30 days in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = Math.floor(seconds % 60);
    return { days, hours, minutes, seconds: secs };
  }

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="relative">
      <img
        src="2.jpg"
        alt=""
        className="h-[100vh] w-full object-cover object-center blur-md"
      />
      <div className="text-white flex absolute inset-0 items-center justify-center flex-col p-4 sm:p-8 lg:p-12">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          This Page is Under Construction
        </h1>
        <div className="flex gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          <p className="border p-1 py-2 ">{days}d</p> <p className="border p-1 py-2 ">{hours}h</p> <p className="border p-1 py-2 ">{minutes}m</p> <p className="border p-1 py-2 ">{seconds}s</p> 
        </div>
      </div>
    </div>
  );
}
