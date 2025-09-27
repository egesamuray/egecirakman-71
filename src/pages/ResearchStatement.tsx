import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";

export default function ResearchStatement() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

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

  return (
    <>
      <SEOHead />
      
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
              <a href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </a>
            </Button>

            <article className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">Research Statement</CardTitle>
                  <p className="text-muted-foreground">
                    Structured priors and learning dynamics for trustworthy AI in scientific computing
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Core Research Question</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    How can we design <strong>structured generative priors</strong> that enable both <strong>principled uncertainty quantification</strong> 
                    and <strong>computational scalability</strong> for scientific inverse problems, while understanding the fundamental learning 
                    dynamics that govern when and why these models succeed?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Methodological Approach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Wavelet & Curvelet Domain Diffusion</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Traditional diffusion models operate in pixel space, leading to computational bottlenecks and poor 
                      preservation of scientific structure. My approach leverages <strong>multi-resolution decompositions</strong> 
                      (wavelets, curvelets) to factorize the posterior p(x|y) across scales, enabling better-conditioned 
                      score functions and provable acceleration via EDM scheduling.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Learning Dynamics Theory</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond applications, I study the <strong>fundamental mechanisms</strong> that govern when neural 
                      networks exhibit abrupt learning transitions. This theoretical work connects dynamical systems 
                      theory to practical training, revealing phase diagrams and scaling laws that inform robust 
                      optimization strategies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Key Evidence & Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">IMAGE 2025 (Oral) — Posterior Surrogate</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>What changed:</strong> First wavelet-domain posterior surrogate with provable acceleration via EDM scheduling
                    </p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Demonstrated <strong>73% faster sampling</strong> and <strong>50% lower memory</strong> usage compared to 
                      frequency-domain baselines while maintaining calibrated uncertainty quantification for seismic inversion.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold">Physical Review X (Accepted) — Ghost Mechanism</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>What changed:</strong> Analytical model explaining abrupt learning with exact scaling law
                    </p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Derived exact scaling law <strong>α* ∝ T^{-5}</strong> for learning rate thresholds in abrupt learning, 
                      validated across low-rank and full-rank RNN architectures with ghost-mechanism bottleneck theory.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">ICML 2025 — STM Phase Diagrams</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>What changed:</strong> First complete phase diagram of short-term memory mechanisms in RNNs
                    </p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Identified two distinct STM mechanisms (slow-point manifolds vs. limit cycles) and predicted 
                      <strong>critical learning rate scaling</strong> with delay that matches empirical observations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Next Steps (PhD Research Directions)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Curvelet Neural Operators (Months 1-12)</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Extend wavelet success to full <strong>Curvelet Neural Operators</strong> that preserve directional 
                      information crucial for geological structures. Target: learning maps f: seismic → subsurface 
                      properties with provable generalization bounds.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Heavy-Tailed Diffusion for Rare Events (Months 6-18)</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Current diffusion models struggle with <strong>minority modes</strong> and extreme events. 
                      Investigate heavy-tailed noise schedules that provably improve coverage of rare but scientifically 
                      important phenomena (e.g., fault systems, hydrocarbon reservoirs).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Stability-Aware Training Protocols (Ongoing)</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Leverage ghost-mechanism insights to design <strong>stability-aware training</strong> that avoids 
                      chaotic regimes while maintaining expressivity. Target: robust training protocols for 
                      scientific ML where reliability matters more than peak performance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why This Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground mb-4">
                    Scientific computing increasingly relies on AI, but current methods often sacrifice <strong>interpretability</strong> 
                    and <strong>uncertainty quantification</strong> for performance. My research bridges this gap by developing 
                    mathematically principled approaches that are both theoretically grounded and computationally practical.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    This work directly impacts <strong>climate modeling</strong>, <strong>medical imaging</strong>, and 
                    <strong>materials discovery</strong> — domains where wrong predictions have real consequences and 
                    require trustworthy uncertainty estimates.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Ready to Contribute</h3>
                      <p className="text-sm text-muted-foreground">
                        I bring proven ability to bridge theory and applications, with publications spanning 
                        top-tier venues in ML (ICML), physics (PRX), and applied sciences (IMAGE). 
                        I'm seeking PhD opportunities to push these boundaries further with world-class mentorship.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline">
                        <a href="mailto:cirakman18@itu.edu.tr">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Contact
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}