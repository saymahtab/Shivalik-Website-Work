import React, { useState, useEffect } from "react";
import robotics from "../../assets/courses/robolicts.jpg";
import computerscience from "../../assets/courses/computerscience.jpg";
import bba from "../../assets/courses/bba.jpg";
import bpharma from "../../assets/courses/bpharma.jpeg";
import Mechanical from "../../assets/courses/Mechanical.jpg";
import Electronics from "../../assets/courses/Electronics&Communication.jpg";
import Agriculture from "../../assets/courses/agriculture.jpg";
import datascience from "../../assets/courses/datascience.jpg";
import dpahrmafinal from "../../assets/courses/dpahrmafinal.jpg";


const disciplines = [
  { id: 1, img: datascience, label: "B.Tech Data Science" },
  { id: 2, img: dpahrmafinal, label: "Diploma of Pharmacy (D.Pharm)" },
  { id: 3, img: robotics, label: "B.Tech Artificial Intelligence & Machine Learning" },
  { id: 4, img: computerscience, label: "B.Tech Computer Science and Engineering" },
  { id: 5, img: bba, label: "Bachelor of Business Administration (BBA)" },
  { id: 6, img: bpharma, label: "Bachelor of Pharmacy (B.Pharm)" },
  { id: 7, img: Mechanical, label: "B.Tech Mechanical Engineering" },
  { id: 8, img: Electronics, label: "B.Tech Electronics & Communication Engineering" },
  { id: 9, img: Agriculture, label: "B.Sc ( Hons ) Agriculture" },
 
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % disciplines.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + disciplines.length) % disciplines.length);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + disciplines.length) % disciplines.length;
      visibleItems.push(disciplines[index]);
    }
    return visibleItems;
  };

  return (
    <div className="carousel-container flex flex-col items-center bg-blue-900 p-8 text-white">
      <h2 className="text-3xl font-bold mb-5 text-center">
        A Spectrum of Disciplines, Limitless Opportunities
      </h2>
      <p className="text-lg text-center mb-5">
        Offering a rich variety of over 15 disciplines, Shivalik College provides students with a world of possibilities to shape their future.
      </p>
      <div className="relative flex items-center justify-center overflow-hidden w-full max-w-9xl p-4 pt-10 pb-10">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 text-3xl text-white p-2"
        >
          &#10094;
        </button>
        <div className="flex transition-transform duration-1000 ease-in-out transform">
          {getVisibleItems().map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-1000 ease-in-out transform ${
                index === 2 
                  ? "scale-110 z-10 opacity-100 translate-x-0" 
                  : index < 2
                  ? "scale-90 opacity-80 translate-x-[-20%]" 
                  : "scale-90 opacity-80 translate-x-[20%]" 
              }`}
              style={{
                minWidth: "19%",
                maxWidth: "25%",
                height: "430px", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 1s ease, opacity 1s ease",
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover rounded-lg"
                style={{
                  transition: "transform 1s ease, opacity 1s ease", 
                  filter: index === 2 ? "none" : "grayscale(100%)", 
                }}
              />
              <p
                className={`text-center mt-2 text-sm ${
                  index === 2 ? "text-lg font-semibold" : "text-base opacity-80"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 text-3xl text-white p-2"
        >
          &#10095;
        </button>
      </div>
      <button className="mt-5 bg-[#fba94a] text-white px-5 py-2 rounded-lg hover:bg-[#fba94a]">
        View all Faculties
      </button>
    </div>
  );
}
