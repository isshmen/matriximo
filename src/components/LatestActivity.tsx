import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Activity {
  id: string;
  date: string;
  plan: string;
  activeUntil: string;
  transactionHash: string;
}

interface LatestActivityProps {
  activities: Activity[];
}

const LatestActivity = ({ activities }: LatestActivityProps) => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Active Until</TableHead>
              <TableHead>Info</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <Link to={`/${activity.id}`} className="text-primary hover:underline">
                    {activity.id}
                  </Link>
                </TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.plan}</TableCell>
                <TableCell>{activity.activeUntil}</TableCell>
                <TableCell>
                  <a 
                    href={`https://bscscan.com/tx/${activity.transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Transaction
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LatestActivity;