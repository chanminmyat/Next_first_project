import Image from "next/image";
import { features } from "../constants/feature";

const Features = () => {
  return (
    <div className="relative bg-white pt-[65px] flex-col flex items-center">
      {/* max container */}
      <div className="max-container bg-gradient-to-r from-[#FFFFFF] to-[D9D9D9]">
        <div className="flex flex-col items-center">
          <h2 className="caption text-dark-blue text-center">
            Our Unique Features
          </h2>
          <span className="h-0.5 w-12 bg-light-blue flex justify-center mb-8"></span>
        </div>
        {/* blue container */}
        <div className="container bg-gradient-to-b from-[#29ABE2] to-[#0074A2] rounded-[22px] md:pt-[50px] pt-[40px] pb-[25px] px-[40px] flex flex-col items-center">
          {/* four paragraph map from features */}
          <div className="md:grid grid-rows-2 grid-flow-col md:gap-10 gap-0 flex flex-col">
            {features.map((LINK) => (
              <div
                className="features flex lg:flex-row flex-col items-center"
                key={LINK.key}
              >
                <div className="cat__img brightness-[10]">
                  <Image width={100} height={100} src={LINK.img} alt="" />
                </div>
                <div className="text-center lg:text-left">
                  <h5 className="mb-[14px]">
                    <a className="cat__cap" href={LINK.href}>
                      {LINK.title}
                    </a>
                  </h5>
                  <p className="cat__text">{LINK.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute z-10 bottom-0 w-[110%] mb-[-1px] mr-[0px] ml-[-5px]">
        <Image
          width={100}
          height={100}
          className="w-[110%] h-auto"
          src="/assets/img/elements/triangle-dark-blue.svg"
          alt={""}
        />
      </div>
    </div>
  );
};

export default Features;
