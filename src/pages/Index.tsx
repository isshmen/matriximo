import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Users, DollarSign, Link, Copy, Clock, ArrowRight, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const copyReferralLink = () => {
    navigator.clipboard.writeText("site.com/ref/yhn4bsd");
    toast({
      title: "Success",
      description: "Your referral link has been copied to clipboard."
    });
  };

  const platformStats = [
    {
      title: "Total Members",
      value: "1,200",
      icon: Users,
      change: "+12% from last month"
    },
    {
      title: "Members Received",
      value: "400,293 BUSD",
      icon: DollarSign,
      change: "+8.2% from last month"
    },
    {
      title: "Transactions",
      value: "153,499",
      icon: Diamond,
      change: "+5.4% from last month"
    },
    {
      title: "Turnover",
      value: "1,351,014 BUSD",
      icon: Diamond,
      change: "+14.6% from last month"
    }
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* User Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="bg-card col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>User Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Current Plan</p>
                <p className="text-lg font-semibold">Diamond</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Active Until</p>
                <p className="text-lg font-semibold">March 1, 2025</p>
              </div>
              <div className="flex items-center">
                <Button className="w-full">
                  <Clock className="mr-2 h-4 w-4" />
                  Renew Subscription
                </Button>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                onClick={copyReferralLink}
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
              >
                <Link className="h-4 w-4" />
                <span>site.com/ref/yhn4bsd</span>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Referred</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground mt-1">
              +5 new this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Monthly Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,500 BUSD</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Diamond</div>
            <p className="text-xs text-muted-foreground mt-1">
              29 days remaining
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Plan Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bronze Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground mt-1">Total referred users</p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Gold Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">13</div>
            <p className="text-xs text-muted-foreground mt-1">Total referred users</p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Diamond Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">17</div>
            <p className="text-xs text-muted-foreground mt-1">Total referred users</p>
          </CardContent>
        </Card>
      </div>

      {/* User Activity */}
      <Card className="bg-card mb-6">
        <CardHeader>
          <CardTitle>User Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">ID</p>
              <p className="font-medium">h3pan19b</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Registration Date</p>
              <a href="#" className="text-primary hover:underline">
                30.01.2025, 09:35 PM
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Plan</p>
              <p className="font-medium">Diamond</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Activity */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Platform Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.title}</span>
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;