import React, { useEffect, useState, useRef } from 'react';
import "../../styles/Header.css";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import MessageSlider from "./MessageSlider";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FixedNav from "./fixedNav";

const NavBar = () => {
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
    <header className=" w-full">
      <FirstNav />
      {isScroll && <FixedNav />}
      <SecondNav />
    </header>
  );
};

export default NavBar;
