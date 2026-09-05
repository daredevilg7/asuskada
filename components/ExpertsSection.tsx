"use client";

import React from "react";
import Image from "next/image";
import { Award, Check } from "lucide-react";
import { assetPath } from "@/lib/assets";

export default function ExpertsSection() {
  const experts = [
    {
      name: "Александр Морозов",
      role: "Главный инженер проектов (ГИП) «БИС»",
      experience: "14 лет в промышленной автоматизации",
      description: "Руководил проектированием и запуском АСУ ТП для более чем 30 крупных заводов (включая объекты Сибур, Роснефть и Danone). Ведущий эксперт по языкам стандарта МЭК 61131-3.",
      image: "/images/expert-1.jpg",
      tags: ["Siemens S7", "МЭК 61131-3", "Архитектура систем"],
    },
    {
      name: "Елена Васильева",
      role: "Senior SCADA & HMI Разработчик",
      experience: "10 лет в диспетчеризации и АСУ ТП",
      description: "Эксперт по MasterSCADA 4D, WinCC и разработке отказоустойчивых интерфейсов оператора. Автор корпоративных стандартов визуализации технологических процессов «БИС».",
      image: "/images/expert-2.jpg",
      tags: ["MasterSCADA 4D", "WinCC", "OPC UA / MQTT"],
    },
    {
      name: "Михаил Смирнов",
      role: "Руководитель направления ПНР и электроники",
      experience: "12 лет практического стажа",
      description: "Провел более 200 успешных пусконаладочных кампаний на промышленных объектах. Эксперт по схемотехнике EPLAN, сборке шкафов управления и диагностике сетей Modbus/Profinet.",
      image: "/images/expert-3.jpg",
      tags: ["EPLAN P8", "Шкафы ШУ", "Пусконаладка"],
    },
  ];

  return (
    <section id="experts" className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10">
          <div className="text-[13px] font-semibold text-[#005BFF] mb-2 uppercase tracking-wider">
            Преподаватели
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
            Преподаватели — эксперты в автоматизации техпроцессов
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4A4D55] leading-relaxed mt-2.5">
            Никаких теоретиков без опыта. Все наши наставники — действующие главные инженеры и разработчики «БИС»,
            которые ежедневно создают и вводят в эксплуатацию реальные автоматизированные комплексы.
          </p>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex items-center justify-between text-[12px] text-[#767980] mb-3 md:hidden px-1">
          <span>3 преподавателя-практика</span>
          <span>Листайте преподавателей &rarr;</span>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
          {experts.map((exp, idx) => (
            <div
              key={idx}
              className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-[20px] p-6 border border-gray-200/80 shadow-none flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Photo Portrait with subtle rounded container */}
                <div className="relative aspect-square w-full rounded-[14px] overflow-hidden bg-gray-100 border border-gray-100">
                  <Image
                    src={assetPath(exp.image)}
                    alt={exp.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-[6px] text-[11px] font-semibold text-[#141414] border border-gray-200 flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#005BFF]" />
                    <span>Практик «БИС»</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#141414] leading-snug">
                    {exp.name}
                  </h3>
                  <div className="text-[13px] font-semibold text-[#005BFF] mt-1">
                    {exp.role}
                  </div>
                  <div className="text-[12px] text-[#767980] font-medium mt-0.5">
                    {exp.experience}
                  </div>
                </div>

                <p className="text-[13px] md:text-[14px] text-[#4A4D55] leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-[6px] bg-[#F5F6F8] border border-gray-200/60 text-[11px] font-medium text-[#4A4D55]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-[12px] font-medium text-[#767980]">
                <Check className="w-3.5 h-3.5 text-[#0D7A5F] stroke-[2.5]" />
                <span>Лично проверяет дипломные проекты</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
