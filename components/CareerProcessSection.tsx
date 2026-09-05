"use client";

import React from "react";
import { Check } from "lucide-react";

export default function CareerProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Даём практику на реальных задачах от партнёров",
      description:
        "Решите практические кейсы от производственных предприятий и интеграторов — познакомитесь с реальными техпроцессами и наполните портфолио 4 масштабными проектами по стандартам ЕСКД и МЭК.",
    },
    {
      num: "02",
      title: "Помогаем поставить цели и подготовить резюме",
      description:
        "Вместе с карьерным консультантом составите индивидуальный план развития, выделите ключевые навыки инженера АСУ ТП и оформите сильное резюме на hh.ru и профильных платформах.",
    },
    {
      num: "03",
      title: "Проводим тренировочные технические интервью",
      description:
        "Симулируем собеседование с ведущими инженерами «БИС»: разберем каверзные вопросы по скан-тайму, языкам МЭК 61131-3, настройке ПИД-регуляторов и полевым сетям Modbus/Profinet.",
    },
    {
      num: "04",
      title: "Организуем прямые контакты с работодателями",
      description:
        "Направляем ваше портфолио напрямую техническим директорам компаний-партнеров и приглашаем мотивированных выпускников на стажировку в проектное бюро «БИС».",
    },
    {
      num: "05",
      title: "Поддерживаем во время и ещё 12 месяцев после учёбы",
      description:
        "Остаемся на связи по любым рабочим ситуациям — помогаем успешно пройти испытательный срок, адаптироваться в инженерной команде и претендовать на повышение грейда.",
    },
  ];

  const partners = [
    "СИБУР",
    "Газпром нефть",
    "Северсталь",
    "Роснефть",
    "НЛМК",
    "ОВЕН",
    "Schneider Electric",
    "Т-Банк",
    "Яндекс",
    "Холдинг «БИС»",
  ];

  return (
    <section id="career" className="py-16 md:py-24 bg-[#F3F4F7]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-[12px] font-bold uppercase tracking-wider text-[#005BFF] mb-2.5">
            Центр карьеры
          </div>
          <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.12] tracking-[-0.025em] text-[#141414]">
            Помогаем найти работу шаг за шагом
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4A4D55] leading-relaxed mt-3 max-w-2xl">
            Мы не просто учим теории, а доводим каждого мотивированного студента до оффера.
            Программа поддержки Центра карьеры включена в стоимость обучения.
          </p>
        </div>

        {/* 2-Column Editorial Layout (Netology Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: 5 Numbered Steps List */}
          <div className="lg:col-span-7">
            {/* Mobile swipe hint */}
            <div className="flex items-center justify-between text-[12px] text-[#767980] mb-3 lg:hidden px-1">
              <span>5 шагов сопровождения</span>
              <span>Листайте шаги &rarr;</span>
            </div>

            <div className="flex lg:block overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 gap-4 pb-2 lg:pb-0 lg:space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="w-[84vw] sm:w-[360px] lg:w-auto shrink-0 snap-start bg-white rounded-[16px] p-6 md:p-7 border border-gray-200/80 shadow-none transition-all hover:border-gray-300"
                >
                  <div className="flex items-baseline gap-4 md:gap-5">
                    <span className="text-[28px] md:text-[34px] font-black text-[#005BFF] leading-none shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-[17px] md:text-[19px] font-bold text-[#141414] leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-[#4A4D55] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Standout Stat Card & Partner Companies */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            {/* Stat Card */}
            <div className="bg-white rounded-[20px] p-7 md:p-8 border border-gray-200/80 shadow-none space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F7F3] text-[#0D7A5F] text-[12px] font-bold">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                Гарантия трудоустройства
              </div>

              <div>
                <div className="text-[44px] md:text-[52px] font-black text-[#141414] leading-none tracking-tight">
                  84%
                </div>
                <div className="text-[18px] md:text-[20px] font-bold text-[#141414] mt-2 leading-snug">
                  выпускников добиваются карьерных целей за 3 месяца
                </div>
                <p className="text-[14px] text-[#5A606D] mt-2 leading-relaxed">
                  Персональный карьерный эксперт закрепляется за вами на весь период обучения
                  и курирует до получения первого официального оффера.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2.5 text-[13px] text-[#4A4D55]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C] shrink-0" />
                  <span>Помощь в составлении резюме и портфолио</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C] shrink-0" />
                  <span>Индивидуальные тренировочные собеседования</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C] shrink-0" />
                  <span>Доступ к закрытой базе вакансий партнеров</span>
                </div>
              </div>
            </div>

            {/* Leading Companies Card */}
            <div className="bg-white rounded-[20px] p-6 md:p-7 border border-gray-200/80 shadow-none">
              <div className="text-[15px] font-bold text-[#141414] mb-4">
                Наши выпускники работают в ведущих компаниях
              </div>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-3 py-1.5 rounded-[8px] bg-[#F3F4F7] text-[#2D3139] text-[12px] font-semibold hover:bg-gray-200/80 transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
