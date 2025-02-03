import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import LatestActivity from "@/components/LatestActivity";
import { Users, DollarSign, ArrowRightLeft, Diamond } from "lucide-react";
import { getUserById } from "@/data/sampleUsers";

const ReferredUsers = () => {
  const currentUser = getUserById("yhn4bsd");
  
  if (!currentUser) return null;

  const referredUsers = currentUser.referredUsers.map(userId => {
    const user = getUserById(userId);
    return {
      id: userId,
      registrationDate: "30.01.2025, 09:35 PM",
      transactionHash: "0x123...abc",
      currentPlan: user?.currentPlan || "Unknown",
      activeUntil: "28.02.2025, 09:35 PM"
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

  const latestActivities = currentUser.referredUsers.map(memberId => ({
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
            <CardTitle>Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <MembersTable members={referredUsers} title="Total Members" />
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

export default ReferredUsers;