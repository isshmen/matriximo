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
  const isLoggedUser = userId === "yhn4bsd"; // This should be replaced with actual auth logic

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
      change: "Total referred members",
      link: `/${userId}/referred-members`
    },
    {
      title: "Bronze Members",
      value: user.bronzeMembers.length.toString(),
      icon: Users,
      change: "Total Bronze plans",
      link: `/${userId}/bronze-members`
    },
    {
      title: "Gold Members",
      value: user.goldMembers.length.toString(),
      icon: Users,
      change: "Total Gold plans",
      link: `/${userId}/gold-members`
    },
    {
      title: "Diamond Members",
      value: user.diamondMembers.length.toString(),
      icon: Diamond,
      change: "Total Diamond plans",
      link: `/${userId}/diamond-members`
    }
  ];

  // Generate activities based on user's referred members
  const latestActivities = user.referredUsers.map(memberId => ({
    id: memberId,
    date: "25.01.2025, 11:53 PM",
    plan: "Gold", // This should come from actual user data
    activeUntil: "25.02.2025, 11:53 PM",
    transactionHash: "0x123...456"
  }));

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
          <CardTitle>Latest Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <LatestActivity activities={latestActivities} />
        </CardContent>
      </Card>

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