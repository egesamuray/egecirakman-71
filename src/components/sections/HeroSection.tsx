import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail, MapPin, Download, GraduationCap } from "lucide-react";
import { author, taglineLines } from "@/data/content";

export function HeroSection() {
  return (
    <section id="home" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {author.name}
            </h1>
            
            <div className="space-y-2">
              {taglineLines.map((line, index) => (
                <p key={index} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                <span>{author.education.degree}, {author.education.institution}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                GPA {author.education.gpa} • Department rank {author.education.rank} • Exp. {author.education.grad_expected}
              </p>
            </CardContent>
          </Card>

          {/* For Committees Panel */}
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-center">For PhD Committees</h2>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {author.links.google_scholar && (
                  <Button asChild variant="default" size="sm">
                    <a href={author.links.google_scholar} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Google Scholar
                    </a>
                  </Button>
                )}
                
                {author.links.orcid && (
                  <Button asChild variant="outline" size="sm">
                    <a href={author.links.orcid} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      ORCID
                    </a>
                  </Button>
                )}
                
                <Button asChild variant="outline" size="sm">
                  <a href="/files/Ege_Cirakman_CV.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    CV (PDF)
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="sm">
                  <a href={`mailto:${author.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </a>
                </Button>
              </div>
              {(!author.links.google_scholar || !author.links.orcid) && (
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Missing links are placeholders for site owner to fill
                </p>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {author.links.linkedin && (
              <Button asChild variant="outline">
                <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            )}
            
            {author.links.github && (
              <Button asChild variant="outline">
                <a href={author.links.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{author.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}