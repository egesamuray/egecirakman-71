import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Code, Presentation, Book } from "lucide-react";
import { publications, type Publication } from "@/data/content";

function PublicationCard({ publication }: { publication: Publication }) {
  const getStatusVariant = (status: string) => {
    if (status.includes("published")) return "default";
    if (status.includes("accepted")) return "secondary";
    return "outline";
  };

  const getIcon = (linkType: string) => {
    switch (linkType) {
      case "pdf": return <FileText className="h-4 w-4" />;
      case "code": return <Code className="h-4 w-4" />;
      case "arxiv": return <Book className="h-4 w-4" />;
      case "page": case "overview": return <Presentation className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getLinkLabel = (linkType: string) => {
    switch (linkType) {
      case "pdf": return "PDF";
      case "code": return "Code";
      case "arxiv": return "arXiv";
      case "page": return "Project";
      case "overview": return "Overview";
      case "icml": return "ICML";
      case "doi": return "DOI";
      case "openreview": return "OpenReview";
      case "program": return "Program";
      case "rg": return "ResearchGate";
      case "lab": return "Lab Page";
      default: return linkType.charAt(0).toUpperCase() + linkType.slice(1);
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{publication.authors}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{publication.venue}</Badge>
              <Badge variant="outline">{publication.year}</Badge>
              <Badge variant={getStatusVariant(publication.status)}>
                {publication.status}
              </Badge>
              {publication.badges?.map((badge, index) => (
                <Badge key={index} variant="secondary">{badge}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {publication.summary}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {Object.entries(publication.links).map(([type, url]) => 
            url && (
              <Button key={type} asChild size="sm" variant="outline">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {getIcon(type)}
                  <span className="ml-2">{getLinkLabel(type)}</span>
                </a>
              </Button>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function PublicationsSection() {
  return (
    <section id="publications" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research papers in machine learning, generative modeling, and learning dynamics
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}