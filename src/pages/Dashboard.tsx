import DashboardLayout from "@/components/DashboardLayout";
import UserInfoCard from "@/components/UserInfoCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecentNetworkMembers from "@/components/RecentNetworkMembers";

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
    <DashboardLayout>
      <UserInfoCard 
        {...currentUser}
        onLogout={handleLogout}
      />
      
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Network Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentNetworkMembers members={recentMembers} />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Dashboard;