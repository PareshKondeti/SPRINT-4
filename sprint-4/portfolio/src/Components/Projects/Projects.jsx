import React from "react";
import ProjectCard from "./ProjectCard";
import crop from "../../assets/crop.jfif";
import swiggy from "../../assets/swiggy.png";
import handwritten from "../../assets/handwritten.png";
const Projects = () => {
  return (
    <div id="Projects" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-zinc-900 bg-opacity-85 shadow-2xl mx-0 md:mx-20 rounded-3xl p-10 md:p-16"
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight text-center mb-8 md:mb-12">
        Projects
      </h1>
      <div className="py-10 px-6 flex flex-wrap gap-8  justify-center">
        <ProjectCard
          image={crop} 
          title="Green Guard On Advanced Crop Disease Detection In Agriculture"
          main="Developed a machine learning model to detect plant diseases from leaf images using Python."
          url={"https://github.com/PareshKondeti/Crop-Disease-Detection"}
        />
        <ProjectCard
          image={swiggy}
          title="Spicy Curry"
          main="A responsive clone of Swiggy developed with React.Js with features like cart,navigation,pagination etc."
          url={"https://github.com/PareshKondeti/spicy-curry1"}
        />
        <ProjectCard
          image={handwritten}
          title="Handwritten Character Recognition"
          main="Developed a machine learning model to recognize handwritten characters from optical images using Python."
          url={"https://github.com/PareshKondeti/handwriting_character_recognition"}
        />  
      </div>
    </div>
  );
};

export default Projects;
