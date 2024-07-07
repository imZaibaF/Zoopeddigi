// src/components/LogoCarousel.jsx

import React from "react";
import "tailwindcss/tailwind.css";

const logos = [
  "logo1.png",
  "logo2.png",
  "logo3.png",
  // Add more logos as needed
];

const Company = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex space-x-6">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-24 h-24 object-contain"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-24 h-24 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Company;
