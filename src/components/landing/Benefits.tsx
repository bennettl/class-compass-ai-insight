
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefitsByRole = {
  teachers: [
    "Save 5+ hours per week on grading and feedback",
    "Make data-driven instructional decisions",
    "Create differentiated learning experiences effortlessly",
    "Identify struggling students before they fall behind",
    "Enhance feedback quality and consistency",
    "Focus more time on actual teaching"
  ],
  assistants: [
    "Streamline grading workflows for large enrollment courses",
    "Maintain feedback consistency across multiple sections",
    "Provide quality support without extensive training",
    "Scale personalized attention in high-volume courses",
    "Generate detailed progress reports for supervisors",
    "Reduce repetitive administrative tasks"
  ],
  students: [
    "Receive faster, more detailed feedback on assignments",
    "Get personalized learning recommendations",
    "Track progress with clear, actionable insights",
    "Access 24/7 AI-powered study assistance",
    "Understand exactly where to focus improvement efforts",
    "Experience more engaging, adaptive learning"
  ],
  admins: [
    "Monitor teaching effectiveness across departments",
    "Ensure consistent grading standards institution-wide",
    "Generate comprehensive analytics and reports",
    "Reduce faculty workload and improve satisfaction",
    "Demonstrate measurable learning outcomes",
    "Scale quality education without proportional cost increases"
  ]
};

const roleDescriptions = {
  teachers: "Join thousands of educators who have transformed their teaching practice with AI-powered insights and sophisticated feedback capabilities.",
  assistants: "Empower your teaching assistants with tools that ensure consistent, high-quality support across all course sections.",
  students: "Enhance the learning experience with personalized feedback and insights that help students succeed.",
  admins: "Drive institutional excellence with comprehensive analytics and tools that improve outcomes at scale."
};

export const Benefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Educational Professionals Choose SupaClass
          </h2>
        </div>
        
        <Tabs defaultValue="teachers" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white shadow-lg">
            <TabsTrigger value="teachers" className="text-sm font-medium">Teachers</TabsTrigger>
            <TabsTrigger value="assistants" className="text-sm font-medium">Teaching Assistants</TabsTrigger>
            <TabsTrigger value="students" className="text-sm font-medium">Students</TabsTrigger>
            <TabsTrigger value="admins" className="text-sm font-medium">Administrators</TabsTrigger>
          </TabsList>
          
          {Object.entries(benefitsByRole).map(([role, benefits]) => (
            <TabsContent key={role} value={role}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl text-gray-600 mb-8">
                    {roleDescriptions[role as keyof typeof roleDescriptions]}
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
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {role === 'teachers' && 'Student: Emma Johnson'}
                          {role === 'assistants' && 'Section 3A - Chemistry Lab'}
                          {role === 'students' && 'Your Progress Dashboard'}
                          {role === 'admins' && 'Department Analytics'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {role === 'teachers' && 'Math Assessment - Fractions'}
                          {role === 'assistants' && 'Weekly Grading Summary'}
                          {role === 'students' && 'Organic Chemistry Course'}
                          {role === 'admins' && 'Q3 Performance Overview'}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        {role === 'teachers' && (
                          <>
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
                          </>
                        )}
                        
                        {role === 'assistants' && (
                          <>
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-medium text-gray-900 mb-2">Grading Progress</h4>
                              <p className="text-sm text-gray-700">
                                45/50 lab reports graded automatically. 5 flagged for manual review. 
                                Average completion time: 2.3 minutes per report.
                              </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                              <h4 className="font-medium text-gray-900 mb-2">Consistency Check</h4>
                              <p className="text-sm text-gray-700">
                                Your grading aligns 94% with course standards. 
                                3 students need additional support in titration calculations.
                              </p>
                            </div>
                          </>
                        )}
                        
                        {role === 'students' && (
                          <>
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                              <h4 className="font-medium text-gray-900 mb-2">Your Strengths</h4>
                              <p className="text-sm text-gray-700">
                                Excellent grasp of molecular structure! You're in the top 15% 
                                for reaction mechanism problems.
                              </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                              <h4 className="font-medium text-gray-900 mb-2">Focus Areas</h4>
                              <p className="text-sm text-gray-700">
                                Practice stereochemistry concepts. Try the 3D molecular viewer 
                                and complete practice set #7 by Friday.
                              </p>
                            </div>
                          </>
                        )}
                        
                        {role === 'admins' && (
                          <>
                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-200">
                              <h4 className="font-medium text-gray-900 mb-2">Department Metrics</h4>
                              <p className="text-sm text-gray-700">
                                Student satisfaction up 23%. Average grading time reduced by 40%. 
                                Learning outcomes improved across 8 of 10 measured areas.
                              </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-200">
                              <h4 className="font-medium text-gray-900 mb-2">Cost Efficiency</h4>
                              <p className="text-sm text-gray-700">
                                $47K saved in TA hours this semester. ROI of 340% achieved 
                                within first 6 months of implementation.
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
