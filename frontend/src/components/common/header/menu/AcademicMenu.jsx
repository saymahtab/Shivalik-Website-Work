import React from "react";

const AcademicMenu = () => {
  return (
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
                <a href="#lateral-entry" className="hover:text-blue-600">
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
              <a href="#management" className="font-semibold text-red-600">
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
                <a href="#bsc-agriculture" className="hover:text-blue-600">
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
  );
};

export default AcademicMenu;
