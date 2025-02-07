
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import UserInfoCard from "@/components/UserInfoCard";
import PlatformStats from "@/components/PlatformStats";
import LatestActivity from "@/components/LatestActivity";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";
import { Users, DollarSign, ArrowRightLeft, Diamond } from "lucide-react";
import { getUserById } from "@/data/sampleUsers";

const ReferredUsers = () => {
  const [filter, setFilter] = useState("all");
  const currentUser = getUserById("member1"); // This should be replaced with actual logged user
  
  if (!currentUser) return null;

  const getFilteredMembers = () => {
    const allMembers = currentUser.referredUsers;
    if (filter === "all") return allMembers;
    return allMembers.filter(userId => {
      const user = getUserById(userId);
      return user?.currentPlan.toLowerCase() === filter;
    });
  };

  const members = getFilteredMembers().map(userId => {
    const user = getUserById(userId);
    return {
      id: userId,
      registrationDate: "30.01.2025, 09:35 PM",
      transactionHash: "0x123...abc",
      currentPlan: user?.currentPlan || "Unknown",
      activeUntil: user?.activeUntil || "Unknown"
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

  const latestActivities = members.map(member => ({
    id: member.id,
    date: member.registrationDate,
    plan: member.currentPlan,
    activeUntil: member.activeUntil,
    transactionHash: member.transactionHash
  }));

  const recentMembers = members.map(member => ({
    id: member.id,
    plan: member.currentPlan,
    date: member.registrationDate,
    invitedBy: currentUser.id,
    transactionHash: member.transactionHash
  }));

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-6">
        <UserInfoCard 
          {...currentUser}
          onLogout={() => console.log("Logging out...")}
          isOwner={true}
          totalReferrals={currentUser.referredUsers.length.toString()}
        />

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Members</CardTitle>
            <Select
              value={filter}
              onValueChange={(value) => setFilter(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Members</SelectItem>
                <SelectItem value="bronze">Bronze Members</SelectItem>
                <SelectItem value="gold">Gold Members</SelectItem>
                <SelectItem value="diamond">Diamond Members</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <MembersTable members={members} title="Members" />
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
    </DashboardLayout>
  );
};

export default ReferredUsers;
