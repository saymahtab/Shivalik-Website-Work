import React from 'react';

const ShivalikLabs = () => {
  return (
    <div className="relative p-4 my-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Moving Background Effect */}
      <div className="absolute inset-0 -z-10 animate-bgMove opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-10 h-10 bg-blue-300 rounded-full opacity-50 absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `move-${i} 15s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Title and Description */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3 text-center">
        Shivalik Labs
      </h2>
      <p className="text-gray-600 text-center mb-8 text-base md:text-lg px-4">
        EXPERIENCE THE FINEST CSE EXPERIENCE CENTRES IN DEHRADUN
      </p>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* YouTube Video with Hover Effect */}
        <div className="md:col-span-2 h-[300px] md:h-[400px] transition-transform transform hover:shadow-xl rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/hYYnNW1Pxjk?si=nSx47VzyHkwzZgTW"
            title="Life at Shivalik Labs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg object-cover"
          ></iframe>
        </div>

        {/* Images Grid with Hover Effect */}
        <div className="md:col-span-3 grid grid-cols-2 grid-rows-2 gap-2">
          {['/labs/lab1.png', '/labs/lab2.png', '/labs/lab3.png', '/labs/lab4.png'].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Lab experience center ${idx + 1}`}
              className="w-full h-[150px] md:h-[200px] object-cover rounded-lg transition-transform transform hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShivalikLabs;
