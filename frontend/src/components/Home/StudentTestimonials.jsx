import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import anmolimg from "../../assets/anmolplacement.png";
import autodesk from "../../assets/autodeskimg.jpg";

const students = [
  {
    name: "Anmol Singh Negi",
    program: "B.Tech Computer Science and Engineering Batch 2024",
    company: "AUTODESK",
    position: "SDE",
    lpa: "36.4 LPA",
    img: anmolimg,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shivalik college of Engineering's blend of technology and theory prepared us for the growing market.",
  },
  {
    name: "Anmol Singh Negi",
    program: "B.Tech Computer Science and Engineering Batch 2024",
    company: "AUTODESK",
    position: "SDE",
    lpa: "36.4 LPA",
    img: anmolimg,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shivalik college of Engineering's blend of technology and theory prepared us for the growing market.",
  },
  {
    name: "Anmol Singh Negi",
    program: "B.Tech Computer Science and Engineering Batch 2024",
    company: "AUTODESK",
    position: "SDE",
    lpa: "36.4 LPA",
    img: anmolimg,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shivalik college of Engineering's blend of technology and theory prepared us for the growing market.",
  },
 
];

const StudentTestimonials = () => {
  return (
    <section
      className="relative py-8 bg-center bg-cover min-h-[70vh]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dghmyof2k/image/upload/v1730781580/fjaagdofyc1ygi21qmvc.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#98012E] opacity-85"></div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        {/* Heading */}
        <div className="flex justify-center">
          <h2 className="relative text-5xl font-bold px-8 py-2 bg-white rounded-lg text-center shadow-lg inline-block tracking-wide">
            <span className="text-[#98012e]">"Student</span>
            <span className="text-[#fba94a]"> Speak"</span>
          </h2>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mt-10"
          style={{
            "--swiper-navigation-color": "white", 
            "--swiper-pagination-color": "white", 
          }}
        >
          {students.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row bg-opacity-70 rounded-lg shadow-lg">
                {/* Left Side: Student Image */}
                <div className="lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
                  <div className="w-90 h-140">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>

                {/* Right Side: Student Testimonial */}
                <div className="lg:w-2/3 lg:pl-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <p
                      style={{ fontSize: "2.85rem" }}
                      className="font-bold mb-2"
                    >
                      {student.name}
                    </p>
                    <p
                      style={{ fontSize: "1.15em" }}
                      className="text-xl font-semibold"
                    >
                      ({student.program})
                    </p>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg italic mb-6">
                    <span className="text-orange-400 text-3xl font-bold">
                      “
                    </span>
                    {student.testimonial}
                    <span className="text-orange-400 text-3xl font-bold">
                      ”
                    </span>
                  </p>

                  {/* Placement Information */}
                  <div className="mt-4">
                    <p className="font-semibold text-2xl">Placed at</p>
                    <div className="flex items-center mt-1">
                      <img
                        src={autodesk}
                        alt={student.company}
                        className="w-25 h-16"
                      />
                      <div className="ml-4">
                        <p className="text-white font-semibold text-lg">
                          With Package of
                        </p>
                        <p className="text-yellow-300 font-bold text-5xl">
                          {student.lpa}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentTestimonials;
