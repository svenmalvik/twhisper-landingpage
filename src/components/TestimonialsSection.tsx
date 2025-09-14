import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Terminal } from "lucide-react";

const testimonials = [
  {
    name: "Ingrid Hansen",
    role: "Senior Developer",
    company: "TechCorp",
    content: "twhisper has transformed how I document my code. The AI formatting for technical content is spot-on, and the terminal integration means I never leave my workflow.",
    rating: 5
  },
  {
    name: "Lars Andersen", 
    role: "Product Manager",
    company: "StartupXYZ",
    content: "Writing emails and Slack messages is now effortless. The different formatting modes understand context perfectly - from casual team chats to formal client communications.",
    rating: 5
  },
  {
    name: "Astrid Olsen",
    role: "DevOps Engineer", 
    company: "CloudScale",
    content: "The streaming mode is incredible for real-time documentation. I can dictate complex deployment procedures and get properly formatted docs instantly.",
    rating: 5
  },
  {
    name: "Erik Nordahl",
    role: "Freelance Developer",
    company: "Independent",
    content: "As someone with RSI, twhisper is a lifesaver. The voice-to-code feature helps me document functions and write comments without straining my hands.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-terminal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-mono">
            <span className="text-terminal-accent"># </span>
            What Developers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-terminal-muted">// </span>
            Real feedback from developers using twhisper in production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Card className="bg-gradient-card border border-terminal-accent/20 hover:border-terminal-accent/40 transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-terminal">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-terminal-accent opacity-60" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-terminal-success fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-foreground mb-6 font-mono text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Terminal className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold font-mono text-terminal-accent">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          {testimonial.role}
                          {testimonial.company && (
                            <>
                              <span className="text-terminal-muted"> @ </span>
                              {testimonial.company}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Terminal-style footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-terminal-success/10 border border-terminal-success/30 text-terminal-success px-4 py-2 rounded-md text-sm font-mono">
            <Terminal className="w-4 h-4" />
            <span>Join 500+ developers using twhisper</span>
          </div>
        </div>
      </div>
    </section>
  );
};