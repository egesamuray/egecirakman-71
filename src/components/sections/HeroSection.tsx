import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail, MapPin, Download, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/content";

export function HeroSection() {
  return (
    <section id="home" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {personalInfo.name}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                <span>B.Sc., Control & Automation Engineering, Istanbul Technical University (ITU)</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                GPA 3.71/4.00 • Department rank 1/101 (end of 2024) • Exp. Jun 2026
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="default">
              <a href={personalInfo.profiles.scholar} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Google Scholar
              </a>
            </Button>
            
            <Button asChild variant="outline">
              <a href={personalInfo.profiles.linkedin} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button asChild variant="outline">
              <a href={personalInfo.profiles.email}>
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
            </Button>
            
            <Button asChild variant="secondary">
              <a href={personalInfo.profiles.cv} download>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}