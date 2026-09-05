"use client";

import React from "react";
import { Check, ShieldCheck, MapPin } from "lucide-react";

export default function ResumeMockupSection() {
  const technologies = [
    { name: "ПЛК ОВЕН & CoDeSys", category: "МЭК 61131-3 (РФ)" },
    { name: "Siemens TIA Portal", category: "S7-1200 / S7-1500" },
    { name: "MasterSCADA 4D", category: "SCADA & Мнемосхемы" },
    { name: "Siemens WinCC", category: "HMI & Диспетчеризация" },
    { name: "Modbus RTU / TCP", category: "Промышленные сети" },
    { name: "Profinet / Ethernet", category: "Полевые шины" },
    { name: "EPLAN P8 & NanoCAD", category: "Схемотехника ГОСТ" },
    { name: "Python для АСУ ТП", category: "Парсинг & Аналитика" },
    { name: "Панели Weintek", category: "Сенсорные экраны" },
    { name: "ПИД-регулирование", category: "Автоматическое управление" },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-[13px] font-semibold text-[#005BFF] mb-2 uppercase tracking-wider">
            Резюме выпускника
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
            Учим тому, что работает — ваши навыки подойдут под требования рынка
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4A4D55] leading-relaxed mt-2.5">
            Программа составлена с учетом актуальных стандартов индустрии. Вот так будет выглядеть ваше
            портфолио и резюме на hh.ru после выпуска:
          </p>
        </div>

        {/* macOS Style Window Mockup */}
        <div className="rounded-[20px] shadow-sm">
          {/* macOS Top Bar */}
          <div className="bg-[#1E232B] rounded-t-[20px] p-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 pl-1">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <div className="text-[12px] text-gray-400 font-medium">
              hh.ru — Резюме
            </div>
            <div className="text-[11px] text-gray-500 pr-1">
              Обновлено
            </div>
          </div>

          {/* Resume Body */}
          <div className="bg-white rounded-b-[20px] p-6 md:p-10 border-x border-b border-gray-200">
            {/* Header of Resume */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#141414] leading-tight">
                    Инженер АСУ ТП / Инженер-программист
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[6px] bg-[#E8F7F3] text-[#0D7A5F] text-[12px] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0D7A5F]" />
                    Квалификация подтверждена
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#767980] mt-1.5">
                  <span className="font-semibold text-[#141414]">Алексей Смирнов</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    Москва / Готов к командировкам
                  </span>
                  <span>•</span>
                  <span className="text-[#005BFF] font-medium">Диплом «БИС» (реестр ФИС ФРДО)</span>
                </div>
              </div>

              <div className="text-left md:text-right shrink-0">
                <div className="text-[11px] text-[#767980] uppercase tracking-wider font-semibold">
                  Желаемый доход
                </div>
                <div className="text-[24px] md:text-[28px] font-extrabold text-[#005BFF] leading-tight mt-0.5">
                  от 110 000 ₽
                </div>
                <div className="text-[12px] text-[#0D7A5F] font-medium mt-0.5">
                  Полная занятость
                </div>
              </div>
            </div>

            {/* Content: 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              {/* Left Column: Responsibilities */}
              <div className="lg:col-span-6">
                <div className="text-[14px] font-bold text-[#141414] uppercase tracking-wider mb-3">
                  Профессиональные навыки и обязанности:
                </div>

                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2.5 text-[14px] text-[#4A4D55] leading-relaxed">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Разработка алгоритмов управления на языках МЭК 61131-3 (ST, FBD, LD)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-[#4A4D55] leading-relaxed">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Проектирование и наладка диспетчеризации в MasterSCADA 4D и Siemens WinCC</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-[#4A4D55] leading-relaxed">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Конфигурирование промышленных сетей Modbus RTU/TCP, Profinet, MQTT</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-[#4A4D55] leading-relaxed">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Чтение и разработка принципиальных схем в EPLAN P8 и NanoCAD по ГОСТ</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14px] text-[#4A4D55] leading-relaxed">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Сборка шкафов управления и пусконаладочные работы на объектах</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Tech stack badges */}
              <div className="lg:col-span-6">
                <div className="text-[14px] font-bold text-[#141414] uppercase tracking-wider mb-3">
                  Стек технологий и инструментов:
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F6F8] rounded-[8px] p-2.5 border border-gray-200/60 flex flex-col justify-between"
                    >
                      <div className="text-[13px] font-bold text-[#141414] leading-snug">
                        {tech.name}
                      </div>
                      <div className="text-[11px] text-[#767980] mt-0.5 font-normal">
                        {tech.category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
