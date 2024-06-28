"use client";

import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
const menu = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "What is GPT3?",
    link: "#wgpt3",
  },
  {
    title: "Open AI",
    link: "#openai",
  },
  {
    title: "Case Studies",
    link: "#casestudies",
  },
  {
    title: "Library",
    link: "#library",
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center px-[2rem] py-[2rem] text-white font-[500] text-[18px] leading-[25px] capitalize my-[0] cursor-pointer">
      <div className="flex flex-1 justify-between items-center">
        <div className="mr-[2rem]">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={63}
            height={17}
            className="cursor-pointer"
          />
        </div>
        <div className="hidden lg:flex gap-10">
          {/* menu */}
          {menu.map((item, index) => (
            <Link href={item.link} key={item.title} className="">
              {item.title}
            </Link>
          ))}
        </div>

        <div className=" hidden lg:flex justify-end items-center gap-4">
          <p>Sign in</p>
          <button
            className="py-2 px-4 text-white bg-[#FF4820] rounded-[5px] leading-[25px] font-[500] text-[18px] cursor-pointer border-none outline-none "
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden ml-[1rem] relative">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="flex justify-end items-end flex-col gap-10 text-end bg-[#031B34] p-[2rem] absolute right-[0px] top-[40px] mt-[1rem]  min-w-[210px] rounded-[5px] shadow-lg scale-up-center">
            <div className="flex flex-col w-full gap-6">
              {menu.map((item, index) => (
                <Link href={item.link} key={item.title} className="">
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p>Sign in</p>
              <button
                className="py-2 px-4 text-white bg-[#FF4820] rounded-[5px] leading-[25px] font-[500] text-[18px] cursor-pointer border-none outline-none "
                type="button"
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
