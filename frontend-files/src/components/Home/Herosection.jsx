import * as React from "react";
import aboutImg from "../../assets/about.png";

function Herosection() {
  return (
    <div className="flex flex-col text-6xl font-semibold max-md:text-4xl">
      <div className="flex flex-col justify-center self-center px-20 py-20 w-full max-w-[1000px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="justify-center px-6 mt-14 text-center text-black leading-[120%] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Innovate Your Digital Future
        </div>
        <div className="justify-center px-10 text-center text-blue-500 leading-[72px] max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          With <span className="text-blue-500">Zoopeddigi</span>
        </div>
        <div className="flex gap-5 justify-center self-center mt-10 mb-7 text-base leading-6">
          <div className="flex flex-col justify-center text-white shadow-sm bg-white bg-opacity-0 rounded-[78px]">
            <button className="justify-center px-6 py-5 bg-sky-400 rounded-[40px] max-md:px-5">
              Get Started{" "}
            </button>
          </div>
          <div className="flex flex-col justify-center px-6 py-5 text-black rounded-[40px]">
            <div className="justify-center px-6 py-5 border border-solid border-stone-300 rounded-[40px] max-md:px-5">
              Learn More
            </div>
          </div>
        </div>
      </div>

      <img
        src={aboutImg}
        alt=""
        className="w-full h-auto max-w-50 max-h-50 object-cover mx-auto lg:max-w-50 lg:max-h-50 lg:px-60 lg:py-50"
      />

      <div className="relative mt-36 w-full bg-black min-h-[56px] max-md:mt-1 max-md:max-w-full overflow-hidden "></div>
    </div>
  );
}

export default Herosection;
