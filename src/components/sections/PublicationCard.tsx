import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Code, Presentation, Book, ArrowRight, Copy } from "lucide-react";
import { type Publication } from "@/data/content";
import { generateBibTeX } from "@/utils/bibtex";

export default function PublicationCard({ 
  publication, 
  showDetails = true 
}: { 
  publication: Publication; 
  showDetails?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const getStatusVariant = (status: string) => {
    if (status === "published") return "default";
    if (status === "accepted") return "secondary"; 
    if (status === "in_prep") return "outline";
    return "outline";
  };

  const getIcon = (linkType: string) => {
    switch (linkType) {
      case "pdf": return <FileText className="h-4 w-4" />;
      case "code": return <Code className="h-4 w-4" />;
      case "arxiv": return <Book className="h-4 w-4" />;
      case "project": case "venue_page": return <Presentation className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getLinkLabel = (linkType: string) => {
    switch (linkType) {
      case "pdf": return "PDF";
      case "code": return "Code";
      case "arxiv": return "arXiv";
      case "project": return "Project";
      case "venue_page": return "Venue";
      case "slides": return "Slides";
      case "doi": return "DOI";
      default: return linkType.charAt(0).toUpperCase() + linkType.slice(1);
    }
  };

  const handleCopyBibTeX = async () => {
    try {
      const bibtex = generateBibTeX(publication);
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy BibTeX:', err);
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg leading-tight">
              {showDetails ? (
                <a 
                  href={`/papers/${publication.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {publication.title}
                </a>
              ) : (
                publication.title
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {Array.isArray(publication.authors) ? publication.authors.join(', ') : publication.authors}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{publication.venue}</Badge>
              <Badge variant="outline">{publication.year}</Badge>
              <Badge variant={getStatusVariant(publication.status)}>
                {publication.status === "in_prep" ? "In Preparation" : 
                 publication.status === "preprint" ? "Preprint" :
                 publication.status}
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
          {publication.tldr}
        </p>
        
        {/* Highlight - What Changed vs Prior Work */}
        {publication.highlight && (
          <div className="mb-4 p-3 bg-primary/5 border-l-4 border-primary rounded-r">
            <p className="text-sm font-medium text-primary mb-1">Key Contribution:</p>
            <p className="text-sm text-foreground italic">{publication.highlight}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {showDetails && (
            <Button asChild size="sm" variant="default">
              <a href={`/papers/${publication.slug}`}>
                <ArrowRight className="h-4 w-4 mr-2" />
                Details
              </a>
            </Button>
          )}
          
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
          
          {/* BibTeX Copy Button */}
          <Button 
            onClick={handleCopyBibTeX}
            variant="outline" 
            size="sm"
            className="gap-2"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Copied!' : 'BibTeX'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}