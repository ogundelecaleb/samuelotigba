/* eslint-disable */
import React, { useRef, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";

const Home = () => {
  const currTime = new Date().toLocaleTimeString();
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);
  const [expand6, setExpand6] = useState(false);
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);
  const [more4, setMore4] = useState(false);
  const [more5, setMore5] = useState(false);

  const bottomEl = useRef(null);
  const topEl = useRef(null);

  const scrollToBottom = (e) => {
    e.preventDefault();
    bottomEl?.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    topEl?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleRotate1 () {

  // }

  return (
    <div>
      <section
        id="hero"
        className="bgImage relative  h-[900px] bg-no-repeat bg-cover sm:bg-center py-[24px] px-[16px]  md:py-[32px] md:px-[48px]"
      >
        <div className="w-full h-full top-0 left-0 absolute bg-[#000000] bg-opacity-[33%] z-10"></div>
        <div className="flex items-center justify-between">
          <div>
            {" "}
            <h2 className="text-xl font-extrabold text-[#fff] ">
              Samuel <br /> Otigba.{" "}
            </h2>
          </div>

          <div className="hidden md:block">
            <p className="text-white">{currTime}</p>
          </div>

          <button className="px-3 py-2 z-20 rounded-xl border-white border text-[14px] text-white transition-all duration-700 bg-gradient-to-br to-white via-black from-[#111111] bg-size-200 hover:bg-right-bottom">
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

        <button
          onClick={scrollToBottom}
          className="text-white absolute font-bold cursor-pointer flex gap-1 items-center bottom-[24px] left-[16px]  md:bottom-[32px] md:left-[48px]"
        >
          <p>scroll down</p> <AiOutlineArrowDown className="animate-bounce " />
        </button>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <h3 className="text-[40px] md:text-[70px] font-extrabold">//About</h3>

        <ul className="flex justify-center flex-col  md:max-w-[80%]  text-[18px] md:text-[30px] lg:text-[48px] mx-auto">
          <li className="flex items-center tracking-wide ">
            {" "}
            I &nbsp;
            <svg
              onClick={() => setRotate1(!rotate1)}
              className={`h-[18px] w-[18px] md:h-[30px] md:w-[30px]   lg:h-[48px] lg:w-[48px]  cursor-pointer  duration-700 ${
                rotate1 ? "rotate-90" : ""
              } `}
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
            &nbsp;{" "}
            {rotate1
              ? "am currently living in Lagos, NG"
              : "lived in Manchester, UK"}{" "}
          </li>
          <li className="tracking-wide">
            {" "}
            <p> I am a sophisticated lover of all things beautiful. </p>
          </li>
          <li className="tracking-wide">
            I enjoy cooking. Oh hey! Check out{" "}
            <a href="www.google.com" target="blank" className="underline">
              Blvck Apron
            </a>
          </li>
          <li className="tracking-wide">
            I constantly challenge myself to create unique and engaging
            contents.
          </li>

          <li className="flex items-center tracking-wide">
            {" "}
            I &nbsp;
            <svg
              onClick={() => setRotate2(!rotate2)}
              className={`h-[18px] w-[18px] md:h-[30px] md:w-[30px]   lg:h-[48px] lg:w-[48px]  cursor-pointer  duration-700 ${
                rotate2 ? "rotate-90" : ""
              } `}
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
            &nbsp;{" "}
            {rotate2
              ? "am obsessed with Marvel comics"
              : "watch a lot of movies."}{" "}
          </li>
          <li className="tracking-wide">I love teaching digital designs</li>
        </ul>

        <div className="flex md:justify-end justify-start mt-[64px]">
          {" "}
          <p className="md:text-[24px] text-[16px] md:max-w-[548px]">
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
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px]">
                AFRILEISURE COLLECTION
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand1(!expand1);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px]"
              >
                {expand1 === true ? "Collapse" : "Expand"}
              </button>
            </div>
            <div className="text-right text-[#BABABA] text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>AFA SPORTS</p>
            </div>
          </div>
          {expand1 === true ? (
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              {" "}
              <m.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1.3,
                }}
              >
                <div className="w-full md:w-[50%]">
                  <h3 className="mt-2">ABOUT</h3>{" "}
                  <p className="text-sm">
                    I had the privilege of collaborating with Africa's Leading
                    Sports Brand, AFA Sports, to bring you a collection that
                    seamlessly blends traditional African wear with sports
                    athleisure fabrics and comfort. The result? Modern,
                    easy-to-wear, and incredibly comfortable clothes suitable
                    for a wide range of activities.
                    <br /> Introducing "AFRILEISURE ™," a term I coined to
                    encapsulate the essence of this groundbreaking collection. I
                    not only designed the logo (Link takes you to Afrileisure
                    logo) but also crafted the entire range, ensuring every
                    piece reflects the perfect balance between African heritage
                    and contemporary fashion.
                  </p>
                </div>

                <div>
                  <h3 className="mt-2">INDUSTRY</h3>
                  <p className="text-sm"> Sports and Athleisure</p>

                  <h3 className="mt-2">SERVICE</h3>
                  <p className="text-sm"> Branding Identity</p>
                </div>
                <div>
                  <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                  <p className="text-sm"> African, Bold, Daring, Futuristic</p>
                </div>
              </m.div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px]">AFRILEISURE LOGO</h2>{" "}
              <button
                onClick={() => {
                  setExpand2(!expand2);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px]"
              >
                {expand2 === true ? "Collapse" : "Expand"}
              </button>
            </div>
            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>AFA SPORTS</p>
            </div>
          </div>
          {expand2 === true ? (
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              <div className="w-full md:w-[50%]">
                <h3 className="mt-2">ABOUT</h3>{" "}
                <p className="text-sm">
                  Creating a logo was inevitable after coining the name
                  ‘Afrileisure’ for my design collection ( The Afrileisure
                  Collection) (another hyperlink) with AFA Sports, Africa’s
                  leading Sports and Athleisure Brand.
                  <br />
                  Inspired by the ancient Igbo hieroglyphics called ‘Nsibidi’ .
                </p>
              </div>

              <div>
                <h3 className="mt-2">INDUSTRY</h3>
                <p className="text-sm"> Sports and Athleisure</p>

                <h3 className="mt-2">SERVICE</h3>
                <p className="text-sm"> Branding Identity</p>
              </div>
              <div>
                <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                <p className="text-sm"> African, Bold, Daring, Futuristic</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">
                OLYMPICS NIGERIA BASKETBALL 2021
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand3(!expand3);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px]"
              >
                {expand3 === true ? "Collapse" : "Expand"}
              </button>
            </div>
            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>AFA SPORTS</p>
            </div>
          </div>
          {expand3 === true ? (
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              <div className="w-full md:w-[50%]">
                <h3 className="mt-2">ABOUT</h3>{" "}
                <p className="text-sm">
                  Someone said, “ In most sci-fi movies, there are no Africans
                  in the future”. My designs are to change that narrative.
                  <br />
                  Africa is the future
                  <br />
                  So I designed seamless, functional gears inspired by the
                  authenticity of our culture, displayed daily through the show
                  of resilience and the richness of our motifs.
                </p>
              </div>

              <div>
                <h3 className="mt-2">INDUSTRY</h3>
                <p className="text-sm"> Sports and Athleisure</p>

                <h3 className="mt-2">SERVICE</h3>
                <p className="text-sm"> Branding Identity</p>
              </div>
              <div>
                <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                <p className="text-sm">African, Bold, Daring, Futuristic</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">
                DJ OBI ILLUSTRATION
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand4(!expand4);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px]"
              >
                {expand4 === true ? "Collapse" : "Expand"}
              </button>
            </div>

            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>Obi Ajounuma</p>
            </div>
          </div>

          {expand4 === true ? (
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              <div className="w-full md:w-[50%]">
                <h3 className="mt-2">ABOUT</h3>{" "}
                <p className="text-sm">
                  DJ Obi is a Nigerian disc jockey and Syndik8 Records official
                  DJ. He won Best World DJ at the 2011 Nigeria Entertainment
                  Awards. He was nominated for 2016 The Future Awards Africa
                  Prize for Creative Professional.
                  <br />I was commissioned to create an Illustration that
                  Embodies his brand. Here’s what i came up with
                </p>
              </div>

              <div>
                <h3 className="mt-2">INDUSTRY</h3>
                <p className="text-sm"> Entertainment</p>

                <h3 className="mt-2">SERVICE</h3>
                <p className="text-sm"> Collection Design/ Collaboration</p>
              </div>
              <div>
                <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                <p className="text-sm"> Cool and Artsy</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">WACOM </h2>{" "}
              <button
                onClick={() => {
                  setExpand5(!expand5);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px]"
              >
                {expand5 === true ? "Collapse" : "Expand"}
              </button>
            </div>

            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>WACOM</p>
            </div>
          </div>

          {expand5 === true ? (
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              <div className="w-full md:w-[50%]">
                <h3 className="mt-2">ABOUT</h3>{" "}
                <p className="text-sm">
                  I had the privilege of collaborating with Africa's Leading
                  Sports Brand, AFA Sports, to bring you a collection that
                  seamlessly blends traditional African wear with sports
                  athleisure fabrics and comfort. The result? Modern,
                  easy-to-wear, and incredibly comfortable clothes suitable for
                  a wide range of activities. <br /> Introducing "AFRILEISURE
                  ™," a term I coined to encapsulate the essence of this
                  groundbreaking collection. I not only designed the logo (Link
                  takes you to Afrileisure logo) but also crafted the entire
                  range, ensuring every piece reflects the perfect balance
                  between African heritage and contemporary fashion.
                </p>
              </div>

              <div>
                <h3 className="mt-2">INDUSTRY</h3>
                <p className="text-sm"> Sports and Athleisure</p>

                <h3 className="mt-2">SERVICE</h3>
                <p className="text-sm"> Collection Design/ Collaboration</p>
              </div>
              <div>
                <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                <p className="text-sm">
                  {" "}
                  Breathable, Cotton-Polyester Mesh, Eco-friendly, Easy care,
                  Washing machine friendly, wash and wear.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" border-t pt-[24px] pb-[28px]  md:pt-[90px] md:pb-[110px] ">
          <div className="  flex justify-between items-center">
            <div className="text-[#BABABA] flex flex-col ">
              <h2 className="md:text-[64px] text-[24px] ">
                LYNXXX ILLUSTRATION{" "}
              </h2>{" "}
              <button
                onClick={() => {
                  setExpand6(!expand6);
                }}
                className="px-2 py-1 border rounded-[40px] border-white max-w-[100px] md:max-w-[120px]"
              >
                {expand6 === true ? "Collapse" : "Expand"}
              </button>
            </div>

            <div className="text-right text-[#BABABA]  text-[12px] md:text-[24px]">
              <p>CLIENT:</p>
              <p>Chukie Edozien(Lynxxx)</p>
            </div>
          </div>

          {expand6 === true ? (
            <div className="flex flex-col text-[#BABABA] justify-between md:flex-row pt-5">
              <div className="w-full md:w-[50%]">
                <h3 className="mt-2">ABOUT</h3>{" "}
                <p className="text-sm">
                  Lynxxx is a Nigerian hip-hop recording artist, pepsi
                  ambassador and entrepreneur.
                  <br />I was commissioned to create an Illustration of him and
                  a song cover.. Here’s what i came up with
                </p>
              </div>

              <div>
                <h3 className="mt-2">INDUSTRY</h3>
                <p className="text-sm">Entertainment</p>

                <h3 className="mt-2">SERVICE</h3>
                <p className="text-sm"> Branding Identity</p>
              </div>
              <div>
                <h3 className="mt-2">PRODUCT DESCRIPTION</h3>
                <p className="text-sm">
                  {" "}
                  Infusion of basketball, bold colors and the city that never
                  sleeps, Lagos.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
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
                <p className="text-[18px] md:text-[24px]">BEZI</p>{" "}
                <p className=" italic text-[18px] md:text-[24px]">
                  Chief Growth Officer
                </p>{" "}
                <p className="md:text-[20px] text-[14px]">Jan ‘23 - Present</p>
              </div>
              <div>
                <button className="border border-white py-2 px-3 rounded-[40px] max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
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
                <button className="border border-white py-2 px-3 rounded-[40px] max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
                  MORE
                </button>
              </div>{" "}
            </div>
            <div className="flex flex-row justify-between mt-[32px]">
              {" "}
              <div className="flex flex-col">
                <p className="text-[18px] md:text-[24px]">AVANTEFLY</p>{" "}
                <p className=" italic text-[18px] md:text-[24px]">
                  Chief Product Information Officer
                </p>{" "}
                <p className="text-[20px]">Since March 2021</p>
              </div>
              <div>
                <button className="border border-white py-2 px-3 rounded-[40px] max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
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
                <button className="border border-white py-2 px-3 rounded-[40px] max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
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
                <button className="border border-white py-2 px-3 rounded-[40px] max-w-[120px] text-[12px] md:text-[18px] tracking-wide">
                  MORE
                </button>
              </div>{" "}
            </div>
            <button className="px-3 py-2 text-center text-[12px] md:text-[18px] border rounded-[40px] border-white max-w-[150px] mt-[32px]">
              VIEW RESUME
            </button>
          </div>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className="md:min-h-[586px] min-h-[190px] relative  text-white bg-[#111111] ">
          <div className="absolute top-[30%] md:top-0 left-0 right-0">
            <img
              src="/contribution.png"
              alt="contribution"
              className="md:h-[586px] h-[171px] w-[100%] object-contain"
            />
          </div>
          <div className="md:h-[586px] flex md:justify-center h-full items-center py-auto">
            {" "}
            <h2 className="text-[40px] md:text-[70px] font-bold text-[#BABABA]">
              //CONTRIBUTION
            </h2>
          </div>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div>
          <h2 className="text-[40px] md:text-[70px] font-bold text-center text-[#BABABA]">
            //AWARDS
          </h2>
        </div>
        <Marquee pauseOnHover={true} className="mb-5">
          <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
            DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM UAE .
          </p>
        </Marquee>
        <Marquee pauseOnHover={true} direction="right">
          <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
            DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM UAE .
          </p>
        </Marquee>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <h2 className="text-[40px] text-white font-bold">
          Let’s talk about a project, collaboration or an idea you may have 😉
        </h2>
        <button className="px-3 py-2 text-center text-[12px] md:text-[18px] border rounded-[40px] border-white max-w-[150px] mt-[32px]">
          REACH ME
        </button>
      </section>
      <section className="pt-[40px] md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div className="px-[24px] py-[16px] bg-[#fff] bg-opacity-[80%] ">
          <p className="mb-[40px] text-black">
            Bonus stuff: This portfolio website was purely designed for the
            purpose of showcasing my works and achievements. However, as someone
            that claim to have a romantic soul, I have a micropage which
            explores my gallery.
          </p>
          <p className="text-black ">SAMUEL OTIGBA</p>
          <img src="/barcode.png" alt="barcode" />
        </div>
      </section>
      <section className="pt-[40px] pb-4 md:pt-[104px] px-[16px] md:px-[48px] text-white bg-[#111111] ">
        <div
          ref={bottomEl}
          className="flex items-center justify-between mb-[24px] text-[#ffffff]"
        >
          <p className="text-[14px] tracking-wide font-light">
            © 2023 All Rights Reserved.
          </p>
          <a href="#hero">
            <button className="flex items-center gap-2">
              BACK TO TOP <AiOutlineArrowUp className="animate-bounce " />
            </button>
          </a>
        </div>
        <div className="px-2">
          <p className="text-[#ffffff] text-center text-[12px] tracking-wide font-light">
            WITH ❤️ FROM EAGLION GLOBAL TECHNOLOGIES LTD.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
