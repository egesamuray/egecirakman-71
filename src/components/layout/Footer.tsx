import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { person } from "@/data/content";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Quick links */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a 
              href={person.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Google Scholar
            </a>
            <a 
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${person.email}`}
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
            <a 
              href={person.cv_pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              CV (PDF)
            </a>
          </div>

          {/* Back to top button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to top</span>
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} {person.name}. Built with modern web technologies for optimal accessibility and performance.</p>
        </div>
      </div>
    </footer>
  );
}