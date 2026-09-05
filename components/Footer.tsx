"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, FileCheck } from "lucide-react";
import { assetPath } from "@/lib/assets";

export default function Footer() {
  return (
    <footer id="about-company" className="bg-[#0E1218] text-gray-400 pt-16 pb-16 md:pb-12 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
          {/* Brand & Descriptor */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image
                src={assetPath("/images/bis-logo-white-clean.png")}
                alt="БИС — Баланс Инженерных Систем"
                width={124}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-[14px] text-gray-400 leading-relaxed max-w-sm">
              Инженерный холдинг и центр подготовки специалистов в сфере автоматизации
              производств, промышленной робототехники и SCADA-систем.
            </p>

            <div className="space-y-1.5 pt-1 text-[12px] text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00C48C] shrink-0" />
                <span>Лицензия на образовательную деятельность № Л035-01298</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-gray-500 shrink-0" />
                <span>ИНН 7724891040 • ОГРН 1137746872390</span>
              </div>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div className="space-y-3">
            <div className="text-white font-bold text-[14px] uppercase tracking-wider">
              Навигация
            </div>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#about-profession" className="hover:text-white transition-colors">
                  О профессии
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">
                  Программа курса
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Дипломные проекты
                </a>
              </li>
              <li>
                <a href="#experts" className="hover:text-white transition-colors">
                  Преподаватели
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Тарифы и рассрочка
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Отзывы выпускников
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div className="space-y-3">
            <div className="text-white font-bold text-[14px] uppercase tracking-wider">
              Экосистема «БИС»
            </div>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href="https://bis-rf.ru"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Официальный сайт bis-rf.ru
                </a>
              </li>
              <li>
                <span className="text-gray-500">Инжиниринговое бюро «БИС»</span>
              </li>
              <li>
                <span className="text-gray-500">Сборочный цех шкафов управления</span>
              </li>
              <li>
                <span className="text-gray-500">Центр карьеры и стажировки</span>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Частые вопросы (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="space-y-3">
            <div className="text-white font-bold text-[14px] uppercase tracking-wider">
              Контакты
            </div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href="tel:+78005501487"
                  className="flex items-center gap-2 text-white font-bold hover:text-[#005BFF] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#005BFF]" />
                  <span>8 (800) 550-14-87</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+79264380770"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>+7 (926) 438-07-70</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@bis-rf.ru"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>office@bis-rf.ru</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-[13px] text-gray-500 leading-snug">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>г. Москва, ул. Производственная, д. 25</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-gray-500">
          <div>
            © 2026 БИС. Все права защищены.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-gray-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">
              Договор оферты
            </a>
            <a href="#license" className="hover:text-gray-400 transition-colors">
              Лицензия № Л035-01298
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
