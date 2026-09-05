"use client";

import React, { useState, ChangeEvent } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export function formatPhoneNumber(value: string): string {
  if (!value) return "";
  const phoneDigits = value.replace(/\D/g, "");
  
  if (!phoneDigits) return "";
  
  let formatted = "+7 (";
  const body = phoneDigits.startsWith("7") || phoneDigits.startsWith("8") 
    ? phoneDigits.slice(1) 
    : phoneDigits;

  if (body.length > 0) {
    formatted += body.substring(0, 3);
  }
  if (body.length >= 4) {
    formatted += ") " + body.substring(3, 6);
  }
  if (body.length >= 7) {
    formatted += "-" + body.substring(6, 8);
  }
  if (body.length >= 9) {
    formatted += "-" + body.substring(8, 10);
  }
  
  return formatted;
}

export default function PhoneInput({
  value,
  onChange,
  placeholder = "+7 (___) ___-__-__",
  className = "",
  required = true,
}: PhoneInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatPhoneNumber(rawValue);
    onChange(formatted);
  };

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#005BFF] focus:ring-4 focus:ring-[#005BFF]/10 transition-all font-medium text-[15px] ${className}`}
    />
  );
}
