"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-b from-[#0A0A37] to-[#1D204E] flex-col flex items-center"
    >
      <div className="w-[100%] xl:ml-[400px] md:ml-[150px] flex justify-center md:flex-row flex-col gap-5 sm:px-0 px-5">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="lg:w-[500px] flex flex-col lg:pt-32 lg:pb-[80px] md:items-start md:text-start items-center text-center"
        >
          <div>
            <span className="inline-block text-light-blue text-2xl font-bold">
              Convenience in one click
            </span>
            <h1 className="text-white 2xl:text-[72px] xl:text-[60px] lg:text-[50px] text-[40px] font-extrabold mb-[12px]">
              Every Retailer Tool Suite
            </h1>
            <p className="text-white sm:text-lg text-base mb-[31px]">
              Manage your inventory, ordering, sales, stores, employees,
              customer feedback, and even marketing, all with one single tool.
              <br />
              Get all the analytics you need and use gamification to compete
              with any other retailer in the market.
            </p>
          </div>
          <div className="flex">
            <Link
              className="relative bg-light-blue text-white px-[50px] py-[15px] rounded-full flex items-center justify-center overflow-hidden transition duration-300 ease out group"
              href={"/register"}
            >
              <span className="absolute flex items-center justify-center w-full h-full text-white font-bold duration-300 -translate-x-full bg-light-blue group-hover:translate-x-0 ease">
                GET STARTED
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
                JOIN US
              </span>
              <span className="relative invisible">JOIN US</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:w-[auto] md:w-[1500px] xl:pt-0 lg:pt-20 pt-0"
        >
          <Image
            width={1000}
            height={500}
            src={"/assets/img/hero/pos-illustration-header.png"}
            alt={""}
          />
        </motion.div>
      </div>
      <div className="absolute flex top-0 left-0 lg:visible invisible">
        <Image
          width={300}
          height={300}
          style={{width: "300px"}}
          src="/assets/img/hero/top-left-shape.png"
          alt=""
        />
      </div>
      <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px]">
        <Image
          width={100}
          height={100}
          className="w-[110%] h-auto"
          src="/assets/img/elements/triangle-white.svg"
          alt={""}
        />
      </div>
    </div>
  );
};

export default Hero;
