import React, { useState } from 'react';
import MessageSlider from './MessageSlider';
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility


    return (
        <nav className="bg-customed shadow-md fixed top-0  w-full z-50">
            <div className="  text-white mx-5  flex flex-wrap justify-between items-center py-2 h-14">
                {/* Message Slider */}
                <div className="w-full sm:w-auto text-center text-sm font-medium mb-2 sm:mb-0">
                    <MessageSlider />
                </div>



                <div
                    className={`w-full sm:w-auto flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} sm:flex`}
                >
                    <Link to="/home" className="text-white hover:text-yellow-500">
                        Home
                    </Link>
                    <Link to="/about-us" className="text-white hover:text-yellow-300">
                        About Us
                    </Link>
                    <Link to="/schools" className="text-white hover:text-yellow-300">
                        Schools
                    </Link>
                    <Link to="/programmes" className="text-white hover:text-yellow-300">
                        Programmes
                    </Link>
                    <Link to="/admissions" className="text-white hover:text-yellow-300">
                        Admissions
                    </Link>
                    <Link to="/academics" className="text-white hover:text-yellow-300">
                        Academics
                    </Link>
                    <Link to="/research" className="text-white hover:text-yellow-300">
                        Research
                    </Link>
                    <Link to="/placements" className="text-white hover:text-yellow-300">
                        Placements
                    </Link>
                </div>

                {/* <div className="w-full sm:w-auto text-center mt-2 sm:mt-0">
                    <a
                        href="#apply"
                        className="px-6 py-2 border border-white text-white font-medium text-base rounded-md shadow hover:bg-white hover:text-customed transition"
                    >
                        Apply Now
                    </a>
                </div> */}
                 <div className="nav-apply-now">
                    <button
                        className="hover:text-yellow-500 hidden xl:flex "
                        aria-label="Apply Now"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
