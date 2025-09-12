import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the transcription?",
    answer: "Powered by Azure OpenAI Whisper, Twhisper delivers industry-leading accuracy with intelligent formatting. Our AI understands context, technical terminology, and proper nouns for superior results."
  },
  {
    question: "Do I need internet connection?",
    answer: "Yes, Twhisper uses cloud-based AI for the highest quality transcription and formatting. This ensures you get the most accurate results with the latest AI improvements."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No contracts, cancel your subscription at any time through your account portal. You'll retain access to premium features until the end of your billing period."
  },
  {
    question: "What formats does it support?",
    answer: "Twhisper supports email, casual messages, code documentation, and professional content formatting. Premium users can create custom formatting templates for specialized use cases."
  },
  {
    question: "Is my voice data secure?",
    answer: "Yes. We use enterprise-grade security with Google OAuth authentication and end-to-end encryption. Audio files are temporarily processed and immediately deleted - your conversations remain private."
  },
  {
    question: "How does the streaming mode work?",
    answer: "Premium streaming mode provides real-time transcription as you speak, with formatting applied at completion. It's perfect for capturing ideas during meetings or brainstorming sessions."
  },
  {
    question: "Can I use it offline?",
    answer: "Twhisper requires internet connection for the best quality transcription. However, we're exploring local processing options for basic functionality in future updates."
  },
  {
    question: "What's the difference between batch and streaming mode?",
    answer: "Batch mode processes complete recordings up to 60 minutes (Premium) or 1 minute (Free). Streaming mode provides real-time transcription for immediate feedback and live use cases."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Twhisper
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};