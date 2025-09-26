import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { news } from "@/data/content";

export function NewsSection() {
  return (
    <section id="news" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">News</h2>
            <p className="text-lg text-muted-foreground">
              Recent updates and achievements
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Recent Updates</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div key={index} className="flex space-x-4 text-sm border-l-2 border-muted pl-4">
                    <span className="text-muted-foreground font-medium min-w-20 shrink-0">
                      {item.date}
                    </span>
                    <span className="leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}