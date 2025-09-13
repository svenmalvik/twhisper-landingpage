import { Separator } from "@/components/ui/separator";
import { Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold">Twhisper</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transform your voice into perfectly formatted text with AI-powered 
              intelligence. Built for professionals who value efficiency.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:sven@malvik.de" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Contact support via email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/svenmalvik/homebrew-twhisper" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a 
                href="#pricing" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
              >Pricing</a></li>
              <li><a 
                href="#use-cases" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => { e.preventDefault(); document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' }); }}
              >Use Cases</a></li>
              <li><a 
                href="#faq" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}
              >FAQ</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:sven@malvik.de" className="text-muted-foreground hover:text-primary transition-colors">Contact Support</a></li>
              <li><a href="https://github.com/svenmalvik/homebrew-twhisper/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Twhisper. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for developers and creators
          </p>
        </div>
      </div>
    </footer>
  );
};