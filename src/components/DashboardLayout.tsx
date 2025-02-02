import { ReactNode } from "react";
import PlatformStats from "./PlatformStats";
import { Diamond, Users, DollarSign } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const platformStats = [
    {
      title: "Total Members",
      value: "1,200",
      icon: Users,
      change: "+12% from last month",
      link: "/dashboard/members"
    },
    {
      title: "Bronze Members",
      value: "400",
      icon: Users,
      change: "+8.2% from last month",
      link: "/dashboard/bronze-members"
    },
    {
      title: "Gold Members",
      value: "500",
      icon: Users,
      change: "+5.4% from last month",
      link: "/dashboard/gold-members"
    },
    {
      title: "Diamond Members",
      value: "300",
      icon: Diamond,
      change: "+14.6% from last month",
      link: "/dashboard/diamond-members"
    }
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      <PlatformStats stats={platformStats} />
      {children}
    </div>
  );
};

export default DashboardLayout;