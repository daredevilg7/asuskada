"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Смогу ли я учиться, если никогда не программировал?",
      a: "Да, программа специально разработана для комфортного старта с нуля. В первых модулях мы подробно разбираем базовые принципы электротехники, чтение схем и основы логики. Программирование ПЛК начинается с наглядных графических языков стандарта МЭК (LD и FBD), которые понятны даже без опыта.",
    },
    {
      q: "Какой компьютер нужен для работы с симуляторами?",
      a: "Подойдет обычный ПК или ноутбук на базе Windows 10/11 с процессором Core i5 / Ryzen 5, от 8 ГБ оперативной памяти и 30 ГБ свободного места на SSD. Для пользователей macOS мы предоставляем готовую виртуальную машину с предустановленными средами CoDeSys и TIA Portal, либо удаленный доступ к серверам «БИС».",
    },
    {
      q: "Имеет ли юридическую силу выдаваемый диплом?",
      a: "Да, абсолютно. Образовательный центр «БИС» действует на основании государственной лицензии на образовательную деятельность № Л035-01298. Диплом о профессиональной переподготовке вносится в Федеральный реестр ФИС ФРДО РФ и подтверждает официальное право работать инженером АСУ ТП на любых предприятиях страны.",
    },
    {
      q: "Как совмещать курс с основной работой?",
      a: "Все лекции и пошаговые разборы записаны в высоком разрешении и доступны на образовательной платформе 24/7. Вы можете смотреть их в любое удобное время. Практические проекты проверяются инженерами-наставниками с развернутой обратной связью за 24 часа (или 12 часов на тарифе с наставником).",
    },
    {
      q: "Что делать, если мне потребуется пауза?",
      a: "Вы можете воспользоваться бесплатной академической заморозкой обучения на срок до 6 месяцев без потери доступа и прогресса. При возобновлении вы продолжите ровно с того места, где остановились, или сможете присоединиться к следующему потоку.",
    },
    {
      q: "Как устроена беспроцентная рассрочка?",
      a: "Рассрочка оформляется онлайн за 2 минуты без первого взноса и без скрытых комиссий на срок до 36 месяцев. Проценты за вас полностью берет на себя образовательный центр «БИС». Первый ежемесячный платеж вносится только через 30 дней после начала занятий.",
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-8">
          <div className="text-[13px] font-semibold text-[#005BFF] mb-2 uppercase tracking-wider">
            Вопросы и ответы
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.025em] text-[#141414]">
            Отвечаем на вопросы
          </h2>
        </div>

        {/* Netology Divided List Accordion */}
        <div className="border-t border-b border-gray-200 divide-y divide-gray-200 max-w-4xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group hover:bg-white/40 px-2 rounded-[8px] transition-colors"
                >
                  <span className="text-[17px] md:text-[18px] font-bold text-[#141414] group-hover:text-[#005BFF] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 group-hover:text-[#005BFF] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#005BFF]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 px-2 text-[14px] text-[#4A4D55] leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
