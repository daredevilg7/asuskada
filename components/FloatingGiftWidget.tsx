"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { assetPath } from "@/lib/assets";

interface FloatingGiftWidgetProps {
  onOpenGift: () => void;
}

export default function FloatingGiftWidget({ onOpenGift }: FloatingGiftWidgetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Tooltip / Banner */}
      <div
        onClick={onOpenGift}
        className="cursor-pointer hidden sm:flex items-center gap-2 bg-[#0E1218] text-white px-3.5 py-2 rounded-[10px] border border-gray-700 shadow-xl hover:border-[#005BFF] transition-all hover:scale-105"
      >
        <span className="w-2 h-2 rounded-full bg-[#CEF836] animate-pulse" />
        <span className="text-[13px] font-semibold">Скидка -45% + 3 курса</span>
      </div>

      {/* 3D Gift Box Button */}
      <div className="relative group">
        <button
          onClick={onOpenGift}
          aria-label="Получить подарок"
          className="relative w-14 h-14 rounded-full bg-[#005BFF] p-1 shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          <div className="w-full h-full rounded-full bg-[#0E1218] overflow-hidden relative flex items-center justify-center">
            <Image
              src={assetPath("/images/bonus-gift-box.jpg")}
              alt="3D Подарочная коробка"
              fill
              className="object-cover"
            />
          </div>
          {/* Notification bubble */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#CEF836] text-black text-[11px] font-bold flex items-center justify-center shadow-md">
            1
          </span>
        </button>

        {/* Small dismiss button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-gray-900 text-gray-400 hover:text-white border border-gray-700 flex items-center justify-center text-[10px]"
          title="Скрыть"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
