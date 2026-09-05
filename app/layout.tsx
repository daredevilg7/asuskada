import type { Metadata } from "next";
import "./globals.css";

import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Курс «Инженер автоматизации и АСУ ТП» | Образовательный центр «БИС»",
  description: "Освойте профессию инженера АСУ ТП и промышленной автоматизации с нуля за 13 месяцев. 406 часов практики на реальном оборудовании Siemens, ОВЕН, MasterSCADA. Диплом государственного образца и гарантия трудоустройства.",
  keywords: "АСУ ТП, инженер автоматизации, курсы АСУ ТП, обучение ПЛК, Siemens TIA Portal, ОВЕН, MasterSCADA, промышленная автоматизация, БИС",
  openGraph: {
    title: "Курс «Инженер автоматизации и АСУ ТП» | Образовательный центр «БИС»",
    description: "Профессия инженера АСУ ТП с нуля: 13 месяцев, 4 крупных проекта, диплом и помощь в трудоустройстве.",
    type: "website",
    locale: "ru_RU",
    url: "https://bis-rf.ru",
    siteName: "БИС — Баланс Инженерных Систем",
  },
  icons: {
    icon: assetPath("/images/bis-logo.png"),
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="bg-[#F7F8FA] text-[#1D2939] antialiased selection:bg-[#005BFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
