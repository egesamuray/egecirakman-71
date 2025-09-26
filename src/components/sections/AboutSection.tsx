import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Mail, Download, MapPin, GraduationCap } from "lucide-react";
import { personalInfo, education } from "@/data/content";
import egePortrait from "@/assets/ege-portrait.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <img
                  src={egePortrait}
                  alt="Professional portrait of Ege Çırakman, researcher in AI and mathematical modeling"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span>Education</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.dates}</p>
                        <p className="text-xs text-muted-foreground">{edu.notes}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{personalInfo.name}</h2>
                <p className="text-lg text-muted-foreground mb-6">{personalInfo.tagline}</p>
                
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    I'm an undergraduate researcher working at the intersection of machine learning and scientific computing. 
                    I develop diffusion/score-based generative models and scalable Bayesian inference for imaging (seismic), 
                    study the dynamics of learning in RNNs (abrupt learning, ghost mechanisms, short-term memory), and build 
                    trustworthy computer-vision systems. I enjoy problems that require both theory and engineering—deriving 
                    mechanisms, proving scaling laws, and shipping robust code.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button asChild>
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

                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-4">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}