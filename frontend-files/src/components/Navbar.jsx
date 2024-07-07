import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    {
      path: "/ads",
      link: "Ads",
      dropdown: [
        { path: "/ads/awareness", link: "Awareness" },
        { path: "/ads/dynamic", link: "Dynamic" },

        { path: "/ads/facebook", link: "Facebook" },
        { path: "/ads/google", link: "Google" },
        { path: "/ads/instagram", link: "Instagram" },
        { path: "/ads/linkedin", link: "LinkedIn" },
        { path: "/ads/pinterest", link: "Pinterest" },
        { path: "/ads/product", link: "Product" },
        { path: "/ads/video", link: "Video" },
        { path: "/ads/x", link: "X" },
        { path: "/ads/youtube", link: "Youtube" },
      ],
    },
    {
      path: "/data-analytics",
      link: "Data Analytics",
      dropdown: [
        { path: "/data-analytics/ai", link: "AI" },
        { path: "/data-analytics/bussanalytics", link: "Business Analytics" },
        { path: "/data-analytics/data-analytics", link: "Data Analytics" },
        { path: "/data-analytics/datacleaning", link: "Data Cleaning" },
        { path: "/data-analytics/datainsights", link: "Data Insights" },
        { path: "/data-analytics/datalake", link: "Data Lake" },
        { path: "/data-analytics/datapipeline", link: "Data Pipeline" },
        { path: "/data-analytics/data-sources", link: "Data Sources" },
        { path: "/data-analytics/data-strategy", link: "Data Strategy" },
        { path: "/data-analytics/data-warehouse", link: "Data Warehouse" },
        { path: "/data-analytics/management", link: "Management" },
        { path: "/data-analytics/mar-analysis", link: "markeing Analysis" },
        { path: "/data-analytics/mlearning", link: "Machine Learning" },
        { path: "/data-analytics/performance", link: "Performance" },
        { path: "/data-analytics/roi", link: "Roi" },
        { path: "/data-analytics/s-analysis", link: "Analysis" },
        { path: "/data-analytics/visualisation", link: "Visualisation" },
      ],
    },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="fixed bg-white top-0 left-0 right-0 text-black z-50">
      <nav className="px-4 max-w-7xl mx-auto flex justify-between items-center py-4">
        <a href="/" className="text-xl font-bold text-black">
          <span className="text-blue-500">Z</span>OOPEDDIGI
        </a>

        <button onClick={toggleMenu} className="cursor-pointer md:block">
          {isMenuOpen ? (
            <FaXmark className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* modal component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </nav>

      {/* full screen menu */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <FaXmark className="w-6 h-6" />
        </button>
        <ul className="space-y-4 text-left text-3xl">
          {navItems.map(({ link, path, dropdown }) => (
            <li className="text-white" key={path}>
              {dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link)}
                    className="w-full text-left focus:outline-none"
                  >
                    {link}
                  </button>
                  {activeDropdown === link && (
                    <ul className="mt-4 bg-gray-800 rounded-lg flex flex-wrap overflow-auto max-h-60 max-w-full shadow-lg">
                      {dropdown.map(({ link, path }) => (
                        <li key={path} className="py-2 px-8 w-full sm:w-auto">
                          <NavLink
                            to={path}
                            className="block text-white hover:bg-gray-700 active:bg-gray-900 transition-colors duration-200 rounded-md px-4 py-2"
                            onClick={() => {
                              toggleMenu();
                              setActiveDropdown(null);
                            }}
                          >
                            {link}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-white"
                  }
                  onClick={() => {
                    toggleMenu();
                    setActiveDropdown(null);
                  }}
                >
                  {link}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
