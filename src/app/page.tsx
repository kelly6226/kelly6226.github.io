"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/ProfileSection";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import CompanySection from "@/components/Company";
import ActivitiesSection from "@/components/Activities";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CompanySection />
      {/* <ActivitiesSection /> */}
    </>
  );
}
