import * as React from "react";
import { TbReportSearch, TbCalendarTime } from "react-icons/tb";
import { GoPeople } from "react-icons/go";

function ClientWord() {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-16 bg-black max-md:px-5">
      <div className="justify-center px-4 py-3 text-lg font-semibold leading-7 text-white bg-blue-500 rounded-lg">
        Our Client’s Word
      </div>
      <div className="flex justify-center items-center px-16 mt-6 w-full text-4xl font-semibold leading-10 text-center text-white max-w-[1000px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-5 pt-2.5 max-md:max-w-full">
          <div className="max-md:max-w-full">
            Top-Ranked Marketing Agency for{" "}
          </div>
          <div className="self-center mt-2.5 max-md:max-w-full">
            Effective Online Marketing
          </div>
        </div>
      </div>
      <div className="justify-between mt-16 w-full max-w-[1000px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch px-2 leading-[150%]">
              <TbReportSearch className="w-14 h-14 text-blue-600" />
              <div className="mt-8 text-xl font-semibold text-white">
                Perfect Analysis
              </div>
              <div className="flex flex-col justify-center self-stretch px-4 py-1.5 mt-4 text-lg text-center text-zinc-400">
                <div>Perfect analysis allows to gain a deep </div>
                <div className="self-center mt-2.5">
                  understanding of market.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch px-2 leading-[150%]">
              <GoPeople className="w-14 h-14 text-blue-600" />
              <div className="mt-8 text-xl font-semibold text-white">
                Expert Team Member
              </div>
              <div className="flex flex-col justify-center self-stretch px-6 py-1.5 mt-4 text-lg text-center text-zinc-400 max-md:pl-5">
                <div>An expert team typically possesses </div>
                <div className="mt-2.5">extensive insights and networks.</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch px-1.5">
              <div className="flex justify-center items-center p-3 rounded-lg w-[60px]">
                <TbCalendarTime className="w-14 h-14 text-blue-600" />
              </div>
              <div className="mt-8 text-xl font-semibold leading-8 text-white">
                Time Management
              </div>
              <div className="flex flex-col justify-center self-stretch py-2 pr-1 pl-2 mt-4 text-lg leading-7 text-center text-zinc-400">
                <div>Time management enables the agency </div>
                <div className="self-center mt-2.5">
                  to streamline workflows.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientWord;
