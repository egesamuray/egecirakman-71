import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Download, Mail, GraduationCap } from "lucide-react";
import { person, education } from "@/data/content";

export function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading and tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {person.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {person.tagline}
            </p>
          </div>

          {/* Education info */}
          <Card className="p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-semibold">{education[0].degree}</h2>
            </div>
            <p className="text-muted-foreground">{education[0].school}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {education[0].dates} • {education[0].notes}
            </p>
          </Card>

          {/* Quick action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a 
                href={person.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Google Scholar</span>
              </a>
            </Button>
            
            <Button variant="outline" asChild>
              <a 
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a 
                href={`mailto:${person.email}`}
                className="flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a 
                href={person.cv_pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </Button>
          </div>

          {/* Location */}
          <p className="text-muted-foreground">
            📍 {person.location}
          </p>
        </div>
      </div>
    </section>
  );
}