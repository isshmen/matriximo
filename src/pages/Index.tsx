import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Users, DollarSign } from "lucide-react";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import LatestActivity from "@/components/LatestActivity";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";
import { Link } from "react-router-dom";

const Index = () => {
  const currentUser = "yhn4bsd"; // This would come from your auth context

  const platformStats = [
    {
      title: "Total Referred",
      value: "45",
      icon: Users,
      change: "+5 new this month",
      link: `/${currentUser}/referred-users`
    },
    {
      title: "Bronze Members",
      value: "15",
      icon: Users,
      change: "+3 new this month",
      link: `/${currentUser}/bronze-members`
    },
    {
      title: "Gold Members",
      value: "13",
      icon: Users,
      change: "+4 new this month",
      link: `/${currentUser}/gold-members`
    },
    {
      title: "Diamond Members",
      value: "17",
      icon: Diamond,
      change: "+2 new this month",
      link: `/${currentUser}/diamond-members`
    }
  ];

  const latestActivities = [
    {
      id: "user123",
      date: "25.01.2025, 11:53 PM",
      plan: "Bronze",
      activeUntil: "25.02.2025, 11:53 PM",
      transactionHash: "0x123...456"
    },
    // Add more activities as needed
  ];

  const recentMembers = [
    {
      id: "yhn4bsd",
      plan: "Diamond",
      date: "25.01.2025, 11:53 PM",
      invitedBy: "abc123",
      transactionHash: "0x123...456"
    },
    // Add more members as needed
  ];

  const handleLogout = () => {
    // Implement wallet disconnect logic here
    console.log("Logging out...");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserInfoCard 
        id="yhn4bsd"
        wallet="0x1234...5678"
        currentPlan="Diamond"
        activeUntil="March 1, 2025, 11:54 PM"
        monthlyEarnings="3,500 BUSD"
        monthlyEarningsChange="+12.5% from last month"
        totalEarnings="42,000 BUSD"
        onLogout={handleLogout}
      />

      <PlatformStats stats={platformStats} username={currentUser} />
      <LatestActivity activities={latestActivities} />
      <RecentNetworkMembers members={recentMembers} />
    </div>
  );
};

export default Index;
