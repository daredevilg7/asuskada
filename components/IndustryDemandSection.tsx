"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/assets";

export default function IndustryDemandSection() {
  return (
    <section id="about-profession" className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414] mb-8">
          Автоматизация — основа современного производства
        </h2>

        {/* Clean Content Card */}
        <div className="bg-white rounded-[24px] p-6 md:p-10 border border-gray-200/80 shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25] text-[#141414]">
                Инженеры АСУ ТП нужны каждому предприятию
              </h3>

              <p className="text-[15px] leading-[1.5] text-[#4A4D55]">
                В условиях активной модернизации заводов и масштабного импортозамещения зарубежных систем
                управления спрос на квалифицированных инженеров АСУ ТП вырос более чем на 40%. Инженер
                автоматизации создает и настраивает ключевую логику работы технологических установок, контроллеров
                и систем диспетчеризации.
              </p>

              <p className="text-[15px] leading-[1.5] text-[#4A4D55]">
                Программа образовательного центра «БИС» разработана главными инженерами проектов компании.
                Мы обучаем разработке схем, программированию ПЛК (Siemens, ОВЕН) и созданию SCADA-систем с нуля,
                даже если у вас нет базового опыта в написании промышленного кода.
              </p>

              {/* Stats row */}
              <div className="pt-3 grid grid-cols-3 gap-3 border-t border-gray-100">
                <div>
                  <div className="text-[22px] font-black text-[#005BFF] leading-none">
                    +42%
                  </div>
                  <div className="text-[12px] text-[#6B7280] mt-1 font-medium">
                    Рост вакансий за год
                  </div>
                </div>
                <div>
                  <div className="text-[22px] font-black text-[#141414] leading-none">
                    14 500+
                  </div>
                  <div className="text-[12px] text-[#6B7280] mt-1 font-medium">
                    Открытых вакансий в РФ
                  </div>
                </div>
                <div>
                  <div className="text-[22px] font-black text-[#0D7A5F] leading-none">
                    1.5 мес.
                  </div>
                  <div className="text-[12px] text-[#6B7280] mt-1 font-medium">
                    Средний срок до оффера
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] max-h-[380px] rounded-[16px] overflow-hidden">
                <Image
                  src={assetPath("/images/engineer-smart-factory.jpg")}
                  alt="Инженер АСУ ТП на производстве"
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
