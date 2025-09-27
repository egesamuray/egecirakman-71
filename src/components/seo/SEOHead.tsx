import { author, taglineLines } from "@/data/content";

export function SEOHead() {
  const title = `${author.name} | AI Research & PhD Applications`;
  const description = `${author.name} - ${taglineLines.join(' ')} Research in generative models, learning dynamics, and trustworthy AI systems.`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="AI research, machine learning, generative models, diffusion models, RNN dynamics, computer vision, PhD applications, academic portfolio, seismic inversion, Bayesian inference" />
      <meta name="author" content={author.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://egecirakman.com/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://egecirakman.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={`${author.name} | Academic Portfolio`} />
      <meta property="og:image" content="https://egecirakman.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://egecirakman.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://egecirakman.com/og-image.png" />

      {/* Academic Meta Tags */}
      <meta name="theme-color" content="hsl(221.2 83.2% 53.3%)" />
      <meta name="citation_author" content={author.name} />
      <meta name="citation_author_institution" content="Istanbul Technical University" />
      <meta name="citation_author_email" content={author.email} />
      
      {/* Performance & Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Serif+Pro:wght@400;600;700&display=swap" 
        rel="stylesheet" 
      />
    </>
  );
}