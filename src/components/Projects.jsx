import React from "react";
import ProjectImg1 from "/images/project1.png";
import ProjectImg2 from "/images/project2.png";
import ProjectImg3 from "/images/project3.png";

const projectsData = [
  {
    title: "Tourmad loyihasi",
    description:
      "Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan...",
    image: ProjectImg1,
  },
  {
    title: "ProRun loyihasi",
    description:
      "Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda ishtirok etishingiz mumkin.",
    image: ProjectImg2,
  },
  {
    title: "Xalq trans loyihasi",
    description:
      "Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: ProjectImg3,
  },
];

const Projects = () => {
  return (
    <section className="project bg-[#0E041D] py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
            Loyihalarimiz
          </h2>
          <p className="text-base sm:text-lg text-white">
            Biz haqimizda gapirsin!
          </p>
        </div>

        {/* Project List */}
        <ul className="mt-10 flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <li
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 md:gap-[58px]`}
            >
              <img
                className="w-full max-w-lg rounded-lg"
                src={project.image}
                alt={project.title}
              />
              <div className="text-center md:text-left">
                <h3 className="text-white font-semibold text-xl sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-white text-base sm:text-lg mt-4 mb-4">
                  {project.description}
                </p>
                <button className="bg-white/10 backdrop-blur-md text-white py-3 px-6 rounded-lg w-full max-w-[180px] mx-auto md:mx-0">
                  Loyihani ko’rish
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* View More Button */}
        <div className="flex justify-center pt-16 pb-[80px]">
          <button className="bg-[#5A00DB] font-semibold text-white py-3  rounded-lg w-full  max-w-[233px] text-center">
            Boshqa loyihalarni ko’rish
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
