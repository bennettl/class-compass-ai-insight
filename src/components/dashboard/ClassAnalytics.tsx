
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users } from "lucide-react";

const performanceData = [
  { topic: "Newton's Laws", understanding: 85, students: 272 },
  { topic: "Kinematics", understanding: 73, students: 234 },
  { topic: "Energy & Work", understanding: 67, students: 214 },
  { topic: "Momentum", understanding: 59, students: 189 },
  { topic: "Rotational Motion", understanding: 45, students: 144 }
];

export const ClassAnalytics = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
            Topic Performance Analytics
          </CardTitle>
          <div className="text-sm text-gray-500">Last 30 days</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {performanceData.map((topic, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{topic.topic}</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {topic.students}
                  </div>
                  <span className={`text-sm font-semibold ${
                    topic.understanding >= 75 ? 'text-green-600' : 
                    topic.understanding >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {topic.understanding}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    topic.understanding >= 75 ? 'bg-green-500' : 
                    topic.understanding >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${topic.understanding}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-3">
            <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">AI Insight</p>
              <p className="text-sm text-blue-700 mt-1">
                Students are struggling with Rotational Motion concepts. Consider reviewing angular velocity and torque fundamentals.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
