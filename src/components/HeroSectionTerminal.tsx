import { Button } from "@/components/ui/button";
import { TerminalLogo } from "@/components/TerminalLogo";
import { Circle, Terminal, Apple } from "lucide-react";

export const HeroSectionTerminal = () => {
  return (
    <section className="relative bg-gradient-terminal min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-10">
            <TerminalLogo />

            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-3">
                <div className="inline-flex items-center gap-2 bg-terminal-success/10 border border-terminal-success/30 text-terminal-success px-4 py-2 rounded-md text-sm font-mono">
                  <Circle className="w-3 h-3 fill-current" />
                  Streaming Mode Ready
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-md text-sm font-mono">
                  <Apple className="w-3 h-3 fill-current" />
                  Mac App Available
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your Voice Into{" "}
                <span className="text-terminal-accent font-mono">Perfect Text</span>
              </h1>

              <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                AI-powered voice transcription with intelligent communication style adaptation.
                Available as both <span className="text-blue-400 font-semibold">Mac app</span> and <span className="text-terminal-accent font-semibold">terminal tool</span>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="xl"
                  className="font-mono group bg-blue-600 hover:bg-blue-700 text-white border-blue-500 transition-colors text-lg px-8 py-4"
                  onClick={() => window.open('https://github.com/svenmalvik/twhisper/releases/download/v0.3.3/twhisper-0.3.3.dmg', '_blank')}
                >
                  <Apple className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Download Mac App
                </Button>
                <Button
                  variant="terminal"
                  size="xl"
                  className="font-mono group hover:bg-terminal-accent/90 transition-colors text-lg px-8 py-4"
                  onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Terminal className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Terminal Install
                </Button>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-mono hover:bg-white/10 hover:border-white/30 hover:text-white transition-colors"
                  onClick={() => window.open('https://github.com/svenmalvik/homebrew-twhisper/blob/main/README.md', '_blank')}
                >
                  man twhisper
                </Button>
              </div>
            </div>

            {/* Terminal-style feature list */}
            <div className="space-y-3 pt-8 font-mono text-lg max-w-2xl mx-auto">
              <div className="flex items-center gap-4 text-terminal-success">
                <span className="text-terminal-accent text-xl">$</span>
                <span>Real-time transcription with progressive results</span>
              </div>
              <div className="flex items-center gap-4 text-terminal-success">
                <span className="text-terminal-accent text-xl">$</span>
                <span>Smart communication styles for any context</span>
              </div>
              <div className="flex items-center gap-4 text-terminal-success">
                <span className="text-terminal-accent text-xl">$</span>
                <span>Terminal-native with seamless clipboard integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Matrix-style background dots */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-terminal-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-terminal-success rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-terminal-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-terminal-success rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
};