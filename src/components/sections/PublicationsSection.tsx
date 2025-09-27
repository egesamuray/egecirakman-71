import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, FileText, Code, Presentation, Book, ArrowRight, Search, Filter } from "lucide-react";
import { publications, type Publication } from "@/data/content";

// Get selected publications for homepage
export const selectedPublications = publications.filter(pub => pub.selected);

function PublicationCard({ publication, showDetails = true }: { publication: Publication; showDetails?: boolean }) {
  const getStatusVariant = (status: string) => {
    if (status === "published") return "default";
    if (status === "accepted") return "secondary";
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

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg leading-tight">
              <a 
                href={`/papers/${publication.slug}`}
                className="hover:text-primary transition-colors"
              >
                {publication.title}
              </a>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {Array.isArray(publication.authors) ? publication.authors.join(', ') : publication.authors}
            </p>
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
          {publication.tldr}
        </p>
        
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
        </div>
      </CardContent>
    </Card>
  );
}

export function PublicationsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Get unique years and statuses for filters
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(publications.map(p => p.year))).sort().reverse();
    return uniqueYears;
  }, []);

  const statuses = useMemo(() => {
    const uniqueStatuses = Array.from(new Set(publications.map(p => p.status)));
    return uniqueStatuses;
  }, []);

  // Filter publications based on search and filters
  const filteredPublications = useMemo(() => {
    return publications.filter(publication => {
      const matchesSearch = searchQuery === "" || 
        publication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        publication.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        publication.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        publication.tldr.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesYear = selectedYear === "all" || publication.year === selectedYear;
      const matchesStatus = selectedStatus === "all" || publication.status === selectedStatus;

      return matchesSearch && matchesYear && matchesStatus;
    });
  }, [searchQuery, selectedYear, selectedStatus]);

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

          {/* Search and Filters */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by title, author, venue, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    {statuses.map(status => (
                      <SelectItem key={status} value={status}>
                        {status === "in_prep" ? "In Preparation" : status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Results count */}
          <div className="text-sm text-muted-foreground text-center">
            Showing {filteredPublications.length} of {publications.length} publications
          </div>

          {/* Publications list */}
          <div className="space-y-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((publication, index) => (
                <PublicationCard key={index} publication={publication} showDetails={true} />
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No publications found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedYear("all");
                    setSelectedStatus("all");
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}