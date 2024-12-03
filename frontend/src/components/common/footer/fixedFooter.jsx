import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import RunningText from "./runningMessageFooter";

const FixedFooter = () => {
    return (
        <footer className="fixed bottom-14 rounded w-full z-50 text-white transition-all duration-500 ease-in-out transform translate-y-full hover:translate-y-0">
            <div className="flex justify-between items-center pl-6">
                <div className="text-sm bg-amber-400 w-2/3 p-3 h-12 rounded-md">
                    <RunningText />
                </div>

                <div className="flex items-center bg-blue-800 w-2/3 h-12 p-3 mx-2 rounded-md">
                    <div className="flex items-center h-12 p-3 mx-2 rounded">
                        <div className="flex items-center space-x-4">
                            <span className="text-sm mt-2">Call Us:</span>

                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white hover:text-yellow-300"
                            >
                                <FaPhone size={16} className="mr-2 mt-1" />
                                <span className="text-sm mt-2">+91 9497155111</span>
                            </Link>
                        </div>

                        <div className="border-l border-blue-300 h-full mx-2"></div>

                        <div className="flex space-x-4">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-500 ml-2"
                            >
                                <FaWhatsapp size={20} />
                            </Link>
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-500"
                            >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-500"
                            >
                                <FaFacebook size={20} />
                            </Link>
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300"
                            >
                                <FaTwitter size={20} />
                            </Link>
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300"
                            >
                                <FaLinkedin size={20} />
                            </Link>
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300"
                            >
                                <FaYoutube size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FixedFooter;
