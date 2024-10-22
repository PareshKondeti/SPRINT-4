import React from "react";
import home from "../../assets/home.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-[#f1b635] flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 bg-[#0a0e35]">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mb-6 text-white">
          Full Stack Developer
        </p>
        <button className="mt-5 md:mt-8 text-black py-2 px-4 text-sm md:text-lg hover:bg-gradient-to-r from-[#465697] to-[#1f2a48] hover:scale-105 duration-300 font-semibold rounded-full bg-[#f1b635] shadow-md transition-all ease-in-out">
          <a href="https://drive.google.com/file/d/1GMiEELSh1jLlmtpw-kOF1b3imu86urTX/view?usp=drive_link" target="_blank">Resume</a>
        </button>
      </div>
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          className="rounded-xl shadow-2xl h-80 md:h-96 w-full md:w-auto object-cover hover:shadow-[0_0_30px_5px_rgba(70,86,151,0.5)] transition-shadow duration-300"
          src={home}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

