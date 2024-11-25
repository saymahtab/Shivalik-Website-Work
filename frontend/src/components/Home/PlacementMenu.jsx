import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner1 from "../../assets/placement/Dreamcraft.jpg";
import Banner2 from "../../assets/placement/LearningRoutesposter.jpg";
import Banner3 from "../../assets/placement/Zicronposter.jpg";
import Student1 from "../../assets/placement/placement13.jpg";
import Student2 from "../../assets/placement/placement7.jpg";
import Student3 from "../../assets/placement/placement420.jpg";

const banners = [Banner1, Banner2, Banner3];
const students = [Student1, Student2, Student3];

const PlacementMenu = () => {
  const bannerSettings = {
    dots: true,
  infinite: true, // Ensures seamless looping
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1, // Scrolls one slide at a time for smooth transitions
  autoplay: true,
  autoplaySpeed: 4000,
  };

  const studentSettings = {
    dots: true,
  infinite: true, // Ensures seamless looping
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1, // Scrolls one slide at a time for smooth transitions
  autoplay: true,
  autoplaySpeed: 4000,
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-10">
      <h2 className="text-center text-4xl font-extrabold my-4 text-[#98012e]">
      Recruitment Drives & Success Stories
      </h2>
      <div className="flex gap-4">
       
        <div className="w-3/5 my-6">
          <Slider {...bannerSettings}>
            {banners.map((banner, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-md">
                  <img
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                  <p className="text-center mt-2 text-lg font-semibold text-gray-700">
                    Recent Placement Drives
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      
        <div className="w-2/5">
          <Slider {...studentSettings}>
            {students.map((student, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-md">
                  <img
                    src={student}
                    alt={`Student ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                  <p className="text-center mt-2 text-lg font-semibold text-gray-700">
                    Our Recent Placement
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PlacementMenu;
