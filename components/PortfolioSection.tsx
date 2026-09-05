"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, Sparkles } from "lucide-react";
import { assetPath } from "@/lib/assets";

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Разработка проекта SCADA с нуля: автоматизация водоочистки",
      subtitle: "ПЛК ОВЕН ПЛК210 + CoDeSys v3.5 + MasterSCADA 4D",
      description: "Разработка алгоритмов ПИД-регулирования давления в магистрали, защита насосных агрегатов от сухого хода, реализация каскадного пуска по интерфейсу Modbus TCP.",
      tags: ["ОВЕН ПЛК210", "CoDeSys v3.5", "Modbus TCP", "MasterSCADA 4D"],
      result: "Готовый проект АСУ с журналом аварий, трендами расхода и мнемосхемой.",
      image: "/images/scada-dashboard.jpg",
    },
    {
      title: "Программирование ПЛК для упаковочной линии",
      subtitle: "Siemens S7-1200 + TIA Portal + Weintek HMI",
      description: "Программирование логики синхронизации сервоприводов по шине Profinet, обработка оптических датчиков брака и вывод аварийных сообщений на сенсорную панель оператора.",
      tags: ["Siemens S7-1200", "TIA Portal", "Profinet", "Weintek HMI"],
      result: "Отлаженная программа управления с симуляцией в S7-PLCSIM.",
      image: "/images/simulator-preview.jpg",
    },
    {
      title: "Диспетчеризация инженерных систем здания",
      subtitle: "MasterSCADA 4D + Контроллеры ОВЕН + MQTT",
      description: "Создание отказоустойчивой системы мониторинга климатических установок и энергоблока с передачей технологических параметров в единую диспетчерскую.",
      tags: ["MasterSCADA 4D", "MQTT", "Диспетчеризация", "Резервирование"],
      result: "Единый диспетчерский пункт с SMS и Telegram-оповещением об авариях.",
      image: "/images/scada-dashboard.jpg",
    },
    {
      title: "Проектирование и сборка шкафа управления конвейером",
      subtitle: "Схемотехника EPLAN P8 + NanoCAD + Пусконаладка",
      description: "Разработка полного комплекта конструкторской документации по ГОСТ 21.408 (схемы Э3, перечень элементов, кабельный журнал) и написание управляющей программы на Structured Text.",
      tags: ["EPLAN P8", "NanoCAD", "ГОСТ 21.408", "Structured Text"],
      result: "Комплект рабочей документации и протестированная прошивка контроллера.",
      image: "/images/simulator-preview.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-[13px] font-semibold text-[#005BFF] mb-2 uppercase tracking-wider">
            Проекты портфолио
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
            Проекты в вашем портфолио к концу обучения
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4A4D55] leading-relaxed mt-2.5">
            Вы не просто решаете абстрактные тесты, а разрабатываете полноценные промышленные системы
            на основе реальных технических заданий действующих клиентов «БИС».
          </p>
        </div>

        {/* Project Showcase Box */}
        <div className="rounded-[20px] bg-[#0E1218] text-white p-6 md:p-8 border border-gray-800 mb-10 relative overflow-hidden">
          {/* Project selector tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-gray-800/80 mb-6">
            {projects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProject(idx)}
                className={`px-4 py-2 rounded-[8px] text-[13px] font-medium whitespace-nowrap transition-all ${
                  activeProject === idx
                    ? "bg-[#005BFF] text-white"
                    : "bg-white/10 text-gray-400 hover:text-white hover:bg-white/15"
                }`}
              >
                Проект {idx + 1}
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white/10 text-cyan-300 text-[12px] font-medium border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{projects[activeProject].subtitle}</span>
              </div>

              <h3 className="text-[20px] md:text-[24px] font-bold text-white leading-snug">
                {projects[activeProject].title}
              </h3>

              <p className="text-[14px] text-gray-300 leading-relaxed">
                {projects[activeProject].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {projects[activeProject].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-[6px] bg-white/10 text-gray-300 text-[12px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Result Box */}
              <div className="p-3.5 rounded-[12px] bg-white/5 border border-white/10 text-[#00C48C] text-[13px] flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00C48C] shrink-0" />
                <span>
                  <strong className="text-white">Результат:</strong> {projects[activeProject].result}
                </span>
              </div>
            </div>

            {/* Right Column: SCADA Mockup */}
            <div className="lg:col-span-6">
              <div className="relative aspect-video rounded-[14px] overflow-hidden border border-gray-700 bg-gray-900 group">
                <Image
                  src={assetPath(projects[activeProject].image)}
                  alt={projects[activeProject].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    SCADA RUNTIME
                  </span>
                  <span>1920x1080 Full HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex items-center justify-between text-[12px] text-[#767980] mb-3 md:hidden px-1">
          <span>Преимущества методики</span>
          <span>Листайте &rarr;</span>
        </div>

        {/* 3 Advantage Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
          {/* Card 1: Симуляторы оборудования */}
          <div className="w-[84vw] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-[20px] p-6 border border-gray-200/80 shadow-none flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-video mb-4 rounded-[12px] overflow-hidden border border-gray-100 bg-gray-900">
                <Image
                  src={assetPath("/images/simulator-preview.jpg")}
                  alt="Цифровые двойники и симуляторы"
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="text-[17px] md:text-[18px] font-bold text-[#141414] mb-1.5 leading-snug">
                Практика на симуляторах
              </h4>

              <p className="text-[14px] text-[#4A4D55] leading-relaxed">
                Интерактивные симуляторы и цифровые двойники заводских участков (Factory I/O, Siemens PLCSIM)
                позволяют безопасно отрабатывать сценарии аварий.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 text-[13px] text-[#005BFF] font-semibold">
              406 часов стендовой практики →
            </div>
          </div>

          {/* Card 2: Стандарты МЭК 61131-3 */}
          <div className="w-[84vw] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-[20px] p-6 border border-gray-200/80 shadow-none flex flex-col justify-between">
            <div>
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={assetPath("/images/gost-seal.png")}
                  alt="3D Медаль качества МЭК"
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-sm"
                />
              </div>

              <h4 className="text-[17px] md:text-[18px] font-bold text-[#141414] mb-1.5 leading-snug">
                Стандарты МЭК 61131-3
              </h4>

              <p className="text-[14px] text-[#4A4D55] leading-relaxed">
                Промышленный эталон языков ПЛК (ST, LD, FBD, SFC) и оформление
                схем по ГОСТ 21.408-2013 гарантируют соответствие стандартам предприятий.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 text-[13px] text-[#0D7A5F] font-semibold">
              Диплом переподготовки ФРДО РФ →
            </div>
          </div>

          {/* Card 3: Заморозка обучения */}
          <div className="w-[84vw] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-[20px] p-6 border border-gray-200/80 shadow-none flex flex-col justify-between">
            <div>
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={assetPath("/images/icon-pause-folder.png")}
                  alt="3D Папка с кнопкой паузы"
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-sm"
                />
              </div>

              <h4 className="text-[17px] md:text-[18px] font-bold text-[#141414] mb-1.5 leading-snug">
                Пауза или перенос потока
              </h4>

              <p className="text-[14px] text-[#4A4D55] leading-relaxed">
                Если изменились обстоятельства, вы можете бесплатно заморозить обучение на срок
                до 6 месяцев или перейти в следующий поток без потери прогресса.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 text-[13px] text-gray-500 font-semibold">
              Бесплатная пауза до 6 месяцев →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
