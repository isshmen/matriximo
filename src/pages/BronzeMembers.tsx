import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import MembersTable from "@/components/MembersTable";
import { Diamond, Users, DollarSign } from "lucide-react";

const BronzeMembers = () => {
  const bronzeMembers = [
    {
      id: "p9kxn45y",
      registrationDate: "28.01.2025, 11:15 AM",
      transactionHash: "0x789...ghi",
      currentPlan: "Bronze"
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
      />

      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Bronze Members</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={bronzeMembers} title="Bronze Members" />
        </CardContent>
      </Card>

      <PlatformStats stats={platformStats} />
    </div>
  );
};

export default BronzeMembers;