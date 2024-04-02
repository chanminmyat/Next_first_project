import { analytics } from "@/app/constants/feature";
import Image from "next/image";

export default function feature_Analytics() {
  return (
    <main>
      <div className="relative bg-gradient-to-b from-[#0A0A37] to-[#1D204E] overflow-hidden">
        <div className=" flex lg:flex-row flex-col items-center justify-around">
          <h2 className="w-1/2 text-white lg:mb-[100px] mb-[20px] text-center font-bold sm:text-5xl text-3xl">
            Analytics & Marketing
          </h2>
          <Image
            width={500}
            height={500}
            style={{width:"auto"}}
            className="z-10"
            src="/assets/img/gallery/analytics-visual.png"
            alt=""
          />
        </div>
        <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px] lg:mt-[-200px] md:mt-[-100px] mt-[-50px]">
          <Image
            width={100}
            height={100}
            className="w-[110%] h-auto"
            src="/assets/img/elements/triangle-white.svg"
            alt={""}
          />
        </div>
        <div className="bg-white flex-col flex items-center">
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="icon__holder"
              src="/assets/img/elements/dash.svg"
              alt=""
            />
            <p className="text-dark-blue text-[20px] text-center mb-[40px]">
              Get all the data your need on
              <span className="text-[#29ACE3]"> real-time.</span>
            </p>
          </div>
          <div className="container md:grid grid-cols-3 gap-4 flex-col lg:px-[100px] md:px-[50px] px-2">
            {analytics.map((LINK) => (
              <div className="flex-col flex items-center" key={LINK.key}>
                <div className="w-[100%] max-w-[100px] min-w-[40px] max-h-[90px] lg:mx-[30px] mx-0 lg:mb-0 mb-2">
                  <Image width={100} height={100} src={LINK.img} alt="" />
                </div>
                <div>
                  <p className="text-dark-blue text-base font-bold text-center">
                    {LINK.title}
                  </p>
                  <p className="text-base text-[#5e5e5e] text-center">
                    {LINK.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px]">
            <Image
              width={100}
              height={100}
              className="w-[110%] h-auto"
              src="/assets/img/elements/triangle-dark-blue.svg"
              alt={""}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
