import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Member {
  id: string;
  registrationDate: string;
  transactionHash: string;
  currentPlan: string;
  activeUntil: string;
}

interface MembersTableProps {
  members: Member[];
  title: string;
}

const MembersTable = ({ members, title }: MembersTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Registration Date</TableHead>
          <TableHead>Current Plan</TableHead>
          <TableHead>Active Until</TableHead>
          <TableHead>Info</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Link to={`/${user.id}`} className="text-primary hover:underline">
                {user.id}
              </Link>
            </TableCell>
            <TableCell>{user.registrationDate}</TableCell>
            <TableCell>{user.currentPlan}</TableCell>
            <TableCell>{user.activeUntil}</TableCell>
            <TableCell>
              <a 
                href={`https://bscscan.com/tx/${user.transactionHash}`}
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
  );
};

export default MembersTable;