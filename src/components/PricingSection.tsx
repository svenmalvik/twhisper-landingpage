import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "/month",
    description: "Perfect for testing and short messages",
    features: [
      { name: "Up to 1 minute per session", included: true },
      { name: "All formatting modes", included: true },
      { name: "Batch mode only", included: true },
      { name: "Community support", included: true },
      { name: "Streaming mode", included: false },
      { name: "Custom formatting templates", included: false },
      { name: "Priority support", included: false },
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Premium",
    price: "€9",
    period: "/month",
    description: "For professional content creation and long-form work",
    features: [
      { name: "Up to 60 minutes per session", included: true },
      { name: "All formatting modes", included: true },
      { name: "Real-time streaming mode", included: true },
      { name: "Custom formatting templates", included: true },
      { name: "Priority customer support", included: true },
      { name: "Revision history", included: true },
      { name: "Secure backup", included: true },
    ],
    cta: "Upgrade to Premium",
    popular: true
  }
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more power. No contracts, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include secure processing, data encryption, and regular updates.
          </p>
        </div>
      </div>
    </section>
  );
};