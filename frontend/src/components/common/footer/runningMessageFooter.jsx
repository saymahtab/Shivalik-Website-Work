import React from "react";
import { Link } from "react-router-dom";

const RunningText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap pb-3 px-4 text-lg text-black">
      <div className="inline-block animate-marquee">
        <span className=" mx-10">Welcome to Shivalik College!</span>
        <span className=" ml-10 mr-2">Admission open 2024-25 !</span>
        <Link to="/" className=" mr-10 underline">Apply Now!  </Link>
        <span className="mx-10">Latest Updates Available!</span>
        <span className=" mx-10">Contact Us for More Information!</span>
      </div>
    </div>
  );
};

export default RunningText;
