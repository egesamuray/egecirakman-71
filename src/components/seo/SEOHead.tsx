import { personalInfo } from "@/data/content";

export function SEOHead() {
  const title = `${personalInfo.name} | AI Research & PhD Applications`;
  const description = `${personalInfo.name} - ${personalInfo.tagline} Research in generative models, learning dynamics, and trustworthy AI systems.`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="AI research, machine learning, generative models, diffusion models, RNN dynamics, computer vision, PhD applications, academic portfolio" />
      <meta name="author" content={personalInfo.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={`${personalInfo.name} | Academic Portfolio`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="hsl(221.2 83.2% 53.3%)" />
      <meta name="citation_author" content={personalInfo.name} />
      <meta name="citation_author_institution" content="Istanbul Technical University" />
    </>
  );
}