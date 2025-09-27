import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SelectedPublications } from "@/components/sections/SelectedPublications";
import { NewsSection } from "@/components/sections/NewsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CVSection } from "@/components/sections/CVSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { StructuredData } from "@/components/seo/StructuredData";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <div className="min-h-screen bg-background">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main id="main-content">
          <HeroSection />
          <div className="content-container">
            <AboutSection />
            <SelectedPublications />
            <NewsSection />
            <PublicationsSection />
            <ResearchSection />
            <ExperienceSection />
            <AwardsSection />
            <ProjectsSection />
            <CVSection />
            <ContactSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;