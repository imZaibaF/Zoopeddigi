import * as React from "react";
import {
  TbBrand4Chan,
  TbDeviceDesktopCode,
  TbDeviceDesktopCheck,
  TbDeviceIpadHorizontalCog,
  TbShoppingCartCheck,
} from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { PiUserCircleThin, PiSpeakerHighBold } from "react-icons/pi";

function Offer() {
  return (
    <div className="flex bg-black  flex-col px-5">
      <div className="self-center text-4xl font-black text-center text-white leading-[56px] max-md:max-w-full">
        We Offer
      </div>
      <div className="self-center mt-6 text-base tracking-wide leading-6 text-center text-neutral-200 text-opacity-60 w-[650px] max-md:max-w-full">
        With our expertise in product design, enterprise improvement, UX design,
        and digital advertising, we provide incredible effects and empower your
        emblem for achievement.
      </div>
      <div className="mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch p-5 rounded border border-solid border-slate-400 max-md:mt-8">
              <TbBrand4Chan className="w-14 h-14 text-blue-600" />
              <div className="mt-3 text-3xl font-black leading-9 text-white">
                Branding
              </div>
              <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                Building strong, memorable brand identities that resonate with
                your audience.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch p-5 rounded border border-solid border-slate-400 max-md:mt-8">
              <TbDeviceDesktopCode className="w-14 h-14 text-blue-600" />
              <div className="mt-3 text-3xl font-black leading-9 text-white">
                Web development
              </div>
              <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                Crafting responsive, user-friendly websites to enhance your
                online presence.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 rounded border border-solid border-slate-400 max-md:mt-8">
              <TbDeviceDesktopCheck className="w-14 h-14 text-blue-600" />
              <div className="mt-3 text-3xl font-black leading-9 text-white">
                Digital marketing
              </div>
              <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                Implementing strategies to reach and engage your target audience
                effectively.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 w-full bg-black max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-5 rounded border border-solid border-slate-400 max-md:mt-8">
                <MdDeveloperMode className="w-14 h-14 text-blue-600" />
                <div className="mt-3 text-3xl font-black leading-9 text-white">
                  Mobile App
                </div>
                <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                  Developing high-performance mobile apps for iOS and Android
                  platforms.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-5 rounded border border-solid border-slate-400 max-md:mt-8">
                <TbDeviceIpadHorizontalCog className="w-14 h-14 text-blue-600" />
                <div className="mt-3 text-3xl font-black leading-9 text-white">
                  SEO
                </div>
                <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                  Improving search engine rankings to drive organic traffic and
                  increase conversions.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-5 rounded border border-solid border-slate-400 max-md:mt-8">
                <PiUserCircleThin className="w-14 h-14 text-blue-600" />
                <div className="mt-3 text-3xl font-black leading-9 text-white">
                  User testing
                </div>
                <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                  Conducting thorough user testing to ensure your digital
                  products meet user expectations and deliver optimal
                  experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 w-full bg-black max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-5 rounded border border-solid border-slate-400 max-md:mt-8">
                <TbShoppingCartCheck className="w-14 h-14 text-blue-600" />
                <div className="mt-3 text-3xl font-black leading-9 text-white">
                  E-commerce Solutions
                </div>
                <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                  Developing and optimizing e-commerce platforms to enhance user
                  experience and drive sales.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch px-5 pt-5 rounded border border-solid border-slate-400 max-md:mt-8">
                <div className="flex overflow-hidden relative flex-col pr-5 pb-10 aspect-[1.69]">
                  <PiSpeakerHighBold className="w-14 h-14 text-blue-600" />

                  <div className="relative mt-3 text-3xl font-black leading-9 text-white">
                    Content Marketing
                  </div>
                  <div className="relative mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                    Creating and sharing valuable content to attract and engage
                    your audience.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-5 rounded border border-solid border-slate-400 max-md:mt-8">
                <IoIosPeople className="w-14 h-14 text-blue-600" />
                <div className="mt-3 text-3xl font-black leading-9 text-white">
                  Consulting{" "}
                </div>
                <div className="mt-3 text-sm tracking-wide leading-5 text-white text-opacity-60">
                  Providing expert consulting services to develop effective
                  digital strategies tailored to your business goals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
