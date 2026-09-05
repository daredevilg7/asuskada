"use client";

import React, { useState } from "react";
import { X, Check, ShieldCheck } from "lucide-react";
import PhoneInput from "./PhoneInput";

interface ConsultationModalProps {
  isOpen: boolean;
  tariffName?: string | null;
  onClose: () => void;
  onSuccessLead: (name: string, phone: string) => void;
}

export default function ConsultationModal({
  isOpen,
  tariffName,
  onClose,
  onSuccessLead,
}: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 16) return;
    setSubmitted(true);
    onSuccessLead(name, phone);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-[20px] p-6 md:p-8 border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-5 space-y-1.5">
          {tariffName ? (
            <span className="inline-block px-2.5 py-0.5 rounded-[6px] bg-blue-50 text-[#005BFF] text-[12px] font-semibold">
              Тариф: {tariffName}
            </span>
          ) : (
            <span className="inline-block px-2.5 py-0.5 rounded-[6px] bg-[#E8F7F3] text-[#0D7A5F] text-[12px] font-semibold">
              Бесплатная консультация
            </span>
          )}

          <h3 className="text-[20px] md:text-[22px] font-bold text-[#141414] leading-tight">
            {tariffName ? "Запись на курс «Инженер АСУ ТП»" : "Поможем выбрать траекторию"}
          </h3>
          <p className="text-[14px] text-[#4A4D55] leading-relaxed">
            Оставьте телефон, и мы ответим на вопросы об обучении, графике, рассрочке
            и зафиксируем цену со скидкой -45%.
          </p>
        </div>

        {submitted ? (
          <div className="p-5 rounded-[12px] bg-[#E8F7F3] border border-[#0D7A5F]/20 text-[#0D7A5F] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#0D7A5F]/10 text-[#0D7A5F] flex items-center justify-center mx-auto">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="text-[16px] font-bold">Заявка отправлена!</div>
            <p className="text-[13px] text-[#0D7A5F]/80">
              Куратор образовательного центра «БИС» свяжется с вами в течение 10 минут.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-5 py-2 rounded-[10px] bg-[#005BFF] text-white text-[13px] font-semibold"
            >
              Отлично
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[12px] font-semibold text-[#141414] mb-1">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Как к вам обращаться"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-[10px] bg-[#F5F6F8] border border-gray-200 text-[#141414] placeholder:text-[#767980] focus:outline-none focus:border-[#005BFF] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#141414] mb-1">
                Номер телефона
              </label>
              <PhoneInput
                value={phone}
                onChange={setPhone}
                placeholder="+7 (___) ___-__-__"
                className="!bg-[#F5F6F8] !rounded-[10px] text-[14px]"
              />
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#767980] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#0D7A5F] shrink-0" />
              <span>Данные защищены в соответствии с 152-ФЗ РФ.</span>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] text-white font-semibold text-[15px] transition-colors mt-2"
            >
              {tariffName ? "Забронировать место" : "Получить консультацию"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
