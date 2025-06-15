import { FileText, Brain, ClipboardCheck, PencilLine, FileCheck, Users, BarChart3 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const pipelineSteps = [
  {
    icon: FileText,
    title: "Submission Ingestion",
    description: "Securely accepts various formats, from text to code submissions.",
    color: "blue"
  },
  {
    icon: Brain,
    title: "AI Pre-analysis",
    description: "Structures submitted data and performs initial analysis for key concepts.",
    color: "indigo"
  },
  {
    icon: ClipboardCheck,
    title: "Rubric-based Evaluation",
    description: "Scores work against predefined rubrics with high accuracy and consistency.",
    color: "purple"
  },
  {
    icon: PencilLine,
    title: "Qualitative Feedback",
    description: "Generates nuanced, constructive comments beyond simple right/wrong.",
    color: "pink"
  },
  {
    icon: FileCheck,
    title: "Authenticity Check",
    description: "Cross-references submissions against a vast database for originality.",
    color: "red"
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "Flags edge cases for educator review, ensuring pedagogical alignment.",
    color: "orange"
  },
  {
    icon: BarChart3,
    title: "Insight Synthesis",
    description: "Aggregates class-wide data to reveal trends and actionable insights.",
    color: "green"
  }
];

const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200' },
    red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
    green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' }
};

export const GradingPipeline = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Rigorous Grading Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From submission to insight, every step is designed for accuracy, fairness, and pedagogical value.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {pipelineSteps.map((step, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className={`h-full border-2 ${colorClasses[step.color as keyof typeof colorClasses].border} hover:shadow-lg transition-shadow duration-300 flex flex-col`}>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${colorClasses[step.color as keyof typeof colorClasses].bg} mb-4`}>
                          <step.icon className={`w-8 h-8 ${colorClasses[step.color as keyof typeof colorClasses].text}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};
