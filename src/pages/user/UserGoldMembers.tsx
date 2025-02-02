import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import { useParams } from "react-router-dom";
import { getUserById } from "@/data/sampleUsers";

const UserGoldMembers = () => {
  const { userId } = useParams();
  const user = getUserById(userId || "");
  
  const goldMembers = user?.goldMembers?.map(memberId => ({
    id: memberId,
    registrationDate: "27.01.2025, 02:45 PM",
    transactionHash: "0xabc...123",
    currentPlan: "Gold",
    activeUntil: "25.02.2025, 02:45 PM"
  })) || [];

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

export default UserGoldMembers;