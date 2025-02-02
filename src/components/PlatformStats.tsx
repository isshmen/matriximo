import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface PlatformStat {
  title: string;
  value: string;
  icon: any;
  change: string;
  link?: string;
}

interface PlatformStatsProps {
  stats: PlatformStat[];
  username: string;
}

const PlatformStats = ({ stats, username }: PlatformStatsProps) => {
  return (
    <Card className="bg-card sticky top-4">
      <CardHeader>
        <CardTitle>Platform Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{stat.title}</span>
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
              {stat.link ? (
                <Link to={stat.link} className="block">
                  <div className="text-2xl font-bold hover:text-primary">{stat.value}</div>
                </Link>
              ) : (
                <div className="text-2xl font-bold">{stat.value}</div>
              )}
              <p className="text-xs text-muted-foreground">
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformStats;