import React, { useState } from "react";
import AboutMenu from "./menu/AboutMenu";
import AcademicMenu from "./menu/AcademicMenu";
import AdmissionMenu from "./menu/AdmissionMenu";
import PlacementMenu from "./menu/PlacementMenu";
import ResearchMenu from "./menu/ResearchMenu";
import ResourcesMenu from "./menu/ResourcesMenu";
import DqaMenu from "./menu/DqaMenu";

const SecondNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div 
      className="flex justify-between items-center bg-white shadow-md py-2 px-3 fixed w-full z-50 top-[2.5rem]"
    >
      {/* Logo */}
      <div className="w-[270px]">
        <img
          className="w-[250px] h-auto xl:w-[300px] pb-1 logo-img"
          src="/assets/Logoshivalik.png"
          alt="Shivalik NAAC A+ Grade Logo"
        />
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between`}
      >
        <ul className="lg:flex hidden gap-8 text-gray-800 font-bold text-sm nav-list">
          <li className="group">
            <a
              href="#about"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              About Us
            </a>
            <AboutMenu />
          </li>
          <li className="group">
            <a
              href="#colleges"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              Colleges
            </a>
          </li>
          <li className="group">
            <a
              href="#academics"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              Academics
            </a>
            <AcademicMenu />
          </li>
          <li className="group">
            <a
              href="#admission"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              Admission
            </a>
            <AdmissionMenu />
          </li>
          <li className="group">
            <a
              href="#placement"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              Placement
            </a>
            <PlacementMenu />
          </li>
          <li className="group">
            <a
              href="#research"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              Research
            </a>
            <ResearchMenu />
          </li>
          <li className="group">
            <a
              href="#student-resources"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              Student Resources
            </a>
            <ResourcesMenu />
          </li>
          <li className="group">
            <a
              href="#dqa"
              className="hover:text-yellow-500 py-12"
              role="menuitem"
            >
              DQA
            </a>
            <DqaMenu />
          </li>
        </ul>

        {/* Secondary Logo */}
        <aside className="items-center batch" aria-label="Secondary Logo">
          <img
            className="h-[5.5rem] w-auto"
            src="/assets/17yrlogo.png"
            alt="17 years of excellence"
          />
        </aside>

        {/* Apply Now Button */}
        <div className="apply-now">
          <button
            className="hover:text-yellow-500 hidden xl:flex"
            aria-label="Apply Now"
          >
            Apply Now
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SecondNav;
