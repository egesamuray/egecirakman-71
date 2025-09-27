import { Publication } from "@/data/content";

export function generateBibTeX(publication: Publication): string {
  const year = publication.year;
  const firstAuthor = publication.authors[0]?.split(' ').pop()?.toLowerCase() || "author";
  const venue = publication.venue.split(' ')[0].toLowerCase();
  const key = `${firstAuthor}${year}${venue}`;

  // Clean title - remove quotes and special characters for BibTeX
  const cleanTitle = publication.title
    .replace(/[{}]/g, '')
    .replace(/"/g, '``')
    .replace(/'/g, "'");

  // Determine entry type based on venue
  let entryType = "inproceedings";
  if (publication.venue.toLowerCase().includes("journal") || 
      publication.venue.toLowerCase().includes("review") ||
      publication.venue.toLowerCase().includes("transactions")) {
    entryType = "article";
  }

  let bibtex = `@${entryType}{${key},\n`;
  bibtex += `  title={${cleanTitle}},\n`;
  bibtex += `  author={${publication.authors.join(' and ')}},\n`;
  
  if (entryType === "article") {
    bibtex += `  journal={${publication.venue}},\n`;
  } else {
    bibtex += `  booktitle={${publication.venue}},\n`;
  }
  
  bibtex += `  year={${year}},\n`;
  
  if (publication.links.doi) {
    bibtex += `  doi={${publication.links.doi.replace('https://doi.org/', '')}},\n`;
  }
  
  if (publication.links.arxiv) {
    const arxivId = publication.links.arxiv.split('/').pop();
    bibtex += `  eprint={${arxivId}},\n`;
    bibtex += `  archivePrefix={arXiv},\n`;
  }
  
  if (publication.links.pdf) {
    bibtex += `  url={${publication.links.pdf}},\n`;
  }
  
  bibtex += '}';
  
  return bibtex;
}

export function downloadBibTeX(publication: Publication): void {
  const bibtex = generateBibTeX(publication);
  const blob = new Blob([bibtex], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `${publication.slug}.bib`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  URL.revokeObjectURL(url);
}