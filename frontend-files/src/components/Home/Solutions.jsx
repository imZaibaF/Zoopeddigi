import * as React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa6";

import { BsClockHistory } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import aboutImg from "../../assets/about.png";

function Solutions() {
  return (
    <div className="flex bg-black flex-col justify-center">
      <div className="justify-center self-center px-4 py-3 text-lg font-semibold leading-7 text-white bg-blue-500 rounded-lg">
        About Us
      </div>
      <div className="justify-center items-center px-16 mt-2.5 w-full text-4xl font-semibold leading-10 text-center text-white max-md:px-5 max-md:max-w-full">
        Result driven marketing solution
      </div>
      <div className="flex flex-col p-10 mt-12 w-full rounded-3xl bg-stone-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-4 max-md:flex-wrap">
          <div className="flex flex-col justify-center self-start">
            <div className="text-4xl font-semibold leading-10 text-white">
              250+
            </div>
            <div className="text-lg leading-7 text-white text-opacity-80">
              Experienced It Experts
            </div>
          </div>
          <div className="flex flex-col justify-center max-md:max-w-full">
            <div className="text-2xl font-semibold tracking-tight leading-8 text-white max-md:max-w-full">
              24/7 consultation & support
            </div>
            <div className="mt-4 text-base leading-6 text-neutral-100 text-opacity-50 max-md:max-w-full">
              {" "}
              Our agency delivered expert guidance and streamlined the process,
              leaving them confident in their successful implementation and
              achieving client satisfaction.
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 self-start px-4 py-3 mt-10 text-base font-semibold leading-6 text-sky-400 border border-sky-400 border-solid rounded-[58px]">
          <div>Get Started </div>
          <FaArrowRight />
        </div>
      </div>
      <div className="flex-wrap justify-center content-start mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-10 w-full rounded-3xl bg-stone-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-10 text-white">
                98%
              </div>
              <div className="mt-4 text-lg leading-7 text-white text-opacity-80">
                Client Satisfaction
              </div>
              <div className="mt-6 text-base leading-6 text-white text-opacity-50">
                Zoopeddigi excels in delivering expert guidance and unwavering
                support, ensuring outstanding client satisfaction
              </div>
              <FaStar className="w-14 h-14 text-yellow-300" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-10 w-full text-base font-semibold text-blue-500 rounded-3xl bg-stone-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="text-2xl tracking-tight leading-9 text-white">
                Your all-in-one, integrated CRM <br />
                platform designed for success.
              </div>
              <div className="mt-4 leading-6 text-white text-opacity-50">
                Our agency takes a collaborative approach, working to <br />
                closely with you to understand your business objectives .
              </div>
              <div className="mt-4 text-4xl leading-10">A+ Rating</div>
              <div className="mt-2.5 leading-[150%]">
                Avg rating 4.8 makes us world best Software
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-9 py-6 mt-6 w-full rounded-3xl bg-stone-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center font-semibold text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col border-r border-dashed border-white border-opacity-40 max-md:max-w-full">
                <BsClockHistory className="w-14 h-14 text-blue-600" />
                <div className="self-start mt-2.5 text-4xl leading-10">
                  24/7
                </div>
                <div className="mt-4 text-xl leading-8 max-md:max-w-full">
                  Consultation & Support
                </div>
                <div className="mt-2.5 text-base leading-6 text-white text-opacity-50 max-md:max-w-full">
                  Our agency provides expert guidance and reliable assistance,
                  ensuring seamless project execution and client satisfaction.
                  We impressed with our personalized approach, timely responses,
                  and commitment to delivering exceptional results.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-semibold text-white max-md:mt-10 max-md:max-w-full">
              <FaRegThumbsUp className="w-14 h-14 text-blue-600" />
              <div className="self-start mt-2.5 text-4xl leading-10">100%</div>
              <div className="mt-4 text-xl leading-8 max-md:max-w-full">
                Scalability
              </div>
              <div className="mt-2.5 text-base leading-6 text-white text-opacity-50 max-md:max-w-full">
                Zoopeddigi excels in providing expert guidance and reliable
                support, fostering strong client relationships and high
                satisfaction.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-5 w-full max-w-[821px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-6 pr-8 pl-10 w-full text-2xl font-semibold tracking-tight leading-8 text-white rounded-3xl bg-stone-900 max-md:px-5 max-md:mt-5">
              <div>Our work areas:</div>
              <img
                loading="lazy"
                srcSet="..."
                className="self-center mt-48 max-w-full aspect-[3.7] w-[119px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center pt-10 pr-8 pb-20 pl-10 mx-auto w-full rounded-3xl bg-stone-900 max-md:px-5 max-md:mt-5">
              <div className="text-2xl font-semibold tracking-tight leading-8 text-white">
                Reviewed on :
              </div>
              <img
                src="..."
                className="self-center mt-6 aspect-[5.56] w-[330px]"
              />
              <div className="flex gap-2.5 justify-center px-5 py-2 mt-5 shadow-lg bg-white bg-opacity-10 rounded-[60px] max-md:px-5">
                <div className="flex gap-0.5 justify-center my-auto">
                  <FaStar className="w-3 h-3 text-yellow-200" />
                  <FaStar className="w-3 h-3 text-yellow-200" />
                  <FaStar className="w-3 h-3 text-yellow-200" />
                  <FaStar className="w-3 h-3 text-yellow-200" />

                  {/* <img
                    loading="lazy"
                    src="..."
                    className="shrink-0 w-4 aspect-square"
                  /> */}
                </div>
                <div className="text-sm font-medium leading-5 text-white">
                  4.8/5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
