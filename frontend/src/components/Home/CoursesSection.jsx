import React, { useEffect, useState, useRef } from 'react';

const CoursesSection = () => {
  const [count, setCount] = useState(0); // State to hold the counter value
  const sectionRef = useRef(null); // Reference to the section


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the counter when the section is in view
            let timer;
            if (count < 15) {
              timer = setTimeout(() => setCount((prev) => prev + 1), 100); // Increment every 100ms
            }
            return () => clearTimeout(timer); // Clean up the timer
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up the observer
      }
    };
  }, [count]);

  return (
    <div ref={sectionRef} className="container mx-auto pt-12 pb-10 p-4"> {/* 50px top padding and 40px bottom padding */}
      {/* Top Section with Heading and Description */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">OUR COLLEGES</h2>
        <p className="mt-2 text-lg text-gray-700">
          We are redefining higher education for professionals. Develop your own point of view and discover your full potential in our unique learning environment.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Image Section */}
        <div className="relative w-full md:w-3/5 h-auto overflow-hidden rounded-lg shadow-lg flex justify-center items-center">
          {/* Image */}
          <img
            src= '/assets/courses/coursecollege.jpg' 
            alt="Demo Placeholder"
            className="w-full h-[480px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          
          {/* Counter on Top of Image */}
          <div className="absolute top-4 left-4 bg-white bg-opacity-75 p-2 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold">{count} +</h3>
            <span className="text-sm">Courses Offered</span>
          </div>

          {/* Corner Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[#98012E] opacity-0 hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
        </div>

        {/* Right Side Sections */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          {/* Right Top Course List */}
          <div className="relative bg-gray-100 p-4 rounded-lg shadow-md flex-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[#98012E] opacity-0 hover:opacity-80 transition-opacity duration-300 rounded-lg"></div>
            <h3 className="text-xl font-semibold mb-2 relative z-10">Courses Offered in B.Tech </h3>
            <ul className="space-y-2 relative z-10">
              <li>B.Tech Computer Science and Engineering</li>
              <li>B.Tech Artificial Intelligence & Machine Learning</li>
              <li>B.Tech Cyber Security</li>
              <li>B.Tech Data Science</li>
              <li>B.Tech Mechanical Engineering</li>
              <li>B.Tech Electronics & Communication Engineering</li>
            </ul>
          </div>

          {/* Right Bottom Degree List */}
          <div className="relative bg-gray-100 p-4 rounded-lg shadow-md flex-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[#98012E] opacity-0 hover:opacity-80 transition-opacity duration-300 rounded-lg"></div>
            <h3 className="text-xl font-semibold mb-2 relative z-10">Other Programs</h3>
            <ul className="space-y-2 relative z-10">
              <li>Bachelor of Business Administration (BBA)</li>
              <li>B.Sc (Hons.) Agriculture</li>
              <li>BCA (AI & ML)</li>
              <li>BCA</li>
              <li>BBA</li>
              {/* <li>Bachelor of Pharmacy (B.Pharm)</li>
              <li>Diploma of Pharmacy (D.Pharm)</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
