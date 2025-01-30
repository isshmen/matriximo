import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Diamond, Users, DollarSign, Link, Copy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  // Date simulate pentru grafic
  const activityData = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 500 },
    { month: "Apr", value: 280 },
    { month: "May", value: 590 },
    { month: "Jun", value: 320 }
  ];

  const statsCards = [
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

  const copyReferralLink = () => {
    navigator.clipboard.writeText("site.com/ref/yhn4bsd");
    toast({
      title: "Link copiat!",
      description: "Link-ul tău de referral a fost copiat în clipboard."
    });
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <Card key={index} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity & User Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Activitate Recentă</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">
              <p className="text-muted-foreground">
                User h3pan19b s-a înscris în planul Diamond sub yhn4bsd
              </p>
              <p className="text-xs text-primary">acum 2 ore</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">
                User gfbd39n s-a înscris în planul Diamond sub yhn4bsd
              </p>
              <p className="text-xs text-primary">acum 5 ore</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Informații Utilizator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">ID:</span>
              <span className="font-medium">yhn4bsd</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Invitat de:</span>
              <span className="font-medium">gfbd39n</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Data înscrierii:</span>
              <span className="font-medium">01.01.2025</span>
            </div>
            <div className="pt-2">
              <Button 
                onClick={copyReferralLink}
                className="w-full flex items-center justify-center gap-2"
              >
                <Link className="h-4 w-4" />
                <span>site.com/ref/yhn4bsd</span>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Chart */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Activitate Membri</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[300px]" config={{}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <XAxis 
                  dataKey="month" 
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;