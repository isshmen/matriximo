import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import LatestActivity from "@/components/LatestActivity";
import { Users, DollarSign, ArrowRightLeft, Diamond } from "lucide-react";
import { getUserById } from "@/data/sampleUsers";

const BronzeMembers = () => {
  const currentUser = getUserById("yhn4bsd");
  
  if (!currentUser) return null;

  const bronzeMembers = currentUser.bronzeMembers.map(userId => {
    const user = getUserById(userId);
    return {
      id: userId,
      registrationDate: "28.01.2025, 11:15 AM",
      transactionHash: "0x789...ghi",
      currentPlan: user?.currentPlan || "Bronze",
      activeUntil: "01.02.2025, 11:15 AM"
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

  const latestActivities = currentUser.bronzeMembers.map(memberId => ({
    id: memberId,
    date: "25.01.2025, 11:53 PM",
    plan: "Bronze",
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
            <CardTitle>Bronze Members</CardTitle>
          </CardHeader>
          <CardContent>
            <MembersTable members={bronzeMembers} title="Bronze Members" />
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

export default BronzeMembers;