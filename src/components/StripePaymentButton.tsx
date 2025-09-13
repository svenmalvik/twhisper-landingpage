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
    // Both free and premium plans scroll to installation
    // Premium users will upgrade from within the app after installing
    document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' });
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