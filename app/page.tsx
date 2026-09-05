"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IndustryDemandSection from "@/components/IndustryDemandSection";
import SalaryCareerWidget from "@/components/SalaryCareerWidget";
import AudienceTargetSection from "@/components/AudienceTargetSection";
import ResumeMockupSection from "@/components/ResumeMockupSection";
import PortfolioSection from "@/components/PortfolioSection";
import CurriculumSection from "@/components/CurriculumSection";
import ExpertsSection from "@/components/ExpertsSection";
import CareerProcessSection from "@/components/CareerProcessSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [leadToast, setLeadToast] = useState<{ name: string; phone: string } | null>(null);

  const handleOpenConsultation = (tariff?: string) => {
    setSelectedTariff(tariff || null);
    setIsConsultationOpen(true);
  };

  const handleSuccessLead = (name: string, phone: string) => {
    setLeadToast({ name, phone });
    setTimeout(() => {
      setLeadToast(null);
    }, 6000);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] selection:bg-[#005BFF] selection:text-white relative pb-16 md:pb-0">
      {/* 1. Sticky Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* 2. Hero Section (Multi-layered layout, -mt-24 lead form, 4 info cards) */}
      <HeroSection
        onOpenConsultation={() => handleOpenConsultation()}
        onSuccessLead={handleSuccessLead}
      />

      {/* 3. Industry Demand & Close-up Engineer Photo */}
      <IndustryDemandSection />

      {/* 4. Interactive Salary & Career Trajectory Widget */}
      <SalaryCareerWidget />

      {/* 5. Course Goals (3D Graduation Cap & 3D Target on Transparent PNG) */}
      <AudienceTargetSection />

      {/* 6. Graduate Resume Mockup in macOS Window */}
      <ResumeMockupSection />

      {/* 7. Portfolio Projects & Flexibilities */}
      <PortfolioSection />

      {/* 8. Curriculum Accordion (8 Modules, 136h / 406h, 3 Gift Courses) */}
      <CurriculumSection onSuccessLead={handleSuccessLead} />

      {/* 10. Teachers and Industry Experts */}
      <ExpertsSection />

      {/* 11. Career Center & 4-Step Employment Timeline */}
      <CareerProcessSection />

      {/* 12. Pricing & Tariffs (Dark Theme, Base & Recommended Individual Plans) */}
      <PricingSection onSelectTariff={(tariff) => handleOpenConsultation(tariff)} />

      {/* Social Proof: Graduate Reviews with Real Salaries */}
      <ReviewsSection />

      {/* 13. FAQ Accordion */}
      <FAQSection />

      {/* 14. Footer with Legal Data */}
      <Footer />

      {/* 15. Mobile Sticky Bottom Bar (<768px) */}
      <MobileStickyBar onOpenConsultation={() => handleOpenConsultation()} />

      {/* General Enrollment / Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        tariffName={selectedTariff}
        onClose={() => {
          setIsConsultationOpen(false);
          setSelectedTariff(null);
        }}
        onSuccessLead={handleSuccessLead}
      />

      {/* Toast Notification */}
      {leadToast && (
        <div className="fixed bottom-20 md:bottom-6 left-6 z-50 bg-[#090D14] text-white px-5 py-4 rounded-2xl shadow-2xl border border-gray-700 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-3 h-3 rounded-full bg-[#00C48C] animate-pulse" />
          <div className="text-[14px]">
            <span className="font-bold text-white">{leadToast.name || "Спасибо"}</span>, заявка принята! Куратор перезвонит на{" "}
            <span className="text-cyan-300 font-mono">{leadToast.phone}</span>.
          </div>
        </div>
      )}
    </main>
  );
}
