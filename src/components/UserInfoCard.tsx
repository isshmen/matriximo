import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Wallet, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface UserInfoCardProps {
  id: string;
  wallet: string;
  currentPlan: string;
  activeUntil: string;
  monthlyEarnings: string;
  monthlyEarningsChange: string;
}

const UserInfoCard = ({ 
  id, 
  wallet, 
  currentPlan, 
  activeUntil,
  monthlyEarnings,
  monthlyEarningsChange 
}: UserInfoCardProps) => {
  const { toast } = useToast();
  const referralLink = `site.com/ref/${id}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

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
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Active Until</p>
              <p className="text-lg font-semibold">{activeUntil}</p>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <Clock className="mr-2 h-4 w-4" />
              Renew Subscription
            </Button>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Monthly Earnings</p>
            <p className="text-lg font-semibold">{monthlyEarnings}</p>
            <p className="text-xs text-muted-foreground">{monthlyEarningsChange}</p>
          </div>
          <div>
            <Button className="w-full" onClick={copyReferralLink}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Referral Link
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {referralLink}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;