import React, { useState } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import {BsHeartArrow} from "react-icons/bs"

const Preloader1 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen relative">
      {open ? (
        <div className="text-center flex flex-col justify-center  w-full h-full">
          <m.div
            initial={{ y: -500, opacity: 0, scale: 0.5 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 100,
              duration: 1.0,
            }}
            className=" pt-5"
          >
            <h2 className="text-xl font-extrabold ">Samuel </h2>
            <h2 className="text-xl font-extrabold ">Otigba.</h2>
            <p className="tracking-wider">I am a Superconnector.</p>
            <p>I connect over good food and sweet red wine.</p>
            <button onClick={()=> navigate("/home")} className="animate-bounce flex justify-center text-[28px] cursor-pointer font-extrabold mx-auto">  <BsHeartArrow /></button>
          
          </m.div>{" "}
        </div>
      ) : (
        ""
      )}

      <CountUp
        className="absolute right-3 bottom-3 text-[36px] font-extrabold"
        start={0}
        end={100}
        duration={5}
        separator=" "
        // decimals={4}
        decimal=","
        // prefix="EUR "
        suffix=" %"
        onEnd={() => setOpen(true)}
        onStart={() => console.log("Started! 💨")}
      />
    </div>
  );
};

export default Preloader1;
