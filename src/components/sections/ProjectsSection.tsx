import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink } from "lucide-react";
import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected technical projects and implementations
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>{project.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  {project.link && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}