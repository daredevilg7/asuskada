"use client";

import React from "react";
import { Check, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onSelectTariff: (tariffName: string) => void;
}

export default function PricingSection({ onSelectTariff }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-10 md:py-14 bg-[#141516] text-white scroll-mt-16 md:scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="text-[12px] font-bold text-cyan-400 mb-1.5 uppercase tracking-wider">
            Инвестиция в профессию
          </div>
          <h2 className="text-[26px] md:text-[34px] font-bold leading-tight text-white">
            Выберите свой вариант программы обучения
          </h2>
          <p className="text-[13.5px] md:text-[14.5px] text-gray-400 leading-relaxed mt-2 max-w-xl mx-auto">
            Беспроцентная рассрочка без первого взноса на 36 месяцев. Первый платёж списывается только через месяц.
          </p>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex items-center justify-between text-[12px] text-gray-400 mb-3 md:hidden px-1 max-w-3xl mx-auto">
          <span>2 формата обучения</span>
          <span>Листайте тарифы &rarr;</span>
        </div>

        {/* Pricing Cards: 2 Contrast White Cards on Dark Background */}
        <div className="flex md:grid md:grid-cols-2 gap-5 lg:gap-6 max-w-3xl lg:max-w-4xl mx-auto items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-auto md:px-0 pb-3 md:pb-0">
          {/* Tariff 1: Базовый */}
          <div className="w-[86vw] sm:w-[340px] md:w-auto shrink-0 snap-start bg-white rounded-[18px] p-5 sm:p-6 text-[#141414] relative flex flex-col justify-between shadow-lg border border-transparent">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#767980]">
                  Тариф 1 • Базовый
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#CEF836] text-black text-[11.5px] font-extrabold">
                  Скидка -45%
                </span>
              </div>

              <h3 className="text-[20px] font-bold text-[#141414] leading-tight">
                Инженер по автоматизации
              </h3>
              <p className="text-[13px] text-[#767980] mt-1 leading-snug">
                Полная программа подготовки с нуля до оффера с гарантией трудоустройства.
              </p>

              {/* Price block */}
              <div className="my-3.5 pb-3.5 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] md:text-[32px] font-black text-[#141414] leading-none">
                    2 905 ₽
                  </span>
                  <span className="text-[14px] font-bold text-[#767980]">
                    / мес
                  </span>
                  <span className="text-[13px] text-gray-400 line-through ml-1.5">
                    5 280 ₽
                  </span>
                </div>
                <div className="text-[12px] text-[#767980] mt-1">
                  Рассрочка на 36 мес. Разовый платёж: <strong className="text-[#141414]">88 900 ₽</strong>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-2 my-3 text-[13px] text-[#4A4D55]">
                {[
                  "13 месяцев структурированного обучения (8 модулей)",
                  "4 масштабных проекта в портфолио на реальных ТЗ",
                  "Официальный диплом о переподготовке (реестр ФИС ФРДО)",
                  "Доступ ко всем лекциям и обновлениям курса навсегда",
                  "Проверка домашних заданий инженерами «БИС» за 24 часа",
                  "Помощь Центра карьеры: резюме и тренировочные интервью",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 leading-snug">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectTariff("Базовый: Инженер по автоматизации")}
              className="w-full h-11 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] text-white font-semibold text-[14px] transition-colors mt-3"
            >
              Записаться
            </button>
          </div>

          {/* Tariff 2: Индивидуальный с наставником (РЕКОМЕНДУЕМ) */}
          <div className="w-[86vw] sm:w-[340px] md:w-auto shrink-0 snap-start bg-white rounded-[18px] p-5 sm:p-6 text-[#141414] relative flex flex-col justify-between shadow-xl border-2 border-[#005BFF]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#005BFF]">
                    Тариф 2 • Индивидуальный
                  </span>
                  <span className="px-2 py-0.5 rounded-[6px] bg-[#005BFF] text-white text-[10px] font-bold uppercase tracking-wider">
                    Рекомендуем
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#CEF836] text-black text-[11.5px] font-extrabold shrink-0">
                  Хит продаж -45%
                </span>
              </div>

              <h3 className="text-[20px] font-bold text-[#141414] leading-tight">
                Индивидуальный с наставником
              </h3>
              <p className="text-[13px] text-[#767980] mt-1 leading-snug">
                Персональные консультации эксперта «БИС», code review и стажировка.
              </p>

              {/* Price block */}
              <div className="my-3.5 pb-3.5 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] md:text-[32px] font-black text-[#141414] leading-none">
                    3 263 ₽
                  </span>
                  <span className="text-[14px] font-bold text-[#767980]">
                    / мес
                  </span>
                  <span className="text-[13px] text-gray-400 line-through ml-1.5">
                    5 930 ₽
                  </span>
                </div>
                <div className="text-[12px] text-[#767980] mt-1">
                  Рассрочка на 36 мес. Разовый платёж: <strong className="text-[#141414]">99 900 ₽</strong>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-2 my-3 text-[13px] text-[#4A4D55]">
                {[
                  "Все опции Базового тарифа",
                  "5 индивидуальных консультаций с главным инженером «БИС»",
                  "Гарантированная стажировка в проектном бюро «БИС»",
                  "Приоритетная проверка домашних заданий за 12 часов",
                  "Глубокий code review ваших алгоритмов ПЛК",
                  "Прямое направление резюме техническим директорам партнеров",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 leading-snug">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectTariff("Индивидуальный с наставником")}
              className="w-full h-11 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] text-white font-semibold text-[14px] transition-colors mt-3"
            >
              Записаться с наставником
            </button>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 max-w-3xl lg:max-w-4xl mx-auto p-4 md:p-5 rounded-[14px] bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-3.5">
          <div className="w-9 h-9 rounded-[10px] bg-[#00C48C]/20 text-[#00C48C] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <div className="font-bold text-white text-[14px]">
              Гарантия возврата средств в первые 14 дней
            </div>
            <div className="text-[12.5px] text-gray-400 mt-0.5 leading-relaxed">
              Если в течение первых двух недель обучения вы решите, что программа вам не подходит,
              мы вернем 100% средств без скрытых условий и комиссий.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

