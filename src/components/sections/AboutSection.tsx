import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Mail, GraduationCap } from "lucide-react";
import { person, education } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="mb-16">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          {person.name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {person.tagline}
        </p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <GraduationCap className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold">{education[0].degree}</h2>
        </div>
        <p className="text-muted-foreground">{education[0].school}</p>
        <p className="text-sm text-muted-foreground">{education[0].dates} • {education[0].notes}</p>
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap gap-3 mb-6">
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

      <p className="text-muted-foreground text-sm">
        📍 {person.location}
      </p>
    </section>
  );
}