import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: September 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                Twhisper is a local-first application that prioritizes your privacy. We collect minimal information necessary to provide our service:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• <strong>Account Information:</strong> Email address for authentication and support</li>
                <li>• <strong>Usage Data:</strong> Basic usage statistics to improve the application</li>
                <li>• <strong>Voice Data:</strong> Processed locally by default; not stored or transmitted unless you choose cloud processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the collected information to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Provide and maintain the twhisper service</li>
                <li>• Process your voice recordings (locally by default)</li>
                <li>• Send important updates and support communications</li>
                <li>• Improve our application based on usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Voice Data Processing</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Local Processing:</strong> By default, twhisper processes your voice recordings locally using whisper.cpp. Your voice data never leaves your device.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Azure OpenAI Processing:</strong> If you configure your own Azure OpenAI resource for enhanced accuracy:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Voice recordings are sent directly from your device to your Azure OpenAI resource</li>
                <li>• Microsoft's privacy policy applies to this data processing</li>
                <li>• We do not have access to your voice data - it goes directly to your configured Azure service</li>
                <li>• You maintain full control over your Azure OpenAI account and data retention policies</li>
                <li>• Configuration is done through your own Azure OpenAI credentials in the application settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• All data transmission is encrypted using HTTPS</li>
                <li>• Local voice processing means your recordings stay on your device</li>
                <li>• Account information is stored securely with industry-standard practices</li>
                <li>• We do not store voice recordings on our servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                Twhisper may integrate with third-party services that you configure:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• <strong>Your Azure OpenAI Resource:</strong> For enhanced transcription accuracy (requires your own account and configuration)</li>
                <li>• <strong>Stripe:</strong> For payment processing of premium subscriptions</li>
              </ul>
              <p className="text-muted-foreground">
                When you use your own Azure OpenAI resource, data flows directly between your device and your Azure service. Microsoft's privacy policies govern that relationship, not ours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your account and data</li>
                <li>• Choose between local and cloud processing</li>
                <li>• Opt out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information only as long as necessary to provide the service. Voice recordings processed locally are not retained by us. Account information is kept until you request deletion or close your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of significant changes via email or through the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Email:</strong> <a href="mailto:sven@malvik.de" className="text-primary hover:underline">sven@malvik.de</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};