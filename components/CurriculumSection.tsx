"use client";

import React, { useState } from "react";
import { ChevronDown, Gift, Check } from "lucide-react";
import PhoneInput from "./PhoneInput";

interface CurriculumSectionProps {
  onSuccessLead: (name: string, phone: string) => void;
}

export default function CurriculumSection({ onSuccessLead }: CurriculumSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const modules = [
    {
      num: "Модуль 1",
      title: "Основы автоматизированных систем и электротехника",
      hours: "36 часов",
      badge: null,
      summary: "Базовые законы электротехники, классификация датчиков (температура, давление, расход), дискретные и аналоговые сигналы, источники питания и цепи защиты.",
      lessons: [
        "Иерархия пирамиды АСУ ТП: полевой уровень, уровень управления, диспетчеризация",
        "Датчики КИПиА: токовая петля 4-20 мА, напряжение 0-10 В, термопары и Pt100",
        "Промежуточные реле, контакторы, автоматические выключатели и УЗО",
        "Практикум: измерение и калибровка аналоговых каналов на лабораторном стенде",
      ],
    },
    {
      num: "Модуль 2",
      title: "Промышленная схемотехника и чтение документации",
      hours: "44 часа",
      badge: "Курсовой проект",
      summary: "Оформление проектной документации по ГОСТ 21.408-2013 и ЕСКД. Проектирование принципиальных схем Э3 и спецификаций в САПР EPLAN P8 и NanoCAD.",
      lessons: [
        "Правила графического и буквенного обозначения элементов по ГОСТ",
        "Проектирование схемы электрической принципиальной (Э3) в EPLAN P8",
        "Разработка схемы внешних проводок и таблицы кабельных соединений",
        "Курсовая работа: выпуск альбома рабочих схем автоматизации котельной",
      ],
    },
    {
      num: "Модуль 3",
      title: "Архитектура и программирование контроллеров (ПЛК ОВЕН / Siemens)",
      hours: "60 часов",
      badge: "Практикум",
      summary: "Цикл работы ПЛК, организация памяти, сторожевой таймер (Watchdog). Настройка среды CoDeSys v3.5 SP17 и Siemens TIA Portal v18.",
      lessons: [
        "Архитектура современных ПЛК: входы/выходы, модули расширения, скан-тайм",
        "Конфигурирование контроллеров ОВЕН ПЛК210 и Siemens S7-1200",
        "Организация блоков данных, прерывания по времени и обработка аварий",
        "Практикум: реализация циклического управления насосными агрегатами",
      ],
    },
    {
      num: "Модуль 4",
      title: "Языки стандарта МЭК 61131-3 (ST, LD, FBD, SFC)",
      hours: "56 часов",
      badge: "МЭК 61131-3",
      summary: "Глубокое освоение международного стандарта промышленного программирования: Structured Text, лестничная логика (LD), функциональные блоки (FBD) и граф состояний (SFC).",
      lessons: [
        "Язык Structured Text (ST): алгоритмы, циклы, структуры данных, функции и блоки",
        "Язык FBD: стандартные библиотеки таймеров (TON, TOF, TP), триггеры, счетчики",
        "Язык SFC: пошаговое управление сложными технологическими циклами",
        "Практикум: ПИД-регулирование температуры и давления с автонастройкой",
      ],
    },
    {
      num: "Модуль 5",
      title: "Промышленные сети и протоколы (Modbus, Profinet, MQTT)",
      hours: "48 часов",
      badge: "Полевые шины",
      summary: "Физические уровни RS-485 и Ethernet. Протоколы Modbus RTU/TCP, Profinet, CANopen и IoT-протокол передачи телеметрии MQTT.",
      lessons: [
        "Особенности монтажа RS-485: согласование волнового сопротивления, терминаторы",
        "Структура кадров Modbus: функции чтения и записи 0x03, 0x04, 0x06, 0x10",
        "Конфигурирование полевой шины Profinet в TIA Portal",
        "Диагностика сети: поиск коллизий, работа со сниффером Wireshark",
      ],
    },
    {
      num: "Модуль 6",
      title: "Разработка HMI и SCADA-систем (MasterSCADA 4D)",
      hours: "58 часов",
      badge: "Курсовой проект",
      summary: "Создание диспетчерских мнемосхем в MasterSCADA 4D и Siemens WinCC, привязка OPC UA тегов, тренды параметров, аварийные журналы и права доступа.",
      lessons: [
        "Архитектура диспетчеризации: OPC UA/DA серверы и клиенты",
        "Разработка векторных мнемосхем с динамической анимацией клапанов и насосов",
        "Настройка архивации технологических параметров и построение графиков",
        "Курсовая работа: создание диспетчерского пульта водоочистной станции",
      ],
    },
    {
      num: "Модуль 7",
      title: "Кибербезопасность и отказоустойчивость систем управления",
      hours: "34 часа",
      badge: "ГОСТ ИСО 62443",
      summary: "Защита критической информационной инфраструктуры (КИИ). Сегментация сетей DMZ, резервирование серверов и контроллеров, соответствие ГОСТ Р ИСО/МЭК 62443.",
      lessons: [
        "Требования ФЗ-187 к безопасности промышленных систем управления",
        "Резервирование каналов связи и кольцевые топологии промышленных коммутаторов",
        "Разграничение ролей операторов и аудит действий в журналах безопасности",
      ],
    },
    {
      num: "Модуль 8",
      title: "Дипломный проект: разработка комплексной АСУ ТП узла",
      hours: "70 часов",
      badge: "Дипломный проект",
      summary: "Сквозной проект от технического задания до пусконаладки: разработка схем EPLAN, написание кода ПЛК, создание SCADA-экранов и защита перед экспертами «БИС».",
      lessons: [
        "Формирование ТЗ и спецификации оборудования на базе реального объекта",
        "Разработка схемотехники, программного кода и пользовательского интерфейса",
        "Тестирование на физическом стенде с эмуляцией датчиков и сигналов",
        "Публичная защита диплома и получение рекомендательного письма",
      ],
    },
  ];

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultPhone || consultPhone.length < 16) return;
    setSubmitted(true);
    onSuccessLead(consultName, consultPhone);
  };

  return (
    <section id="curriculum" className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="text-[13px] font-semibold text-[#005BFF] mb-2 uppercase tracking-wider">
              Учебный план
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
              Программа обучения — 13 месяцев
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#4A4D55] leading-relaxed mt-2.5">
              Программа выстроена от фундаментальной электротехники до многоуровневых распределенных систем автоматизации.
            </p>
          </div>

          {/* Info pill badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[12px] bg-white border border-gray-200/80 text-[13px] font-semibold text-[#141414] shrink-0 self-start lg:self-auto">
            <span>13 месяцев</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#767980]">136 ч. теории</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#005BFF]">406 ч. практики</span>
          </div>
        </div>

        {/* Netology Style Accordion: Divided list, NOT separate rounded boxes */}
        <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
          {modules.map((mod, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                {/* Accordion Header Row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group hover:bg-white/40 px-2 rounded-[8px] transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                    <span className="text-[13px] text-[#767980] font-medium shrink-0">
                      {mod.num}
                    </span>

                    <span className="text-[18px] md:text-[20px] font-bold text-[#141414] group-hover:text-[#005BFF] transition-colors leading-snug truncate sm:whitespace-normal">
                      {mod.title}
                    </span>

                    {mod.badge && (
                      <span className="hidden md:inline-block text-[11px] font-semibold px-2 py-0.5 rounded-[6px] bg-gray-100 text-[#4A4D55] shrink-0">
                        {mod.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[13px] text-[#767980] hidden sm:block font-medium">
                      {mod.hours}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 group-hover:text-[#005BFF] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#005BFF]" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="pb-6 pt-1 pl-2 sm:pl-16 text-[14px] text-[#4A4D55] leading-relaxed max-w-[840px] animate-in fade-in duration-150">
                    <p className="mb-3.5 font-medium text-[#141414]">
                      {mod.summary}
                    </p>

                    <ul className="space-y-2">
                      {mod.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#4A4D55]">
                          <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bonus Courses Section (Netology Style) */}
        <div className="mt-14 pt-10 border-t border-gray-200">
          <div className="max-w-2xl mb-8">
            <div className="text-[12px] font-bold uppercase tracking-wider text-[#005BFF] mb-2">
              Бонусы к программе
            </div>
            <h3 className="text-[24px] md:text-[30px] font-bold text-[#141414] leading-tight">
              В подарок — 3 курса для развития в профессии
            </h3>
            <p className="text-[14px] md:text-[15px] text-[#5A606D] mt-2 leading-relaxed">
              Каждый студент бесплатно получает доступ к профильным дополнительным курсам,
              которые дадут весомое преимущество на технических собеседованиях.
            </p>
          </div>

          {/* Mobile swipe hint */}
          <div className="flex items-center justify-between text-[12px] text-[#767980] mb-3 md:hidden px-1">
            <span>3 бонусных курса</span>
            <span>Листайте бонусы &rarr;</span>
          </div>

          {/* Bonus Courses - Horizontal snap carousel on mobile, 3-col grid on desktop */}
          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-2">
            {/* Bonus 1 */}
            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-[16px] p-6 border border-gray-200/80 shadow-none flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7A5F] bg-[#E8F7F3] px-2.5 py-1 rounded-full">
                    В подарок
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">32 ак. часа</span>
                </div>
                <h4 className="text-[17px] font-bold text-[#141414] leading-snug mb-2">
                  Английский для инженеров
                </h4>
                <p className="text-[13px] text-[#5A606D] leading-relaxed">
                  Чтение технической документации и спецификаций Siemens, Schneider, Wago,
                  работа с международными стандартами ISO и ГОСТ.
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center text-[12px] font-medium text-gray-500">
                Бесплатно в составе программы
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-[16px] p-6 border border-gray-200/80 shadow-none flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7A5F] bg-[#E8F7F3] px-2.5 py-1 rounded-full">
                    В подарок
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">48 ак. часов</span>
                </div>
                <h4 className="text-[17px] font-bold text-[#141414] leading-snug mb-2">
                  Основы Python для АСУ ТП
                </h4>
                <p className="text-[13px] text-[#5A606D] leading-relaxed">
                  Парсинг Modbus и MQTT телеметрии, скрипты автоматической обработки логов,
                  визуализация графиков и передача данных в базы данных SQL.
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center text-[12px] font-medium text-gray-500">
                Бесплатно в составе программы
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-[16px] p-6 border border-gray-200/80 shadow-none flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7A5F] bg-[#E8F7F3] px-2.5 py-1 rounded-full">
                    В подарок
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">24 ак. часа</span>
                </div>
                <h4 className="text-[17px] font-bold text-[#141414] leading-snug mb-2">
                  Git для контроля версий
                </h4>
                <p className="text-[13px] text-[#5A606D] leading-relaxed">
                  Версионирование алгоритмов и проектов в CoDeSys и TIA Portal, командная
                  разработка в корпоративном GitLab и создание резервных копий.
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center text-[12px] font-medium text-gray-500">
                Бесплатно в составе программы
              </div>
            </div>
          </div>
        </div>

        {/* Compact Consultation Lead Form */}
        <div className="rounded-[20px] bg-white p-6 md:p-8 border border-gray-200/80 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-1.5">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#141414] leading-tight">
                Остались вопросы по учебному плану?
              </h3>
              <p className="text-[14px] text-[#4A4D55] leading-relaxed">
                Оставьте контакты, и методист центра «БИС» подробно расскажет
                о структуре уроков, покажет платформу и рассчитает персональный график обучения.
              </p>
            </div>

            <div className="lg:col-span-6">
              {submitted ? (
                <div className="p-4 rounded-[12px] bg-[#E8F7F3] border border-[#0D7A5F]/20 text-[#0D7A5F] text-center space-y-1">
                  <div className="font-bold text-[15px]">Спасибо за обращение!</div>
                  <div className="text-[13px]">Методист перезвонит вам в ближайшее время.</div>
                </div>
              ) : (
                <form onSubmit={handleConsultSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-[10px] bg-[#F5F6F8] border border-gray-200 text-[#141414] placeholder:text-[#767980] focus:outline-none focus:border-[#005BFF] text-[14px]"
                    />
                  </div>
                  <div className="flex-1">
                    <PhoneInput
                      value={consultPhone}
                      onChange={setConsultPhone}
                      placeholder="+7 (___) ___-__-__"
                      className="!bg-[#F5F6F8] !rounded-[10px] text-[14px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] text-white font-semibold text-[14px] transition-colors shrink-0"
                  >
                    Консультация
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
