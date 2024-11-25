import React from 'react';
import './Placement.css';

import Accenture from '../../assets/Logo/accenture.jpg';
import ADengineersContractors from '../../assets/Logo/adengineerscontractors.png';
import advanta from '../../assets/Logo/advanta.png';
import ais from '../../assets/Logo/ais.jpg';
import amazon from '../../assets/Logo/amazon.jpg';
import amber from '../../assets/Logo/amber.jpg';
import anchor from '../../assets/Logo/anchor.png';
import aptara from '../../assets/Logo/aptara.jpg';
import aptaracorp from '../../assets/Logo/aptaracorp.jpg';
import aryamasoftservices from '../../assets/Logo/aryamasoftservices.jpg';
import aurobindo from '../../assets/Logo/aurobindo.jpg';
import axis from '../../assets/Logo/axis.jpg';
import bajaj from '../../assets/Logo/bajaj.jpg';
import biocon from '../../assets/Logo/biocon.jpg';
import bplogo from '../../assets/Logo/bp-logo.png';
import byju from '../../assets/Logo/byju.jpg';
import capgemini from '../../assets/Logo/capgemini.jpg';
import ceat from '../../assets/Logo/ceat.jpg';
import cipla from '../../assets/Logo/cipla.jpg';
import cs from '../../assets/Logo/cs.png';
import daffodil from '../../assets/Logo/daffodil.jpg';
import dhoot from '../../assets/Logo/dhoot.jpg';
import drreddys from '../../assets/Logo/drreddys.jpg';
import dupoint from '../../assets/Logo/dupoint.jpg';
import epicresearch from '../../assets/Logo/epicresearch.png';
import evertech from '../../assets/Logo/evertech.jpg';
import extramarks from '../../assets/Logo/extramarks.jpg';
import focus from '../../assets/Logo/focus.jpg';
import havels from '../../assets/Logo/havels.jpg';
import hcl from '../../assets/Logo/hcl.jpg';
import hitachi from '../../assets/Logo/hitachi.jpg';
import honeywell from '../../assets/Logo/honeywell.jpg';
import hp from '../../assets/Logo/hp.jpg';
import ibms from '../../assets/Logo/ibms.jpg';
import jaro from '../../assets/Logo/jaro.jpg';
import jd from '../../assets/Logo/jd.png';

const row1Logos = [
  { src: Accenture, alt: 'Accenture' },
  { src: ADengineersContractors, alt: 'AD Engineers Contractors' },
  { src: advanta, alt: 'advanta' },
  { src: ais, alt: 'ais' },
  { src: amazon, alt: 'amazon' },
  { src: anchor, alt: 'anchor' },
  { src: amber, alt: 'amber' },
  { src: aptaracorp, alt: 'aptaracorp' },
  { src: aryamasoftservices, alt: 'aryamasoftservices' },
  { src: aurobindo, alt: 'aurobindo' },
  { src: axis, alt: 'axis' },
  { src: drreddys, alt: "Dr Reddy's" },
  { src: dupoint, alt: 'Dupont' },
  { src: epicresearch, alt: 'Epic Research' },
  { src: evertech, alt: 'Evertech' },
  { src: extramarks, alt: 'Extramarks' },
];

const row2Logos = [
  { src: bajaj, alt: 'bajaj' },
  { src: biocon, alt: 'biocon' },
  { src: bplogo, alt: 'bplogo' },
  { src: byju, alt: 'byju' },
  { src: capgemini, alt: 'capgemini' },
  { src: ceat, alt: 'ceat' },
  { src: cipla, alt: 'cipla' },
  { src: cs, alt: 'cs' },
  { src: daffodil, alt: 'Daffodil' },
  { src: dhoot, alt: 'Dhoot' },
  { src: focus, alt: 'Focus' },
  { src: havels, alt: 'Havels' },
  { src: hcl, alt: 'HCL' },
  { src: hitachi, alt: 'Hitachi' },
  { src: honeywell, alt: 'Honeywell' },
  { src: hp, alt: 'HP' },
  { src: ibms, alt: 'IBMS' },
  { src: jaro, alt: 'Jaro' },
  { src: jd, alt: 'JD' },
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
