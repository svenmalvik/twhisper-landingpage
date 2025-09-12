import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-terminal overflow-hidden ${className}`}>
      {/* Terminal header */}
      <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
        </div>
        <span className="text-muted-foreground text-sm font-mono ml-4">twhisper --mode streaming</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-6 font-mono text-sm">
        {children}
      </div>
    </div>
  );
};