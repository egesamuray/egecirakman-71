import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo } from "@/data/content";

export function ResearchSection() {
  return (
    <section id="research" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Research</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advancing the intersection of machine learning and scientific computing
            </p>
          </div>

          {/* Research summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Research Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.researchSummary}
              </p>
            </CardContent>
          </Card>

          {/* Research interests */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Research Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {personalInfo.interests.map((interest, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{interest}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}