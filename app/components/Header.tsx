"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/app/constants/index";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isClick, setisClick] = useState(true);
  const toggleMenu = () => {
    setisClick(!isClick);
  };
  const [isScroll, setisScroll] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <header
      className={isScroll ? "bg-[#0A0A37] sticky top-0 z-30" : "bg-[#0A0A37]"}
    >
      <div className="h-28 flex justify-between items-center w-[92%] mx-auto">
        <div>
          <a className="cursor-pointer" href={"/"}>
            <Image
              src={"/assets/img/dsla_logos/DSLA_Logo_Portal_&_Loading.svg"}
              alt={""}
              width={250}
              height={29}
            />
          </a>
        </div>
        <nav
          className={`lg:static absolute flex-col lg:flex-row lg:bg-transparent bg-[#0A0A37] gap-8 justify-center lg:min-h-fit min-h-[40vh] left-0 ${
            isClick ? "top-[-1000px]" : "top-[100px] t"
          } z-30 lg:w-auto w-full flex px-5`}
        >
          <ul className="flex lg:flex-row flex-col items-center lg:gap-7 gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                className="group hover:text-gray-100 text-light-blue transition-all duration-300 ease-in-out"
                href={link.href}
                key={link.key}
                onClick={toggleMenu}
              >
                <span className="flex gap-1 pb-1 bg-left-bottom bg-gradient-to-r from-gray-100 to-gray-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <Image src={link.icon} alt={"icon"} width={20} height={20} />
                  <li className="font-extrabold">{link.label}</li>
                </span>
              </Link>
            ))}
          </ul>
          <Link
            className="relative border-2 border-gray-100 text-light-blue px-[50px] py-[15px] ml-6 rounded-xl flex items-center justify-center overflow-hidden transition duration-300 ease out group"
            href={"/register"}
            onClick={toggleMenu}
          >
            <span className="absolute flex items-center justify-center w-full h-full text-white font-bold duration-300 -translate-x-full bg-light-blue group-hover:translate-x-0 ease">
              GET STARTED
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-light-blue font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
              JOIN US
            </span>
            <span className="relative invisible">JOIN US</span>
          </Link>
        </nav>
        <button
          className="toggle cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          {isClick ? (
            <IoMenu color="white" size={50} />
          ) : (
            <IoCloseSharp color="white" size={50} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
