
import { Brain, BarChart3, MessageSquare, Target, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Generate rich, qualitative feedback suggestions that go beyond generic comments. Our AI understands context and provides meaningful insights."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Identify class-wide patterns, common misconceptions, and learning gaps with comprehensive data visualization and reporting."
  },
  {
    icon: MessageSquare,
    title: "Customizable Responses",
    description: "Review, edit, and personalize AI-generated feedback before delivery. Maintain your teaching voice while leveraging AI intelligence."
  },
  {
    icon: Target,
    title: "Targeted Support Identification",
    description: "Automatically flag students who need additional support based on assessment data and learning patterns."
  },
  {
    icon: Users,
    title: "Differentiated Strategies",
    description: "Receive personalized instructional strategies and learning path recommendations tailored to individual student needs."
  },
  {
    icon: Lightbulb,
    title: "Actionable Intelligence",
    description: "Transform assessment data into concrete teaching actions with data-driven insights that directly inform your practice."
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sophisticated Teaching Tools for Modern Educators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Move beyond simple grading with AI that understands pedagogy and provides 
            actionable insights to enhance your teaching effectiveness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
