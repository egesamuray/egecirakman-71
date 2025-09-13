import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
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
  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content" className="max-w-4xl mx-auto px-4 py-8">
          <AboutSection />
          <NewsSection />
          <PublicationsSection />
          <ResearchSection />
          <ExperienceSection />
          <AwardsSection />
          <ProjectsSection />
          <CVSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
