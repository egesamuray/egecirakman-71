import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, Code, FileText, Presentation } from "lucide-react";
import { publications, type Publication } from "@/data/content";

export default function Paper() {
  const { slug } = useParams<{ slug: string }>();
  const [darkMode, setDarkMode] = useState(false);
  const [paper, setPaper] = useState<Publication | null>(null);

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

  const generateBibTeX = (paper: Publication) => {
    const type = paper.venue.includes('arXiv') ? 'article' : 'inproceedings';
    const authors = paper.authors.join(' and ').replace(/\*/g, '');
    
    return `@${type}{${paper.slug.replace(/-/g, '')},
  title={${paper.title}},
  author={${authors}},
  ${type === 'article' ? 'journal' : 'booktitle'}={${paper.venue}},
  year={${paper.year}},
  ${paper.links.arxiv ? `archivePrefix={arXiv},\n  eprint={${paper.links.arxiv.split('/').pop()}},` : ''}
  ${paper.links.doi ? `doi={${paper.links.doi.split('/').slice(-2).join('/')}},` : ''}
}`;
  };

  const downloadBibTeX = () => {
    const bibtex = generateBibTeX(paper);
    const blob = new Blob([bibtex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${paper.slug}.bib`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
                  {paper.status}
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
                
                <Button onClick={downloadBibTeX} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  BibTeX
                </Button>
              </div>
            </header>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">TL;DR</h2>
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
                <h2 className="text-xl font-semibold mb-4">Citation</h2>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{generateBibTeX(paper)}</code>
                </pre>
                <Button onClick={downloadBibTeX} variant="outline" size="sm" className="mt-4">
                  <Download className="h-4 w-4 mr-2" />
                  Download BibTeX
                </Button>
              </CardContent>
            </Card>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}