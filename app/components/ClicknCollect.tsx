import Link from "next/link";
import { about_cNc } from "../constants/feature";
import Image from "next/image";

const ClicknCollect = () => {
  return (
    <div
      id="clickncollect"
      className="bg-white bg-clip-pt-1 flex-col flex items-center"
    >
      <div className="max-container bg-gradient-to-r from-[#FFFFFF] to-[D9D9D9]">
        <div className="flex flex-col items-center">
          <Image
            width={100}
            height={100}
            className="icon__holder"
            src="/assets/img/elements/dash.svg"
            alt=""
          />
          <Image
            width={100}
            height={100}
            className="about__icon"
            src="/assets/img/icon/click.svg"
            alt={""}
          />
          <h2 className="caption text-dark-blue text-center">
            E-Commerce Solution
          </h2>
          <span className="caption__underline"> </span>
          <p className="text-[#5e5e5e] text-[20px] text-center mb-[40px]">
            Integrated "Click 'n Collect" online solution.
          </p>
        </div>
        <div className="container flex md:flex-row-reverse flex-col gap-3 justify-around items-center">
          <div className="lg:w-[600px] w-[350px]">
            {/* 3 paragraph mapping from index */}
            {about_cNc.map((Link) => (
              <div
                className="pb-[40px] flex lg:flex-row flex-col lg:items-start items-center"
                key={Link.key}
              >
                <div className="cat__img">
                  <Image width={100} height={100} src={Link.img} alt="" />
                </div>
                <div>
                  <h5 className="text-dark-blue md:text-2xl text-lg mb-[14px] font-semibold lg:text-left text-center">
                    {Link.title}
                  </h5>
                  <p className="about__text lg:text-left text-center">
                    {Link.p}
                  </p>
                  <ul className="text-black list-disc ml-[13px] text-[15px]">
                    <li>{Link.li1}</li>
                    <li>{Link.li2}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 flex-col flex items-center">
            <Image
              width={700}
              height={700}
              src="/assets/img/gallery/click-visual.png"
              alt=""
            />
            <Link
              className="bg-light-blue w-[150px] h-[60px] rounded-full text-white font-bold hover:no-underline hover:text-dark-blue flex items-center justify-center"
              href="/features/ecommerce"
            >
              Read More
            </Link>
          </div>
        </div>
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
  );
};

export default ClicknCollect;