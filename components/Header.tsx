"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/assets";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between gap-4">
        {/* Brand Logo: Clean, natural without square container or artificial badge */}
        <a href="#" className="flex items-center shrink-0 group">
          <Image
            src={assetPath("/images/bis-logo-clean.png")}
            alt="БИС — Баланс Инженерных Систем"
            width={124}
            height={40}
            className="h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
            priority
          />
        </a>

        {/* Desktop Nav: Clean, single line, no wrapping */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <a
            href="#about-profession"
            className="px-3 py-2 rounded-[8px] text-[14px] font-medium text-[#4A4D55] hover:text-[#005BFF] hover:bg-gray-50/80 transition-colors whitespace-nowrap"
          >
            О профессии
          </a>
          <a
            href="#curriculum"
            className="px-3 py-2 rounded-[8px] text-[14px] font-medium text-[#4A4D55] hover:text-[#005BFF] hover:bg-gray-50/80 transition-colors whitespace-nowrap"
          >
            Программа
          </a>
          <a
            href="#portfolio"
            className="px-3 py-2 rounded-[8px] text-[14px] font-medium text-[#4A4D55] hover:text-[#005BFF] hover:bg-gray-50/80 transition-colors whitespace-nowrap"
          >
            Портфолио
          </a>
          <a
            href="#experts"
            className="px-3 py-2 rounded-[8px] text-[14px] font-medium text-[#4A4D55] hover:text-[#005BFF] hover:bg-gray-50/80 transition-colors whitespace-nowrap"
          >
            Преподаватели
          </a>
          <a
            href="#pricing"
            className="px-3 py-2 rounded-[8px] text-[14px] font-medium text-[#4A4D55] hover:text-[#005BFF] hover:bg-gray-50/80 transition-colors whitespace-nowrap"
          >
            Тарифы
          </a>
          <a
            href="#reviews"
            className="px-3 py-2 rounded-[8px] text-[14px] font-medium text-[#4A4D55] hover:text-[#005BFF] hover:bg-gray-50/80 transition-colors whitespace-nowrap"
          >
            Отзывы
          </a>
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          {/* Phone block */}
          <a
            href="tel:+78005501487"
            className="hidden md:flex items-center gap-2.5 group whitespace-nowrap"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005BFF] flex items-center justify-center group-hover:bg-[#005BFF] group-hover:text-white transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[14px] font-bold text-[#141414] group-hover:text-[#005BFF] transition-colors leading-tight whitespace-nowrap">
                8 (800) 550-14-87
              </span>
              <span className="text-[11px] text-[#767980] leading-tight whitespace-nowrap font-normal">
                Бесплатно по РФ
              </span>
            </div>
          </a>

          {/* Primary CTA button */}
          <button
            onClick={onOpenConsultation}
            className="h-10 md:h-11 px-5 md:px-6 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] active:bg-[#003EB0] text-white font-semibold text-[14px] transition-all shadow-sm hover:shadow-md flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
          >
            <span>Записаться</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[8px] border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors lg:hidden"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full border-b border-[#E5E7EB] bg-white px-5 pt-4 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 z-50">
          <nav className="flex flex-col space-y-1 font-medium text-[15px] text-[#141414]">
            <a
              href="#about-profession"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-[8px] hover:bg-gray-50 hover:text-[#005BFF] transition-colors"
            >
              О профессии
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-[8px] hover:bg-gray-50 hover:text-[#005BFF] transition-colors"
            >
              Программа
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-[8px] hover:bg-gray-50 hover:text-[#005BFF] transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#experts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-[8px] hover:bg-gray-50 hover:text-[#005BFF] transition-colors"
            >
              Преподаватели
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-[8px] hover:bg-gray-50 hover:text-[#005BFF] transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-[8px] hover:bg-gray-50 hover:text-[#005BFF] transition-colors"
            >
              Отзывы
            </a>
          </nav>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+78005501487"
              className="flex items-center gap-3 px-3 py-2 text-[15px] font-bold text-[#141414]"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005BFF] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span>8 (800) 550-14-87</span>
                <span className="text-[12px] text-[#767980] font-normal">Бесплатно по РФ</span>
              </div>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full h-11 rounded-[10px] bg-[#005BFF] text-white text-[15px] font-semibold text-center flex items-center justify-center gap-2"
            >
              <span>Записаться на курс</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
