import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Folder } from "lucide-react";
import { projects, type Project } from "@/data/content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Folder className="h-5 w-5 text-accent" />
          <span>{project.name}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.summary}
        </p>

        {project.link && (
          <Button size="sm" variant="outline" asChild>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <ExternalLink className="h-3 w-3" />
              <span>View Project</span>
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected projects and implementations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}