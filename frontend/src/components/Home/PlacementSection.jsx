import React from 'react';
import '../styles/Placement.css';

const row1Logos = [
  { src: '/assets/Logo/accenture.jpg', alt: 'Accenture' },
  { src: '/assets/Logo/adengineerscontractors.png', alt: 'AD Engineers Contractors' },
  { src: '/assets/Logo/advanta.png', alt: 'advanta' },
  { src: '/assets/Logo/ais.jpg', alt: 'ais' },
  { src: '/assets/Logo/amazon.jpg', alt: 'amazon' },
  { src: '/assets/Logo/anchor.png', alt: 'anchor' },
  { src: '/assets/Logo/amber.jpg', alt: 'amber' },
  { src: '/assets/Logo/aptaracorp.jpg', alt: 'aptaracorp' },
  { src: '/assets/Logo/aryamasoftservices.jpg', alt: 'aryamasoftservices' },
  { src: '/assets/Logo/aurobindo.jpg', alt: 'aurobindo' },
  { src: '/assets/Logo/axis.jpg', alt: 'axis' },
  { src: '/assets/Logo/drreddys.jpg', alt: "Dr Reddy's" },
  { src: '/assets/Logo/dupoint.jpg', alt: 'Dupont' },
  { src: '/assets/Logo/epicresearch.png', alt: 'Epic Research' },
  { src: '/assets/Logo/evertech.jpg', alt: 'Evertech' },
  { src: '/assets/Logo/extramarks.jpg', alt: 'Extramarks' },
];

const row2Logos = [
  { src: '/assets/Logo/bajaj.jpg', alt: 'bajaj' },
  { src: '/assets/Logo/biocon.jpg', alt: 'biocon' },
  { src: '/assets/Logo/bp-logo.png', alt: 'bplogo' },
  { src: '/assets/Logo/byju.jpg', alt: 'byju' },
  { src: '/assets/Logo/capgemini.jpg', alt: 'capgemini' },
  { src: '/assets/Logo/ceat.jpg', alt: 'ceat' },
  { src: '/assets/Logo/cipla.jpg', alt: 'cipla' },
  { src: '/assets/Logo/cs.png', alt: 'cs' },
  { src: '/assets/Logo/daffodil.jpg', alt: 'Daffodil' },
  { src: '/assets/Logo/dhoot.jpg', alt: 'Dhoot' },
  { src: '/assets/Logo/focus.jpg', alt: 'Focus' },
  { src: '/assets/Logo/havels.jpg', alt: 'Havels' },
  { src: '/assets/Logo/hcl.jpg', alt: 'HCL' },
  { src: '/assets/Logo/hitachi.jpg', alt: 'Hitachi' },
  { src: '/assets/Logo/honeywell.jpg', alt: 'Honeywell' },
  { src: '/assets/Logo/hp.jpg', alt: 'HP' },
  { src: '/assets/Logo/ibms.jpg', alt: 'IBMS' },
  { src: '/assets/Logo/jaro.jpg', alt: 'Jaro' },
  { src: '/assets/Logo/jd.png', alt: 'JD' },
];

const PlacementSection = () => {
  return (
    <div className="bg-gray-100 py-6 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-4xl text-[#98012e] py-2 font-bold mb-4">Our Recruiters</h2>

      {/* Row 1 moving left to right */}
      <div className="animate-marquee-left">
        <div className="flex space-x-10">
          {row1Logos.concat(row1Logos).map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="w-22 h-20" />
          ))}
        </div>
      </div>

      {/* Row 2 moving right to left */}
      <div className="animate-marquee-right mt-6">
        <div className="flex space-x-10">
          {row2Logos.concat(row2Logos).map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="w-22 h-20" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementSection;
