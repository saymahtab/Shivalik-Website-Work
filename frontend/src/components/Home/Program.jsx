import React from 'react';
import ProgramCard from './ProgramCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Program.css'
const Program = () => {
    const engineeringCourses = [
        { title: "Electronics and Communication Engineering" },
        { title: "Computer Science Engineering" },
        { title: "Mechanical Engineering" },
        { title: "Management" },
        { 
            title: "Education",
            subCourses: ["B.Ed", "BBA"]
        },
        { 
            title: "Agriculture",
            subCourses: ["B.Sc (Hons) Agriculture"]
        },
        { 
            title: "BCA",
            subCourses: ["BCA (AI & ML)", "BCA"]
        }
    ];

    const pharmacyCourses = [
        { title: "B.pharm. (Bachelor of pharmacy)" },
        { title: "D.Pharm.(Diploma in Pharmacy)" }
    ];

    const engineeringImages = [
        "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Engineering-1.png",
        "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/sips.jpg",
        "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Engineering-3.png",
    ];

    const pharmacyImages = [
        "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Pharmacy.png",
        "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/U7A0970-scaled.jpg",
        "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Pharmacy-3.png",
    ];

    return (
        <div className="text-center py-10 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold">OUR COLLEGES</h2>
            <p className="text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
                We are redefining higher education for professionals. Develop your own point of view and discover your full potential in our unique learning environment.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
                <div className="flex w-full md:w-4/5 justify-between">
                    <ProgramCard 
                        title="SHIVALIK COLLEGE OF ENGINEERING" 
                        imageSrc={engineeringImages} 
                        courses={engineeringCourses}
                    />
                    <div className="w-1/5"></div> {/* Blank space for 20% gap */}
                    <ProgramCard 
                        title="COLLEGE OF PHARMACY" 
                        imageSrc={pharmacyImages} 
                        courses={pharmacyCourses}
                    />
                </div>
            </div>
        </div>
    );
};

export default Program;
