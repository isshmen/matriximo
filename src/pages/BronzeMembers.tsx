import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import { Users, DollarSign, ArrowRightLeft, Diamond } from "lucide-react";

const BronzeMembers = () => {
  const currentUser = {
    id: "user123",
    wallet: "0x1234...5678",
    currentPlan: "Diamond",
    activeUntil: "March 1, 2025, 11:54 PM",
    monthlyEarnings: "3,500 BUSD",
    monthlyEarningsChange: "+12.5% from last month",
    totalEarnings: "42,000 BUSD"
  };

  const bronzeMembers = [
    {
      id: "member1",
      registrationDate: "28.01.2025, 11:15 AM",
      transactionHash: "0x789...ghi",
      currentPlan: "Bronze",
      activeUntil: "01.02.2025, 11:15 AM"
    }
  ];

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

        <PlatformStats 
          stats={platformStats}
          className="mt-6"
        />
      </div>
    </DashboardLayout>
  );
};

export default BronzeMembers;