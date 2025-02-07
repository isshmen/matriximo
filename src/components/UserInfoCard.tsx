
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
            <p className="text-sm text-muted-foreground">Username</p>
            <p className="text-lg font-semibold">{id}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Active Plan</p>
            <p className="text-lg font-semibold">{currentPlan}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Wallet</p>
            <a 
              href={walletExplorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-primary hover:underline"
            >
              {wallet}
            </a>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Active Until</p>
            <p className="text-lg font-semibold">{formattedActiveUntil}</p>
          </div>
          <div className="space-y-2">
            {isOwner && (
              <Button variant="outline" className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                Renew Subscription
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Referral Link</p>
            <p className="text-sm text-muted-foreground">{referralLink}</p>
            <Button className="w-full" onClick={copyReferralLink}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Referral Link
            </Button>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Monthly Earnings</p>
            <p className="text-lg font-semibold">$3,500</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Earnings</p>
            <p className="text-lg font-semibold">$42,000</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Referred Users</p>
            <p className="text-lg font-semibold">{totalReferrals}</p>
            <Link to="/dashboard/members">
              <Button variant="outline" className="w-full">
                View all users
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
