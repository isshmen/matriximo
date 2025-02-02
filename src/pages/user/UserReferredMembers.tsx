import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import { useParams } from "react-router-dom";
import { getUserById } from "@/data/sampleUsers";

const UserReferredMembers = () => {
  const { userId } = useParams();
  const user = getUserById(userId || "");
  
  const referredMembers = user?.referredUsers?.map(memberId => ({
    id: memberId,
    registrationDate: "30.01.2025, 09:35 PM",
    transactionHash: "0x123...abc",
    currentPlan: "Various",
    activeUntil: "28.02.2025, 09:35 PM"
  })) || [];

  return (
    <DashboardLayout>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Total Members</CardTitle>
        </CardHeader>
        <CardContent>
          <MembersTable members={referredMembers} title="Total Members" />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default UserReferredMembers;