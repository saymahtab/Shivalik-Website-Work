import React, { useState, useEffect } from 'react';

const images = [
    'https://shivalikcollege.edu.in/wp-content/uploads/2022/11/U7A0961-scaled.jpg',
    '/assets/final.jpg',
    '/assets/college.jpg',
    '/assets/lifeofshivalik.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = images.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Circular next
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides); // Circular prev
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 2000); // Auto-scroll every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>

            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 text-2xl bg-black bg-opacity-50 text-white rounded-full opacity-50 hover:opacity-100"
                aria-label="Previous Slide"
            >
                &#8249;
            </button>

            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-2xl bg-black bg-opacity-50 text-white rounded-full opacity-50 hover:opacity-100"
                aria-label="Next Slide"
            >
                &#8250;
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        aria-label={`Go to Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
