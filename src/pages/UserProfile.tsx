import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import { Users, DollarSign, ArrowRightLeft, Diamond } from "lucide-react";
import { useParams } from "react-router-dom";
import { getUserById } from "../data/sampleUsers";
import LatestActivity from "@/components/LatestActivity";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";

const UserProfile = () => {
  const { userId } = useParams();
  const user = getUserById(userId || "");
  const isLoggedUser = userId === "user123"; // This should be replaced with actual auth logic

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <Card className="bg-card">
          <CardContent className="p-6">
            <p className="text-center text-lg">User not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // User-specific statistics
  const userStats = [
    {
      title: "Total Members",
      value: user.referredUsers.length.toString(),
      icon: Users,
      change: "+5 new this month",
      link: `/${userId}/referred-members`
    },
    {
      title: "Bronze Members",
      value: user.bronzeMembers.length.toString(),
      icon: Users,
      change: "+3 new this month",
      link: `/${userId}/bronze-members`
    },
    {
      title: "Gold Members",
      value: user.goldMembers.length.toString(),
      icon: Users,
      change: "+4 new this month",
      link: `/${userId}/gold-members`
    },
    {
      title: "Diamond Members",
      value: user.diamondMembers.length.toString(),
      icon: Diamond,
      change: "+2 new this month",
      link: `/${userId}/diamond-members`
    }
  ];

  // Platform statistics (same for all users)
  const platformStats = [
    {
      title: "Total Members",
      value: "1,234,567",
      icon: Users,
      change: "Active + Inactive members"
    },
    {
      title: "Transactions Made",
      value: "153,499",
      icon: ArrowRightLeft,
      change: "Total transactions"
    },
    {
      title: "All Time Earnings",
      value: "1,234,567 BUSD",
      icon: DollarSign,
      change: "Combined earnings"
    },
    {
      title: "Monthly Earnings",
      value: "123,456 BUSD",
      icon: DollarSign,
      change: "Current month"
    },
    {
      title: "Active Members",
      value: "12,345",
      icon: Users,
      change: "With active subscription"
    },
    {
      title: "Bronze Members",
      value: "2,345",
      icon: Users,
      change: "Total Bronze plans"
    },
    {
      title: "Gold Members",
      value: "2,345",
      icon: Users,
      change: "Total Gold plans"
    },
    {
      title: "Diamond Members",
      value: "2,345",
      icon: Diamond,
      change: "Total Diamond plans"
    }
  ];

  const latestActivities = [
    {
      id: user.id,
      date: "25.01.2025, 11:53 PM",
      plan: user.currentPlan,
      activeUntil: user.activeUntil,
      transactionHash: "0x123...456"
    }
  ];

  const recentMembers = user.referredUsers.map(memberId => ({
    id: memberId,
    plan: "Gold", // This should come from actual user data
    date: "25.01.2025, 11:53 PM",
    invitedBy: user.id,
    transactionHash: "0x123...456"
  }));

  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserInfoCard 
        {...user}
        onLogout={() => console.log("Logging out...")}
        isOwner={isLoggedUser}
      />
      
      <PlatformStats 
        stats={userStats}
        title="User Statistics"
        username={userId}
      />
      
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Network Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentNetworkMembers members={recentMembers} />
        </CardContent>
      </Card>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Latest Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <LatestActivity activities={latestActivities} />
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