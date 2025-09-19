import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TermsOfService = () => {
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
            
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: September 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By downloading, installing, or using Twhisper, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Twhisper is a terminal-based voice-to-text transcription application that:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Converts speech to formatted text using AI technology</li>
                <li>• Provides multiple communication styles for different contexts</li>
                <li>• Offers both local processing (whisper.cpp) and cloud processing options</li>
                <li>• Includes streaming mode for real-time transcription</li>
                <li>• Supports multi-language transcription</li>
                <li>• Provides unlimited recording duration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
              <p className="text-muted-foreground">
                You must be at least 18 years old to use Twhisper. By using our service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To access certain features, you may need to create an account. You agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Provide accurate and complete information</li>
                <li>• Keep your login credentials secure</li>
                <li>• Notify us immediately of any unauthorized use</li>
                <li>• Be responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Free Service</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Free Forever Plan</h3>
                  <p className="text-muted-foreground">
                    Twhisper is completely free to use with all features included. This includes unlimited recordings, all communication styles, multi-language support, streaming mode, and more. No subscriptions, no hidden costs.
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    The service is free because it uses your own Azure OpenAI resource or local whisper.cpp processing. You are responsible for any costs associated with your own Azure OpenAI usage.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use Twhisper to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Violate any applicable laws or regulations</li>
                <li>• Infringe on intellectual property rights</li>
                <li>• Transmit harmful, offensive, or illegal content</li>
                <li>• Attempt to reverse engineer or hack the application</li>
                <li>• Use the service for automated or bulk processing beyond reasonable personal use</li>
                <li>• Share account credentials with others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                Twhisper integrates with third-party services:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• <strong>Your Azure OpenAI Resource:</strong> For enhanced transcription (requires your own account and configuration)</li>
                <li>• <strong>Stripe:</strong> For payment processing and subscription management</li>
              </ul>
              <p className="text-muted-foreground">
                Your use of these services is subject to their respective terms of service. We are not responsible for third-party service availability or performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                You retain ownership of your voice recordings and transcribed content. Twhisper and its technology remain our intellectual property. You grant us a limited license to process your content solely to provide the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Privacy and Data</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using Twhisper, you consent to our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Service Availability</h2>
              <p className="text-muted-foreground">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the service with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Twhisper is provided "as is" without warranties. We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid for the service in the past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate this agreement:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• You may stop using the service and delete your account anytime</li>
                <li>• We may suspend or terminate accounts for violations of these terms</li>
                <li>• Upon termination, these terms cease except for provisions that should survive</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these terms periodically. Significant changes will be communicated via email or application notification. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the jurisdiction where Twhisper operates. Disputes will be resolved through binding arbitration or in competent courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these terms or our service, please contact:
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