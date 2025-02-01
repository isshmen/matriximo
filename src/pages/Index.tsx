import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Users, DollarSign } from "lucide-react";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import LatestActivity from "@/components/LatestActivity";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";
import { sampleUsers, getRandomUsers } from "../data/sampleUsers";

const Index = () => {
  const currentUser = sampleUsers[0]; // Using first user as current user
  const randomUsers = getRandomUsers(5); // Get 5 random users for recent activity

  const platformStats = [
    {
      title: "Total Referred",
      value: "45",
      icon: Users,
      change: "+5 new this month",
      link: `/${currentUser.id}/referred-users`
    },
    {
      title: "Bronze Members",
      value: "15",
      icon: Users,
      change: "+3 new this month",
      link: `/${currentUser.id}/bronze-members`
    },
    {
      title: "Gold Members",
      value: "13",
      icon: Users,
      change: "+4 new this month",
      link: `/${currentUser.id}/gold-members`
    },
    {
      title: "Diamond Members",
      value: "17",
      icon: Diamond,
      change: "+2 new this month",
      link: `/${currentUser.id}/diamond-members`
    }
  ];

  const latestActivities = randomUsers.map(user => ({
    id: user.id,
    date: "25.01.2025, 11:53 PM",
    plan: user.currentPlan,
    activeUntil: user.activeUntil,
    transactionHash: "0x123...456"
  }));

  const recentMembers = randomUsers.map(user => ({
    id: user.id,
    plan: user.currentPlan,
    date: "25.01.2025, 11:53 PM",
    invitedBy: "abc123",
    transactionHash: "0x123...456"
  }));

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserInfoCard 
        {...currentUser}
        onLogout={handleLogout}
      />

      <PlatformStats stats={platformStats} username={currentUser.id} />
      <LatestActivity activities={latestActivities} />
      <RecentNetworkMembers members={recentMembers} />
    </div>
  );
};

export default Index;