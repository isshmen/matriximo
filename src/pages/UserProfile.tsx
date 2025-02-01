import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";
import { Diamond, Users, DollarSign } from "lucide-react";
import { useParams } from "react-router-dom";
import { getUserById, getRandomUsers } from "../data/sampleUsers";

const UserProfile = () => {
  const { userId } = useParams();
  const user = getUserById(userId || "") || {
    id: userId || "",
    wallet: "0x1234...5678",
    currentPlan: "Diamond",
    activeUntil: "March 1, 2025, 11:54 PM",
    monthlyEarnings: "3,500 BUSD",
    monthlyEarningsChange: "+12.5% from last month",
    totalEarnings: "42,000 BUSD"
  };

  const randomUsers = getRandomUsers(5);

  const platformStats = [
    {
      title: "Total Members",
      value: "45",
      icon: Users,
      change: "+5 new this month",
      link: `/${userId}/referred-members`
    },
    {
      title: "Bronze Members",
      value: "15",
      icon: Users,
      change: "+3 new this month",
      link: `/${userId}/bronze-members`
    },
    {
      title: "Gold Members",
      value: "13",
      icon: Users,
      change: "+4 new this month",
      link: `/${userId}/gold-members`
    },
    {
      title: "Diamond Members",
      value: "17",
      icon: Diamond,
      change: "+2 new this month",
      link: `/${userId}/diamond-members`
    }
  ];

  const recentMembers = randomUsers.map(user => ({
    id: user.id,
    plan: user.currentPlan,
    date: "25.01.2025, 11:53 PM",
    invitedBy: userId || "",
    transactionHash: "0x123...456"
  }));

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserInfoCard 
        {...user}
        onLogout={handleLogout}
      />

      <PlatformStats stats={platformStats} username={userId || ""} />
      
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Network Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentNetworkMembers members={recentMembers} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;