import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";

const DiamondMembers = () => {
  const diamondMembers = [
    {
      id: "j6vzt91q",
      registrationDate: "26.01.2025, 04:30 PM",
      transactionHash: "0xdef...456",
      currentPlan: "Diamond",
      activeUntil: "24.02.2025, 04:30 PM"
    }
  ];

  return (
    <DashboardLayout>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Diamond Members</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={diamondMembers} title="Diamond Members" />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default DiamondMembers;