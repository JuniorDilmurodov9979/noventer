import React from "react";

const icons = [
  { src: "/icons/hero1.png", title: "7+ yillik", subtitle: "Umumiy tajriba" },
  { src: "/icons/hero2.png", title: "5+", subtitle: "Yirik loyihalar" },
  { src: "/icons/hero3.png", title: "8+", subtitle: "Xizmat turlari" },
  { src: "/icons/hero4.png", title: "100%", subtitle: "Xavfsizlik" },
];

const Hero = () => {
  return (
    <section className="hero relative bg-[#0E041D] ">
      <div className="container_custom mx-auto">
        <div className="hero_title-wrapper flex flex-col  md:text-left md:items-start gap-6 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-lg w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span>Yuqori sifatdagi</span>
              <br />
              <span className="font-light">aniqlikka asoslanib</span>
              <br />
              <span className="text-[#5A00DB]">istalgan turdagi</span>
              <br />
              <span>dasturlarni tayyorlaymiz</span>
            </h1>
          </div>
          <a
            href="#services_id"
            className="bg-[#5A00DB] max-w-[168px] md:max-w-[200px] w-full font-semibold text-white py-3 px-6 rounded-lg cursor-pointer text-center text-sm md:text-lg"
          >
            Xizmatlar haqida
          </a>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-12">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="flex gap-4 items-center p-3 md:p-6 bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-md "
            >
              <img
                className="w-6 h-6  md:w-12 md:h-12"
                src={icon.src}
                alt="Icon"
              />
              <div>
                <p className="text-[14px] md:text-2xl font-semibold">
                  {icon.title}
                </p>
                <p className="text-[10px] md:text-lg text-gray-300">
                  {icon.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
