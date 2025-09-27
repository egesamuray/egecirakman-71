import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, FileText, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8 max-w-lg mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-muted-foreground/50">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground">
            The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button asChild variant="default" className="h-auto py-3">
                <a href="/" className="flex flex-col items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3">
                <a href="/#publications" className="flex flex-col items-center gap-2">
                  <Search className="h-5 w-5" />
                  <span>Publications</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3">
                <a href="/files/Ege_Cirakman_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>CV</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3">
                <a href="mailto:cirakman18@itu.edu.tr" className="flex flex-col items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>Contact</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-sm text-muted-foreground">
          If you believe this is an error, please <a href="mailto:cirakman18@itu.edu.tr" className="text-primary hover:underline">contact me</a>.
        </p>
      </div>
    </div>
  );
}
