import React from "react";

const PlacementMenu = () => {
  return (
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
              <a href="#industry-tie-ups" className="hover:text-blue-600">
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
              <a href="#placement-department" className="hover:text-blue-600">
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
              <a href="#placement-policies" className="hover:text-blue-600">
                Placement Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Placement Success Stories */}
        <div className="flex flex-col pr-8 w-1/3">
          <h4 className="font-semibold text-red-600 mb-3">Success Stories</h4>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="#student-achievements" className="hover:text-blue-600">
                Student Achievements
              </a>
            </li>
            <li>
              <a href="#top-companies" className="hover:text-blue-600">
                Top Companies Recruiting
              </a>
            </li>
            <li>
              <a href="#placement-cycles" className="hover:text-blue-600">
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
              <div className="text-4xl font-semibold">500+ Companies</div>
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
  );
};

export default PlacementMenu;
