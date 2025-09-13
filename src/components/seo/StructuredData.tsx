import { useEffect } from "react";
import { person, education, publications, interests } from "@/data/content";

export function StructuredData() {
  useEffect(() => {
    // Person schema for the main page
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": person.name,
      "email": person.email,
      "description": person.tagline,
      "affiliation": {
        "@type": "Organization",
        "name": education[0].school
      },
      "sameAs": [
        person.scholar,
        person.linkedin
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": person.location
      },
      "knowsAbout": interests,
      "jobTitle": "Research Intern",
      "alumniOf": {
        "@type": "Organization",
        "name": education[0].school
      }
    };

    // ScholarlyArticle schemas for publications
    const publicationSchemas = publications.map(pub => ({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": pub.title,
      "author": [
        {
          "@type": "Person",
          "name": person.name
        }
      ],
      "datePublished": pub.year,
      "description": pub.summary,
      "publisher": {
        "@type": "Organization", 
        "name": pub.venue
      },
      "isPartOf": {
        "@type": "PublicationIssue",
        "name": pub.venue
      },
      ...(pub.links.arxiv && {
        "sameAs": pub.links.arxiv
      }),
      ...(pub.links.page && {
        "url": pub.links.page
      }),
      "keywords": interests.join(", ")
    }));

    // Combine all schemas
    const allSchemas = [personSchema, ...publicationSchemas];

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new structured data
    allSchemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null;
}