import React from "react";

const Home = () => {

    const currTime = new Date().toLocaleTimeString();
  return (
    <div>
      <section className="bgImage h-[900px] bg-no-repeat bg-cover sm:bg-center py-[32px] px-[48px]">
        <div>
          {" "}
          <h2 className="text-xl font-extrabold text-[#fff] ">
            Samuel <br /> Otigba.{" "}
          </h2>
       
        </div>

        <div><p>{currTime}</p></div>


        <button>Contact Me</button>
      </section>
    </div>
  );
};

export default Home;
