import React, { useState, useEffect } from "react";

const CourseFaculties = () => {
    const facultyData = [
        { name: "Ms. Shivani Sharma", title: "Assistant Professor", image: "https://via.placeholder.com/150" },
        { name: "Mr. Yogesh Tiwari", title: "Assistant Professor", image: "https://via.placeholder.com/150" },
        { name: "Mr. Praveen Semwal", title: "Assistant Professor", image: "https://via.placeholder.com/150" },
        { name: "Mr. Abhit Kumar", title: "Assistant Professor", image: "https://via.placeholder.com/150" },
        { name: "Ms. Sweety Rawat", title: "Assistant Professor", image: "https://via.placeholder.com/150" },
        { name: "Ms. Priya Singh", title: "Assistant Professor", image: "https://via.placeholder.com/150" },
        { name: "Mr. Rajesh Gupta", title: "Assistant Professor", image: "https://via.placeholder.com/150" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 5; // Number of faculty cards to display
    const totalCount = facultyData.length;

    // Automatically scroll every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);

    const handlePrev = () => {
        // Decrease index and make sure it wraps around
        const newIndex = (currentIndex - visibleCount + totalCount) % totalCount;
        setCurrentIndex(newIndex); // Update the current index state
    };

    const handleNext = () => {
        // Increase index and make sure it wraps around
        const newIndex = (currentIndex + visibleCount) % totalCount;
        setCurrentIndex(newIndex); // Update the current index state
    };

    // Get the current slice of faculty data to display
    const getVisibleFaculty = () => {
        return facultyData
            .slice(currentIndex, currentIndex + visibleCount) // Get the visible cards
            .concat(facultyData.slice(0, (currentIndex + visibleCount) % totalCount)) // Handle wrap-around
            .slice(0, visibleCount); // Ensure no more than visibleCount cards are shown
    };

    return (
        <div className="bg-blue-900 text-white py-10">
            <h2 className="text-center text-3xl font-bold mb-6">
                Faculties at School of Pharmacy
            </h2>
            <div className="relative flex items-center justify-center overflow-hidden">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-5 bg-customed hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg focus:outline-none z-10"
                >
                    &#9664;
                </button>

                {/* Faculty Cards */}
                <div className="flex space-x-4 ">
                    {getVisibleFaculty().map((faculty, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-4 h-72 w-60"
                        >
                            <img
                                src={faculty.image}
                                alt={faculty.name}
                                className=" h-36 rounded-full mt-4"
                            />
                            <h3 className="text-xl mt-6 font-semibold">{faculty.name}</h3>
                            <p className="text-gray-600">{faculty.title}</p>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-5 bg-customed hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg focus:outline-none z-10"
                >
                    &#9654;
                </button>
            </div>

            {/* View All Button */}
            <div className="text-center mt-6">
                <button className="bg-customed hover:bg-yellow-600 text-white px-6 py-2 rounded-lg">
                    View All Faculties
                </button>
            </div>
        </div>
    );
};

export default CourseFaculties;
