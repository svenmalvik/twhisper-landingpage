import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, Terminal } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Productivity",
    description: "Turn hours of typing into minutes of speaking",
    details: "Get perfectly formatted text without the tedious editing"
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence", 
    description: "Smart communication style adaptation for slack, emails, and more",
    details: "Understands your intent, not just your words"
  },
  {
    icon: Terminal,
    title: "Terminal-Native",
    description: "Built for developers, works where you work", 
    details: "Seamless integration with your workflow"
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-mono">
            <span className="text-terminal-accent"># </span>
            Why Choose{" "}
            <span className="text-terminal-accent">Twhisper</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-terminal-muted">// </span>
            Powered by cutting-edge AI technology, designed for modern workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-card border border-border rounded-lg shadow-soft hover:shadow-terminal transition-all duration-300 hover:scale-105 group p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-mono">{feature.title}</h3>
                <p className="text-base text-muted-foreground font-mono mt-2">{feature.description}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground font-mono">
                  <span className="text-terminal-muted">// </span>
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};