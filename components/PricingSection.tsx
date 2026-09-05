"use client";

import React from "react";
import { Check, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onSelectTariff: (tariffName: string) => void;
}

export default function PricingSection({ onSelectTariff }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-[#141516] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[13px] font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
            Инвестиция в профессию
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-white">
            Выберите свой вариант программы обучения
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-400 leading-relaxed mt-3">
            Беспроцентная рассрочка без первого взноса на 36 месяцев. Первый платеж списывается только через месяц.
          </p>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex items-center justify-between text-[12px] text-gray-400 mb-4 lg:hidden px-1 max-w-4xl mx-auto">
          <span>2 формата обучения</span>
          <span>Листайте тарифы &rarr;</span>
        </div>

        {/* Pricing Cards: 2 Contrast White Cards on Dark Background */}
        <div className="flex lg:grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 pb-4 lg:pb-0">
          {/* Tariff 1: Базовый */}
          <div className="w-[88vw] sm:w-[380px] lg:w-auto shrink-0 snap-start bg-white rounded-[20px] p-7 text-[#141414] relative flex flex-col justify-between shadow-none border border-transparent">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#767980]">
                  Тариф 1 • Базовый
                </span>
                <span className="px-2.5 py-0.5 rounded-[6px] bg-[#CEF836] text-black text-[12px] font-bold">
                  Скидка -45%
                </span>
              </div>

              <h3 className="text-[22px] font-bold text-[#141414] leading-tight">
                Инженер по автоматизации
              </h3>
              <p className="text-[13px] text-[#767980] mt-1.5 leading-snug">
                Полная программа подготовки с нуля до оффера с гарантией трудоустройства.
              </p>

              {/* Price block */}
              <div className="mt-5 pb-5 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-black text-[#141414] leading-tight">
                    2 905 ₽
                  </span>
                  <span className="text-[16px] font-bold text-[#767980]">
                    / мес
                  </span>
                  <span className="text-[14px] text-gray-400 line-through ml-2">
                    5 280 ₽
                  </span>
                </div>
                <div className="text-[12px] text-[#767980] mt-1">
                  Рассрочка на 36 мес. Разовый платеж: <strong className="text-[#141414]">88 900 ₽</strong>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-2.5 my-6 text-[14px] text-[#4A4D55]">
                {[
                  "13 месяцев структурированного обучения (8 модулей)",
                  "4 масштабных проекта в портфолио на реальных ТЗ",
                  "Официальный диплом о переподготовке (реестр ФИС ФРДО)",
                  "Доступ ко всем лекциям и обновлениям курса навсегда",
                  "Проверка домашних заданий инженерами «БИС» за 24 часа",
                  "Помощь Центра карьеры: резюме и тренировочные интервью",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectTariff("Базовый: Инженер по автоматизации")}
              className="w-full h-12 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] text-white font-semibold text-[15px] transition-colors mt-4"
            >
              Записаться
            </button>
          </div>

          {/* Tariff 2: Индивидуальный с наставником (РЕКОМЕНДУЕМ) */}
          <div className="w-[88vw] sm:w-[380px] lg:w-auto shrink-0 snap-start bg-white rounded-[20px] p-7 text-[#141414] relative flex flex-col justify-between shadow-none border-2 border-[#005BFF]">
            {/* Recommendation badge */}
            <div className="absolute -top-3.5 left-7 px-3.5 py-1 rounded-t-[8px] bg-[#005BFF] text-white text-[11px] font-bold uppercase tracking-wider">
              Рекомендуем
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#005BFF]">
                  Тариф 2 • Индивидуальный
                </span>
                <span className="px-2.5 py-0.5 rounded-[6px] bg-[#CEF836] text-black text-[12px] font-bold">
                  Хит продаж -45%
                </span>
              </div>

              <h3 className="text-[22px] font-bold text-[#141414] leading-tight">
                Индивидуальный с наставником
              </h3>
              <p className="text-[13px] text-[#767980] mt-1.5 leading-snug">
                Персональные консультации эксперта «БИС», code review и стажировка.
              </p>

              {/* Price block */}
              <div className="mt-5 pb-5 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-black text-[#141414] leading-tight">
                    3 263 ₽
                  </span>
                  <span className="text-[16px] font-bold text-[#767980]">
                    / мес
                  </span>
                  <span className="text-[14px] text-gray-400 line-through ml-2">
                    5 930 ₽
                  </span>
                </div>
                <div className="text-[12px] text-[#767980] mt-1">
                  Рассрочка на 36 мес. Разовый платеж: <strong className="text-[#141414]">99 900 ₽</strong>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-2.5 my-6 text-[14px] text-[#4A4D55]">
                {[
                  "Все опции Базового тарифа",
                  "5 индивидуальных консультаций с главным инженером «БИС»",
                  "Гарантированная стажировка в проектном бюро «БИС»",
                  "Приоритетная проверка домашних заданий за 12 часов",
                  "Глубокий code review ваших алгоритмов ПЛК",
                  "Прямое направление резюме техническим директорам партнеров",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#005BFF] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectTariff("Индивидуальный с наставником")}
              className="w-full h-12 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] text-white font-semibold text-[15px] transition-colors mt-4"
            >
              Записаться с наставником
            </button>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-5 md:p-6 rounded-[16px] bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-[10px] bg-[#00C48C]/20 text-[#00C48C] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <div className="font-bold text-white text-[15px]">
              Гарантия возврата средств в первые 14 дней
            </div>
            <div className="text-[13px] text-gray-400 mt-0.5 leading-relaxed">
              Если в течение первых двух недель обучения вы решите, что программа вам не подходит,
              мы вернем 100% средств без скрытых условий и комиссий.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
