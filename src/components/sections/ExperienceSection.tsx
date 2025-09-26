import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { internationalExperience, nationalExperience, type Experience } from "@/data/content";

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="space-y-2">
          <CardTitle className="text-lg">{experience.role}</CardTitle>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">{experience.org}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{experience.dates}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {experience.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start space-x-3 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{bullet}</span>
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
              Research internships and collaborations at leading institutions
            </p>
          </div>

          <Tabs defaultValue="international" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="international" className="flex items-center space-x-2">
                <Badge variant="secondary">International</Badge>
              </TabsTrigger>
              <TabsTrigger value="national" className="flex items-center space-x-2">
                <Badge variant="secondary">National</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="international" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">International Research</h3>
                <p className="text-muted-foreground">Stanford University • Georgia Institute of Technology</p>
              </div>
              {internationalExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </TabsContent>
            
            <TabsContent value="national" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">National Research</h3>
                <p className="text-muted-foreground">Koç University • TEKNOPAR</p>
              </div>
              {nationalExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}