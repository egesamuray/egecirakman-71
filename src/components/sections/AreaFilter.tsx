import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";

interface AreaFilterProps {
  onAreaChange: (area: string) => void;
  currentArea: string;
}

const areas = [
  { id: "", label: "All Research" },
  { id: "inverse-problems", label: "Inverse Problems" },
  { id: "learning-dynamics", label: "Learning Dynamics" },
  { id: "diffusion-models", label: "Diffusion Models" },
  { id: "computer-vision", label: "Computer Vision" }
];

export function AreaFilter({ onAreaChange, currentArea }: AreaFilterProps) {
  const handleAreaClick = (area: string) => {
    onAreaChange(area);
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (area) {
      url.searchParams.set('area', area);
    } else {
      url.searchParams.delete('area');
    }
    window.history.replaceState(null, '', url.toString());
  };

  return (
    <Card className="mb-8">
      <CardContent className="p-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Filter className="h-4 w-4" />
            <span>View by research area:</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {areas.map((area) => (
              <Button
                key={area.id}
                size="sm"
                variant={currentArea === area.id ? "default" : "outline"}
                onClick={() => handleAreaClick(area.id)}
                className="text-xs"
              >
                {area.label}
              </Button>
            ))}
          </div>
        </div>
        {currentArea && (
          <p className="text-xs text-muted-foreground mt-3">
            Share this view: <code className="bg-muted px-1 rounded text-xs">
              {window.location.origin}/?area={currentArea}
            </code>
          </p>
        )}
      </CardContent>
    </Card>
  );
}