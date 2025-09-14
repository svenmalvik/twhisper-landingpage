import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StripePaymentButtonProps {
  plan: 'starter' | 'professional' | 'enterprise';
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
    if (plan === 'enterprise') {
      // Open email client for Enterprise contact
      window.location.href = 'mailto:sven@malvik.de?subject=Enterprise Plan Inquiry&body=Hi Sven,%0A%0AI\'m interested in learning more about the Enterprise plan for twhisper.%0A%0AThanks!';
    } else {
      // Both starter and professional plans scroll to installation
      // Professional users will upgrade from within the app after installing
      document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button 
      className={`${className} ${(plan === 'starter' || plan === 'enterprise') ? 'hover:bg-muted/50 hover:text-white transition-colors' : ''}`}
      variant={variant}
      size={size}
      onClick={handlePayment}
      disabled={isLoading}
    >
      {isLoading ? 'Processing...' : children}
    </Button>
  );
};