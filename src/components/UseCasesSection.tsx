import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, FileText, Users, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Code,
    title: "For Developers",
    items: [
      "Code documentation and comments",
      "Technical blog posts and tutorials", 
      "Meeting notes and standup updates",
      "API documentation writing"
    ],
    color: "bg-blue-500"
  },
  {
    icon: FileText,
    title: "For Content Creators",
    items: [
      "Blog post drafts for AI refinement",
      "Social media content",
      "Video scripts and outlines",
      "Newsletter content creation"
    ],
    color: "bg-purple-500"
  },
  {
    icon: Briefcase,
    title: "For Professionals",
    items: [
      "Email composition",
      "Meeting minutes",
      "Report drafts and documentation",
      "Client communication"
    ],
    color: "bg-indigo-500"
  },
  {
    icon: Users,
    title: "For Teams",
    items: [
      "Collaborative meeting notes",
      "Project documentation",
      "Brainstorming session capture",
      "Knowledge base creation"
    ],
    color: "bg-violet-500"
  }
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Perfect for Every{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From quick Slack messages to full blog post drafts, Twhisper adapts to how you work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};