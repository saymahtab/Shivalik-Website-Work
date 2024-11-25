import React from 'react';
import collegeimg from '../../assets/college.jpg';

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

     
      <div className="relative flex  flex flex-col md:flex-row items-center w-full   px-8 text-white">
        
      
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={collegeimg} 
            alt="Shivalik College"
            className="w-120 h-80 rounded-lg shadow-lg "
          />
        </div>
        
        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">SHIVALIK COLLEGE DEHRADUN</h1>
          <p className="font-semibold mb-4">A unique learning environment.</p>
          <p className="leading-relaxed text-sm">
            The Shivalik College, established in 2008, is a non-profit organization with firm Indian roots but with a
            global outlook and reach. Over the years, it has built up an enviable reputation of being counted among the
            Best Colleges in Dehradun. We at Shivalik aim to take it to the next level and mobilize world-class
            education and generate resources for providing and supporting quality education for all. The organization
            has an intensive, yet enabling academic environment with the mission to prepare students holistically with
            innovative and analytical minds and creativity to generate new thinking, discover fresh horizons, and enable
            them to achieve their dreams and goals as global citizens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeIntro;
