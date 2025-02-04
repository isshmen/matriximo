import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Users, DollarSign, ArrowRightLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PlatformStat {
  title: string;
  value: string;
  icon: any;
  change: string;
  link?: string;
}

interface PlatformStatsProps {
  stats: PlatformStat[];
  username?: string;
  title?: string;
  className?: string;
}

const PlatformStats = ({ stats, username, title = "Platform Statistics", className }: PlatformStatsProps) => {
  return (
    <Card className={`bg-card ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
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
        {username && (
          <div className="mt-6">
            <Link to={`/${username}/referred-members`}>
              <Button className="w-full">
                View all referred members
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PlatformStats;