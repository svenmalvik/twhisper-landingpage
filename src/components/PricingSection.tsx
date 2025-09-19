import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";
import { StripePaymentButton } from "./StripePaymentButton";

const plans = [
  {
    name: "Free Forever",
    price: "€0",
    period: "",
    description: "All features included - no limits, no catch",
    features: [
      { name: "Unlimited recordings", included: true },
      { name: "All communication styles", included: true },
      { name: "Multi-language support (English, Danish, Norwegian, Finnish)", included: true },
      { name: "Streaming for long sessions", included: true },
      { name: "10-minute recordings (batch mode)", included: true },
      { name: "No login required", included: true },
      { name: "Bring your own Azure OpenAI", included: true },
      { name: "Community support", included: true },
      { name: "Custom tone profiles", included: false },
      { name: "Managed cloud AI (no setup required)", included: false },
      { name: "Single sign-on (SSO)", included: false },
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    originalPrice: "",
    period: "",
    description: "Advanced cloud-powered transcription and collaboration",
    features: [
      { name: "More languages", included: true },
      { name: "Custom tone profiles", included: true },
      { name: "Managed cloud AI or bring your own LLM provider", included: true },
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
            Start completely free with all features, or choose Enterprise for managed cloud AI.
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
                  Free Forever
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg text-muted-foreground">{plan.period}</span>}
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

                <StripePaymentButton
                  plan={plan.name.toLowerCase() === 'free forever' ? 'starter' : plan.name.toLowerCase() as 'starter' | 'professional' | 'enterprise'}
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