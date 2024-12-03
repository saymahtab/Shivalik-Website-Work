import '../../App.css';
import React, { useEffect, useState , useRef } from 'react';
import NavBar from '../../components/common/header/NavBar';
import Sidebar from '../../components/Home/Sidebar';
import '../../components/styles/Sidebar.css';
import Hero from '../../components/Home/Main';
import CoursesSection from '../../components/Home/CoursesSection';
import Placement from '../../components/Home/PlacementSection';
import StudentTestimonials from '../../components/Home/StudentTestimonials';
import Footer from '../../components/common/footer/Footer';
import Courses from "../../components/Home/Courses";
import CollegeIntro from "../../components/Home/CollegeIntro";
import NewsEvents from '../../components/Home/NewsEvents';
import CircularNotices from '../../components/Home/CircularNotices';
import PlacementMenu from '../../components/Home/PlacementMenu';
import AwardsSection from '../../components/Home/AwardsSection';
import Popup from '../../components/Home/Popup';
import ShivalikLabs from '../../components/Home/ShivalikLabs';
import LogoLoader from '../../components/Loader/loader';
import FixedFooter from '../../components/common/footer/fixedFooter';

const HomePage = () => {
  const [isLoader, setIsLoader] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  })

  return (
    <>
      {isLoader ? (
        <LogoLoader />
      ) : (
        <div>
          <NavBar />
          <Hero />
          <Sidebar />
          <CoursesSection />
          <CollegeIntro />
          <Courses />
          <ShivalikLabs />
          <StudentTestimonials />
          <CircularNotices />
          <AwardsSection />
          <NewsEvents />
          <PlacementMenu />
          <Placement />
          <Footer />
          {isScroll && <FixedFooter /> }
          <Popup />
        </div>
      )}
    </>

  );
};

export default HomePage;
