import React from "react";
import aboutImg from "../assets/about.png";
import User1 from "../assets/user-01.png";
import User2 from "../assets/user-02.png";
import User3 from "../assets/user-03.png";

import { HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <div className="text-white">
      <div className="py-40 bg-black text-center px-4">
        <h1 className="lg:text-7xl text-5xl leading-snug font-bold mb-5">
          About Us
        </h1>
      </div>

      {/* about content */}
      <div className="max-w-7xl mx-auto px-4 my-20 text-black">
        {/* top content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2">
            <img src={aboutImg} alt="" className="w-full" />
          </div>
          <div className="md:w-1/2">
            <h5 className="text-blue-500 text-xl font-medium mb-4">
              Who we are
            </h5>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-darkmb-4 mb-8">
              We provide high quality Articles & blogs
            </h2>
            <p className="text-lg text-gray-600 text-justify">
              Welcome to Zoopeddigi, a major digital advertising and marketing
              enterprise dedicated to riding your commercial enterprise to new
              heights inside the virtual panorama. With our expertise in product
              design, enterprise improvement, UX Design, and digital
              advertising, we provide incredible effects and empower your emblem
              for achievement.
              <br /> <br />
              In the ever-changing virtual world,staying relevant and
              competitive is a challenge. That's why we've assembled a group of
              passionate profeesionals who are professionals in their respective
              fields. With their mixed knowledge and enjoyment, we offer
              comprehensive answers that cope with you precise business desires
              and help you obtain your dreams.
            </p>
          </div>
        </div>

        <div className="md">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-darkmb-4 mb-8">
            Our Approach
          </h2>
          <p className="text-lg text-gray-600 text-justify">
            Welcome to Zoopeddigi, a major digital advertising and marketing
            enterprise dedicated to riding your commercial enterprise to new
            heights inside the virtual panorama. With our expertise in product
            design, enterprise improvement, UX Design, and digital advertising,
            we provide incredible effects and empower your emblem for
            achievement.
            <br /> <br />
            In the ever-changing virtual world,staying relevant and competitive
            is a challenge. That's why we've assembled a group of passionate
            profeesionals who are professionals in their respective fields. With
            their mixed knowledge and enjoyment, we offer comprehensive answers
            that cope with you precise business desires and help you obtain your
            dreams.
          </p>
        </div>

        {/* Author section */}
        <div className="mt-20">
          <h2 className="text-5xl font-bold mb-8 ">Our Partners</h2>
          <hr className="my-5" />

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-between items-center w-full mx-auto gap-12 mt-12">
            <div className="bg-sky-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div className="mx-auto">
                <img src={User1} alt="" className="mb-4 mx-auto" />
              </div>
              <div>
                <h5 className="text-lg font-medium mb-1">Aarif Ahmed</h5>
                <p className="text-base mb-2">Director of Operations</p>
                <div className="flex gap-2 items-center text-gray-600 justify-center"></div>
              </div>
            </div>
            <div className="bg-sky-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div className="mx-auto">
                <img
                  src={User2}
                  alt=""
                  className="mb-4 w-[100px] h-[100px] mx-auto"
                />
              </div>
              <div>
                <h5 className="text-lg font-medium mb-1">Rasheel</h5>
                <p className="text-base mb-2">CEO of</p>
                <div className="flex gap-2 items-center text-gray-600 justify-center"></div>
              </div>
            </div>
            <div className="bg-sky-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div className="mx-auto">
                <img src={User3} alt="" className="mb-4 mx-auto" />
              </div>
              <div>
                <h5 className="text-lg font-medium mb-1">dania</h5>
                <p className="text-base mb-2">Co-Founder</p>
                <div className="flex gap-2 items-center text-gray-600 justify-center"></div>
              </div>
            </div>

            <div className="bg-sky-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div className="mx-auto">
                <img src={User1} alt="" className="mb-4 mx-auto" />
              </div>
              <div>
                <h5 className="text-lg font-medium mb-1">Amul</h5>
                <p className="text-base mb-2">Head of Marketing</p>
                <div className="flex gap-2 items-center text-gray-600 justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
