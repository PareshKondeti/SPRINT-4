import React from "react";
import { FaPython,FaJs, FaReact } from "react-icons/fa";
import { BsFiletypeCss,BsFiletypeSql } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
const Experience = () => {
  return (
    <div id="Experience"  className=" p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-slate-300 font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <TiHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <BsFiletypeCss color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="green" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <BsFiletypeSql color="red" size={50} />
          </span>
        </div>
      </div>
  
    </div>
  );
};

export default Experience;
