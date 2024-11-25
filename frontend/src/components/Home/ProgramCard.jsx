import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProgramCard = ({ title, imageSrc, courses }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots custom-dots", // Custom styling for dots
    };

    return (
        <div className="border rounded-lg overflow-hidden w-2/5 text-center shadow-lg bg-maroon text-white flex flex-col transform transition-all duration-300 hover:scale-105">
            <Slider {...sliderSettings}>
                {imageSrc.map((src, index) => (
                    <div key={index} className="relative">
                        <img src={src} alt={`${title} ${index + 1}`} className="w-full h-52 object-cover" />
                        {/* Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black opacity-50" />
                    </div>
                ))}
            </Slider>
            <div className="flex-1 py-6 px-6">
                <h3 className="text-lg font-bold mb-4">{title}</h3>
                <ul className="text-sm font-medium text-left space-y-2">
                    {courses.map((course, index) => (
                        <li key={index}>
                            <h4 className="font-semibold">{course.title}</h4>
                            {course.subCourses && (
                                <ul className="pl-4 list-disc space-y-1 text-gray-200">
                                    {course.subCourses.map((subCourse, subIndex) => (
                                        <li key={subIndex} className="text-sm">{subCourse}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-4 px-4">
                <button className="bg-white text-maroon font-semibold text-sm py-2 px-6 rounded-full transition duration-300 transform hover:bg-gray-200 hover:scale-110 shadow-md">
                    EXPLORE
                </button>
            </div>
        </div>
    );
};

export default ProgramCard;
