
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, AlertTriangle, CheckCircle, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const flaggedStudents = [
  {
    name: "Sarah Chen",
    issue: "Consistently low quiz scores",
    priority: "high",
    lastActivity: "2 days ago",
    topics: ["Momentum", "Energy"]
  },
  {
    name: "Marcus Johnson",
    issue: "Missing recent assignments",
    priority: "high",
    lastActivity: "5 days ago",
    topics: ["All topics"]
  },
  {
    name: "Emma Rodriguez",
    issue: "Difficulty with problem-solving",
    priority: "medium",
    lastActivity: "1 day ago",
    topics: ["Kinematics", "Forces"]
  },
  {
    name: "David Kim",
    issue: "Inconsistent performance",
    priority: "medium",
    lastActivity: "3 hours ago",
    topics: ["Rotational Motion"]
  },
  {
    name: "Lisa Park",
    issue: "Needs conceptual review",
    priority: "low",
    lastActivity: "1 hour ago",
    topics: ["Newton's Laws"]
  }
];

export const StudentSupport = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
          <Target className="w-5 h-5 mr-2 text-orange-600" />
          Students Needing Support
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {flaggedStudents.map((student, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    student.priority === 'high' ? 'bg-red-500' :
                    student.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{student.name}</h4>
                      {student.priority === 'high' && (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{student.issue}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {student.lastActivity}
                      </div>
                      <div>Topics: {student.topics.join(", ")}</div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-red-50 rounded-lg">
            <div className="flex items-center justify-center mb-1">
              <AlertTriangle className="w-4 h-4 text-red-600 mr-1" />
              <span className="text-lg font-bold text-red-600">2</span>
            </div>
            <div className="text-xs text-red-700">High Priority</div>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg">
            <div className="flex items-center justify-center mb-1">
              <Clock className="w-4 h-4 text-yellow-600 mr-1" />
              <span className="text-lg font-bold text-yellow-600">2</span>
            </div>
            <div className="text-xs text-yellow-700">Medium Priority</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="flex items-center justify-center mb-1">
              <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-lg font-bold text-green-600">316</span>
            </div>
            <div className="text-xs text-green-700">On Track</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
