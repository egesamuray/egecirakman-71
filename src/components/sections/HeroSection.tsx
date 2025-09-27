import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Linkedin, Github, GraduationCap, FileText, Mail, User } from "lucide-react";
import { author, taglineLines } from "@/data/content";

export function HeroSection() {
  return (
    <section id="home" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              AI · Inverse Problems · Diffusion Models
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {author.name}
            </h1>
            
            {/* Research Focus: Problem → Tool → Proof */}
            <div className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <Card className="p-4 bg-background/50 border-primary/20">
                  <div className="text-primary font-semibold text-sm mb-2">Problem</div>
                  <p className="text-muted-foreground">Inverse problems in scientific imaging require uncertainty quantification</p>
                </Card>
                <Card className="p-4 bg-background/50 border-primary/20">
                  <div className="text-primary font-semibold text-sm mb-2">Tool</div>
                  <p className="text-muted-foreground">Structured priors via wavelet/curvelet-domain diffusion models</p>
                </Card>
                <Card className="p-4 bg-background/50 border-primary/20">
                  <div className="text-primary font-semibold text-sm mb-2">Proof</div>
                  <p className="text-muted-foreground">IMAGE'25 oral, PRX accepted, ICML'25 — scalable posterior surrogates & learning dynamics</p>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-lg">
              <span className="font-medium">{author.education.degree}</span>, {author.education.institution}
            </p>
            <p className="text-muted-foreground">
              GPA {author.education.gpa} • Rank {author.education.rank} • Expected {author.education.grad_expected}
            </p>
            <p className="text-muted-foreground">
              📍 {author.location}
            </p>
          </div>

          {/* For Committees Panel */}
          <Card className="bg-primary/5 border-primary/20 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg text-center">For PhD Admissions Committees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <Button asChild size="sm" variant="outline" className="h-auto flex-col gap-1 p-3">
                  <a href={author.links.google_scholar || "#"} target="_blank" rel="noopener noreferrer">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-xs">Scholar</span>
                    {!author.links.google_scholar && <span className="text-xs text-muted-foreground">(TBD)</span>}
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="h-auto flex-col gap-1 p-3">
                  <a href={author.links.orcid || "#"} target="_blank" rel="noopener noreferrer">
                    <User className="h-4 w-4" />
                    <span className="text-xs">ORCID</span>
                    {!author.links.orcid && <span className="text-xs text-muted-foreground">(TBD)</span>}
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="h-auto flex-col gap-1 p-3">
                  <a href="/files/Ege_Cirakman_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    <span className="text-xs">CV PDF</span>
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="h-auto flex-col gap-1 p-3">
                  <a href={`mailto:${author.email}`}>
                    <Mail className="h-4 w-4" />
                    <span className="text-xs">Contact</span>
                  </a>
                </Button>
              </div>
              
              {/* For Prospective Advisors */}
              <div className="border-t pt-4">
                <h3 className="font-semibold text-sm mb-3 text-center">For Prospective Advisors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <a href="/research-statement" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Research Pitch</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="/files/reviewers-kit.txt" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Reviewers' Kit</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={author.links.github || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                      {!author.links.github && <span className="text-xs">(TBD)</span>}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="default">
              <a href="#publications">
                <Book className="h-5 w-5 mr-2" />
                Publications
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={author.links.github || "#"} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
                {!author.links.github && <span className="ml-1 text-xs">(TBD)</span>}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}