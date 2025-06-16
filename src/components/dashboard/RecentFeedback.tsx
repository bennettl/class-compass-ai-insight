
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, CheckCircle, AlertCircle, Info } from "lucide-react";

const recentFeedback = [
  {
    student: "Alex Thompson",
    assignment: "Problem Set 3",
    type: "strength",
    feedback: "Excellent application of conservation of energy principles. Clear step-by-step approach.",
    timestamp: "2 hours ago"
  },
  {
    student: "Maria Santos",
    assignment: "Midterm Exam",
    type: "improvement",
    feedback: "Consider using free body diagrams to visualize forces before setting up equations.",
    timestamp: "4 hours ago"
  },
  {
    student: "Jordan Lee",
    assignment: "Lab Report 2",
    type: "strength",
    feedback: "Outstanding analysis of experimental error and data interpretation.",
    timestamp: "6 hours ago"
  },
  {
    student: "Taylor Brown",
    assignment: "Quiz 4",
    type: "suggestion",
    feedback: "Review the relationship between torque and angular acceleration for rotational dynamics.",
    timestamp: "8 hours ago"
  }
];

export const RecentFeedback = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-blue-600" />
          Recent AI Feedback
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentFeedback.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.type === 'strength' ? 'bg-green-100' :
                  item.type === 'improvement' ? 'bg-orange-100' : 'bg-blue-100'
                }`}>
                  {item.type === 'strength' ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : item.type === 'improvement' ? (
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                  ) : (
                    <Info className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-900">{item.student}</h4>
                    <span className="text-xs text-gray-500">{item.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.assignment}</p>
                  <p className="text-sm text-gray-700">{item.feedback}</p>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                    item.type === 'strength' ? 'bg-green-100 text-green-800' :
                    item.type === 'improvement' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item.type === 'strength' ? 'Strength' :
                     item.type === 'improvement' ? 'Growth Area' : 'Suggestion'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
