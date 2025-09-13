import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const InstallationSection = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = async (text: string, stepIndex: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(stepIndex);
      setTimeout(() => setCopiedStep(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const installationSteps = [
    {
      number: "01",
      title: "Add the tap",
      command: "brew tap svenmalvik/twhisper",
      description: "Add the twhisper repository to your Homebrew taps"
    },
    {
      number: "02", 
      title: "Install twhisper",
      command: "brew install twhisper",
      description: "Install the twhisper command-line tool"
    },
    {
      number: "03",
      title: "Start transcribing",
      command: "twhisper",
      description: "Launch twhisper and begin voice-to-text transcription"
    }
  ];

  return (
    <section id="installation" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get Started in <span className="text-terminal-accent font-mono">3 Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Install twhisper via Homebrew and start transforming your voice into perfectly formatted text
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {installationSteps.map((step, index) => (
            <Card key={index} className="p-8 border-terminal-accent/20 hover:border-terminal-accent/40 transition-colors">
              <div className="space-y-6">
                {/* Step number */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terminal-accent/10 border border-terminal-accent/30 rounded-md flex items-center justify-center">
                    <span className="text-terminal-accent font-mono font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>

                {/* Command */}
                <div className="relative">
                  <div className="bg-card border border-border rounded-md p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-terminal-accent" />
                      <span className="text-terminal-accent">$</span>
                    </div>
                    <code className="text-foreground select-all">{step.command}</code>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-terminal-accent/10 hover:text-terminal-accent transition-colors"
                    onClick={() => copyToClipboard(step.command, index)}
                  >
                    {copiedStep === index ? (
                      <Check className="w-4 h-4 text-terminal-success" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Requirements note */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-6 bg-terminal-accent/5 border-terminal-accent/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2 justify-center">
              <Terminal className="w-5 h-5 text-terminal-accent" />
              Requirements
            </h4>
            <p className="text-sm text-muted-foreground">
              <strong>macOS with Homebrew</strong> and <strong>Azure OpenAI account</strong> are required for this early version.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};