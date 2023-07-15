/* eslint-disable */
import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const Home = () => {
  const currTime = new Date().toLocaleTimeString();
  const [rotate1, setRotate1] = useState(false)
  const [rotate2, setRotate2] = useState(false)

// const handleRotate1 () {

// }

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

          <button  className="px-3 py-2 z-20 rounded-xl border-white border text-[14px] text-white transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom">
            CONTACT ME
          </button>
        </div>

        <div className="mt-[100%] md:mt-[325px] md:w-[50%] lg:w-[40%]">
          <p className="text-white md:text-[24px]  ">
            Hi! 👋 <br />I am Samuel Otigba, a daily Product Growth and
            Marketing Specialist and also a Product/ Industrial designer every
            other night. I am a visionary(Sam calls me that LOL) who currently
            lives in Lagos, Nigeria.
          </p>
        </div>

        <div className="text-white absolute font-bold cursor-pointer flex gap-1 items-center bottom-[24px] left-[16px]  md:bottom-[32px] md:left-[48px]">
          <p>scroll down</p> <AiOutlineArrowDown className="animate-bounce " />
        </div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <h3 className="text-[40px] md:text-[70px] font-extrabold">//About</h3>

        <ul className="flex justify-center flex-col  md:max-w-[80%]  text-[18px] md:text-[30px] lg:text-[48px] mx-auto">
          <li className="flex items-center tracking-wide ">
            {" "}
            I &nbsp;
            <svg
            onClick={()=> setRotate1(!rotate1)}
              className={`h-[18px] w-[18px] md:h-[30px] md:w-[30px]   lg:h-[48px] lg:w-[48px]  cursor-pointer  duration-700 ${rotate1 ? "rotate-90" : ""} `}
              // width="20"
              // height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 24C44 35.04 35.04 44 24 44C12.96 44 6.22 32.88 6.22 32.88M6.22 32.88H15.26M6.22 32.88V42.88M4 24C4 12.96 12.88 4 24 4C37.34 4 44 15.12 44 15.12M44 15.12V5.12M44 15.12H35.12"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            &nbsp; {rotate1 ? "am currently living in Lagos, NG": "lived in Manchester, UK"} {" "}
          </li>
          <li className="tracking-wide">
            {" "}
            <p> I am a sophisticated lover of all things beautiful. </p>
          </li>
          <li className="tracking-wide">
            I enjoy cooking. Oh hey! Check out <a href="www.google.com" target= "blank"  className="underline">Blvck Apron</a> 
          </li>
          <li className="tracking-wide">
            I constantly challenge myself to create unique and engaging
            contents.
          </li>

          <li className="flex items-center tracking-wide">
            {" "}
            I &nbsp;
            <svg
             onClick={()=> setRotate2(!rotate2)}
             className={`h-[18px] w-[18px] md:h-[30px] md:w-[30px]   lg:h-[48px] lg:w-[48px]  cursor-pointer  duration-700 ${rotate2 ? "rotate-90" : ""} `}
              // width="20"
              // height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 24C44 35.04 35.04 44 24 44C12.96 44 6.22 32.88 6.22 32.88M6.22 32.88H15.26M6.22 32.88V42.88M4 24C4 12.96 12.88 4 24 4C37.34 4 44 15.12 44 15.12M44 15.12V5.12M44 15.12H35.12"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            &nbsp; {rotate2 ? "am obsessed with Marvel comics": "watch a lot of movies."}  {" "}
          </li>
          <li className="tracking-wide">I love teaching digital designs</li>
        </ul>

        <div className="flex md:justify-end justify-start mt-[64px]">
          {" "}
          <p className="md:text-[24px] text-[16px] max-w-[548px]">
            I am also a digital philanthropist who enjoys giving out with job
            opportunities.
          </p>
        </div>
      </section>
     
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className="mb-[24px] md:mb-[80px]">
     
          <h2 className="text-[40px] md:text-[70px] font-bold ">
          
            //Selected Works
          </h2>
        </div>

        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px]flex justify-between items-center">
          <div className="text-[#BABABA] flex flex-col ">
            <h2 className="md:text-[64px] text-[24px]">AFRILEISURE COLLECTION</h2>{" "}
            <button className="px-2 py-2 border rounded-lg border-white max-w-[120px]">
              expand
            </button>
          </div>
          <div className="text-right text-[#BABABA] text-[12px] md:text-[24px]">
            <p>CLIENT:</p>
            <p>AFA SPORTS</p>
          </div>
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] flex justify-between items-center">
          <div className="text-[#BABABA] flex flex-col ">
            <h2 className="md:text-[64px] text-[24px]">AFRILEISURE LOGO</h2>{" "}
            <button className="px-2 py-2 border rounded-lg border-white max-w-[120px]">
              expand
            </button>
          </div>
          <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
            <p>CLIENT:</p>
            <p>AFA SPORTS</p>
          </div>
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] flex justify-between items-center">
          <div className="text-[#BABABA] flex flex-col ">
            <h2 className="md:text-[64px] text-[24px] ">OLYMPICS NIGERIA BASKETBALL 2021</h2>{" "}
            <button className="px-2 py-2 border rounded-lg border-white max-w-[120px]">
              expand
            </button>
          </div>
          <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
            <p>CLIENT:</p>
            <p>AFA SPORTS</p>
          </div>
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] flex justify-between items-center">
          <div className="text-[#BABABA] flex flex-col ">
            <h2 className="md:text-[64px] text-[24px] ">DJ OBI ILLUSTRATION</h2>{" "}
            <button className="px-2 py-2 border rounded-lg border-white max-w-[120px]">
              expand
            </button>
          </div>
          <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
            <p>CLIENT:</p>
            <p>Obi Ajounuma</p>
          </div>
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] flex justify-between items-center">
          <div className="text-[#BABABA] flex flex-col ">
            <h2 className="md:text-[64px] text-[24px]">WACOM STYLUS PEN</h2>{" "}
            <button className="px-2 py-2 border rounded-lg border-white max-w-[120px]">
              expand
            </button>
          </div>
          <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
            <p>CLIENT:</p>
            <p>Wacom</p>
          </div>
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] flex justify-between items-center">
          <div className="text-[#BABABA] flex flex-col ">
            <h2 className="md:text-[64px] text-[24px] ">LYNXXX ILLUSTRATION</h2>{" "}
            <button className="px-2 py-2 border rounded-lg border-white max-w-[120px]">
              expand
            </button>
          </div>
          <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
            <p>CLIENT:</p>
            <p>Chukie Edozien(Lynxxx)</p>
          </div>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className=" mb-[24px] md:mb-[80px]">
          <h2 className="text-[40px] md:text-[70px] font-bold ">
            //MY JOURNEY
          </h2>
        </div>

        <div>
          <p className=" text-[18px] md:text-[48px] text-white">
            Here is where I get to be quite serious. <br /> I’ve gone through
            quite a number of phases in my career life, and each of them has
            shaped my current work ethos and philosophy. <br /> I have excelled
            in a number of project management roles in diverse industries, and
            believe that my number one asset is my ability to adapt to any
            challenge that is thrown my way.
          </p>

          {/* places worked */}
          <div className="mt-[40px]">
            <div className="flex flex-row justify-between">
              {" "}
              <div className="flex flex-col">
                <p className="text-[18px] md:text-[24px]">BEZI</p> <p className=" italic text-[18px] md:text-[24px]">Chief Growth Officer</p>{" "}
                <p className="md:text-[20px] text-[14px]">Jan ‘23 - Present</p>
              </div>
              <div>
                <button className="border border-white p-2 rounded-xl max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
                  MORE
                </button>
              </div>{" "}
            </div>

            <div className="flex flex-row justify-between mt-[32px]">
              {" "}
              <div className="flex flex-col">
                <p className="text-[18px] md:text-[24px]">Sabee, NPE Meta</p>{" "}
                <p className=" italic text-[18px] md:text-[24px]">
                  Product Marketing Manager (Contractual Worker)
                </p>{" "}
                <p className="text-[20px]">May ‘23 - Nov '22</p>
              </div>
              <div>
                <button className="border border-white p-2 rounded-xl max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
                  MORE 
                </button>
              </div>{" "}
            </div>
            <div className="flex flex-row justify-between mt-[32px]">
              {" "}
              <div className="flex flex-col">
                <p className="text-[18px] md:text-[24px]">AVANTEFLY</p>{" "}
                <p className=" italic text-[18px] md:text-[24px]">Chief Product Information Officer</p>{" "}
                <p className="text-[20px]">Since March 2021</p>
              </div>
              <div>
                <button className="border border-white p-2 rounded-xl max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
                  MORE
                </button>
              </div>{" "}
            </div>
            <div className="flex flex-row justify-between mt-[32px]">
              {" "}
              <div className="flex flex-col">
                <p className="text-[18px] md:text-[24px]">Smart Edge</p>{" "}
                <p className=" italic text-[18px] md:text-[24px]">
                  Senior Partner (Client Development)/Business Consultant)
                </p>{" "}
                <p className="text-[20px]">Oct '19 - Jan '21</p>
              </div>
              <div>
                <button className="border border-white p-2 rounded-xl max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
                  MORE 
                </button>
              </div>{" "}
            </div>
            <div className="flex flex-row justify-between mt-[32px]">
              {" "}
              <div className="flex flex-col">
                <p className="text-[18px] md:text-[24px]">CAX Africa</p>{" "}
                <p className=" italic text-[18px] md:text-[24px]">
                  Head Digital Communications/Digital Marketing Consultant
                </p>{" "}
                <p className="text-[20px]">Nov '19 - Jan '20</p>
              </div>
              <div>
                <button className="border border-white p-2 rounded-xl max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
                  MORE 
                </button>
              </div>{" "}
            </div>
            <button className="px-3 py-2 text-center text-[12px] md:text-[18px] border rounded-[20px] border-white max-w-[150px] mt-[32px]">
              VIEW RESUME
            </button>
          </div>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className="md:min-h-[586px] relative  text-white bg-[#111111] ">
        <div className="absolute top-0 left-0 right-0" ><img src="/contribution.png" alt="contribution" className="md:h-[586px] h- w-[100%] object-contain"/></div>
        <div className="md:h-[586px] flex justify-center h-full items-center py-auto">  <h2 className="text-[40px] md:text-[70px] font-bold text-[#BABABA]">//CONTRIBUTION</h2></div></div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div><h2 className="text-[40px] md:text-[70px] font-bold text-center text-[#BABABA]">//AWARDS</h2></div>
      <Marquee pauseOnHover={true}  className="mb-5"><p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM UAE .</p></Marquee>
      <Marquee pauseOnHover={true} direction="right"><p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM UAE .</p></Marquee>
      </section>
    </div>
  );
};

export default Home;
