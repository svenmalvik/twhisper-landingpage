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
    description: "Context-aware formatting for emails, code docs, and more",
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Twhisper
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by cutting-edge AI technology, designed for modern workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};