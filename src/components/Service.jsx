import React from "react";

const services = [
  {
    title: "Landing sahifalar",
    description:
      "Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.",
    image: "/icons/service1.svg",
  },
  {
    title: "Korporativ veb-sayt",
    description:
      "Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.",
    image: "/icons/service2.svg",
  },
  {
    title: "Online do’kon",
    description:
      "Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.",
    image: "/icons/service3.svg",
  },
  {
    title: "CRM tizimi",
    description:
      "Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.",
    image: "/icons/service4.svg",
  },
  {
    title: "Portfolio saytlari",
    description:
      "Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.",
    image: "/icons/service5.svg",
  },
  {
    title: "Blog sahifalari",
    description:
      "O‘z fikrlari, yangiliklari yoki ma'lumotlarini o‘rtoqlashish. Ma'lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.",
    image: "/icons/service6.svg",
  },
  {
    title: "Ta’lim platformasi",
    description:
      "Ta'lim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.",
    image: "/icons/service7.svg",
  },
  {
    title: "ERP platformasi",
    description:
      "ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta'minotdir.",
    image: "/icons/service8.svg",
  },
  {
    title: "Alohida loyihami?",
    description:
      "Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz. Agarda sizda yangi startap g’oya mavjud bo’lsa, biz siz bilan uni rivojlantirish ustida ishlashga tayyormiz.",
    image: "/icons/service9.svg",
    special: true, // This will apply a different background color
  },
];

const Service = () => {
  return (
    <section id="services_id" className="bg-[#0E041D] pt-10 pb-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
            Xizmat turlari
          </h2>
          <p className="text-white text-lg mt-2">
            Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
          </p>
        </div>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <li
              key={index}
              className={`flex flex-col items-center text-center gap-6 p-6 rounded-2xl ${
                service.special ? "bg-[#5A00DB]" : "bg-[#FFFFFF1A]"
              }`}
            >
              <div className="p-6 bg-[#FFFFFF1A] rounded-3xl">
                <img
                  className="w-16 h-16"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-xl sm:text-2xl leading-tight">
                  {service.title}
                </h3>
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
