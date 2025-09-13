import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { internationalExperience, nationalExperience, type Experience } from "@/data/content";

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <CardTitle className="text-lg">{experience.role}</CardTitle>
          <div className="flex items-center text-muted-foreground text-sm space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{experience.org}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{experience.dates}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2">
          {experience.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research internships and collaborative projects across leading institutions
            </p>
          </div>

          {/* International Research Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Badge className="bg-accent text-accent-foreground">
                International Research
              </Badge>
              <div className="flex-1 h-px bg-border" />
            </div>
            
            <div className="grid gap-6">
              {internationalExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>

          {/* National Research Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Badge variant="secondary">
                National Research
              </Badge>
              <div className="flex-1 h-px bg-border" />
            </div>
            
            <div className="grid gap-6">
              {nationalExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}