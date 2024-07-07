import * as React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Whyus() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-5 w-full max-w-[1020px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://plus.unsplash.com/premium_photo-1661310181347-ddea5f5c3f9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="justify-center self-start px-4 py-3 text-lg font-semibold leading-7 text-white bg-blue-500 rounded-lg">
                Our Benefits
              </div>
              <div className="mt-4 text-4xl font-semibold leading-10 text-black max-md:max-w-full">
                Right reason for why You <br />
                Choose Zoopeddigi
              </div>
              <div className="mt-6 text-xl leading-8 text-zinc-800 max-md:max-w-full">
                Zoopeddigi conducted thorough market research, which <br />
                provided invaluable insights into consumer helped <br />
                shape our marketing strategy.
              </div>
              <div className="pt-8 mt-9 border-t border-solid border-stone-300 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <div className="text-4xl font-semibold leading-10 text-black">
                        30k+
                      </div>
                      <div className="text-lg leading-7 text-stone-900">
                        Worldwide client
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <div className="text-4xl font-semibold leading-10 text-black">
                        5%
                      </div>
                      <div className="text-lg leading-7 text-stone-900">
                        Top talents
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <div className="text-4xl font-semibold leading-10 text-black">
                        8mil
                      </div>
                      <div className="text-lg leading-7 text-stone-900">
                        Doller payout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5 justify-center self-start px-5 py-3 mt-6 text-base font-semibold leading-6 text-white bg-sky-400 rounded-[40px]">
                <div>Learn More</div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
