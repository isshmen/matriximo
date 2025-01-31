import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import MembersTable from "@/components/MembersTable";
import { Diamond, Users, DollarSign } from "lucide-react";

const GoldMembers = () => {
  const goldMembers = [
    {
      id: "m4wxr78t",
      registrationDate: "27.01.2025, 02:45 PM",
      transactionHash: "0xabc...123",
      currentPlan: "Gold"
    }
  ];

  const platformStats = [
    {
      title: "Total Members",
      value: "1,200",
      icon: Users,
      change: "+12% from last month"
    },
    {
      title: "Members Received",
      value: "400,293 BUSD",
      icon: DollarSign,
      change: "+8.2% from last month"
    },
    {
      title: "Transactions",
      value: "153,499",
      icon: Diamond,
      change: "+5.4% from last month"
    },
    {
      title: "Turnover",
      value: "1,351,014 BUSD",
      icon: Diamond,
      change: "+14.6% from last month"
    }
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserInfoCard 
        id="yhn4bsd"
        wallet="0x1234...5678"
        currentPlan="Diamond"
        activeUntil="March 1, 2025, 11:54 PM"
        monthlyEarnings="3,500 BUSD"
        monthlyEarningsChange="+12.5% from last month"
      />

      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Gold Members</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={goldMembers} title="Gold Members" />
        </CardContent>
      </Card>

      <PlatformStats stats={platformStats} />
    </div>
  );
};

export default GoldMembers;