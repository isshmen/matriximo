import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";

const ReferredUsers = () => {
  const referredUsers = [
    {
      id: "h3pan19b",
      registrationDate: "30.01.2025, 09:35 PM",
      transactionHash: "0x123...abc",
      currentPlan: "Diamond",
      activeUntil: "28.02.2025, 09:35 PM"
    },
    {
      id: "k7mxq23r",
      registrationDate: "29.01.2025, 03:22 PM",
      transactionHash: "0x456...def",
      currentPlan: "Gold",
      activeUntil: "27.02.2025, 03:22 PM"
    }
  ];

  return (
    <DashboardLayout>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Total Members</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={referredUsers} title="Total Members" />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ReferredUsers;