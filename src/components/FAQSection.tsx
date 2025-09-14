import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the transcription?",
    answer: "Twhisper uses local whisper.cpp by default for high-quality transcription, with optional Azure OpenAI Whisper for enhanced accuracy. The AI understands context and adapts tone of voice for superior results."
  },
  {
    question: "Do I need internet connection?",
    answer: "Basic transcription works locally with whisper.cpp. However, Azure OpenAI account is currently required for this early version, and enhanced features may need internet connection."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No contracts, cancel your subscription at any time. You'll retain access to professional features until the end of your billing period."
  },
  {
    question: "What tone of voice options are available?",
    answer: "Twhisper adapts your speech to different tones: default, email, code documentation, message, slack, professional casual. All tone options are available in both starter and professional plans."
  },
  {
    question: "What platforms are supported?",
    answer: "Currently, twhisper is designed for macOS and requires Homebrew for installation. We're exploring support for other platforms in future releases."
  },
  {
    question: "How does the streaming mode work?",
    answer: "Professional streaming mode provides real-time transcription as you speak, perfect for long meetings and extended sessions. It's ideal for capturing live conversations and brainstorming sessions."
  },
  {
    question: "Can I use it offline?",
    answer: "Yes! Twhisper uses local whisper.cpp processing by default, so basic transcription works offline. Enhanced features with Azure OpenAI require internet connection."
  },
  {
    question: "What's the difference between batch and streaming mode?",
    answer: "Batch mode processes complete recordings up to 10 minutes (Professional) or 1 minute (Starter). Streaming mode provides real-time transcription for longer sessions."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-card">
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