import React from "react";

const CircularNotices = () => {
  // Dummy events data for Circular Notices
  const events = [
    { name: "ShivaTech Techfest 2024", date: "15/11/2024 - 15/11/2024" },
    { name: "Science Championship 3.0", date: "16/11/2024 - 16/11/2024" },
    { name: "Shiva Sangam Alumni Meet – 2024", date: "16/03/2024 - 16/03/2024" },
    { name: "Shivalik Annual Athletics Meet – 2024", date: "07/03/2024 - 09/03/2024" },
    // Add more dummy events dynamically
    ...Array.from({ length: 30 }, (_, i) => ({
      name: `Dummy Event ${i + 1}`,
      date: "Date - Date",
    })),
  ];

  const mediaLogos = [
    { src: "https://example.com/danikjagrad.png", alt: "Dainik Jagran" },
    { src: "https://example.com/amarujala.png", alt: "Amar Ujala" },
    { src: "https://example.com/hindus.png", alt: "Hindustan" },
    { src: "https://example.com/sahara.png", alt: "Rashtriya Sahara" },
  ];

  return (
    <div className="bg-gray-100 p-4 my-3">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        News & Highlights
      </h2>
      <div className="flex items-start justify-center p-10">
        <div className="flex flex-col sm:flex-row items-stretch gap-6 w-full max-w-8xl">
          
          {/* Circular Notices Section */}
          <div className="w-full sm:w-1/2 bg-white border-2 border-[#a50034] rounded-lg shadow-lg flex flex-col">
            <div className="bg-[#a50034] text-white text-center py-4 text-xl font-bold">
              CIRCULAR NOTICES
            </div>
            <div className="max-h-[350px] overflow-y-auto flex-grow p-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="w-full text-center py-4 border-b border-gray-200"
                >
                  <h3 className="text-[#a50034] font-semibold text-lg">
                    {event.name}
                  </h3>
                  <p className="text-gray-600">{event.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Media Coverage Section */}
          <div className="w-full sm:w-1/2 bg-white border-2 border-[#a50034] rounded-lg p-4 shadow-lg flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Media Coverage
            </h2>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {mediaLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 border-2 border-[#a50034] rounded-lg"
                >
                  <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CircularNotices;
