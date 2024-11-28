import React from "react";

const AdmissionMenu = () => {
  return (
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
              <a href="#application-form" className="hover:text-blue-600">
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
  );
};

export default AdmissionMenu;
