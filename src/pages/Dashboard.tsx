
import { Header } from "@/components/dashboard/Header";
import { OverviewCards } from "@/components/dashboard/OverviewCards";
import { ClassAnalytics } from "@/components/dashboard/ClassAnalytics";
import { StudentSupport } from "@/components/dashboard/StudentSupport";
import { RecentFeedback } from "@/components/dashboard/RecentFeedback";
import { CommonMisconceptions } from "@/components/dashboard/CommonMisconceptions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <OverviewCards />
          
          <div className="grid lg:grid-cols-2 gap-8">
            <ClassAnalytics />
            <StudentSupport />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <RecentFeedback />
            <CommonMisconceptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
