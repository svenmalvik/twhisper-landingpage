import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";
import { StripePaymentButton } from "./StripePaymentButton";

const plans = [
  {
    name: "Starter",
    price: "€0",
    period: "/month",
    description: "Perfect for testing and short messages",
    features: [
      { name: "1-minute recordings (batch mode)", included: true },
      { name: "All communication styles", included: true },
      { name: "English language support", included: true },
      { name: "No login required", included: true },
      { name: "Streaming for long sessions", included: false },
      { name: "Custom tone profiles", included: false },
      { name: "10-minute recordings (batch mode)", included: false },
      { name: "Multi-language support (Danish, Norwegian, Finnish)", included: false },
      { name: "Priority support", included: false },
      { name: "Managed cloud AI (no setup required)", included: false },
      { name: "Single sign-on (SSO)", included: false },
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "€0",
    originalPrice: "€9",
    period: "/month",
    description: "For professional content creation and long-form work",
    features: [
      { name: "Streaming for long sessions", included: true },
      { name: "10-minute recordings (batch mode)", included: true },
      { name: "All communication styles", included: true },
      { name: "Multi-language support (English, Danish, Norwegian, Finnish)", included: true },
      { name: "Support", included: true },
      { name: "Custom tone profiles", included: false },
      { name: "Managed cloud AI (no setup required)", included: false },
      { name: "Single sign-on (SSO)", included: false },
    ],
    cta: "Install to Upgrade",
    popular: true
  },
  {
    name: "Enterprise",
    price: "€29",
    originalPrice: "",
    period: "/month",
    description: "Advanced cloud-powered transcription and collaboration",
    features: [
      { name: "Streaming for long sessions", included: true },
      { name: "10-minute recordings (batch mode)", included: true },
      { name: "All communication styles", included: true },
      { name: "Multi-language support (English, Danish, Norwegian, Finnish)", included: true },
      { name: "Custom tone profiles", included: true },
      { name: "Managed cloud AI (no setup required)", included: true },
      { name: "Single sign-on (SSO)", included: true },
      { name: "Priority support", included: true },
    ],
    cta: "Contact Us",
    popular: false
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  {plan.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                  )}
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg text-muted-foreground">{plan.period}</span>
                </div>
                {plan.originalPrice && plan.name !== "Enterprise" && (
                  <div className="text-sm text-terminal-success font-semibold mt-2">
                    Free during early access
                  </div>
                )}
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

                <StripePaymentButton
                  plan={plan.name.toLowerCase() as 'starter' | 'professional' | 'enterprise'}
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </StripePaymentButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include local AI processing and intelligent communication style adaptation for multiple contexts.
          </p>
        </div>
      </div>
    </section>
  );
};