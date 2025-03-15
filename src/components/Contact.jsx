import React from "react";

const Contact = () => {
  return (
    <section id="loyiha" className="contact bg-[#0E041D] pt-10 pb-[140px]">
      <div className="container_full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-2 justify-center pt-10 pb-18 items-center text-center">
          <h3 className="text-white font-bold text-4xl sm:text-3xl">
            Biz bilan aloqa
          </h3>
          <p className="text-lg text-white max-w-2xl">
            Loyihangizni qanday realizatsiya qilish haqida batafsil
            suhbatlashamiz
          </p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Team Members Section */}
          <li className="lg:col-span-2 rounded-3xl bg-[#FFFFFF0D] p-5 pb-7">
            <h4 className="text-2xl sm:text-xl font-semibold text-white">
              Bizning jamoa haqida
            </h4>
            <ol className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 mt-5">
              {Array(9)
                .fill(null)
                .map((_, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#FFFFFF1A] rounded-2xl"
                  >
                    <img
                      className="bg-white rounded-lg w-16 h-16 sm:w-12 sm:h-12"
                      src=""
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg leading-[22px] font-medium text-white sm:text-base">
                        Xusanov <br /> Alibek
                      </h5>
                      <p className="text-sm leading-[17px] text-white sm:text-xs">
                        Developer
                      </p>
                    </div>
                  </li>
                ))}
            </ol>
          </li>

          {/* Contact Form Section */}
          <li className="py-10 px-6 rounded-3xl bg-[#FFFFFF0D] text-center">
            <div className="flex flex-col gap-2 items-center mb-8">
              <h4 className="text-2xl sm:text-xl font-semibold text-white">
                Bepul konsultatsiya
              </h4>
              <p className="text-sm leading-[17px] text-white">
                Loyihangiz bo’yicha boshlang’ich bepul konsultatsiya uchun
                ma’lumotingizni qoldiring.
              </p>
            </div>

            <form className="contact__form flex flex-col gap-4">
              <input
                className="bg-[#FFFFFF1A] text-white placeholder-white text-center rounded-xl w-full py-3 sm:py-2 text-lg sm:text-base"
                placeholder="Ismingiz"
              />
              <input
                className="bg-[#FFFFFF1A] text-white placeholder-white text-center rounded-xl w-full py-3 sm:py-2 text-lg sm:text-base"
                placeholder="Telefon raqamingiz"
              />
              <button className="bg-[#5A00DB] font-semibold text-lg sm:text-base rounded-lg py-3 text-white w-full cursor-pointer">
                Jo'natish
              </button>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
