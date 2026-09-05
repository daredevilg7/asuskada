"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { assetPath } from "@/lib/assets";

export default function AudienceTargetSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-10">
          <div className="text-[13px] font-semibold text-[#005BFF] mb-2 uppercase tracking-wider">
            Для кого этот курс
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
            Курс подойдёт для разных целей
          </h2>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex items-center justify-between text-[12px] text-[#767980] mb-3 md:hidden px-1">
          <span>2 траектории</span>
          <span>Листайте &rarr;</span>
        </div>

        {/* 2 Wide White Cards - Horizontal snap carousel on mobile, 2-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-2">
          {/* Card 1: Освоить профессию с нуля */}
          <div className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 snap-start bg-white rounded-[20px] p-6 md:p-8 border border-gray-200/80 flex flex-col sm:flex-row gap-6 items-start shadow-none">
            {/* 3D Icon w-16 h-16 shrink-0 directly on white background without dark frames */}
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <Image
                src={assetPath("/images/icon-grad-cap.png")}
                alt="3D Шапочка выпускника с ключом"
                width={64}
                height={64}
                className="object-contain drop-shadow-sm"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#141414] leading-snug">
                Получить профессию с нуля
              </h3>

              <p className="text-[14px] text-[#4A4D55] leading-relaxed mt-2">
                Идеально для новичков, выпускников технических вузов и тех, кто хочет сменить работу
                и войти в востребованную индустрию промышленного инжиниринга.
              </p>

              <ul className="space-y-2.5 mt-4">
                <li className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#4A4D55]">
                  <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Освоите основы электротехники, схемотехнику и принципы работы датчиков</span>
                </li>
                <li className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#4A4D55]">
                  <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Научитесь программировать ПЛК на языках стандарта МЭК 61131-3</span>
                </li>
                <li className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#4A4D55]">
                  <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Соберете 4 реальных проекта в портфолио и пройдете стажировку в «БИС»</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Повысить или сменить квалификацию */}
          <div className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 snap-start bg-white rounded-[20px] p-6 md:p-8 border border-gray-200/80 flex flex-col sm:flex-row gap-6 items-start shadow-none">
            {/* 3D Icon w-16 h-16 shrink-0 directly on white background without dark frames */}
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <Image
                src={assetPath("/images/icon-target-dart.png")}
                alt="3D Мишень с дротиком"
                width={64}
                height={64}
                className="object-contain drop-shadow-sm"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#141414] leading-snug">
                Повысить квалификацию
              </h3>

              <p className="text-[14px] text-[#4A4D55] leading-relaxed mt-2">
                Для действующих наладчиков КИПиА, электромехаников и разработчиков,
                желающих систематизировать стек и претендовать на позиции Middle / Senior.
              </p>

              <ul className="space-y-2.5 mt-4">
                <li className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#4A4D55]">
                  <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Освоите промышленный стандарт МЭК 61131-3 (ST, LD, FBD, SFC)</span>
                </li>
                <li className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#4A4D55]">
                  <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Прокачаете архитектуру полевых шин Modbus, Profinet и протокол MQTT</span>
                </li>
                <li className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#4A4D55]">
                  <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Спроектируете современные диспетчерские интерфейсы в MasterSCADA 4D</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
