
import { FileText, Brain, ClipboardCheck, PencilLine, FileCheck, Users, BarChart3, ArrowDown } from "lucide-react";

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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Rigorous Grading Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From submission to insight, every step is designed for accuracy, fairness, and pedagogical value.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gray-200 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-12 md:space-y-16">
            {pipelineSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="md:flex items-center md:space-x-8">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                     <div className={`p-6 rounded-xl border ${colorClasses[step.color as keyof typeof colorClasses].border} bg-white shadow-sm hover:shadow-lg transition-shadow duration-300`}>
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[step.color as keyof typeof colorClasses].bg}`}>
                          <step.icon className={`w-6 h-6 ${colorClasses[step.color as keyof typeof colorClasses].text}`} />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                           <p className="mt-1 text-gray-600">{step.description}</p>
                        </div>
                      </div>
                     </div>
                  </div>
                  
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full ${colorClasses[step.color as keyof typeof colorClasses].bg}`}></div>
                      </div>
                  </div>

                  <div className="md:w-1/2">
                    {/* Placeholder for future visuals */}
                  </div>
                </div>
                 {index < pipelineSteps.length - 1 && (
                    <div className="mt-6 md:hidden flex justify-center">
                        <ArrowDown className="w-6 h-6 text-gray-300" />
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
