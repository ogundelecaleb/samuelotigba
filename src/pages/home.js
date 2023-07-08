import React from "react";
import {AiOutlineArrowDown} from "react-icons/ai"

const Home = () => {
  const currTime = new Date().toLocaleTimeString();
  return (
    <div>
      <section className="bgImage relative  h-[900px] bg-no-repeat bg-cover sm:bg-center py-[24px] px-[16px]  md:py-[32px] md:px-[48px]">
        <div className="w-full h-full top-0 left-0 absolute bg-[#000000] bg-opacity-[33%] z-10"></div>
        <div className="flex items-center justify-between">
          <div cl>
            {" "}
            <h2 className="text-xl font-extrabold text-[#fff] ">
              Samuel <br /> Otigba.{" "}
            </h2>
          </div>

          <div className="hidden md:block">
            <p className="text-white">{currTime}</p>
          </div>

          <button className="px-3 py-2 rounded-xl border-white border text-[14px] text-white">
            CONTACT ME
          </button>
        </div>

        <div className="mt-[617px] md:mt-[325px] md:w-[50%] lg:w-[40%]">
          <p className="text-white md:text-[24px]  ">
            Hi! 👋 <br/>I am Samuel Otigba, a daily Product Growth and Marketing
            Specialist and also a Product/ Industrial designer every other
            night. I am a visionary(Sam calls me that LOL) who currently lives
            in Lagos, Nigeria.
          </p>
        </div>

        <div className="text-white absolute font-bold cursor-pointer flex gap-1 items-center bottom-[24px] left-[16px]  md:bottom-[32px] md:left-[48px]"><p>scroll down</p> <AiOutlineArrowDown className="animate-bounce " /></div>
      </section>
    </div>
  );
};

export default Home;
