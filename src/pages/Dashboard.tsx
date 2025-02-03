import DashboardLayout from "@/components/DashboardLayout";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";
import { Users, DollarSign, ArrowRightLeft, Diamond, Wallet } from "lucide-react";

const Dashboard = () => {
  const currentUser = {
    id: "user123",
    wallet: "0x1234...5678",
    currentPlan: "Diamond",
    activeUntil: "March 1, 2025, 11:54 PM",
    monthlyEarnings: "3,500 BUSD",
    monthlyEarningsChange: "+12.5% from last month",
    totalEarnings: "42,000 BUSD"
  };

  const userStats = [
    {
      title: "Total Members",
      value: "45",
      icon: Users,
      change: "+5 new this month",
      link: "/dashboard/members"
    },
    {
      title: "Bronze Members",
      value: "15",
      icon: Users,
      change: "+3 new this month",
      link: "/dashboard/bronze-members"
    },
    {
      title: "Gold Members",
      value: "13",
      icon: Users,
      change: "+4 new this month",
      link: "/dashboard/gold-members"
    },
    {
      title: "Diamond Members",
      value: "17",
      icon: Diamond,
      change: "+2 new this month",
      link: "/dashboard/diamond-members"
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

  const recentMembers = [
    {
      id: "member1",
      plan: "Diamond",
      date: "25.01.2025, 11:53 PM",
      invitedBy: currentUser.id,
      transactionHash: "0x123...456"
    },
    {
      id: "member2",
      plan: "Gold",
      date: "24.01.2025, 10:30 PM",
      invitedBy: currentUser.id,
      transactionHash: "0x789...012"
    }
  ];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <UserInfoCard 
        {...currentUser}
        onLogout={handleLogout}
        isOwner={true}
      />
      
      <PlatformStats 
        stats={userStats} 
        title="User Statistics"
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

export default Dashboard;