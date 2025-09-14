import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, RefreshCw, Home, Terminal, ExternalLink } from 'lucide-react';
import { TerminalLogo } from '@/components/TerminalLogo';

export const Cancel = () => {
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('session_token');
    setSessionToken(token);
  }, []);

  const handleRetryPayment = () => {
    // Redirect back to pricing section with session token if available
    const pricingUrl = sessionToken 
      ? `/?session_token=${sessionToken}#pricing` 
      : '/#pricing';
    window.location.href = pricingUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-terminal-bg to-terminal-bg/90 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="mb-8">
          <TerminalLogo />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-terminal-text mt-4 mb-2">
              Payment Cancelled
            </h1>
            <p className="text-terminal-text/80 text-lg">
              No worries, you can try again anytime
            </p>
          </div>
        </div>

        <Card className="bg-terminal-bg/50 border-red-500/30 text-terminal-text shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <CardTitle className="text-2xl text-terminal-text">Payment Not Completed</CardTitle>
            <CardDescription className="text-terminal-text/70">
              Your subscription was not activated
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {sessionToken && (
              <div className="bg-terminal-bg/70 p-4 rounded-lg border border-terminal-accent/30">
                <p className="text-sm text-terminal-text/80 mb-2">
                  Your CLI session is still waiting for payment completion.
                </p>
                <code className="font-mono text-xs bg-terminal-bg/50 p-2 rounded block text-terminal-text/60 break-all">
                  Session: {sessionToken}
                </code>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-semibold text-terminal-text">What happened?</h3>
              <ul className="space-y-2 text-sm text-terminal-text/80">
                <li>• Payment was cancelled before completion</li>
                <li>• No charges were made to your account</li>
                <li>• Your starter plan remains active</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-terminal-text">Common reasons for cancellation:</h3>
              <ul className="space-y-2 text-sm text-terminal-text/80">
                <li>• Browser back button was pressed</li>
                <li>• Payment window was closed</li>
                <li>• Network connection issue</li>
                <li>• Changed mind about upgrading</li>
              </ul>
            </div>

            <div className="bg-terminal-bg/70 p-4 rounded-lg border border-terminal-accent/30">
              <h4 className="font-semibold text-terminal-text mb-2">Starter Plan Features</h4>
              <ul className="space-y-1 text-sm text-terminal-text/80">
                <li>✓ Up to 1 minute per session</li>
                <li>✓ All formatting modes</li>
                <li>✓ Batch mode transcription</li>
                <li>✓ Community support</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                className="flex-1 bg-terminal-success hover:bg-terminal-success/80 text-terminal-bg"
                onClick={handleRetryPayment}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Payment Again
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-terminal-accent/30 text-terminal-text hover:bg-terminal-accent/10 hover:text-terminal-text"
                onClick={() => window.location.href = '/'}
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>

            {sessionToken && (
              <Button 
                variant="ghost" 
                className="w-full text-terminal-text/60 hover:bg-terminal-accent/10"
                onClick={() => window.close()}
              >
                <Terminal className="w-4 h-4 mr-2" />
                Return to CLI
              </Button>
            )}

            <div className="pt-4 border-t border-terminal-accent/20">
              <p className="text-xs text-center text-terminal-text/60 mb-3">
                Already have a subscription? Manage it here:
              </p>
              <Button 
                variant="ghost" 
                className="w-full text-terminal-accent hover:bg-terminal-accent/10 hover:text-terminal-accent"
                onClick={() => window.open('https://billing.stripe.com/p/login/test_6oUeVd6yb9SKbCG8n54Ja00', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Customer Portal Login
              </Button>
            </div>

            <div className="text-xs text-center text-terminal-text/50 pt-4 border-t border-terminal-accent/20">
              Need help? Contact us at support@twhisper.com
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};