import { Button } from "@/components/ui/button";
import { TerminalLogo } from "@/components/TerminalLogo";
import { TerminalWindow } from "@/components/TerminalWindow";
import { Circle, Mic, Terminal, Zap } from "lucide-react";

export const HeroSectionTerminal = () => {
  return (
    <section className="relative bg-gradient-terminal min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <TerminalLogo />
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-terminal-success/10 border border-terminal-success/30 text-terminal-success px-4 py-2 rounded-md text-sm font-mono">
                <Circle className="w-3 h-3 fill-current" />
                Streaming Mode Ready
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transform Your Voice Into{" "}
                <span className="text-terminal-accent font-mono">Perfect Text</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                AI-powered voice transcription with intelligent formatting. 
                Built for developers who think in code and speak in solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="terminal" 
                size="xl" 
                className="font-mono group hover:bg-terminal-accent/90 transition-colors"
                onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="font-mono hover:bg-white/10 hover:border-white/30 hover:text-white transition-colors"
                onClick={() => window.open('https://github.com/svenmalvik/twhisper/blob/main/README.md', '_blank')}
              >
                man twhisper
              </Button>
            </div>

            {/* Terminal-style feature list */}
            <div className="space-y-2 pt-8 font-mono text-sm">
              <div className="flex items-center gap-3 text-terminal-success">
                <span className="text-terminal-accent">$</span>
                <span>Real-time transcription with progressive results</span>
              </div>
              <div className="flex items-center gap-3 text-terminal-success">
                <span className="text-terminal-accent">$</span>
                <span>Context-aware formatting for any workflow</span>
              </div>
              <div className="flex items-center gap-3 text-terminal-success">
                <span className="text-terminal-accent">$</span>
                <span>Terminal-native with seamless clipboard integration</span>
              </div>
            </div>
          </div>

          {/* Right Column - Terminal Demo */}
          <div className="relative">
            <TerminalWindow className="transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Circle className="w-2 h-2 text-terminal-success fill-current" />
                  <span className="text-terminal-success">Streaming Mode Ready</span>
                  <span className="text-terminal-muted">— Press SPACE for real-time transcription</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mic className="w-4 h-4 text-terminal-muted" />
                  <span className="text-terminal-muted">Streaming mode: Real-time transcription with progressive results</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs py-4 border-y border-border">
                  <div>
                    <span className="text-terminal-accent">Mode:</span>
                    <span className="text-foreground ml-2 font-semibold">Professional casual</span>
                  </div>
                  <div>
                    <span className="text-terminal-muted">Processing:</span>
                    <span className="text-foreground ml-2">streaming</span>
                  </div>
                  <div>
                    <span className="text-terminal-muted">Whisper:</span>
                    <span className="text-foreground ml-2">Local: small.en</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <p className="text-terminal-muted text-xs">Keyboard shortcuts:</p>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-terminal-muted">SPACE</span>
                      <span className="text-foreground">— Start/stop recording</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-terminal-muted">TAB</span>
                      <span className="text-foreground">— Switch formatting mode</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-terminal-muted">Shift+S</span>
                      <span className="text-foreground">— Streaming processing mode</span>
                    </div>
                  </div>
                </div>
              </div>
            </TerminalWindow>
            
            {/* Floating terminal prompt */}
            <div className="absolute -top-4 -right-4 bg-card border border-terminal-accent/30 text-terminal-accent p-3 rounded-md shadow-terminal animate-pulse font-mono text-sm">
              <span className="text-terminal-success">●</span> Live transcription active
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