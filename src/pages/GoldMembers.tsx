import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";

const GoldMembers = () => {
  const goldMembers = [
    {
      id: "m4wxr78t",
      registrationDate: "27.01.2025, 02:45 PM",
      transactionHash: "0xabc...123",
      currentPlan: "Gold",
      activeUntil: "25.02.2025, 02:45 PM"
    }
  ];

  return (
    <DashboardLayout>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Gold Members</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={goldMembers} title="Gold Members" />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default GoldMembers;