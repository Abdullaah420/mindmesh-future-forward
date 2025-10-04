import React from 'react';
import Navigation from '@/components/Navigation';
import ScrollBackground from '@/components/ScrollBackground';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import PapersPreviewSection from '@/components/PapersPreviewSection';
import TeamSection from '@/components/TeamSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollBackground />
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <PapersPreviewSection />
        <TeamSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
