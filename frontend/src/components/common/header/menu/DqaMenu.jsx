import React from "react";

const DqaMenu = () => {
  return (
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
                <a href="#best-practices" className="hover:text-blue-600">
                  Best Practices
                </a>
              </li>
              <li>
                <a href="#composition-sce" className="hover:text-blue-600">
                  IQAC SCE Composition
                </a>
              </li>
              <li>
                <a href="#meeting-minutes" className="hover:text-blue-600">
                  Meeting Minutes
                </a>
              </li>
              <li>
                <a href="#feedback-sce" className="hover:text-blue-600">
                  Stakeholder Feedback - SCE
                </a>
              </li>
              <li>
                <a href="#action-reports-sce" className="hover:text-blue-600">
                  Action Taken Reports - SCE
                </a>
              </li>
              <li>
                <a href="#annual-report" className="hover:text-blue-600">
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
                    <a href="#conduct-staff" className="hover:text-blue-500">
                      Code of Conduct (Staff)
                    </a>
                  </li>
                  <li>
                    <a href="#conduct-students" className="hover:text-blue-500">
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
                    <a href="#sce-committee" className="hover:text-blue-500">
                      SCE
                    </a>
                  </li>
                  <li>
                    <a href="#cop-committee" className="hover:text-blue-500">
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
                <a href="#about-pharmacy" className="hover:text-blue-600">
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
                <a href="#iqac-pharmacy" className="hover:text-blue-600">
                  IQAC
                </a>
              </li>
              <li>
                <a href="#committees-pharmacy" className="hover:text-blue-600">
                  Committees
                </a>
              </li>
              <li>
                <a href="#composition-pharmacy" className="hover:text-blue-600">
                  IQAC Pharmacy Composition
                </a>
              </li>
              <li>
                <a href="#value-courses" className="hover:text-blue-600">
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
                <a href="#feedback-pharmacy" className="hover:text-blue-600">
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
  );
};

export default DqaMenu;
