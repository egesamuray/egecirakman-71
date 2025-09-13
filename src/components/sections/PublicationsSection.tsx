import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Code, Presentation } from "lucide-react";
import { publications, type Publication } from "@/data/content";

function PublicationCard({ publication }: { publication: Publication }) {
  const getStatusVariant = (status: Publication['status']) => {
    switch (status) {
      case 'published':
        return 'default';
      case 'accepted': 
        return 'secondary';
      case 'under review':
        return 'outline';
      case 'preprint':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getStatusColor = (status: Publication['status']) => {
    switch (status) {
      case 'published':
        return 'bg-success text-success-foreground';
      case 'accepted':
        return 'bg-accent text-accent-foreground';
      case 'under review':
        return 'bg-warning text-warning-foreground';
      case 'preprint':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  // Parse authors to make Ege's name bold
  const formatAuthors = (authors: string) => {
    return authors.split('**E. Çırakman**').map((part, index) => (
      <span key={index}>
        {part}
        {index === 0 && authors.includes('**E. Çırakman**') && (
          <strong className="font-semibold text-foreground">E. Çırakman</strong>
        )}
      </span>
    ));
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {publication.venue}
              </Badge>
              <Badge className={getStatusColor(publication.status)}>
                {publication.status}
              </Badge>
              {publication.badges?.map((badge) => (
                <Badge key={badge} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-lg leading-tight">
              {publication.title}
            </CardTitle>
          </div>
          <span className="text-sm font-medium text-muted-foreground shrink-0">
            {publication.year}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Authors */}
        <p className="text-sm text-muted-foreground">
          {formatAuthors(publication.authors)}
        </p>

        {/* Teaser */}
        <p className="text-sm leading-relaxed">
          {publication.teaser}
        </p>

        {/* Links */}
        {Object.keys(publication.links).length > 0 && (
          <div className="flex flex-wrap gap-2">
            {publication.links.pdf && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <FileText className="h-3 w-3" />
                  <span>PDF</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            )}
            
            {publication.links.arxiv && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.arxiv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <FileText className="h-3 w-3" />
                  <span>arXiv</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            )}

            {publication.links.code && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <Code className="h-3 w-3" />
                  <span>Code</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            )}

            {publication.links.page && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <Presentation className="h-3 w-3" />
                  <span>Project</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            )}

            {publication.links.doi && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>DOI</span>
                </a>
              </Button>
            )}

            {publication.links.icml && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.icml}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>ICML</span>
                </a>
              </Button>
            )}

            {publication.links.openreview && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.openreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>OpenReview</span>
                </a>
              </Button>
            )}

            {publication.links.program && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.program}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Program</span>
                </a>
              </Button>
            )}

            {publication.links.rg && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={publication.links.rg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>ResearchGate</span>
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function PublicationsSection() {
  return (
    <section id="publications" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research contributions in machine learning, neural dynamics, and computational geophysics
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}