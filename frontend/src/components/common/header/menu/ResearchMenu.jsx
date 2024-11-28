import React from "react";

const ResearchMenu = () => {
  return (
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
              <a href="#startups" className="font-semibold text-red-600">
                10+ Startups
              </a>
            </li>
            <li>
              <a href="#books-published" className="font-semibold text-red-600">
                15+ Books Published
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-1/3">
          <h4 className="font-semibold text-red-600 mb-3">Research Focus</h4>
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
              <a href="#publication-support" className="hover:text-blue-600">
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
  );
};

export default ResearchMenu;
