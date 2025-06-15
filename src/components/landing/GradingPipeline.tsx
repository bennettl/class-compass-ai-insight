
import { FileText, Brain, ClipboardCheck, PencilLine, FileCheck, Users, BarChart3, ArrowDown } from "lucide-react";

const pipelineSteps = [
  {
    icon: FileText,
    title: "Submit Your Work",
    description: "Students upload assignments in any format - essays, code, presentations, or PDFs.",
    color: "blue"
  },
  {
    icon: Brain,
    title: "AI Reads Everything",
    description: "Our AI carefully reads and understands what each student submitted.",
    color: "indigo"
  },
  {
    icon: ClipboardCheck,
    title: "Grade Against Your Rubric",
    description: "Scores each assignment using your exact grading criteria and standards.",
    color: "purple"
  },
  {
    icon: PencilLine,
    title: "Write Helpful Comments",
    description: "Provides specific feedback to help students improve their work.",
    color: "pink"
  },
  {
    icon: FileCheck,
    title: "Check for Originality",
    description: "Ensures work is authentic and flags any potential plagiarism issues.",
    color: "red"
  },
  {
    icon: Users,
    title: "Teacher Review",
    description: "Highlights unusual cases that might need your personal attention.",
    color: "orange"
  },
  {
    icon: BarChart3,
    title: "Class Insights",
    description: "Shows patterns across all students to help improve your teaching.",
    color: "green"
  }
];

const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', dot: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', dot: 'bg-indigo-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', dot: 'bg-purple-500' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', dot: 'bg-pink-500' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', dot: 'bg-red-500' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', dot: 'bg-orange-500' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', dot: 'bg-green-500' }
};

export const GradingPipeline = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How SupaClass Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple 7-step process that handles everything from submission to insights.
          </p>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true"></div>
          
          <div className="space-y-8">
            {pipelineSteps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                {/* Step number and icon */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${colorClasses[step.color as keyof typeof colorClasses].bg} border-4 border-white shadow-sm flex items-center justify-center`}>
                    <step.icon className={`w-7 h-7 ${colorClasses[step.color as keyof typeof colorClasses].text}`} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-6 flex-1 pb-8">
                  <div className={`p-6 rounded-lg ${colorClasses[step.color as keyof typeof colorClasses].bg} border ${colorClasses[step.color as keyof typeof colorClasses].border}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                
                {/* Arrow between steps */}
                {index < pipelineSteps.length - 1 && (
                  <div className="absolute left-8 -translate-x-1/2 top-16 z-10">
                    <ArrowDown className="w-5 h-5 text-gray-400" />
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
