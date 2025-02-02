import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";

const BronzeMembers = () => {
  const bronzeMembers = [
    {
      id: "p9kxn45y",
      registrationDate: "28.01.2025, 11:15 AM",
      transactionHash: "0x789...ghi",
      currentPlan: "Bronze",
      activeUntil: "01.02.2025, 11:15 AM"
    },
    {
      id: "r7mxl32k",
      registrationDate: "27.01.2025, 09:30 AM",
      transactionHash: "0x456...def",
      currentPlan: "Bronze",
      activeUntil: "31.01.2025, 09:30 AM"
    }
  ];

  return (
    <DashboardLayout>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Bronze Members</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={bronzeMembers} title="Bronze Members" />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default BronzeMembers;