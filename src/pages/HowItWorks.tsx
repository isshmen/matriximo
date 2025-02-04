
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>How MatriXimo Works</CardTitle>
          <CardDescription>
            Learn about our referral system and rewards
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">1. Connect Your Wallet</h3>
            <p className="text-muted-foreground">
              Start by connecting your Web3 wallet to access the MatriXimo platform. We support various wallet providers for your convenience.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">2. Choose Your Membership</h3>
            <p className="text-muted-foreground">
              Select from our Bronze, Gold, or Diamond membership tiers. Each tier offers different benefits and earning potential.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">3. Share Your Referral Link</h3>
            <p className="text-muted-foreground">
              Get your unique referral link and share it with others. When they join using your link, you'll earn rewards based on their activity.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">4. Earn Rewards</h3>
            <p className="text-muted-foreground">
              Earn BUSD rewards from your referrals' activities. The more active your network, the more you earn.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowItWorks;
