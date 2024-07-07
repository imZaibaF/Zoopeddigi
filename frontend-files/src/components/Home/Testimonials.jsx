import * as React from "react";
import { FaStar } from "react-icons/fa6";

function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center p-20 bg-black max-md:px-5">
      <div className="flex justify-center items-center px-16 mt-5 w-full font-semibold max-w-[1000px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[570px]">
          <div className="justify-center self-center px-4 py-3 text-lg leading-7 text-white bg-blue-500 rounded-lg">
            Our Client’s Word
          </div>
          <div className="flex flex-col px-20 py-2.5 mt-4 text-4xl leading-10 text-center text-white max-md:px-5 max-md:max-w-full">
            <div className="max-md:max-w-full">Appreciations from our </div>
            <div className="self-center mt-3">satisfied customers.</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-2 mt-12 w-full max-w-[1000px] max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-10 rounded-3xl border border-white border-solid leading-[150%] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 my-auto w-10 aspect-square"
                  />
                  <div className="flex flex-1 gap-0 justify-between">
                    <div className="flex flex-col flex-1 justify-center">
                      <div className="text-xl font-medium text-white">
                        Alex Walker
                      </div>
                      <div className="text-sm text-neutral-100">
                        CEO at neo tech
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 my-auto w-8 aspect-[1.33]"
                    />
                  </div>
                </div>
                <div className="shrink-0 mt-4 h-px bg-sky-400" />
                <div className="mt-4 text-base leading-6 text-white">
                  Fantastic web app! Effortless navigation, powerful <br />
                  features, and reliable performance. A must-have for <br />
                  seamless online experiences. Highly recommended
                </div>
                <div className="mt-4 text-base leading-6 text-white">
                  Exceptional web app! Smooth sailing through features <br />
                  and performance. A reliable companion for seamless <br />
                  online navigation. Highly recommend
                </div>
                <div className="flex gap-0 justify-between mt-4">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="text-sm text-white">Project Type</div>
                    <div className="mt-1.5 text-lg font-medium text-sky-400">
                      SAAS Fintech solution
                    </div>
                  </div>
                  <div className="flex flex-col text-sm font-medium text-amber-300 whitespace-nowrap">
                    <div className="flex gap-1 justify-center px-2 py-0.5 shadow-lg bg-white bg-opacity-10 rounded-[60px]">
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <div>4.8/5</div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="self-center aspect-[4.17] w-[116px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-10 rounded-3xl border border-white border-solid leading-[150%] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 my-auto w-10 aspect-square"
                  />
                  <div className="flex flex-1 gap-0 justify-between">
                    <div className="flex flex-col flex-1 justify-center">
                      <div className="text-xl font-medium text-white">
                        Zaini Farooq
                      </div>
                      <div className="text-sm text-neutral-100">
                        Founder at Frykiki
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 my-auto w-8 aspect-[1.33]"
                    />
                  </div>
                </div>
                <div className="shrink-0 mt-4 h-px bg-sky-400" />
                <div className="mt-4 text-base leading-6 text-white">
                  I had an outstanding experience working with the development
                  team. Their code quality, attention to detail, and
                  problem-solving skills were top-notch. They consistently
                  delivered on time and exceeded my expectations. I highly
                  recommend their services
                </div>
                <div className="flex gap-0 justify-between mt-4">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="text-sm text-white">Project Type</div>
                    <div className="mt-1.5 text-lg font-medium text-sky-400">
                      Web Development
                    </div>
                  </div>
                  <div className="flex flex-col text-sm font-medium text-amber-300 whitespace-nowrap">
                    <div className="flex gap-1 justify-center px-2 py-0.5 shadow-lg bg-white bg-opacity-10 rounded-[60px]">
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <div>4.0/5</div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="self-center aspect-[4.17] w-[116px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full max-w-[924px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-10 rounded-3xl border border-white border-solid leading-[150%] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 my-auto w-10 aspect-square"
                  />
                  <div className="flex flex-1 gap-0 justify-between">
                    <div className="flex flex-col flex-1 justify-center">
                      <div className="text-xl font-medium text-white">
                        Jay Sharma
                      </div>
                      <div className="text-sm text-neutral-100">
                        Senior Designer
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 my-auto w-8 aspect-[1.33]"
                    />
                  </div>
                </div>
                <div className="shrink-0 mt-4 h-px bg-sky-400" />
                <div className="mt-4 text-base leading-6 text-white">
                  Zoopeddigi impressed me with their creativity and user-centric
                  approach. The interfaces they crafted were intuitive and
                  seamlessly functional. Their attention to user needs and
                  aesthetics truly sets them apart. I’m thrilled with the
                  results!
                </div>
                <div className="flex gap-0 justify-between mt-4">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="text-sm text-white">Project Type</div>
                    <div className="mt-1.5 text-lg font-medium text-sky-400">
                      Design
                    </div>
                  </div>
                  <div className="flex flex-col text-sm font-medium text-amber-300 whitespace-nowrap">
                    <div className="flex gap-1 justify-center px-2 py-0.5 shadow-lg bg-white bg-opacity-10 rounded-[60px]">
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <div>4.8/5</div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="self-center aspect-[4.17] w-[116px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-10 rounded-3xl border border-white border-solid leading-[150%] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 my-auto w-10 aspect-square"
                  />
                  <div className="flex flex-1 gap-0 justify-between">
                    <div className="flex flex-col flex-1 justify-center">
                      <div className="text-xl font-medium text-white">
                        Charlotte Smith
                      </div>
                      <div className="text-sm text-neutral-100">
                        AI Engineer
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 my-auto w-8 aspect-[1.33]"
                    />
                  </div>
                </div>
                <div className="shrink-0 mt-4 h-px bg-sky-400" />
                <div className="mt-4 text-base leading-6 text-white">
                  Zoopeddigi demonstrated exceptional expertise in creating
                  intelligent solutions. Their algorithms and models were
                  accurate. From recommendation engines to predictive analytics,
                  they pushed the boundaries of what’s possible.{" "}
                </div>
                <div className="flex gap-0 justify-between mt-4">
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="text-sm text-white">Project Type</div>
                    <div className="mt-1.5 text-lg font-medium text-sky-400">
                      Artificial Intelligence
                    </div>
                  </div>
                  <div className="flex flex-col text-sm font-medium text-amber-300 whitespace-nowrap">
                    <div className="flex gap-1 justify-center px-2 py-0.5 shadow-lg bg-white bg-opacity-10 rounded-[60px]">
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <FaStar className="w-3 h-3 text-yellow-200" />
                      <div>4.8/5</div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="self-center aspect-[4.17] w-[116px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-10 pt-10 pb-4 mt-6 max-w-full rounded-3xl border border-white border-solid leading-[150%] w-[450px] max-md:px-5">
          <div className="flex gap-4">
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 my-auto w-10 aspect-square"
            />
            <div className="flex flex-1 gap-0 justify-between">
              <div className="flex flex-col flex-1 justify-center">
                <div className="text-xl font-medium text-white">Mohammed</div>
                <div className="text-sm text-neutral-100">CEO </div>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 my-auto w-8 aspect-[1.33]"
              />
            </div>
          </div>
          <div className="shrink-0 mt-4 h-px bg-sky-400" />
          <div className="mt-4 text-base leading-6 text-white">
            I’ve had the pleasure of working with Zoopeddigi’s data analytics
            services, and I must say they’ve been exceptional. Their expertise
            spans critical areas such as weight and inspection certificates,
            operational dashboards, and freight tracking systems.
          </div>
          <div className="flex gap-0 justify-between mt-4">
            <div className="flex flex-col flex-1 justify-center">
              <div className="text-sm text-white">Project Type</div>
              <div className="mt-1.5 text-lg font-medium text-sky-400">
                Data Analytics
              </div>
            </div>
            <div className="flex flex-col text-sm font-medium text-amber-300 whitespace-nowrap">
              <div className="flex gap-1 justify-center px-2 py-0.5 shadow-lg bg-white bg-opacity-10 rounded-[60px]">
                <FaStar className="w-3 h-3 text-yellow-200" />
                <FaStar className="w-3 h-3 text-yellow-200" />
                <FaStar className="w-3 h-3 text-yellow-200" />
                <FaStar className="w-3 h-3 text-yellow-200" />
                <FaStar className="w-3 h-3 text-yellow-200" />
                <div>4.8/5</div>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="self-center aspect-[4.17] w-[116px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
