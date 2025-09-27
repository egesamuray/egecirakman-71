import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, Code, FileText, Presentation, Copy, Share } from "lucide-react";
import { publications, type Publication } from "@/data/content";
import { generateBibTeX, downloadBibTeX } from "@/utils/bibtex";

export default function Paper() {
  const { slug } = useParams<{ slug: string }>();
  const [darkMode, setDarkMode] = useState(false);
  const [paper, setPaper] = useState<Publication | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (slug) {
      const foundPaper = publications.find(p => p.slug === slug);
      setPaper(foundPaper || null);
    }
  }, [slug]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!paper) {
    return <Navigate to="/404" replace />;
  }

  const bibtex = generateBibTeX(paper);

  const handleCopyBibTeX = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy BibTeX:', err);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: paper.title,
          text: paper.tldr,
          url: url,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url);
      } catch (err) {
        console.error('Failed to copy URL:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main id="main-content" className="pt-20">
        <div className="container max-w-4xl mx-auto py-8">
          <Button 
            variant="ghost" 
            asChild 
            className="mb-6"
          >
            <a href="/#publications">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Publications
            </a>
          </Button>

          <article className="space-y-8">
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="outline">{paper.venue} {paper.year}</Badge>
                {paper.badges?.map((badge) => (
                  <Badge key={badge} variant="secondary">{badge}</Badge>
                ))}
                <Badge 
                  variant={
                    paper.status === 'published' ? 'default' : 
                    paper.status === 'accepted' ? 'secondary' : 'outline'
                  }
                >
                  {paper.status === 'in_prep' ? 'in preparation' : paper.status}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                {paper.title}
              </h1>
              
              <p className="text-lg text-muted-foreground">
                {paper.authors.join(', ')}
              </p>

              <div className="flex flex-wrap gap-3">
                {paper.links.pdf && (
                  <Button asChild size="sm">
                    <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      PDF
                    </a>
                  </Button>
                )}
                
                {paper.links.arxiv && (
                  <Button asChild variant="outline" size="sm">
                    <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      arXiv
                    </a>
                  </Button>
                )}
                
                {paper.links.code && (
                  <Button asChild variant="outline" size="sm">
                    <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                      <Code className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                
                {paper.links.slides && (
                  <Button asChild variant="outline" size="sm">
                    <a href={paper.links.slides} target="_blank" rel="noopener noreferrer">
                      <Presentation className="h-4 w-4 mr-2" />
                      Slides
                    </a>
                  </Button>
                )}

                <Button onClick={handleShare} variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {paper.tldr}
                </p>
              </CardContent>
            </Card>

            {paper.abstract && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Abstract</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {paper.abstract}
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Citation</h2>
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleCopyBibTeX} 
                      variant="outline" 
                      size="sm"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                    <Button 
                      onClick={() => downloadBibTeX(paper)} 
                      variant="outline" 
                      size="sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download .bib
                    </Button>
                  </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{bibtex}</code>
                </pre>
              </CardContent>
            </Card>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}