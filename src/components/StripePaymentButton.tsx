import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StripePaymentButtonProps {
  plan: 'free' | 'premium';
  className?: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export const StripePaymentButton: React.FC<StripePaymentButtonProps> = ({
  plan,
  className,
  variant = 'default',
  size = 'lg',
  children
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    if (plan === 'free') {
      // For free plan, show installation instructions
      alert('Free plan - no payment required!\n\nTo get started:\n1. Install with: npm install -g twhisper\n2. Run: twhisper --help');
      return;
    }

    setIsLoading(true);

    try {
      // Get session token from URL parameters if present (from CLI)
      const urlParams = new URLSearchParams(window.location.search);
      const sessionToken = urlParams.get('session_token');

      // For static frontend, redirect directly to Stripe Checkout with pre-configured link
      // This would be the Stripe Payment Link URL for the premium plan
      const stripePaymentLinkUrl = 'https://buy.stripe.com/test_6oUeVd6yb9SKbCG8n54Ja00'; // Replace with actual payment link

      // Add session token and return URLs as query parameters
      const successUrl = `${window.location.origin}/success${sessionToken ? `?session_token=${sessionToken}` : ''}`;
      const cancelUrl = `${window.location.origin}/cancel${sessionToken ? `?session_token=${sessionToken}` : ''}`;
      
      let redirectUrl = stripePaymentLinkUrl;
      
      // Add custom metadata and return URLs if using Stripe Payment Links
      if (sessionToken) {
        redirectUrl += `?client_reference_id=${sessionToken}`;
      }
      
      // Log for debugging
      console.log('Redirecting to Stripe Payment Link:', redirectUrl);
      console.log('Success URL:', successUrl);
      console.log('Cancel URL:', cancelUrl);
      console.log('Session Token:', sessionToken || 'None');
      
      // Actual redirect to Stripe Payment Link
      window.location.href = redirectUrl;

    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment setup error. Please check configuration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      className={className}
      variant={variant}
      size={size}
      onClick={handlePayment}
      disabled={isLoading}
    >
      {isLoading ? 'Processing...' : children}
    </Button>
  );
};