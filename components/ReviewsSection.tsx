"use client";

import React from "react";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Дмитрий Воронов",
      role: "Бывший электрик 4 разряда → Инженер АСУ ТП в Мосводоканале",
      salary: "140 000 ₽ / мес",
      text: "Работал электромонтажником 6 лет, уперся в потолок по зарплате в 65 тысяч. Решил освоить контроллеры. Курс «БИС» зацепил тем, что упор на практику и CoDeSys. Через 9 месяцев обучения меня пригласили на должность инженера ПНР. Диплом ФРДО сыграл решающую роль при трудоустройстве.",
      rating: 5,
    },
    {
      name: "Сергей Кузнецов",
      role: "Выпускник бакалавриата → Программист ПЛК в Сибур",
      salary: "125 000 ₽ / мес",
      text: "В университете давали только голую теорию 15-летней давности. На курсе «БИС» мы за 2 месяца настроили обмен по Modbus и собрали проект водоочистки в MasterSCADA 4D. Когда пришел на техническое интервью, смог ответить на все вопросы тимлида по таймингам циклов ПЛК.",
      rating: 5,
    },
    {
      name: "Михаил Захаров",
      role: "Инженер КИПиА → Ведущий инженер проекта",
      salary: "185 000 ₽ / мес",
      text: "Брал курс с индивидуальным тарифом. Личные сессии с ментором из «БИС» сэкономили мне минимум год самостоятельных попыток разобраться в TIA Portal и Motion Control. Разобрали реальный шкаф управления с моей работы. Очень рекомендую тариф с ментором!",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-10">
          <div className="text-[13px] font-semibold text-[#005BFF] mb-2 uppercase tracking-wider">
            Истории выпускников
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
            Где работают и сколько зарабатывают наши студенты
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4A4D55] leading-relaxed mt-2.5">
            94% выпускников курса находят работу по специальности в течение первых двух месяцев после защиты диплома.
          </p>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex items-center justify-between text-[12px] text-[#767980] mb-3 md:hidden px-1">
          <span>3 реальные истории</span>
          <span>Листайте отзывы &rarr;</span>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[340px] md:w-auto shrink-0 snap-start rounded-[20px] bg-white p-6 border border-gray-200/80 shadow-none flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-[#0D7A5F] bg-[#E8F7F3] px-2.5 py-0.5 rounded-[6px]">
                    {rev.salary}
                  </span>
                </div>

                <p className="text-[#4A4D55] text-[14px] leading-relaxed italic">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-gray-100">
                <div className="font-bold text-[#141414] text-[15px]">
                  {rev.name}
                </div>
                <div className="text-[12px] text-[#767980] font-normal leading-snug mt-0.5">
                  {rev.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
