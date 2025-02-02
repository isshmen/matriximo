import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import { useParams } from "react-router-dom";
import { getUserById } from "@/data/sampleUsers";

const UserDiamondMembers = () => {
  const { userId } = useParams();
  const user = getUserById(userId || "");
  
  const diamondMembers = user?.diamondMembers?.map(memberId => ({
    id: memberId,
    registrationDate: "26.01.2025, 04:30 PM",
    transactionHash: "0xdef...456",
    currentPlan: "Diamond",
    activeUntil: "24.02.2025, 04:30 PM"
  })) || [];

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

export default UserDiamondMembers;