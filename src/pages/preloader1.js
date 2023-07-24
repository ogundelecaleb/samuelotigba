import React, { useState } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { BsHeartArrow } from "react-icons/bs";

const Preloader1 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[100vh] relative">
      {open ? (
        <div className="text-center flex flex-col justify-center  w-full h-full">
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,duration: 1.3
            }}
            // initial={{ y: -500, opacity: 0, scale: 0.5 }}
            // animate={{
            //   y: 0,
            //   opacity: 1,
            //   scale: 1,
            // }}
            // transition={{ type: "spring", stiffness: 100,
            //   duration: 1.0,
            // }}
            className=" pt-5"
          >
            <h2 className="text-xl font-extrabold ">Samuel </h2>
            <h2 className="text-xl font-extrabold ">Otigba.</h2>
            <p className="tracking-wider">I am a Superconnector.</p>
            <p>I connect over good food and sweet red wine.</p>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.7 }}
            >
              <button
                onClick={() => navigate("/home")}
                className="animate-bounce mt-7 flex justify-center gap-2 items-center text-[18px] cursor-pointer font-extrabold mx-auto"
              >
                {" "}
                Ride with me in this Journey <BsHeartArrow />
              </button>
            </m.div>{" "}
          </m.div>{" "}
        </div>
      ) : (
        ""
      )}

      <CountUp
        className="absolute right-3 bottom-10 text-[36px] font-extrabold"
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
