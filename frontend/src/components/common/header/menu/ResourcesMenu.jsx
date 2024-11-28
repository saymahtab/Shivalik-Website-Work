import React from "react";

const ResourcesMenu = () => {
  return (
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
              <a href="#life-at-shivalik" className="hover:text-blue-600">
                Life at Shivalik
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-blue-600">
                Events
              </a>
            </li>
            <li>
              <a href="#student-activities" className="hover:text-blue-600">
                Student Activities
              </a>
            </li>
            <li>
              <a href="#community-engagement" className="hover:text-blue-600">
                Community Engagement
              </a>
            </li>
          </ul>
        </div>

        {/* Facilities Section */}
        <div className="flex flex-col pr-8 w-1/3">
          <h4 className="font-semibold text-red-600 mb-3">Facilities</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#cultural-activity" className="hover:text-blue-600">
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
              <a href="#student-centric-method" className="hover:text-blue-600">
                Student-Centric Method
              </a>
            </li>
          </ul>
        </div>

        {/* Image Placeholder */}
        <div className="flex flex-col w-1/3">
          <div className="w-full h-72 bg-gray-300 flex items-center justify-center rounded-sm">
            <img
              src="/assets/lifeofshivalik.jpg"
              alt="Library Image"
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenu;
