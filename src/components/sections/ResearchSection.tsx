import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Eye } from "lucide-react";
import { interests } from "@/data/content";

export function ResearchSection() {
  return (
    <section id="research" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Research Overview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developing AI systems at the intersection of theory and application
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Generative Modeling</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My work in generative modeling targets scientific inverse problems where uncertainty matters. 
                  I design wavelet/curvelet-adapted diffusion models and conditional score-based surrogates to 
                  accelerate simulation-based inference, with calibrated uncertainty and multi-resolution sampling 
                  under tight memory budgets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Learning Dynamics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  On the theory side, I analyze learning dynamics in recurrent networks. I co-developed the 
                  ghost-mechanism account of abrupt learning and mapped dynamical phases of short-term memory 
                  (slow-point manifolds vs. limit cycles), deriving scaling laws for critical learning rates 
                  and validating predictions at scale.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-primary" />
                <span>Research Interests</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}