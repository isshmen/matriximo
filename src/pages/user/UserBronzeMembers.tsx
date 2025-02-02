import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import MembersTable from "@/components/MembersTable";
import { useParams } from "react-router-dom";
import { getUserById } from "@/data/sampleUsers";

const UserBronzeMembers = () => {
  const { userId } = useParams();
  const user = getUserById(userId || "");
  
  const bronzeMembers = user?.bronzeMembers?.map(memberId => ({
    id: memberId,
    registrationDate: "28.01.2025, 11:15 AM",
    transactionHash: "0x789...ghi",
    currentPlan: "Bronze",
    activeUntil: "01.02.2025, 11:15 AM"
  })) || [];

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

export default UserBronzeMembers;