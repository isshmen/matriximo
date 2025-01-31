import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface NetworkMember {
  id: string;
  plan: string;
  date: string;
  invitedBy: string;
  transactionHash: string;
}

interface RecentNetworkMembersProps {
  members: NetworkMember[];
}

const RecentNetworkMembers = ({ members }: RecentNetworkMembersProps) => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Recent Network Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div key={member.id} className="p-4 bg-secondary rounded-lg">
              <p className="text-base md:text-lg">
                <span className="font-semibold">{member.id}</span> has subscribed to{" "}
                <span className="text-primary">{member.plan}</span> on {member.date}, invited by{" "}
                <span className="font-semibold">{member.invitedBy}</span>
                {" - "}
                <a
                  href={`https://bscscan.com/tx/${member.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  View Transaction
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentNetworkMembers;