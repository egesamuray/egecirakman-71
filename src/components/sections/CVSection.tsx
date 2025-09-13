import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { personalInfo } from "@/data/content";

export function CVSection() {
  return (
    <section id="cv" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Curriculum Vitae</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete academic and research experience
            </p>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <FileText className="h-6 w-6 text-accent" />
                <span>Academic CV</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Download my complete academic curriculum vitae including detailed research experience, 
                  publications, technical skills, and academic achievements.
                </p>
                
                <Button size="lg" asChild>
                  <a 
                    href={personalInfo.profiles.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download CV (PDF)</span>
                  </a>
                </Button>
              </div>

              {/* PDF viewer fallback */}
              <div className="mt-8">
                <div className="border rounded-lg bg-background p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">CV Preview</h3>
                  <div className="aspect-[8.5/11] w-full max-w-2xl mx-auto">
                    <iframe
                      src={`${personalInfo.profiles.cv}#view=FitH`}
                      className="w-full h-full border-0 rounded"
                      title="CV Preview"
                    >
                      <p className="text-center text-muted-foreground">
                        Your browser does not support PDF preview. 
                        <a 
                          href={personalInfo.profiles.cv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline ml-1"
                        >
                          Click here to download the CV.
                        </a>
                      </p>
                    </iframe>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}