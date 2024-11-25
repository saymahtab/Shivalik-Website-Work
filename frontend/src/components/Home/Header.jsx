import React from "react";
import "./Header.css";
import logo from "../../assets/Logoshivalik.png";
import logo2 from "../../assets/17yrlogo.png";
import MessageSlider from "./MessageSlider";
import lifeofshivalik from "../../assets/lifeofshivalik.jpg";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative w-full">
      <div className="flex flex-wrap justify-between items-center bg-gray-100 py-4 px-6 sm:flex-nowrap sm:py-2 sm:px-4">
        <div className="flex flex-wrap gap-2 text-gray-600 items-center sm:gap-4">
          <a
            href="#facebook"
            className="flex items-center gap-1 hover:text-yellow-500 text-sm sm:text-base"
          >
            <FaFacebook size={25} className="text-red-600 sm:text-red-800" />
          </a>
          <a
            href="#instagram"
            className="flex items-center gap-1 br-red hover:text-yellow-500"
          >
            <FaInstagram size={25} className="text-red-600 sm:text-red-800" />
          </a>
          <a
            href="#linkedin"
            className="flex items-center gap-1 hover:text-yellow-500 text-sm sm:text-base"
          >
            <FaLinkedin size={25} className="text-red-600 sm:text-red-800" />
          </a>
        </div>
        {/* Quick Links */}
        <div className="flex gap-4 text-red-800 font-semibold text-sm">
          <a href="#news" className="hover:text-yellow-500">
            News & Events
          </a>
          <a href="#quick-links" className="hover:text-yellow-500">
            Quick Links
          </a>
          <a href="#admission" className="hover:text-yellow-500">
            Admission Enquiry
          </a>
          <a href="#examinations" className="hover:text-yellow-500">
            Examinations @ SCE
          </a>
          <a href="#library" className="hover:text-yellow-500">
            SCE E-Library
          </a>
          <a href="#contact" className="hover:text-yellow-500">
            Contact Us
          </a>
        </div>
        {/* Message Slider */}
        <div className="text-gray-700 text-sm font-medium">
          <MessageSlider />
        </div>
      </div>

      <div className="flex justify-between items-center bg-white shadow-md py-2 px-4 fixed left-0 w-full z-10">
        {/* Logo */}
        <div className="w-[270px]">
          <img
            className="w-[300px] h-auto"
            src={logo}
            alt="Shivalik NAAC A+ Grade"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-4 text-gray-800 font-bold text-sm">
          {/* About Us */}
          <div className="group">
            <a href="#about" className="hover:text-yellow-500 py-12">
              About Us
            </a>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
              <div className="flex w-full space-x-8">
                {/* Column 1: About Shivalik and Leadership */}
                <div className="flex flex-col pr-8 w-1/4">
                  <h4 className="font-semibold text-red-600 mb-3">
                    About Shivalik
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#why-shivalik" className="hover:text-blue-600">
                        Why Shivalik
                      </a>
                    </li>
                    <li>
                      <a href="#about-shivalik" className="hover:text-blue-600">
                        About Shivalik
                      </a>
                    </li>
                    <li>
                      <a href="#legacy" className="hover:text-blue-600">
                        Legacy
                      </a>
                    </li>
                  </ul>
                  <h4 className="font-semibold text-red-600 mb-3 mt-6">
                    Leadership
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#chairman" className="hover:text-blue-600">
                        Chairman
                      </a>
                    </li>
                    <li>
                      <a href="#vice-chairman" className="hover:text-blue-600">
                        Vice Chairman
                      </a>
                    </li>
                    <li>
                      <a href="#director" className="hover:text-blue-600">
                        Director
                      </a>
                    </li>
                    <li>
                      <a href="#principal" className="hover:text-blue-600">
                        Principal
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Other Sections and Governance */}
                <div className="flex flex-col pr-8 w-1/4">
                  <h4 className="font-semibold text-red-600 mb-3">
                    Other Sections
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#advisory-board" className="hover:text-blue-600">
                        Advisory Board
                      </a>
                    </li>
                    <li>
                      <a href="#affiliation" className="hover:text-blue-600">
                        Affiliation & Approvals
                      </a>
                    </li>
                    <li>
                      <a href="#collaborations" className="hover:text-blue-600">
                        Collaborations
                      </a>
                    </li>
                    <li>
                      <a href="#awards" className="hover:text-blue-600">
                        Awards & Achievements
                      </a>
                    </li>
                  </ul>
                  <h4 className="font-semibold text-red-600 mb-3 mt-6">
                    Governance
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a
                        href="#governing-bodies"
                        className="hover:text-blue-600"
                      >
                        Governing Bodies
                      </a>
                    </li>
                    <li>
                      <a href="#organogram" className="hover:text-blue-600">
                        Organogram
                      </a>
                    </li>
                    <li>
                      <a href="#strategic-plan" className="hover:text-blue-600">
                        Strategic Plan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#mandatory-disclosure"
                        className="hover:text-blue-600"
                      >
                        Mandatory Disclosure
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Feedback & Tour */}
                <div className="flex flex-col pr-8 w-1/4">
                  <h4 className="font-semibold text-red-600 mb-3">
                    Feedback & Tour
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a
                        href="#faculty-feedback"
                        className="hover:text-blue-600"
                      >
                        Faculty/Student Feedback
                      </a>
                    </li>
                    <li>
                      <a href="#college-tour" className="hover:text-blue-600">
                        College Tour
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 4: Placeholder Image   changexyz */}
                <div className="flex flex-col bg-gradient-to-r from-[#98012E] to-[#FF6F61] text-white p-10 rounded-xl shadow-lg mt-1 mr-2 w-full max-w-xs">
                  <div className="space-y-4">
                    {/* 1. 12+ Courses Offered */}

                    {/* 2. 1:15 Faculty-Student Ratio */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">#3</div>
                      <div className="text-sm">
                        Best Private Engieering Institude In Uttarakhand
                      </div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>

                    {/* 3. 6000+ Successful Alumni Worldwide */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">#16</div>
                      <div className="text-sm">
                        Best Private Engieering Institude In North India
                      </div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">#85</div>
                      <div className="text-sm">
                        Best Private Engieering Institude In North India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colleges */}
          <div className="group">
            <a href="#colleges" className="hover:text-yellow-500 py-12">
              Colleges
            </a>
          </div>
          <div className="group">
            <a href="#academics" className="hover:text-yellow-500 py-12">
              Academics
            </a>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
              <div className="flex w-full">
                {/* Column 1: Shivalik College of Engineering */}
                <div className="flex flex-col pr-8">
                  <h4 className="font-semibold text-red-600 mb-3">
                    Shivalik College of Engineering
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#btech" className="hover:text-blue-600">
                        B.Tech Programs
                      </a>
                    </li>
                    <ul className="pl-6 list-disc space-y-2">
                      <li>
                        <a href="#cse" className="hover:text-blue-600">
                          B.Tech Computer Science and Engineering
                        </a>
                      </li>
                      <li>
                        <a href="#ai-ml" className="hover:text-blue-600">
                          B.Tech Artificial Intelligence & Machine Learning
                        </a>
                      </li>
                      <li>
                        <a href="#cse" className="hover:text-blue-600">
                          B.Tech Cyber Security
                        </a>
                      </li>
                      <li>
                        <a href="#data-science" className="hover:text-blue-600">
                          B.Tech Data Science
                        </a>
                      </li>
                      <li>
                        <a href="#mech-eng" className="hover:text-blue-600">
                          B.Tech Mechanical Engineering
                        </a>
                      </li>
                      <li>
                        <a href="#ece" className="hover:text-blue-600">
                          B.Tech Electronics & Communication Engineering
                        </a>
                      </li>
                      <li>
                        <a
                          href="#lateral-entry"
                          className="hover:text-blue-600"
                        >
                          B.Tech Lateral Entry
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>

                {/* Column 2: Continuation under Shivalik College of Engineering (without a new heading) */}
                <div className="flex flex-col pr-8">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a
                        href="#management"
                        className="font-semibold text-red-600"
                      >
                        Management
                      </a>
                    </li>

                    <li>
                      <a href="#bba" className="hover:text-blue-600">
                        Bachelor of Business Administration (BBA)
                      </a>
                    </li>

                    <li>
                      <a href="#agriculture" className="hover:text-blue-600">
                        Agriculture
                      </a>
                    </li>
                    <ul className="pl-6 list-disc space-y-2">
                      <li>
                        <a
                          href="#bsc-agriculture"
                          className="hover:text-blue-600"
                        >
                          B.Sc (Hons.) Agriculture
                        </a>
                      </li>
                    </ul>
                    <li>
                      <a href="#bca" className="hover:text-blue-600">
                        BCA
                      </a>
                    </li>
                    <ul className="pl-6 list-disc space-y-2">
                      <li>
                        <a href="#bca-ai-ml" className="hover:text-blue-600">
                          BCA (AI & ML)
                        </a>
                      </li>
                      <li>
                        <a href="#bca-general" className="hover:text-blue-600">
                          BCA
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>

                {/* Column 3: College of Pharmacy */}
                <div className="flex flex-col">
                  <h4 className="font-semibold text-red-600 mb-3">
                    College of Pharmacy
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#bpharm" className="hover:text-blue-600">
                        Bachelor of Pharmacy (B.Pharm)
                      </a>
                    </li>
                    <li>
                      <a href="#bpharm-lateral" className="hover:text-blue-600">
                        B.Pharm Lateral Entry
                      </a>
                    </li>
                    <li>
                      <a href="#dpharm" className="hover:text-blue-600">
                        Diploma of Pharmacy (D.Pharm)
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Section with Gradient Background and Separation Lines */}
                <div className="flex flex-col bg-gradient-to-r from-[#98012E] to-[#FF6F61] text-white p-10 rounded-xl shadow-lg mt-1 mr-2 w-full max-w-xs">
                  <div className="space-y-4">
                    {/* 1. 12+ Courses Offered */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">42+ LPA</div>
                      <div className="text-sm">Highest Placement</div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>

                    {/* 2. 1:15 Faculty-Student Ratio */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">1:15</div>
                      <div className="text-sm">Faculty-Student Ratio</div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>

                    {/* 3. 6000+ Successful Alumni Worldwide */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">4500+</div>
                      <div className="text-sm">Successful Alumni Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <a href="#admission" className="hover:text-yellow-500 py-12">
              Admission
            </a>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
              <div className="flex w-full">
                {/* Column 1: Admission Options */}
                <div className="flex flex-col pr-8">
                  <h4 className="font-semibold text-red-600 mb-3">Admission</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#apply-now" className="hover:text-blue-600">
                        Apply Now
                      </a>
                    </li>
                    <li>
                      <a href="#prospectus" className="hover:text-blue-600">
                        Prospectus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#application-form"
                        className="hover:text-blue-600"
                      >
                        Application Form
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Placeholder Image */}
                <div className="flex items-center pl-8">
                  <div
                    className="bg-gray-300 flex items-center justify-center text-white"
                    style={{ width: "1200px", height: "200px" }}
                  >
                    Placeholder Image
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a href="#placement" className="hover:text-yellow-500 py-12">
              Placement
            </a>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
              <div className="flex w-full">
                {/* Column 1: Placement Details */}
                <div className="flex flex-col pr-8 w-1/3">
                  <h4 className="font-semibold text-red-600 mb-3">Placement</h4>
                  <ul className="space-y-4 text-gray-700">
                    <li>
                      <a href="#career-cell" className="hover:text-blue-600">
                        Welcome to Career Development Cell
                      </a>
                    </li>
                    <li>
                      <a href="#recruiters" className="hover:text-blue-600">
                        Our Recruiter Partners
                      </a>
                    </li>
                    <li>
                      <a href="#skills-program" className="hover:text-blue-600">
                        Capital/Skill Development Program Conducted
                      </a>
                    </li>
                    <li>
                      <a
                        href="#industry-tie-ups"
                        className="hover:text-blue-600"
                      >
                        Our Industry Tie-Ups
                      </a>
                    </li>
                    <li>
                      <a href="#students-proud" className="hover:text-blue-600">
                        Students Make Us Proud
                      </a>
                    </li>
                    <li>
                      <a href="#why-hire" className="hover:text-blue-600">
                        Why Hire From Us?
                      </a>
                    </li>
                    <li>
                      <a href="#alumni" className="hover:text-blue-600">
                        Alumni
                      </a>
                    </li>
                    <li>
                      <a
                        href="#placement-department"
                        className="hover:text-blue-600"
                      >
                        Our Team and Training Department
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Continuation of Placement Details */}
                <div className="flex flex-col pr-8 w-1/3">
                  <ul className="space-y-4 text-gray-700">
                    <li>
                      <a
                        href="#career-development"
                        className="font-semibold text-red-600"
                      >
                        Career Development
                      </a>
                    </li>
                    <li>
                      <a href="#internships" className="hover:text-blue-600">
                        Internship Opportunities
                      </a>
                    </li>
                    <li>
                      <a href="#placements" className="hover:text-blue-600">
                        Placement Support
                      </a>
                    </li>
                    <li>
                      <a href="#pre-placement" className="hover:text-blue-600">
                        Pre-Placement Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="#placement-policies"
                        className="hover:text-blue-600"
                      >
                        Placement Policies
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Placement Success Stories */}
                <div className="flex flex-col pr-8 w-1/3">
                  <h4 className="font-semibold text-red-600 mb-3">
                    Success Stories
                  </h4>
                  <ul className="space-y-4 text-gray-700">
                    <li>
                      <a
                        href="#student-achievements"
                        className="hover:text-blue-600"
                      >
                        Student Achievements
                      </a>
                    </li>
                    <li>
                      <a href="#top-companies" className="hover:text-blue-600">
                        Top Companies Recruiting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#placement-cycles"
                        className="hover:text-blue-600"
                      >
                        Placement Cycles and Trends
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Gradient Section on the Right */}
                <div className="flex flex-col bg-gradient-to-r from-[#98012E] to-[#FF6F61] text-white p-10 rounded-xl shadow-lg mt-1 mr-2 w-full max-w-xs">
                  <div className="space-y-4">
                    {/* 1. 500+ Companies */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">
                        500+ Companies
                      </div>
                      <div className="text-sm">Our Recruiters and Partners</div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>

                    {/* 2. 90% Placement Record */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">90%</div>
                      <div className="text-sm">Average Placement Record</div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>

                    {/* 3. 42 LPA Highest Placement */}
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">42 LPA</div>
                      <div className="text-sm">Highest Placement Package</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <a href="#research" className="hover:text-yellow-500 py-12">
              Research
            </a>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
              <div className="flex w-full space-x-8">
                <div className="flex flex-col pr-8 w-1/3">
                  <h4 className="font-semibold text-red-600 mb-3">
                    Research and Overview
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#vision" className="hover:text-blue-600">
                        Vision and Mission
                      </a>
                    </li>
                    <li>
                      <a href="#leadership" className="hover:text-blue-600">
                        Leadership
                      </a>
                    </li>
                    <li>
                      <a href="#committee" className="hover:text-blue-600">
                        Research Committee
                      </a>
                    </li>
                    <li>
                      <a href="#ethics" className="hover:text-blue-600">
                        Code of Ethics in Research
                      </a>
                    </li>
                    <li>
                      <a href="#publications" className="hover:text-blue-600">
                        Faculty Research Publications (Five Years)
                      </a>
                    </li>
                    <li>
                      <a href="#papers" className="hover:text-blue-600">
                        List of Prominent Research Papers
                      </a>
                    </li>
                    <li>
                      <a href="#startups" className="hover:text-blue-600">
                        Startups
                      </a>
                    </li>
                    <li>
                      <a href="#books" className="hover:text-blue-600">
                        Books/Book Chapters
                      </a>
                    </li>
                    <li>
                      <a href="#policy" className="hover:text-blue-600">
                        Research Policy
                      </a>
                    </li>
                    <li>
                      <a href="#funded" className="hover:text-blue-600">
                        Funded/Sponsored Research
                      </a>
                    </li>
                    <li>
                      <a href="#seminars" className="hover:text-blue-600">
                        Seminars/Conferences/Workshops
                      </a>
                    </li>
                    <li>
                      <a href="#collaboration" className="hover:text-blue-600">
                        Industry Collaboration/MOU Signed
                      </a>
                    </li>
                    <li>
                      <a href="#innovation-hub" className="hover:text-blue-600">
                        Innovation Hub @ Shivalik
                      </a>
                    </li>
                    <li>
                      <a href="#ipr" className="hover:text-blue-600">
                        IPR/Patents
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col pr-8 w-1/3">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a
                        href="#research-publications"
                        className="font-semibold text-red-600"
                      >
                        80+ Research Publications
                      </a>
                    </li>
                    <li>
                      <a
                        href="#startups"
                        className="font-semibold text-red-600"
                      >
                        10+ Startups
                      </a>
                    </li>
                    <li>
                      <a
                        href="#books-published"
                        className="font-semibold text-red-600"
                      >
                        15+ Books Published
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col w-1/3">
                  <h4 className="font-semibold text-red-600 mb-3">
                    Research Focus
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#research-areas" className="hover:text-blue-600">
                        Research Areas
                      </a>
                    </li>
                    <li>
                      <a href="#collaborations" className="hover:text-blue-600">
                        Collaborations
                      </a>
                    </li>
                    <li>
                      <a href="#funding" className="hover:text-blue-600">
                        Research Funding
                      </a>
                    </li>
                    <li>
                      <a
                        href="#publication-support"
                        className="hover:text-blue-600"
                      >
                        Publication Support
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col bg-gradient-to-r from-[#98012E] to-[#FF6F61] text-white p-10 rounded-xl shadow-lg mt-1 w-1/4">
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">80+</div>
                      <div className="text-sm">Research Publications</div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">10+</div>
                      <div className="text-sm">Startups</div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">15+</div>
                      <div className="text-sm">Books Published</div>
                      <hr className="border-t-2 border-white my-2" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="text-4xl font-semibold">20+</div>
                      <div className="text-sm"> MOU Signed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <a
              href="#student-resources"
              className="hover:text-yellow-500 py-12"
            >
              Student Resources
            </a>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
              <div className="flex w-full space-x-8">
                {/* Library Section */}
                <div className="flex flex-col pr-8 w-1/3">
                  <h4 className="font-semibold text-red-600 mb-3">Library</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a href="#ebooks" className="hover:text-blue-600">
                        E-books
                      </a>
                    </li>
                    <li>
                      <a href="#utu-library" className="hover:text-blue-600">
                        UTU E-library
                      </a>
                    </li>
                    <li>
                      <a href="#e-kumb" className="hover:text-blue-600">
                        E-Kumb
                      </a>
                    </li>
                  </ul>

                  {/* College of Life at Shivalik Section */}
                  <h4 className="font-semibold text-red-600 mb-3 mt-6">
                    College of Life at Shivalik
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a
                        href="#life-at-shivalik"
                        className="hover:text-blue-600"
                      >
                        Life at Shivalik
                      </a>
                    </li>
                    <li>
                      <a href="#events" className="hover:text-blue-600">
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#student-activities"
                        className="hover:text-blue-600"
                      >
                        Student Activities
                      </a>
                    </li>
                    <li>
                      <a
                        href="#community-engagement"
                        className="hover:text-blue-600"
                      >
                        Community Engagement
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Facilities Section */}
                <div className="flex flex-col pr-8 w-1/3">
                  <h4 className="font-semibold text-red-600 mb-3">
                    Facilities
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <a
                        href="#cultural-activity"
                        className="hover:text-blue-600"
                      >
                        Cultural Activity
                      </a>
                    </li>
                    <li>
                      <a href="#sports" className="hover:text-blue-600">
                        Sports - Facilities
                      </a>
                    </li>
                    <li>
                      <a href="#hostel" className="hover:text-blue-600">
                        Hostel
                      </a>
                    </li>
                    <li>
                      <a href="#medical" className="hover:text-blue-600">
                        Medical
                      </a>
                    </li>
                    <li>
                      <a href="#student-clubs" className="hover:text-blue-600">
                        Student Clubs
                      </a>
                    </li>
                    <li>
                      <a href="#nss" className="hover:text-blue-600">
                        N.S.S
                      </a>
                    </li>
                    <li>
                      <a href="#ncc" className="hover:text-blue-600">
                        N.C.C
                      </a>
                    </li>
                    <li>
                      <a href="#mess" className="hover:text-blue-600">
                        MESS
                      </a>
                    </li>
                    <li>
                      <a href="#cafeteria" className="hover:text-blue-600">
                        CAFETERIA
                      </a>
                    </li>
                    <li>
                      <a href="#transport" className="hover:text-blue-600">
                        TRANSPORT
                      </a>
                    </li>
                    <li>
                      <a href="#gymnasium" className="hover:text-blue-600">
                        GYMNASIUM
                      </a>
                    </li>
                    <li>
                      <a href="#committees" className="hover:text-blue-600">
                        College Committees
                      </a>
                    </li>
                    <li>
                      <a
                        href="#student-centric-method"
                        className="hover:text-blue-600"
                      >
                        Student-Centric Method
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Image Placeholder */}
                <div className="flex flex-col w-1/3">
                  <div className="w-full h-72 bg-gray-300 flex items-center justify-center rounded-sm">
                    <img
                      src={lifeofshivalik}
                      alt="Library Image"
                      className="rounded-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a href="#dqa" className="hover:text-yellow-500 py-12">
              DQA
            </a>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
              <div className="flex w-full justify-between">
                <div className="flex">
                  <div className="flex flex-col pr-8">
                    <h4 className="font-semibold text-red-600 mb-3">
                      IQAC - Shivalik College of Engineering
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <a href="#about-sce" className="hover:text-blue-600">
                          About IQAC, SCE
                        </a>
                      </li>
                      <li>
                        <a
                          href="#best-practices"
                          className="hover:text-blue-600"
                        >
                          Best Practices
                        </a>
                      </li>
                      <li>
                        <a
                          href="#composition-sce"
                          className="hover:text-blue-600"
                        >
                          IQAC SCE Composition
                        </a>
                      </li>
                      <li>
                        <a
                          href="#meeting-minutes"
                          className="hover:text-blue-600"
                        >
                          Meeting Minutes
                        </a>
                      </li>
                      <li>
                        <a href="#feedback-sce" className="hover:text-blue-600">
                          Stakeholder Feedback - SCE
                        </a>
                      </li>
                      <li>
                        <a
                          href="#action-reports-sce"
                          className="hover:text-blue-600"
                        >
                          Action Taken Reports - SCE
                        </a>
                      </li>
                      <li>
                        <a
                          href="#annual-report"
                          className="hover:text-blue-600"
                        >
                          Annual Report
                        </a>
                      </li>
                      <li>
                        <a href="#performance" className="hover:text-blue-600">
                          Institution Performance
                        </a>
                      </li>
                      <li>
                        <a href="#initiatives" className="hover:text-blue-600">
                          IQAC Initiatives
                        </a>
                        <ul className="ml-4 list-disc list-inside text-gray-600 space-y-1">
                          <li>
                            <a
                              href="#environmental-initiative"
                              className="hover:text-blue-500"
                            >
                              Environmental Initiative
                            </a>
                          </li>
                          <li>
                            <a
                              href="#conduct-staff"
                              className="hover:text-blue-500"
                            >
                              Code of Conduct (Staff)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#conduct-students"
                              className="hover:text-blue-500"
                            >
                              Code of Conduct (Students)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#disabled-friendly"
                              className="hover:text-blue-500"
                            >
                              Disabled-Friendly & Barrier-Free Campus
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#committees" className="hover:text-blue-600">
                          Committees
                        </a>
                        <ul className="ml-4 list-disc list-inside text-gray-600 space-y-1">
                          <li>
                            <a
                              href="#sce-committee"
                              className="hover:text-blue-500"
                            >
                              SCE
                            </a>
                          </li>
                          <li>
                            <a
                              href="#cop-committee"
                              className="hover:text-blue-500"
                            >
                              COP
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#calendar-sce" className="hover:text-blue-600">
                          Academic Calendar SCE
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col pr-8">
                    <h4 className="font-semibold text-red-600 mb-3">
                      IQAC - College of Pharmacy
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <a
                          href="#about-pharmacy"
                          className="hover:text-blue-600"
                        >
                          About IQAC Pharmacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#best-practices-pharmacy"
                          className="hover:text-blue-600"
                        >
                          Best Practices
                        </a>
                      </li>
                      <li>
                        <a
                          href="#iqac-pharmacy"
                          className="hover:text-blue-600"
                        >
                          IQAC
                        </a>
                      </li>
                      <li>
                        <a
                          href="#committees-pharmacy"
                          className="hover:text-blue-600"
                        >
                          Committees
                        </a>
                      </li>
                      <li>
                        <a
                          href="#composition-pharmacy"
                          className="hover:text-blue-600"
                        >
                          IQAC Pharmacy Composition
                        </a>
                      </li>
                      <li>
                        <a
                          href="#value-courses"
                          className="hover:text-blue-600"
                        >
                          Value Added Courses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#meeting-minutes-pharmacy"
                          className="hover:text-blue-600"
                        >
                          Meeting Minutes
                        </a>
                      </li>
                      <li>
                        <a href="#nirf" className="hover:text-blue-600">
                          NIRF
                        </a>
                      </li>
                      <li>
                        <a href="#naac" className="hover:text-blue-600">
                          NAAC
                        </a>
                      </li>
                      <li>
                        <a
                          href="#feedback-pharmacy"
                          className="hover:text-blue-600"
                        >
                          Stakeholder Feedback - Pharmacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#action-reports-pharmacy"
                          className="hover:text-blue-600"
                        >
                          Action Taken Reports - Pharmacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#annual-report-pharmacy"
                          className="hover:text-blue-600"
                        >
                          Annual Report - Pharmacy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col bg-gradient-to-r from-[#98012E] to-[#FF6F61] text-white p-10 rounded-xl shadow-lg ml-8 w-full max-w-xs text-right">
                  <div className="text-2xl font-semibold mb-2">NAAC A+</div>
                  <div className="text-sm">Highest Score in Uttarakhand</div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Secondary Logo */}
        <div className="flex items-center">
          <img
            className="h-24 w-auto"
            src={logo2}
            alt="17 years of excellence"
          />
        </div>
        <div className="apply-now">
          <button>Apply Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
