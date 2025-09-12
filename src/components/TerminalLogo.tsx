export const TerminalLogo = () => {
  return (
    <div className="font-mono">
      <div className="text-4xl font-bold text-terminal-accent leading-none tracking-wider">
        <span className="inline-block border-2 border-terminal-accent px-2 py-1">T</span>
        <span className="inline-block border-2 border-terminal-accent border-l-0 px-2 py-1">W</span>
        <span className="inline-block border-2 border-terminal-accent border-l-0 px-2 py-1">H</span>
        <span className="inline-block border-2 border-terminal-accent border-l-0 px-2 py-1">I</span>
        <span className="inline-block border-2 border-terminal-accent border-l-0 px-2 py-1">S</span>
        <span className="inline-block border-2 border-terminal-accent border-l-0 px-2 py-1">P</span>
        <span className="inline-block border-2 border-terminal-accent border-l-0 px-2 py-1">E</span>
        <span className="inline-block border-2 border-terminal-accent border-l-0 px-2 py-1">R</span>
      </div>
      <p className="text-terminal-muted font-mono text-sm mt-2">Terminal Whisper CLI</p>
    </div>
  );
};