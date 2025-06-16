
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Target, TrendingUp, Users, AlertTriangle } from "lucide-react";

const stats = [
  {
    title: "AI Feedback Generated",
    value: "1,247",
    change: "+12% this week",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Class Understanding",
    value: "73%",
    change: "+5% from last quiz",
    icon: BarChart3,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Students Flagged",
    value: "5",
    change: "Need immediate support",
    icon: Target,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    title: "Engagement Score",
    value: "8.4/10",
    change: "+0.3 this month",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
