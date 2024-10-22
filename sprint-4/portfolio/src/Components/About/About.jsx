import React from "react";
import AboutImg from "../../assets/about.png";


const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#14193bd8] shadow-2xl mx-0 md:mx-20 rounded-3xl p-10 md:p-16"
    >
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left  mb-8">
          About
        </h2>
        <div className="md:flex items-start md:gap-10">
          <img
            className="rounded-xl shadow-lg h-60 md:h-80 w-full md:w-auto object-cover mb-6 md:mb-0 transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(70,86,151,0.5)]"
            src={AboutImg}
            alt="About"
          />
          <div className=" md:text-md leading-tight text-[#3be757] text-center text-balance text-2xl space-y-4">
          <p>
  As a <span className="font-semibold text-white">Full Stack Developer</span>, I am experienced in creating responsive and dynamic interfaces using modern frameworks and libraries, ensuring a seamless user experience. My journey into technology began with my education at NRI Institute of Technology, where I pursued a BTech in Computer Science and Engineering, achieving an 8.38 CGPA. Prior to that, I excelled academically, securing a 9.6 CGPA in my intermediate studies and a perfect 10 CGPA in my SSC.
</p>


          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
