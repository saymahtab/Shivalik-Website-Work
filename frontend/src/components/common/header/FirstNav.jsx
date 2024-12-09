import MessageSlider from "./MessageSlider";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FirstNav = () => {
  return (
    <div className="flex flex-wrap justify-between items-center bg-gray-100 py-4 px-6 sm:flex-nowrap sm:py-2 sm:px-4  top-0 w-full">
      <div className="flex flex-wrap gap-2 text-gray-600 items-center sm:gap-4">
        <a
          href="#facebook"
          className="flex items-center gap-1 hover:text-yellow-500 text-sm sm:text-base"
        >
          <FaFacebook size={25} className="text-red-600 sm:text-red-800" />
        </a>
        <a
          href="#instagram"
          className="flex items-center gap-1 br-red hover:text-yellow-500"
        >
          <FaInstagram size={25} className="text-red-600 sm:text-red-800" />
        </a>
        <a
          href="#linkedin"
          className="flex items-center gap-1 hover:text-yellow-500 text-sm sm:text-base"
        >
          <FaLinkedin size={25} className="text-red-600 sm:text-red-800" />
        </a>
        <a
          href="#twitter"
          className="flex items-center gap-1 hover:text-yellow-500 text-sm sm:text-base"
        >
          <FaTwitter size={25} className="text-red-600 sm:text-red-800" />
        </a>
      </div>
      {/* Quick Links */}
      <div className="flex gap-4 text-red-800 font-semibold text-sm">
        <a href="#news" className="hover:text-yellow-500">
          News & Events
        </a>
        <a href="#quick-links" className="hover:text-yellow-500">
          Quick Links
        </a>
        <a href="#admission" className="hover:text-yellow-500">
          Admission Enquiry
        </a>
        <a href="#examinations" className="hover:text-yellow-500">
          Examinations @ SCE
        </a>
        <a href="#library" className="hover:text-yellow-500">
          SCE E-Library
        </a>
        <a href="#contact" className="hover:text-yellow-500">
          Contact Us
        </a>
      </div>
      {/* Message Slider */}
      <div className="text-gray-700 text-sm font-medium">
        <MessageSlider />
      </div>
    </div>
  );
};

export default FirstNav;
