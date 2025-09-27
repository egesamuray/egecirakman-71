import { selectedPublications } from "./PublicationsSection";
import PublicationCard from "./PublicationCard";

export function SelectedPublications() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Selected Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key research contributions in generative modeling and learning dynamics
            </p>
          </div>

          <div className="space-y-6">
            {selectedPublications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} showDetails={false} />
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#publications" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              View all publications →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}