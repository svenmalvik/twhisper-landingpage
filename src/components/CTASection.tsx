import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, ArrowRight, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-primary border-0 shadow-large text-center p-12 lg:p-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Ready to Transform Your Workflow?
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                Ready to 10x Your Writing Speed?
              </h2>
              
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Start with our starter tier and experience the future of voice-to-text. 
                Join thousands of professionals who have already transformed their productivity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl" 
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/20 font-semibold"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
            </div>

            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70">
                ✓ No credit card required &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Professional upgrade available
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};