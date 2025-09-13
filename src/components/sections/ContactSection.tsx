import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, ExternalLink, Send } from "lucide-react";
import { personalInfo } from "@/data/content";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple spam protection - check for common spam patterns
    const spamKeywords = ['viagra', 'casino', 'lottery', 'bitcoin', 'crypto'];
    const containsSpam = spamKeywords.some(keyword => 
      formData.message.toLowerCase().includes(keyword) || 
      formData.name.toLowerCase().includes(keyword)
    );

    if (containsSpam) {
      toast({
        title: "Message blocked",
        description: "Your message appears to contain spam content.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Construct mailto link
      const subject = `Message from ${formData.name} via Academic Website`;
      const body = `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Email client opened",
        description: "Your default email client should open with the message pre-filled.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please send an email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch for research collaborations, opportunities, or academic discussions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>Get in Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <Button variant="outline" asChild>
                      <a 
                        href={personalInfo.profiles.email}
                        className="flex items-center space-x-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{personalInfo.email}</span>
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Academic Profiles</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={personalInfo.profiles.scholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Google Scholar</span>
                        </a>
                      </Button>
                      
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={personalInfo.profiles.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>LinkedIn</span>
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">📍 {personalInfo.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Opening email client..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    This form opens your default email client with the message pre-filled.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}