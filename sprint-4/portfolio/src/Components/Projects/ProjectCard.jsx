import React from "react";

const ProjectCard = ({ image, title, main, url }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col w-72 bg-[#8a681e] shadow-2xl rounded-3xl hover:shadow-[0_0_30px_5px_rgba(255,215,0,0.5)] transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <img className="rounded-t-3xl object-cover p-3" src={image} alt="" />
      <div className="px-4 mt-2 text-center">
        <h3 className="text-xl md:text-2xl font-bold leading-normal text-black">
          {title}
        </h3>
        <p className="text-sm md:text-md leading-tight py-2 text-black">
          {main}
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-md md:py-2 md:px-6 hover:bg-gradient-to-r from-[#161616] to-[#050a18] hover:scale-110 duration-300 font-semibold rounded-full bg-black shadow-md"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
