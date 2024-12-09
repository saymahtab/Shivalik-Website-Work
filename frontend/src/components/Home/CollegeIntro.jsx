import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CollegeIntro = () => {
  return (
    <section
      className="relative flex items-center justify-center py-10  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dghmyof2k/image/upload/v1730781580/fjaagdofyc1ygi21qmvc.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-[#98012E] opacity-85"></div>


      <div className="relative flex items-center justify-center px-4 text-white">
        <div className="w-full md:w-3/4 lg:w-2/3 text-center">
          <h1 className="text-4xl font-semibold mb-1">SHIVALIK COLLEGE DEHRADUN</h1>
          <h1 className="text-4xl font-bold">
            The Best Private College in Dehradun, Uttrakhand
          </h1>
          <p className="font-semibold mb-4">A unique learning environment.</p>
          <p className="leading-relaxed text-sm">
            The Shivalik College, established in 2008, is a non-profit organization
            with firm Indian roots but with a global outlook and reach. Over the
            years, it has built up an enviable reputation of being counted among the
            Best Colleges in Dehradun. We at Shivalik aim to take it to the next
            level and mobilize world-class education and generate resources for
            providing and supporting quality education for all. The organization has
            an intensive, yet enabling academic environment with the mission to
            prepare students holistically with innovative and analytical minds and
            creativity to generate new thinking, discover fresh horizons, and enable
            them to achieve their dreams and goals as global citizens.
          </p>
          <div className="flex justify-center mt-3">
            <button className="bg-blue-800 flex items-center rounded-full px-6 py-2 shadow-xl  hover:shadow-2xl hover:bg-customed transition-all duration-300 ease-in-out">
              Know More
              <FaArrowRight className="ml-3" />
            </button>
          </div>
        </div>
      </div>

    </section >
  );
};

export default CollegeIntro;
