import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Activity {
  id: string;
  date: string;
  plan: string;
  activeUntil: string;
}

interface LatestActivityProps {
  activities: Activity[];
}

const LatestActivity = ({ activities }: LatestActivityProps) => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Latest Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Active Until</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.id}</TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.plan}</TableCell>
                <TableCell>{activity.activeUntil}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LatestActivity;