import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ExternalLink, Terminal } from 'lucide-react';
import { TerminalLogo } from '@/components/TerminalLogo';

export const Success = () => {
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('session_token');
    setSessionToken(token);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-terminal-bg to-terminal-bg/90 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="mb-8">
          <TerminalLogo />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-terminal-text mt-4 mb-2">
              Welcome to Twhisper Professional! 🚀
            </h1>
            <p className="text-terminal-text/80 text-lg">
              You now have access to all professional features
            </p>
          </div>
        </div>

        <Card className="bg-terminal-bg/50 border-terminal-success/30 text-terminal-text shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-terminal-success/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-terminal-success" />
            </div>
            <CardTitle className="text-2xl text-terminal-text">Subscription Activated</CardTitle>
            <CardDescription className="text-terminal-text/70">
              Your professional features are now available
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {sessionToken && (
              <div className="bg-terminal-bg/70 p-4 rounded-lg border border-terminal-accent/30">
                <h3 className="font-mono text-sm text-terminal-accent mb-2">CLI Session Token:</h3>
                <code className="font-mono text-xs bg-terminal-bg/50 p-2 rounded block text-terminal-text break-all">
                  {sessionToken}
                </code>
                <p className="text-xs text-terminal-text/60 mt-2">
                  Your CLI session will automatically activate professional features.
                </p>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-semibold text-terminal-text">What's Next?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-terminal-success mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-terminal-text">Professional features are now enabled in your CLI</span>
                    <p className="text-terminal-text/60 text-xs mt-1">
                      Run <code className="bg-terminal-bg/50 px-1 py-0.5 rounded font-mono">twhisper --mode streaming</code> to try real-time transcription
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-terminal-success mt-0.5 flex-shrink-0" />
                  <span className="text-terminal-text">Access to up to 60-minute sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-terminal-success mt-0.5 flex-shrink-0" />
                  <span className="text-terminal-text">Custom communication styles available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-terminal-success mt-0.5 flex-shrink-0" />
                  <span className="text-terminal-text">Priority support included</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                className="flex-1 bg-terminal-success hover:bg-terminal-success/80 text-terminal-bg"
                onClick={() => window.close()}
              >
                <Terminal className="w-4 h-4 mr-2" />
                Return to CLI
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-terminal-accent/30 text-terminal-text hover:bg-terminal-accent/10 hover:text-terminal-text"
                onClick={() => window.location.href = '/'}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>

            <div className="pt-4 border-t border-terminal-accent/20">
              <Button 
                variant="ghost" 
                className="w-full text-terminal-accent hover:bg-terminal-accent/10 hover:text-terminal-accent"
                onClick={() => window.open('https://billing.stripe.com/p/login/test_6oUeVd6yb9SKbCG8n54Ja00', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Manage Subscription (Customer Portal)
              </Button>
            </div>

            <div className="text-xs text-center text-terminal-text/50 pt-4 border-t border-terminal-accent/20">
              Questions? Contact us at support@twhisper.com
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};