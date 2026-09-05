"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, Sparkles, Gift } from "lucide-react";
import PhoneInput from "./PhoneInput";
import { assetPath } from "@/lib/assets";

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLead: (name: string, phone: string) => void;
}

export default function GiftModal({ isOpen, onClose, onSuccessLead }: GiftModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 16 || !agreed) return;
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
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with 3D gift image */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative w-16 h-16 rounded-[12px] overflow-hidden shrink-0 bg-[#0E1218] p-1 border border-gray-200">
            <Image
              src={assetPath("/images/bonus-gift-box.jpg")}
              alt="3D Подарочная коробка"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[6px] bg-[#CEF836] text-black text-[11px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" />
              Спецпредложение
            </div>
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#141414] leading-tight">
              Скидка -45% и 3 курса в подарок
            </h3>
          </div>
        </div>

        <p className="text-[14px] text-[#4A4D55] leading-relaxed mb-5">
          Зафиксируйте максимальную скидку на курс «Инженер АСУ ТП» и получите в подарок комплект
          из 3 прикладных курсов по английскому языку, Python и Git.
        </p>

        {submitted ? (
          <div className="p-5 rounded-[12px] bg-[#E8F7F3] border border-[#0D7A5F]/20 text-[#0D7A5F] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#0D7A5F]/10 text-[#0D7A5F] flex items-center justify-center mx-auto">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="text-[16px] font-bold">Скидка и подарки забронированы!</div>
            <p className="text-[13px] text-[#0D7A5F]/80">
              Куратор образовательного центра «БИС» свяжется с вами в течение 10 минут.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-5 py-2 rounded-[10px] bg-[#005BFF] text-white text-[13px] font-semibold"
            >
              Закрыть
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
                placeholder="Иван Иванов"
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

            {/* Checkbox */}
            <label className="flex items-start gap-2 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded border-gray-300 text-[#005BFF] focus:ring-[#005BFF]"
              />
              <span className="text-[11px] text-[#767980] leading-snug">
                Я даю согласие на обработку персональных данных в соответствии с 152-ФЗ РФ.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed}
              className="w-full h-12 rounded-[10px] bg-[#005BFF] hover:bg-[#004BD6] disabled:opacity-50 text-white font-semibold text-[15px] transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <Gift className="w-4 h-4" />
              <span>Получить подарок</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
