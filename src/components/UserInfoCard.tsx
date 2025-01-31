import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserInfoCardProps {
  id: string;
  wallet: string;
  currentPlan: string;
  activeUntil: string;
}

const UserInfoCard = ({ id, wallet, currentPlan, activeUntil }: UserInfoCardProps) => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>User Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">ID</p>
            <p className="text-lg font-semibold">{id}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Wallet</p>
            <p className="text-lg font-semibold truncate">{wallet}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Current Plan</p>
            <p className="text-lg font-semibold">{currentPlan}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Active Until</p>
            <p className="text-lg font-semibold">{activeUntil}</p>
          </div>
          <div className="flex items-center">
            <Button className="w-full">
              <Clock className="mr-2 h-4 w-4" />
              Renew Subscription
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;