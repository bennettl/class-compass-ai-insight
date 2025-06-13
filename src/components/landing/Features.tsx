
import { Brain, BarChart3, Target, TrendingUp, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Generate rich, qualitative feedback that goes beyond generic comments",
    visual: "feedback"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Identify class-wide patterns and learning gaps with comprehensive insights",
    visual: "analytics"
  },
  {
    icon: Target,
    title: "Targeted Support",
    description: "Automatically flag students who need additional support based on assessment data",
    visual: "support"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transform Teaching with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three core capabilities that revolutionize classroom insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* AI-Powered Feedback */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-full border border-blue-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI-Powered Feedback
              </h3>
              
              <p className="text-gray-600 mb-6">
                Generate rich, qualitative feedback that goes beyond generic comments
              </p>
              
              {/* Visual: Sample feedback cards */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-blue-200/30 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Strength Identified</p>
                      <p className="text-xs text-gray-600">Clear problem-solving approach</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200/30 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Growth Opportunity</p>
                      <p className="text-xs text-gray-600">Consider alternative methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Analytics */}
          <div className="group">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 h-full border border-green-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Analytics
              </h3>
              
              <p className="text-gray-600 mb-6">
                Identify class-wide patterns and learning gaps with comprehensive insights
              </p>
              
              {/* Visual: Mini chart and progress bars */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200/30 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Class Understanding</span>
                    <span className="text-sm text-green-600 font-semibold">73%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '73%'}}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200/30 shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Common Misconceptions</span>
                  </div>
                  <div className="flex space-x-1">
                    {[40, 60, 30, 80, 25].map((height, i) => (
                      <div key={i} className="bg-green-200 rounded-t" style={{width: '12px', height: `${height/2}px`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Targeted Support */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 h-full border border-purple-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Targeted Support
              </h3>
              
              <p className="text-gray-600 mb-6">
                Automatically flag students who need additional support based on assessment data
              </p>
              
              {/* Visual: Student support indicators */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-purple-200/30 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">High Priority</p>
                        <p className="text-xs text-gray-600">3 students</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200/30 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">On Track</p>
                        <p className="text-xs text-gray-600">18 students</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
