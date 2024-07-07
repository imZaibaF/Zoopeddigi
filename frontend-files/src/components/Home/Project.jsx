import * as React from "react";

function Project() {
  return (
    <div className="flex justify-center items-center self-stretch px-16 pt-20 pb-12 bg-black max-md:px-5">
      <div className="pb-12 mt-5 w-full border-b-2 border-solid border-neutral-700 max-w-[1000px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-10 text-white max-md:max-w-full">
                Star your project today
              </div>
              <div className="mt-2.5 text-xl leading-8 text-neutral-100 max-md:max-w-full">
                Zoopeddigi with over years of experiences, the completion of
                multiple projects and impressive growth.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center mt-6 text-lg max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 py-2 pr-2 pl-6 bg-black shadow-sm rounded-[48px] max-md:flex-wrap max-md:pl-5">
                <div className="my-auto text-zinc-300">Enter email address</div>
                <div className="flex-1 px-5 pt-5 pb-5 text-center text-white bg-sky-400 leading-[100%] rounded-[40px]">
                  Get Started Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
