import { useState, useEffect } from "react";
import { selectedPublications } from "./PublicationsSection";
import PublicationCard from "./PublicationCard";
import { AreaFilter } from "./AreaFilter";

export function SelectedPublications() {
  const [currentArea, setCurrentArea] = useState("");
  
  useEffect(() => {
    // Check URL params for area filter
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area') || '';
    setCurrentArea(area);
  }, []);

  const filteredPublications = selectedPublications.filter(pub => 
    !currentArea || pub.area === currentArea
  );

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Selected Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key research contributions demonstrating methodological innovation
            </p>
          </div>

          <AreaFilter currentArea={currentArea} onAreaChange={setCurrentArea} />

          <div className="space-y-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((publication, index) => (
                <div key={index} data-area={publication.area}>
                  <PublicationCard publication={publication} showDetails={false} />
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No selected publications in this area.</p>
              </div>
            )}
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