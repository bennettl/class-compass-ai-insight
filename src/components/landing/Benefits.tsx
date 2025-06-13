
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Save 5+ hours per week on grading and feedback",
  "Improve student learning outcomes with personalized insights",
  "Identify struggling students before they fall behind",
  "Create differentiated learning experiences effortlessly",
  "Make data-driven instructional decisions",
  "Enhance feedback quality and consistency"
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Teachers Choose SupaClass
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of educators who have transformed their teaching practice 
              with AI-powered insights and sophisticated feedback capabilities.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Student: Emma Johnson</h3>
                  <p className="text-sm text-gray-600">Math Assessment - Fractions</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-gray-900 mb-2">AI Insight</h4>
                    <p className="text-sm text-gray-700">
                      Emma consistently struggles with mixed numbers. Consider using visual fraction models 
                      and connecting to real-world examples like cooking measurements.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-medium text-gray-900 mb-2">Suggested Feedback</h4>
                    <p className="text-sm text-gray-700">
                      "Great work on equivalent fractions! Let's practice mixed numbers using pizza slices 
                      to make it more concrete. Try the interactive fraction tool I've assigned."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
                    <p className="text-sm text-gray-700">
                      Assign differentiated practice set #3. Schedule 1:1 check-in for Friday.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
