import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Wallet, Copy, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

interface UserInfoCardProps {
  id: string;
  wallet: string;
  currentPlan: string;
  activeUntil: string;
  monthlyEarnings: string;
  monthlyEarningsChange: string;
  totalEarnings: string;
  onLogout: () => void;
  isOwner?: boolean;
}

const UserInfoCard = ({ 
  id, 
  wallet, 
  currentPlan, 
  activeUntil,
  monthlyEarnings,
  monthlyEarningsChange,
  totalEarnings,
  onLogout,
  isOwner = false
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
    <div className="space-y-6">
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
              <p className="text-sm text-muted-foreground">Current Plan</p>
              <p className="text-lg font-semibold">{currentPlan}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Active Until</p>
              <p className="text-lg font-semibold">{activeUntil}</p>
              <Button variant="outline" size="sm" className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                Renew Subscription
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Earnings</p>
                <p className="text-lg font-semibold">{monthlyEarnings}</p>
                <p className="text-xs text-muted-foreground">{monthlyEarningsChange}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-lg font-semibold">{totalEarnings}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Wallet</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold truncate">{wallet}</p>
                {isOwner && (
                  <button 
                    onClick={onLogout}
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    <LogOut className="h-3 w-3" />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-primary/5 border-primary/10">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <p className="text-lg font-semibold">Your Referral Link</p>
            <Button className="w-full" onClick={copyReferralLink}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Referral Link
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              {referralLink}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserInfoCard;