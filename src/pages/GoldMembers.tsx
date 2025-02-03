import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import LatestActivity from "@/components/LatestActivity";
import { Users, DollarSign, ArrowRightLeft, Diamond } from "lucide-react";
import { getUserById } from "@/data/sampleUsers";

const GoldMembers = () => {
  const currentUser = getUserById("yhn4bsd");
  
  if (!currentUser) return null;

  const goldMembers = currentUser.goldMembers.map(userId => {
    const user = getUserById(userId);
    return {
      id: userId,
      registrationDate: "27.01.2025, 02:45 PM",
      transactionHash: "0xabc...123",
      currentPlan: user?.currentPlan || "Gold",
      activeUntil: "25.02.2025, 02:45 PM"
    };
  });

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
    }
  ];

  const latestActivities = currentUser.goldMembers.map(memberId => ({
    id: memberId,
    date: "25.01.2025, 11:53 PM",
    plan: "Gold",
    activeUntil: "25.02.2025, 11:53 PM",
    transactionHash: "0x123...456"
  }));

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-6">
        <UserInfoCard 
          {...currentUser}
          onLogout={() => console.log("Logging out...")}
          isOwner={true}
        />

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Gold Members</CardTitle>
          </CardHeader>
          <CardContent>
            <MembersTable members={goldMembers} title="Gold Members" />
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
    </DashboardLayout>
  );
};

export default GoldMembers;