import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Users, DollarSign } from "lucide-react";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import LatestActivity from "@/components/LatestActivity";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";
import { Link } from "react-router-dom";

const Index = () => {
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

  const latestActivities = [
    {
      id: "user123",
      date: "25.01.2025, 11:53 PM",
      plan: "Bronze",
      activeUntil: "25.02.2025, 11:53 PM"
    },
    // Add more activities as needed
  ];

  const recentMembers = [
    {
      id: "yhn4bsd",
      plan: "Diamond",
      date: "25.01.2025, 11:53 PM",
      invitedBy: "abc123",
      transactionHash: "0x123...456"
    },
    // Add more members as needed
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Referred</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/referred-users" className="group">
              <div className="text-2xl font-bold group-hover:text-primary transition-colors">45</div>
              <p className="text-xs text-muted-foreground mt-1">
                +5 new this month
              </p>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bronze Members</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/bronze-members" className="group">
              <div className="text-2xl font-bold group-hover:text-primary transition-colors">15</div>
              <p className="text-xs text-muted-foreground mt-1">Total referred users</p>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Gold Members</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/gold-members" className="group">
              <div className="text-2xl font-bold group-hover:text-primary transition-colors">13</div>
              <p className="text-xs text-muted-foreground mt-1">Total referred users</p>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Diamond Members</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/diamond-members" className="group">
              <div className="text-2xl font-bold group-hover:text-primary transition-colors">17</div>
              <p className="text-xs text-muted-foreground mt-1">Total referred users</p>
            </Link>
          </CardContent>
        </Card>
      </div>

      <LatestActivity activities={latestActivities} />
      <PlatformStats stats={platformStats} />
      <RecentNetworkMembers members={recentMembers} />
    </div>
  );
};

export default Index;