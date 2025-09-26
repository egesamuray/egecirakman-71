import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, ExternalLink, Download } from "lucide-react";
import { personalInfo } from "@/data/content";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button asChild size="sm" variant="ghost">
                  <a href={personalInfo.profiles.scholar} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Scholar
                  </a>
                </Button>
                
                <Button asChild size="sm" variant="ghost">
                  <a href={personalInfo.profiles.linkedin} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button asChild size="sm" variant="ghost">
                  <a href={personalInfo.profiles.email}>
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </a>
                </Button>
                
                <Button asChild size="sm" variant="ghost">
                  <a href={personalInfo.profiles.cv} download>
                    <Download className="h-4 w-4 mr-1" />
                    CV
                  </a>
                </Button>
              </div>

              <Button
                onClick={scrollToTop}
                size="sm"
                variant="outline"
                className="ml-4"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}