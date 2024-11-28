import React from "react";

const AboutMenu = () => {
  return (
    <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg w-screen z-50 py-8 px-12">
      <div className="flex w-full space-x-8">
        {/* Column 1: About Shivalik and Leadership */}
        <div className="flex flex-col pr-8 w-1/4">
          <h4 className="font-semibold text-red-600 mb-3">About Shivalik</h4>
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
          <h4 className="font-semibold text-red-600 mb-3 mt-6">Leadership</h4>
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
          <h4 className="font-semibold text-red-600 mb-3">Other Sections</h4>
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
          <h4 className="font-semibold text-red-600 mb-3 mt-6">Governance</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#governing-bodies" className="hover:text-blue-600">
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
          <h4 className="font-semibold text-red-600 mb-3">Feedback & Tour</h4>
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

        {/* Column 4: Placeholder Image */}
        <div className="flex flex-col bg-gradient-to-r from-[#98012E] to-[#FF6F61] text-white p-10 rounded-xl shadow-lg mt-1 mr-2 w-full max-w-xs">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="text-4xl font-semibold">#3</div>
              <div className="text-sm">
                Best Private Engineering Institute In Uttarakhand
              </div>
              <hr className="border-t-2 border-white my-2" />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-4xl font-semibold">#16</div>
              <div className="text-sm">
                Best Private Engineering Institute In North India
              </div>
              <hr className="border-t-2 border-white my-2" />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-4xl font-semibold">#85</div>
              <div className="text-sm">
                Best Private Engineering Institute In India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
