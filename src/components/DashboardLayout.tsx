import { ReactNode } from "react";
import { Users, DollarSign, ArrowRightLeft, Diamond } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      {children}
    </div>
  );
};

export default DashboardLayout;