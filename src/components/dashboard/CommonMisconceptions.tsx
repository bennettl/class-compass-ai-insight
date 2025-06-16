
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Users, TrendingDown } from "lucide-react";

const misconceptions = [
  {
    concept: "Force and Motion",
    misconception: "Objects in motion require a constant force to keep moving",
    affected: 156,
    percentage: 73,
    trend: "increasing"
  },
  {
    concept: "Energy Conservation",
    misconception: "Energy can be created or destroyed in everyday situations",
    affected: 89,
    percentage: 42,
    trend: "stable"
  },
  {
    concept: "Friction",
    misconception: "Friction always opposes motion in the direction of movement",
    affected: 67,
    percentage: 31,
    trend: "decreasing"
  },
  {
    concept: "Circular Motion",
    misconception: "Objects in circular motion experience outward centrifugal force",
    affected: 123,
    percentage: 58,
    trend: "increasing"
  }
];

export const CommonMisconceptions = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
          Common Misconceptions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {misconceptions.map((item, index) => (
            <div key={index} className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.concept}</h4>
                  <p className="text-sm text-gray-700 italic">"{item.misconception}"</p>
                </div>
                <div className={`flex items-center text-sm ${
                  item.trend === 'increasing' ? 'text-red-600' :
                  item.trend === 'decreasing' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  <TrendingDown className={`w-4 h-4 mr-1 ${
                    item.trend === 'increasing' ? 'rotate-180' : ''
                  }`} />
                  {item.trend}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  {item.affected} students affected
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-red-600">{item.percentage}%</div>
                  <div className="text-xs text-gray-500">of class</div>
                </div>
              </div>
              
              <div className="mt-3 w-full bg-red-200 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">Recommended Action</p>
              <p className="text-sm text-blue-700 mt-1">
                Focus next lecture on Newton's First Law with real-world examples to address the most common misconception.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
