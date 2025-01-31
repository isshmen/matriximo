import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Member {
  id: string;
  registrationDate: string;
  transactionHash: string;
  currentPlan: string;
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((user) => (
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
  );
};

export default MembersTable;