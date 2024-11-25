import React from 'react';

const AwardsSection = () => {
  return (
    <div className="relative h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dghmyof2k/image/upload/v1730781580/fjaagdofyc1ygi21qmvc.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto p-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Awards & Achievements</h2>
          <p className="text-white text-center mb-8">Our notable awards and recognitions</p>
          
        
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <span className="text-xl font-bold">Best Innovation Award 2023</span>
              <p className="text-gray-600 text-center mt-2">Among Top 50 Private Engineering Institutes on Placements by Times Engineering Survey 2020.</p>
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <span className="text-xl font-bold">Top Performer of the Year</span>
              <p className="text-gray-600 text-center mt-2">Among india's Top 150 engineering Colleges for Academic Excellence by Outlook 2019</p>
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <span className="text-xl font-bold">Excellence in Service Award</span>
              <p className="text-gray-600 text-center mt-2">To be awarded with best industry interface award b CMAI, AICTE AND UTU.</p>
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <span className="text-xl font-bold">Excellence in Service Award</span>
              <p className="text-gray-600 text-center mt-2">First College in India to dedicate a Fully Modern and well Stocked Learning Resource Center to the former President of India.</p>
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <span className="text-xl font-bold">Excellence in Service Award</span>
              <p className="text-gray-600 text-center mt-2">Among Private Engineering College ALL India by the week, Hansa Research Survey 2020</p>
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <span className="text-xl font-bold">Excellence in Service Award</span>
              <p className="text-gray-600 text-center mt-2">Among Best Private Institute in North India by Times Engineering, The Times of India 2021</p>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
