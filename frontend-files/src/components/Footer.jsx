import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-sky-500">Category</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Ads
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Management
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-sky-500">Serices</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Seo
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Optimisation
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Technocal Seo
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-sky-500">
                Web Design
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Graphics
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Logo Design
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    UI/Ux Design
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Motion Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-sky-500">
                Management
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sky-300 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Performance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <span className="text-base font-medium tracking-wide text-sky-500">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-sky-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md border hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-sky-300">
              Share your email id to get regular newsletters
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-sky-800 sm:flex-row">
          <p className="text-sm text-sky-500">
            © Copyright 2020 Zoopeddigi. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-sky-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-sky-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-sky-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
