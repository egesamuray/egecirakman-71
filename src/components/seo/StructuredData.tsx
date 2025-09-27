import { author, publications } from "@/data/content";

export function StructuredData() {
  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "email": author.email,
    "jobTitle": "Undergraduate Researcher",
    "affiliation": {
      "@type": "Organization",
      "name": "Istanbul Technical University",
      "url": "https://www.itu.edu.tr"
    },
    "alumniOf": {
      "@type": "Organization", 
      "name": "Istanbul Technical University"
    },
    "knowsAbout": [
      "Machine Learning",
      "Generative Models", 
      "Diffusion Models",
      "Seismic Imaging",
      "Bayesian Inference",
      "RNN Dynamics",
      "Computer Vision"
    ],
    "sameAs": [
      author.links.google_scholar,
      author.links.linkedin,
      author.links.orcid,
      author.links.semantic_scholar,
      author.links.openreview,
      author.links.github
    ].filter(Boolean),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressCountry": "Turkey"
    },
    "description": "AI researcher focusing on generative models for scientific inverse problems, learning dynamics in RNNs, and trustworthy vision systems",
    "url": "https://egecirakman.com"
  };

  // Publications as ScholarlyArticle schemas
  const publicationSchemas = publications.map(pub => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": pub.title,
    "author": pub.authors.map(author => ({
      "@type": "Person",
      "name": author.replace(/\*/g, "").trim()
    })),
    "datePublished": pub.year,
    "publisher": {
      "@type": "Organization",
      "name": pub.venue
    },
    "description": pub.tldr,
    "url": pub.links.arxiv || pub.links.pdf || pub.links.venue_page,
    "sameAs": Object.values(pub.links).filter(Boolean),
    "isPartOf": {
      "@type": "PublicationEvent",
      "name": pub.venue
    }
  }));

  const allSchemas = [personSchema, ...publicationSchemas];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(allSchemas)
      }}
    />
  );
}