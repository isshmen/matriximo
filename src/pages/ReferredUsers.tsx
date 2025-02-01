import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import MembersTable from "@/components/MembersTable";
import { Diamond, Users, DollarSign } from "lucide-react";
import { useParams } from "react-router-dom";

const ReferredUsers = () => {
  const { userId } = useParams();
  
  const referredUsers = [
    {
      id: "h3pan19b",
      registrationDate: "30.01.2025, 09:35 PM",
      transactionHash: "0x123...abc",
      currentPlan: "Diamond"
    },
    {
      id: "k7mxq23r",
      registrationDate: "29.01.2025, 03:22 PM",
      transactionHash: "0x456...def",
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

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserInfoCard 
        id={userId || ""}
        wallet="0x1234...5678"
        currentPlan="Diamond"
        activeUntil="March 1, 2025, 11:54 PM"
        monthlyEarnings="3,500 BUSD"
        monthlyEarningsChange="+12.5% from last month"
        totalEarnings="42,000 BUSD"
        onLogout={handleLogout}
      />

      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Referred Users</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={referredUsers} title="Referred Users" />
        </CardContent>
      </Card>

      <PlatformStats stats={platformStats} username={userId || ""} />
    </div>
  );
};

export default ReferredUsers;