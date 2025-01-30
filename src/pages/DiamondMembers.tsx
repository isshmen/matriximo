import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Diamond, Users, DollarSign } from "lucide-react";

const DiamondMembers = () => {
  const diamondMembers = [
    {
      id: "j6vzt91q",
      registrationDate: "26.01.2025, 04:30 PM",
      transactionHash: "0xdef...456",
      currentPlan: "Diamond"
    }
  ];

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
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>User Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">ID</p>
              <p className="text-lg font-semibold">yhn4bsd</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Wallet</p>
              <p className="text-lg font-semibold truncate">0x1234...5678</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Current Plan</p>
              <p className="text-lg font-semibold">Diamond</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diamond Members List */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Diamond Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Registration Date</TableHead>
                <TableHead>Current Plan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {diamondMembers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <a 
                      href={`https://bscscan.com/tx/${user.transactionHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {user.registrationDate}
                    </a>
                  </TableCell>
                  <TableCell>{user.currentPlan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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

export default DiamondMembers;