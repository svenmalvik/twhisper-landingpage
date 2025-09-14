import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, Zap, Terminal } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                AI-Powered Voice Transcription
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Voice
                </span>{" "}
                Into Perfect Text
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                AI-powered voice transcription with intelligent formatting for developers, 
                writers, and professionals. Turn hours of typing into minutes of speaking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="xl">
                See How It Works
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Instant Productivity</p>
                  <p className="text-sm text-muted-foreground">10x faster than typing</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Terminal Native</p>
                  <p className="text-sm text-muted-foreground">Built for developers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">AI Formatting</p>
                  <p className="text-sm text-muted-foreground">Context-aware text</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <Card className="bg-gradient-card border-0 shadow-large overflow-hidden">
              <img 
                src={heroImage} 
                alt="Twhisper voice-to-text interface showing AI-powered transcription" 
                className="w-full h-auto rounded-lg"
              />
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground p-4 rounded-lg shadow-medium animate-bounce">
              <p className="text-sm font-medium">Real-time transcription</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border shadow-soft p-4 rounded-lg">
              <p className="text-sm font-medium text-accent">€9/month Professional</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};