import React from 'react';
import ReactPlayer from 'react-player';
import { FaArrowRight , FaLaptop, FaPhoneAlt, FaWhatsapp ,FaRupeeSign  } from 'react-icons/fa';

export default function CourseIntro() {
    return (
        <div className="">
            <section className="flex min-w-full px-20 py-10">
                <div className="w-1/2 mx-2 mr-5">
                    <h1 className="text-3xl mb-4 text-black font-bold">Best Pharmacy College in Dehradun</h1>
                    <p className="mb-4">
                        Dreaming of a career dedicated to improving lives through the power of medication? Look no further than the School of Pharmacy and Research, recognized and accredited by the prestigious Pharmacy Council of India (PCI). We are one of the best pharmacy colleges in Dehradun, offering a transformative learning experience that will equip you with the knowledge, skills, and confidence to excel in this dynamic field.
                    </p>
                    <p className="mb-5">
                        We foster a vibrant learning environment where you'll delve into the fascinating world of pharmaceutical science, research, and practice. Our esteemed faculty, industry experts, and cutting-edge facilities equip you with the knowledge, skills, and ethical values to excel in your chosen path. As a pharmacy graduate, you'll be more than just a pharmacist. You'll be a healthcare professional with the expertise to:
                    </p>
                    <button className="bg-customed text-white flex items-center rounded-full px-6 py-2 shadow-2xl  hover:shadow-2xl hover:bg-yellow-500 transition-all duration-300 ease-in-out">
                        Know More
                        <FaArrowRight className="ml-3" />
                    </button>
                </div>
                <div className="w-1/2 mx-2 rounded-lg overflow-hidden">
                    <ReactPlayer
                        url="https://youtu.be/dpO6dOKWuro?si=gR6svuWMtUGcg60w"
                        controls
                        width="100%"
                        height="100%"
                        config={{
                            youtube: {
                                playerVars: {
                                    modestbranding: 1, // No YouTube logo
                                    rel: 0, // No related videos
                                    showinfo: 0 // Hide title and info
                                }
                            }
                        }}
                    />
                </div>
            </section>
            <section className='bg-custom-gray px-20 py-5 '>
                <h1 className='text-3xl font-bold mb-5'>Programmes Offered</h1>
                <div className='flex'>
                    <div className='w-2/3'>
                        <div className="mb-8">
                            <div className="bg-customed text-white px-4 py-2 inline-block font-bold">
                                Diploma
                            </div>
                            <hr className="border-t-2 border-customed " />
                            <div className="mt-3 border border-dashed  border-customed rounded p-4 flex items-center  bg-white shadow hover:bg-yellow-500 hover:text-white">
                                <span className=" text-xl font-bold text-customed mr-2">✓</span>
                                <a
                                    href="#"
                                    className=" hover:underline font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Diploma in Pharmacy (D.Pharm)
                                </a>
                            </div>
                        </div>

                        {/* Undergraduate Section */}
                        <div className="mb-10">
                            <div className="text-white bg-customed px-4 py-2 inline-block font-bold">
                                Undergraduate
                            </div>

                            <hr className="border-t-2 border-customed " />
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-dashed  border-customed rounded p-4 flex items-center bg-white shadow hover:bg-yellow-500 hover:text-white">
                                    <span className="text-xl font-bold text-customed mr-2">✓</span>
                                    <a
                                        href="#"
                                        className="hover:underline  font-semibold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Bachelor of Pharmacy (B.Pharm)
                                    </a>
                                </div>

                                <div className="border border-dashed  border-customed rounded p-4 flex items-center bg-white shadow hover:bg-yellow-500 hover:text-white">
                                    <span className="text-xl font-bold text-customed mr-2">✓</span>
                                    <a
                                        href="#"
                                        className=" hover:underline font-semibold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Bachelor of Pharmacy (B.Pharm-LE)
                                    </a>
                                </div>
                                <div className="border border-dashed  border-customed rounded p-4 flex items-center bg-white shadow hover:bg-yellow-500 hover:text-white">
                                    <span className="text-xl font-bold text-customed mr-2">✓</span>
                                    <a
                                        href="#"
                                        className=" hover:underline font-semibold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Doctor of Pharmacy (PHARM.D)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 w-1/3'>
                        <div className=' '>
                            <img src="https://www.dbuu.ac.in/assets/images/apply-now/applynow.webp" alt="" className='rounded-lg h-72 border border-black' />
                        </div>
                        <div className='p-2'>
                            <h2 className='text-customed text-2xl font-bold'>Registration Open-2025</h2>
                            <p>Merit-based admission process with online application at</p>
                            <p className='font-bold'>Shivalik College Of Engineering</p>
                            <div className="flex flex-col text-xl  space-y-4 mt-2">
                                <button className="flex items-center hover:underline shadow border border-gray-300 justify-start px-4 py-2">
                                    <FaLaptop className="mr-2 text-customed" /> {/* Icon for Apply Now */}
                                    Apply Now
                                </button>

                                <button className="flex items-center hover:underline shadow border border-gray-300  justify-start px-4 py-2">
                                    <FaPhoneAlt className="mr-2 text-customed" /> {/* Icon for Contact Us */}
                                    Contact Us
                                </button>

                                <button className="flex items-center hover:underline shadow border border-gray-300  justify-start px-4 py-2">
                                    <FaRupeeSign  className="mr-2 text-customed" /> Scholarship
                                    Scholarship
                                </button>

                                <button className="flex items-center hover:underline shadow border border-gray-300  justify-start px-4 py-2">
                                    <FaWhatsapp className="mr-2 text-customed" /> WhatsApp Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
