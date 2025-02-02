import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";
import { Users, DollarSign, ArrowRightLeft } from "lucide-react";
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
      value: "152,394",
      icon: Users,
      change: "+1,234 this month"
    },
    {
      title: "Members Earned",
      value: "400,293 BUSD",
      icon: DollarSign,
      change: "+23,456 BUSD this month"
    },
    {
      title: "Transactions",
      value: "153,499",
      icon: ArrowRightLeft,
      change: "+2,345 this month"
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
        isOwner={false}
      />
      
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Network Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentNetworkMembers members={recentMembers} />
        </CardContent>
      </Card>

      <PlatformStats 
        stats={platformStats}
        className="mt-6"
      />
    </div>
  );
};

export default UserProfile;