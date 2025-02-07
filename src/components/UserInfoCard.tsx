
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Copy } from "lucide-react";
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
  totalReferrals: string;
  onLogout: () => void;
  isOwner?: boolean;
}

const UserInfoCard = ({ 
  id, 
  wallet, 
  currentPlan, 
  activeUntil,
  monthlyEarnings,
  totalEarnings,
  totalReferrals,
  isOwner = false
}: UserInfoCardProps) => {
  const { toast } = useToast();
  const referralLink = `site.com/ref/${id}`;
  const formattedActiveUntil = "01.03.2025, 11:54 PM"; // This should be properly formatted from the activeUntil prop
  const walletExplorerUrl = `https://bscscan.com/address/${wallet}`; // Adjust the explorer URL based on your blockchain

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  return (
    <Card className="bg-card">
      <CardHeader className="text-center">
        <CardTitle>User Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-lg font-semibold">{id}</p>
            <p className="text-sm text-muted-foreground">Username</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">${monthlyEarnings.replace(' BUSD', '')}</p>
            <p className="text-sm text-muted-foreground">Monthly Earnings</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">{totalReferrals}</p>
            <p className="text-sm text-muted-foreground">Referred Users</p>
            <Link to="/dashboard/members">
              <Button variant="outline" className="w-full">
                View all users
              </Button>
            </Link>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-lg font-semibold">{currentPlan}</p>
            <p className="text-sm text-muted-foreground">Active Plan</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">${totalEarnings.replace(' BUSD', '')}</p>
            <p className="text-sm text-muted-foreground">Total Earnings</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">{wallet}</p>
            <p className="text-sm text-muted-foreground">Wallet</p>
            <a 
              href={walletExplorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline block"
            >
              View on Explorer
            </a>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-lg font-semibold">{formattedActiveUntil}</p>
            <p className="text-sm text-muted-foreground">Active Until</p>
            {isOwner && (
              <Button variant="outline" className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                Renew Subscription
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">{referralLink}</p>
            <p className="text-sm text-muted-foreground">Referral Link</p>
            <Button className="w-full" onClick={copyReferralLink}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Referral Link
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
