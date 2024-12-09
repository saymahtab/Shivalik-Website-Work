import React, { useState, useEffect } from 'react';



export default function CourseVisionMission() {

    // Array for the highlights
    const highlights = [
        {
            imgSrc: "https://www.dbuu.ac.in/pharmacy/images/school_h_1.webp",
            title: "Multidisciplinary Curriculum",
            description: "The curriculum is designed with a focus on building leadership and management skills for healthcare professionals, with an emphasis on improving clinical processes."
        },
        {
            imgSrc: "https://www.dbuu.ac.in/pharmacy/images/school_h_2.webp",
            title: "Exposure to The Medical Field",
            description: "The program takes a broad look at the country's healthcare system. Students learn about its history and the events that have shaped its current structure."
        },
        {
            imgSrc: "https://www.dbuu.ac.in/pharmacy/images/school_h_3.webp",
            title: "Effective Learning Module",
            description: "The program is designed to equip graduates with the advanced knowledge and skills that are essential to manage the evolving challenges in today’s competitive healthcare environment."
        },
        {
            imgSrc: "https://www.dbuu.ac.in/pharmacy/images/school_h_4.webp",
            title: "State-of-The-Art Campus",
            description: "The impeccable, modern infrastructure on the campus is brought to life by the pool of experienced research scholars and academicians, resulting in strong peer learning."
        },
        {
            imgSrc: "https://www.dbuu.ac.in/pharmacy/images/school_h_5.webp",
            title: "Learning by Doing",
            description: "Through a highly interactive, seminar-style classroom environment with peers and faculty, students directly apply recently-learned business knowledge and insights to the current healthcare situations and challenges."
        }
    ];

    return (
        <div>
            {/* College Highlights Section */}
            <section className='bg-gray-200 px-36 py-12'>
                <div className='flex items-center mb-8'>
                    <span className='w-1 h-9 border-l-4 border-customed'></span>
                    <h1 className='text-4xl ml-2 font-bold text-gray-800'>College <b className='text-customed'>Highlights</b></h1>
                </div>

                <section className='flex flex-wrap justify-start w-full'>
                    {highlights.map((highlight, index) => (
                        <div key={index} className='shadow-lg sm:w-96 w-full   p-4 bg-white rounded-lg my-3 mr-5'>
                            <img
                                src={highlight.imgSrc}
                                alt={highlight.title}
                            />
                            <h3 className='text-lg font-semibold my-3 text-left text-gray-800'>{highlight.title}</h3>
                            <p className='text-sm  text-left'>{highlight.description}</p>
                        </div>
                    ))}
                </section>


            </section>

            {/* Vision & Mission Section */}
            <section className='bg-customed text-white py-12  justify-center w-full flex flex-col'>
                <div className='flex justify-center w-full'>
                    <div className=' mb-8 w-1/3 text-start border rounded p-5 border-yellow-300 mx-5'>
                        <h1 className='text-3xl font-bold text-yellow-300'> Vision</h1>
                        <ul className='list-disc pl-5'>
                            <li>Our vision is to impart the knowledge of Pharmacy & Research that enables our students to meet global requirements and challenges.</li>
                            <li>To be the global leader in pharmacy research, service and education committed to offering a transformative learning experience in a collective and varied environment.</li>
                        </ul>
                    </div>
                    <div className=' w-1/3 mb-8 text-start border border-yellow-300 rounded shadow-md p-5 mx-5'>
                        <h1 className='text-3xl font-bold text-yellow-300'>Mission</h1>
                        <ul className='list-disc pl-5'>
                            <li>
                                The mission of the School of Pharmacy & Research is to grow innovative, diverse pharmacy leaders and scientists and exceptional.
                            </li>
                            <li>It also focuses on promoting the well-being and health of the people, globally and locally.</li>
                            <li>School of Pharmacy and Research focuses on promoting the learning part and also on keeping in concern the Equity, Quality, Relevance and Value-Based Education, and Access.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
