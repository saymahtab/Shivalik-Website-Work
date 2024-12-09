import React, { useState } from 'react';
import MessageSlider from './MessageSlider';
import { Link } from "react-router-dom";
import AboutMenu from "./menu/AboutMenu";
import AcademicMenu from "./menu/AcademicMenu";
import AdmissionMenu from './menu/AdmissionMenu';
// import CollegeMenu from "./menu/CollegeMenu";
import DqaMenu from "./menu/DqaMenu";
import PlacementMenu from './menu/PlacementMenu';
import ResourcesMenu from './menu/ResourcesMenu';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null); // State to track active menu

    return (
        <nav className="bg-customed shadow-md fixed top-0 w-full z-50">
            <div className="text-white mx-5 flex flex-wrap justify-between items-center py-2 h-14">
                {/* Message Slider */}
                <div className="w-full sm:w-auto text-center text-sm font-medium mb-2 sm:mb-0">
                    <MessageSlider />
                </div>

                {/* Navigation Links */}
                <div className=" w-full sm:w-auto flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 sm:flex">
                    <nav className="sm:flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                        <ul className="lg:flex hidden gap-8 text-white font-bold text-sm nav-list">
                            <li className="group">
                                <a
                                    href="#about"
                                    className="text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    About Us
                                </a>
                                <AboutMenu />
                            </li>
                            <li className="group">
                                <a
                                    href="#colleges"
                                    className="text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    Colleges
                                </a>
                            </li>
                            <li className="group">
                                <a
                                    href="#academics"
                                    className="text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    Academics
                                </a>
                                <AcademicMenu />
                            </li>
                            <li className="group">
                                <a
                                    href="#admission"
                                    className="text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    Admission
                                </a>
                                <AdmissionMenu />
                            </li>
                            <li className="group">
                                <a
                                    href="#placement"
                                    className="text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    Placement
                                </a>
                                <PlacementMenu />
                            </li>
                            <li className="group">
                                <a
                                    href="#research"
                                    className="text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    Research
                                </a>
                                <ResourcesMenu />
                            </li>
                            <li className="group">
                                <a
                                    href="#student-resources"
                                    className="text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    Student Resources
                                </a>
                                <ResourcesMenu />
                            </li>
                            <li className="group">
                                <a
                                    href="#dqa"
                                    className=" text-white hover:text-yellow-500 py-12"
                                    role="menuitem"
                                >
                                    DQA
                                </a>
                                <DqaMenu />
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Apply Now Button */}
                <div className="nav-apply-now">
                    <button
                        className=" hover:text-yellow-500 hidden xl:flex"
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
