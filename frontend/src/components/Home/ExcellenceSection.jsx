import React from 'react';
import firstaward from "../../assets/award/first.png";
import sixteenaward from "../../assets/award/sixteen.png";
import threeaward from "../../assets/award/three.png";
import twoaward from '../../assets/award/two.png';
const ExcellenceSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: `url('https://res.cloudinary.com/dghmyof2k/image/upload/v1730781580/fjaagdofyc1ygi21qmvc.jpg')` }}
    >
      {/* Color overlay */}
      <div className="absolute inset-0 bg-[#98012E] opacity-80"></div>
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-white text-4xl font-bold pb-5 ">Awards and Achievements</h2>
      </div>
      
      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-11/12 lg:w-10/12">
        {[
          {
            imgSrc: firstaward,
            text: 'Among Top 50 Private Engineering Institutes on Placements by Times Engineering Survey 2020'
          },
          {
            imgSrc: threeaward,
            text: "Among india's Top 150 engineering Colleges for Academic Excellence by Outlook 2019"
          },
          {
            imgSrc: firstaward,
            text: 'To be awarded with best industry interface award b CMAI, AICTE AND UTU'
          },
          {
            imgSrc: firstaward,
            text: 'First College in India to dedicate a Fully Modern and well Stocked Learning Resource Center to the former President of India.'
          },
          {
            imgSrc: twoaward,
            text: 'Among Private Engineering College ALL India by the week, Hansa Research Survey 2020'
          },
          {
            imgSrc: sixteenaward,
            text: 'Among Best Private Institute in North India by Times Engineering, The Times of India 2021'
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center ">
            <img src={item.imgSrc} alt={item.text} className="w-48 h-48 object-contain" />
            <p className="text-white text-l font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExcellenceSection;
