import React from 'react';
import amongthree from '../assets/amgthree.png';
import logo2 from "../assets/17yrlogo.png";
const CollegeHighlights = () => {
  return (
    <div className="relative bg-cover bg-center py-8" style={{ backgroundImage: "url('https://res.cloudinary.com/dghmyof2k/image/upload/v1730781580/fjaagdofyc1ygi21qmvc.jpg')" }}>
      <div className="absolute inset-0 bg-[#1e3a8a] opacity-90"></div>
      <div className="header">
        <h1 className='text-center  text-4xl font-bold  text-grey '>Our Legacy of Excellence</h1>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-around items-center h-full text-white px-8 py-16 space-y-8 lg:space-y-0">
        
        {/* First Section */}
        <div className="text-center max-w-md">
          <img src={amongthree} alt="Top 3 Badge" className="mx-auto mb-4" />
          <p className="text-xl font-bold">ENGINEERING INSTITUTE IN UTTARAKHAND</p>
          <p className="text-sm">By Times Engineering 2021</p>
        </div>

        {/* Second Section */}
        <div className="text-center max-w-md">
          <img src={logo2} alt="NAAC Accreditation" className="mx-auto mb-4" />
          <p className="text-2xl font-bold">17 Years of Educational Excellence</p>
          <p className="text-2xl font">Inspiring Growth, Achieving Excellence.</p>
        </div>

        {/* Third Section */}
        <div className="text-center max-w-md space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-1 h-12 bg-yellow-500"></div>
            <div className="text-left">
              <h2 className="text-4xl font-bold">1:15</h2>
              <p className="text-lg">Faculty-Student Ratio</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-1 h-12 bg-yellow-500"></div>
            <div className="text-left">
              <h2 className="text-4xl font-bold">4000+</h2>
              <p className="text-lg">Successful Alumni Worldwide</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-1 h-12 bg-yellow-500"></div>
            <div className="text-left">
              <h2 className="text-4xl font-bold">400+</h2>
              <p className="text-lg">Companies Hiring Worldwide</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-1 h-12 bg-yellow-500"></div>
            <div className="text-left">
              <h2 className="text-4xl font-bold">42L</h2>
              <p className="text-lg">Highest Package</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CollegeHighlights;
