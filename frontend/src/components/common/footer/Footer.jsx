import React from "react";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-footer text-black p-8">
      <div className="container mx-auto text-center">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Quick Links */}
          <div className="lg:w-1/4 text-left">
            <h2 className="text-xl font-semibold text-BLACK">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-BLACK">
              <li>
                <a href="#" className="hover:underline">
                  Apply Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Campus Virtual Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  GRC
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Committee Member
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mechanism of GRC
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Satisfaction Survey
                </a>
              </li>
            </ul>
          </div>

          {/* Other Quick Links */}
          <div className="lg:w-1/4 text-left">
            <h2 className="text-xl font-semibold text-BLACK">
              Other Quick Links
            </h2>
            <ul className="mt-4 space-y-2 text-BLACK">
              <li>
                <a href="#" className="hover:underline">
                  Affiliation & Approvals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Admission Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Clubs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers Form
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  General Grievance Redressal Committee
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Alumni Association
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  NIRF
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  NAAC
                </a>
              </li>
            </ul>
          </div>

          {/* Courses Offered */}
          <div className="lg:w-1/4 text-left">
            <h2 className="text-xl font-semibold text-BLACK">
              Courses Offered
            </h2>
            <ul className="mt-2  text-BLACK">
              <li>B.Tech CE</li>
              <li>B.Tech CSE</li>
              <li>B.Tech CSE (AIML)</li>
              <li>B.Tech CSE (Data Science)</li>
              <li>B.Tech ME</li>
              <li>B.Tech ECE</li>
              <li>BCA</li>
              <li>BBA</li>
              <li>B-Pharm</li>
              <li>D-Pharm</li>
              <li>Polytechnic – CSE</li>
              <li>BSc (Hons) Agriculture</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:w-1/4 text-left">
            <h2 className="text-xl font-semibold text-BLACK">Contact Us</h2>
            <p className="mt-4 text-BLACK">
              Shimla Bypass Rd, Shiniwala, P.O, Sherpur,
              <br />
              Dehradun, Uttarakhand 248197
            </p>
            <p className="mt-4 text-BLACK">
              Tel: 0135 2693401, 0135 2693402
              <br />
              Fax: 0135 2693425
              <br />
              Email: info@shivalikcollege.edu.in
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440771.6428646318!2d77.30972806562498!3d30.33592770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2a7095b0a67b%3A0xc2f54efbde26299!2sShivalik%20College%2C%20Dehradun!5e0!3m2!1sen!2sus!4v1730798112663!5m2!1sen!2sus"
                width="100"
                height="50"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-auto"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* Centered College Info */}
        <div className="text-center">
          <img
            src='/assets/Logoshivalik.png'
            alt="Shivalik College Logo"
            style={{ width: "25rem", height: "auto" }}
            className="mx-auto"
          />

          <p className="mt-4 w-4/5 mx-auto text-darkBlue">
            The Shivalik College strives to be a vital community for academics,
            students, staff, alumni, and researchers, working together in a
            symbiotic spirit of cooperation, innovation, and enterprise for a
            better world.
          </p>

          {/* Social Media Links */}
          <div className="mt-4 flex justify-center space-x-6 text-darkBlue">
            <a
              href="#facebook"
              className="flex items-center gap-1 hover:text-yellow-500"
            >
              <FaFacebook size={25} style={{ color: "#98012e" }} />
            </a>
            <a
              href="#linkedin"
              className="flex items-center gap-1 hover:text-yellow-500"
            >
              <FaLinkedin size={25} style={{ color: "#98012e" }} />
            </a>
            <a
              href="#instagram"
              className="flex items-center gap-1 br-red hover:text-yellow-500"
            >
              <FaInstagram size={25} style={{ color: "#98012e" }} />
            </a>
            <a
              href="#youtube"
              className="flex items-center gap-1 hover:text-red-500"
            >
              <FaYoutube size={25} style={{ color: "#98012e" }} />
             
            </a>
          </div>
          <div className="flex gap-4 text-gray-600 items-center"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
