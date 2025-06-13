
import { Brain, BarChart3, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Generate rich, qualitative feedback that goes beyond generic comments"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Identify class-wide patterns and learning gaps with comprehensive insights"
  },
  {
    icon: Target,
    title: "Targeted Support",
    description: "Automatically flag students who need additional support based on assessment data"
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform assessment data into actionable teaching insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-indigo-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
