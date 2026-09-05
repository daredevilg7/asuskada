"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export default function MobileStickyBar({ onOpenConsultation }: MobileStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200/80 px-4 py-3 shadow-2xl flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-[11px] text-gray-500 font-medium leading-none">
          Рассрочка без переплат
        </span>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-[17px] font-black text-gray-900 leading-none">
            от 2 905 ₽
          </span>
          <span className="text-[12px] text-gray-400 font-medium">/ мес</span>
        </div>
      </div>

      <button
        onClick={onOpenConsultation}
        className="px-5 py-2.5 rounded-[10px] bg-[#005BFF] active:bg-[#004BD6] text-white font-semibold text-[14px] flex items-center gap-1.5 shrink-0"
      >
        <span>Записаться</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
