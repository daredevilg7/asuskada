"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Sparkles, ArrowDown, BookOpen, Heart, ShieldCheck } from "lucide-react";
import PhoneInput from "./PhoneInput";
import { assetPath } from "@/lib/assets";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onSuccessLead: (name: string, phone: string) => void;
}

export default function HeroSection({
  onOpenConsultation,
  onSuccessLead,
}: HeroSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 16) return;
    setSubmitted(true);
    onSuccessLead(name, phone);
  };

  return (
    <section
      className="relative bg-[#0E1218] text-white pt-10 md:pt-14 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 75% 30%, rgba(13, 148, 136, 0.35) 0%, rgba(14, 18, 24, 0) 65%), #0E1218",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Clean Subtitle Metadata (Netology Style) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] md:text-[14px]">
              <span className="text-gray-400 font-medium tracking-wide uppercase text-[12px]">
                Профессия
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:inline-block" />
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Check className="w-4 h-4 text-[#00C48C] stroke-[2.5]" />
                <span>Включает программу трудоустройства</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:inline-block" />
              <span className="text-gray-300 underline decoration-dotted decoration-gray-500 underline-offset-4" title="Федеральный государственный образовательный стандарт">
                Соответствует ФГОС
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-[44px] md:text-[54px] font-bold leading-[1.1] tracking-[-0.03em] text-white">
              Инженер автоматизации и АСУ ТП
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] text-gray-300 leading-[1.5] max-w-xl">
              Освойте разработку алгоритмов управления, программирование промышленных ПЛК (Siemens, ОВЕН)
              и систем SCADA на стендах компании «БИС». Получите официальный диплом и гарантированную помощь в карьере.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="bg-[#005BFF] hover:bg-[#004BD6] active:bg-[#003EB0] text-white font-bold h-12 px-7 rounded-[10px] text-[15px] transition-all flex items-center gap-2"
              >
                <span>К тарифам</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#curriculum"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold h-12 px-6 rounded-[10px] text-[15px] border border-white/10 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-cyan-300" />
                <span>Смотреть программу</span>
              </a>
            </div>

            {/* Trust items */}
            <div className="pt-3 flex flex-wrap items-center gap-5 text-[13px] text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00C48C]" />
                <span>Государственная лицензия № Л035-01298</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C]" />
                <span>Стажировка в проектном бюро «БИС»</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-layered 3D Graphic + Compact Lead Form */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end">
            {/* 3D Manipulator claw floating behind */}
            <div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] -mb-28 z-0 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]">
              <Image
                src={assetPath("/images/hero-robotic-arm.jpg")}
                alt="3D Industrial Manipulator"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Lead Form: bg-white rounded-[20px] p-6 shadow-2xl relative w-full max-w-[360px] */}
            <div className="relative z-10 w-full max-w-[360px] bg-white text-[#141414] rounded-[20px] p-6 shadow-2xl overflow-hidden border border-gray-100">
              {/* Corner sticker: bg-[#CEF836] text-black font-extrabold text-[10px] tracking-wider py-1 px-8 rotate-45 */}
              <div className="absolute -right-8 top-4 bg-[#CEF836] text-black font-extrabold text-[10px] tracking-wider py-1 px-8 rotate-45 shadow-sm">
                АКЦИЯ -45%
              </div>

              <h3 className="text-[18px] font-bold text-[#141414] leading-snug pr-6 mb-1">
                Поможем подобрать обучение
              </h3>
              <p className="text-[13px] text-[#6B7280] mb-4">
                Ответим на вопросы по программе и поможем закрепить скидку.
              </p>

              {submitted ? (
                <div className="p-4 rounded-[10px] bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-1">
                  <div className="font-bold text-[14px]">Заявка принята!</div>
                  <div className="text-[12px] text-emerald-700">
                    Методист свяжется с вами в течение 10 минут.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-[#F5F6F8] border border-transparent focus:border-[#005BFF] focus:bg-white rounded-[10px] h-11 px-3.5 text-[14px] text-[#141414] placeholder:text-gray-400 focus:outline-none transition-all font-medium"
                    />
                  </div>
                  <div>
                    <PhoneInput
                      value={phone}
                      onChange={setPhone}
                      placeholder="+7 (___) ___-__-__"
                      className="!bg-[#F5F6F8] !border-transparent focus:!border-[#005BFF] focus:!bg-white !rounded-[10px] !h-11 !px-3.5 !text-[14px] !py-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#005BFF] hover:bg-[#004BD6] active:bg-[#003EB0] text-white font-bold h-11 rounded-[10px] text-[14px] transition-all shadow-none"
                  >
                    Получить консультацию
                  </button>
                  <p className="text-[11px] text-[#9CA3AF] text-center leading-tight">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#privacy" className="underline hover:text-gray-700">
                      политикой ПДН
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Integrated Bottom Row (4 Cards) - Horizontal swipeable snap carousel on mobile, 4-col grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-3 mt-12 pb-8 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
          {/* Card 1: Когда */}
          <div className="w-[78vw] sm:w-[280px] lg:w-auto shrink-0 snap-start bg-white rounded-[16px] p-5 shadow-sm text-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#767980]">
                Когда
              </div>
              <div className="text-[16px] md:text-[17px] font-bold text-[#141414] mt-1 leading-snug">
                21 сентября 2026 — 28 октября 2027
              </div>
            </div>
            <div className="text-[12px] text-[#6B7280] mt-2">
              Группа с куратором-инженером «БИС»
            </div>
          </div>

          {/* Card 2: Программа */}
          <div className="w-[78vw] sm:w-[280px] lg:w-auto shrink-0 snap-start bg-white rounded-[16px] p-5 shadow-sm text-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#767980]">
                Программа
              </div>
              <div className="text-[16px] md:text-[17px] font-bold text-[#141414] mt-1 leading-snug">
                13 месяцев обучения
              </div>
            </div>
            <div className="text-[12px] text-[#6B7280] mt-2">
              Обновлена под стандарты 2026 года
            </div>
          </div>

          {/* Card 3: Практика */}
          <div className="w-[78vw] sm:w-[280px] lg:w-auto shrink-0 snap-start bg-white rounded-[16px] p-5 shadow-sm text-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#767980]">
                Практика
              </div>
              <div className="text-[16px] md:text-[17px] font-bold text-[#141414] mt-1 leading-snug">
                4 масштабных проекта
              </div>
            </div>
            <div className="text-[12px] text-[#6B7280] mt-2">
              На основе реальных ТЗ производств
            </div>
          </div>

          {/* Card 4: Документ */}
          <div className="w-[78vw] sm:w-[280px] lg:w-auto shrink-0 snap-start bg-white rounded-[16px] p-5 shadow-sm text-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#767980]">
                Документ
              </div>
              <div className="text-[16px] md:text-[17px] font-bold text-[#141414] mt-1 leading-snug">
                Диплом о переподготовке
              </div>
            </div>
            <div className="text-[12px] text-[#6B7280] mt-2">
              Вносится в реестр ФИС ФРДО
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
