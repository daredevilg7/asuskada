"use client";

import React from "react";
import { Check, TrendingUp, Briefcase, ExternalLink } from "lucide-react";

export default function SalaryCareerWidget() {
  const careerLevels = [
    {
      level: "Junior инженер",
      experience: "0–1 год • Старт после курса",
      badge: "Старт в профессии",
      badgeStyle: "bg-gray-100 text-[#4A4D55]",
      salary: "105 000 ₽",
      salaryNote: "средний доход начинающего специалиста",
      description:
        "Работает под кураторством старшего инженера, решает типовые задачи автоматизации технологических узлов и наладки оборудования.",
      tasks: [
        "Программирование ПЛК ОВЕН и Siemens (ST, LD)",
        "Чтение и корректировка схем автоматизации Э3 в EPLAN",
        "Проверка датчиков, дискретных и аналоговых сигналов",
        "Сборка и сопровождение шкафов управления (ШУ)",
      ],
      vacancies: "4 200+ вакансий по РФ",
      isTarget: false,
    },
    {
      level: "Middle инженер АСУ ТП",
      experience: "1–3 года опыта",
      badge: "Целевой уровень курса",
      badgeStyle: "bg-[#005BFF] text-white",
      salary: "165 000 ₽",
      salaryNote: "средний доход специалиста с опытом",
      description:
        "Самостоятельный инженер, способный с нуля спроектировать, запрограммировать и запустить сложный технологический комплекс.",
      tasks: [
        "Разработка SCADA-систем (MasterSCADA 4D, WinCC) и мнемосхем",
        "Настройка промышленных сетей Modbus RTU/TCP, Profinet, MQTT",
        "Реализация алгоритмов ПИД-регулирования и безаварийной защиты",
        "Автономное проведение пусконаладочных работ (ПНР) на объекте",
      ],
      vacancies: "7 800+ вакансий по РФ",
      isTarget: true,
    },
    {
      level: "Senior / Ведущий инженер / ГИП",
      experience: "от 3 лет опыта",
      badge: "Экспертный уровень",
      badgeStyle: "bg-emerald-50 text-[#0D7A5F]",
      salary: "от 240 000 ₽",
      salaryNote: "доход ведущего специалиста и руководителя",
      description:
        "Главный инженер проекта, отвечающий за техническую архитектуру, надежность и безопасность автоматизированных комплексов.",
      tasks: [
        "Проектирование комплексных АСУ ТП масштаба цеха или завода",
        "Руководство инженерной группой и координация подрядчиков",
        "Прохождение экспертизы промышленной безопасности и Ростехнадзора",
        "Оптимизация скан-тайма, отказоустойчивое резервирование систем",
      ],
      vacancies: "2 500+ вакансий по РФ",
      isTarget: false,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[12px] font-bold uppercase tracking-wider text-[#005BFF] mb-2.5">
            Карьера и доход
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
            Сколько зарабатывает инженер АСУ ТП и как растет доход
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4A4D55] leading-relaxed mt-3">
            Рынок промышленной автоматизации испытывает острый дефицит специалистов из-за модернизации заводов и импортозамещения.
            Освоив стандарт МЭК 61131-3 и SCADA, вы получаете прозрачную траекторию роста с первого дня.
          </p>
        </div>

        {/* 3 Career Progression Cards - Horizontal snap carousel on mobile, 3-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-5 items-stretch overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-2">
          {careerLevels.map((item, idx) => (
            <div
              key={idx}
              className={`w-[84vw] sm:w-[340px] md:w-auto shrink-0 snap-start rounded-[20px] p-6 md:p-7 flex flex-col justify-between transition-all ${
                item.isTarget
                  ? "bg-white border-2 border-[#005BFF] shadow-sm relative"
                  : "bg-white border border-gray-200/80 shadow-none"
              }`}
            >
              <div>
                {/* Level Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] ${item.badgeStyle}`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">
                    {item.experience}
                  </span>
                </div>

                {/* Level Title */}
                <h3 className="text-[19px] md:text-[20px] font-bold text-[#141414] leading-snug mb-3">
                  {item.level}
                </h3>

                {/* Salary Display */}
                <div className="pb-4 mb-4 border-b border-gray-100">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-[30px] md:text-[34px] font-black leading-none ${
                        item.isTarget ? "text-[#005BFF]" : "text-[#141414]"
                      }`}
                    >
                      {item.salary}
                    </span>
                    <span className="text-[14px] text-gray-500 font-bold">/ мес</span>
                  </div>
                  <div className="text-[12px] text-gray-400 mt-1">
                    {item.salaryNote}
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-[13px] md:text-[14px] text-[#4A4D55] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Tasks Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Что делает специалист:
                  </div>
                  {item.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-[13px] text-[#4A4D55]">
                      <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-snug">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vacancy Metric Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-1.5 font-semibold text-[#141414]">
                  <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                  <span>{item.vacancies}</span>
                </div>
                <span className="text-gray-400 font-medium">hh.ru</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint Indicator */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-[12px] text-gray-400">
          <span className="text-[11px] font-medium text-[#767980]">Листайте карьерные уровни →</span>
        </div>

        {/* Source & Market Fact Banner */}
        <div className="mt-8 bg-white rounded-[16px] p-5 md:p-6 border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-blue-50 text-[#005BFF] flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#141414]">
                Рыночные показатели спроса за 2026 год
              </div>
              <div className="text-[12px] text-gray-500">
                14 500+ открытых вакансий инженеров автоматизации и АСУ ТП в России • Прирост спроса +42% в год
              </div>
            </div>
          </div>

          <div className="text-[12px] text-gray-400 text-center sm:text-right shrink-0">
            Источники: hh.ru, ГородРабот, SuperJob
          </div>
        </div>
      </div>
    </section>
  );
}
