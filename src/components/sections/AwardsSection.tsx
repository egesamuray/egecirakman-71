import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { awards } from "@/data/content";

export function AwardsSection() {
  return (
    <section id="awards" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic achievements and competition honors
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent" />
                <span>Honors & Awards</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      {award}
                    </span>
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