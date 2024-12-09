import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../../components/common/header/NavBar';
import Sidebar from '../../components/Home/Sidebar';
import Footer from '../../components/common/footer/Footer';
import FixedFooter from '../../components/common/footer/fixedFooter';
import Carousel from '../../components/Course/Pharma/carousol';
import CoursePage from '../../components/Course/Pharma/courseIntro';
import CourseFaculties from '../../components/Course/Pharma/cousreFaculties';
import CourseVisionMission from '../../components/Course/Pharma/courseVisionMission';

export default function pharmaPage() {
    const [isScroll, setIsScroll] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll === 0) {
                setIsScroll(false);
            } else if (currentScroll > lastScrollY.current) {
                setIsScroll(true);
            } else if (currentScroll < 500 && currentScroll < lastScrollY.current) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <NavBar />
            <Sidebar />
            <Carousel/>
            <CoursePage/>
            <CourseFaculties/>
            <CourseVisionMission/>
            <Footer />
            {isScroll && <FixedFooter />}
        </>
    )
}

