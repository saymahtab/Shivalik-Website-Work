// Sidebar.js
import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaCommentDots, FaDownload } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-[60%] right-1 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {/* Helpline */}
      <div className="relative group">
        <a
          href="tel:18001034049"
          className="w-12 h-12 flex items-center justify-center bg-[#98012E] text-[#eae3e3] shadow-md text-2xl rounded-md transition-colors duration-300 hover:bg-[#f8b400]"
        >
          <FaPhoneAlt />
        </a>
        <span className="absolute right-full top-0 h-full flex items-center px-2 bg-[#98012E] text-white text-sm font-medium rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Helpline
        </span>
      </div>

      {/* WhatsApp */}
      <div className="relative group">
        <a
          href="https://wa.me/9411519803"
          className="w-12 h-12 flex items-center justify-center bg-[#98012E] text-[#eae3e3] shadow-md text-2xl rounded-md transition-colors duration-300 hover:bg-[#f8b400]"
        >
          <FaWhatsapp />
        </a>
        <span className="absolute right-full top-0 h-full flex items-center px-2 bg-[#98012E] text-white text-sm font-medium rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
      </div>

      {/* Support */}
      <div className="relative group">
        <a
          href="#support"
          className="w-12 h-12 flex items-center justify-center bg-[#98012E] text-[#eae3e3] shadow-md text-2xl rounded-md transition-colors duration-300 hover:bg-[#f8b400]"
        >
          <FaCommentDots />
        </a>
        <span className="absolute right-full top-0 h-full flex items-center px-2 bg-[#98012E] text-white text-sm font-medium rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Support
        </span>
      </div>

      {/* Download */}
      <div className="relative group">
        <a
          href="/SCE-Placement-Brochure.pdf"
          className="w-12 h-12 flex items-center justify-center bg-[#98012E] text-[#eae3e3] shadow-md text-2xl rounded-md transition-colors duration-300 hover:bg-[#f8b400]"
          download
        >
          <FaDownload />
        </a>
        <span className="absolute right-full top-0 h-full flex items-center px-2 bg-[#98012E] text-white text-sm font-medium rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Download
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
