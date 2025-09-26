import { personalInfo, publications } from "@/data/content";

export function StructuredData() {
  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "email": personalInfo.email,
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
    "knowsAbout": personalInfo.interests,
    "sameAs": [
      personalInfo.profiles.scholar,
      personalInfo.profiles.linkedin
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressCountry": "Turkey"
    },
    "description": personalInfo.tagline
  };

  // Publications as ScholarlyArticle schemas
  const publicationSchemas = publications.map(pub => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": pub.title,
    "author": pub.authors.split(", ").map(author => ({
      "@type": "Person",
      "name": author.replace(/\*/g, "").trim()
    })),
    "datePublished": pub.year,
    "publisher": {
      "@type": "Organization",
      "name": pub.venue
    },
    "description": pub.summary,
    "url": pub.links.arxiv || pub.links.pdf || pub.links.page,
    "sameAs": Object.values(pub.links).filter(Boolean)
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