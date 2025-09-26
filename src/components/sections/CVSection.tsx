import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Academic CV</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Download my complete curriculum vitae including detailed research experience, 
                  publications, awards, and technical skills.
                </p>
                
                <Button asChild>
                  <a href={personalInfo.profiles.cv} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download CV (PDF)
                  </a>
                </Button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted p-4 text-center">
                  <p className="text-sm text-muted-foreground">CV Preview</p>
                </div>
                <iframe
                  src={personalInfo.profiles.cv}
                  width="100%"
                  height="600"
                  className="border-0"
                  title="CV Preview"
                  style={{ minHeight: "600px" }}
                >
                  <p className="p-4 text-center">
                    Your browser doesn't support PDF preview. 
                    <a 
                      href={personalInfo.profiles.cv} 
                      className="text-primary hover:underline ml-1"
                      download
                    >
                      Download the CV directly
                    </a>
                  </p>
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}