import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../../common/header/NavBar';
import Sidebar from '../../Home/Sidebar';
import Footer from '../../common/footer/Footer';
import FixedFooter from '../../common/footer/fixedFooter';

const Layout = ({ children }) => {
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
    <div>
      <NavBar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
      {isScroll && <FixedFooter />}
    </div>
  );
};

export default Layout;
