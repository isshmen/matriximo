
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Diamond, CheckCircle2 } from "lucide-react";

interface PlanFeature {
  silverEarnings: string;
  goldEarnings: string;
  diamondEarnings: string;
}

interface PlanProps {
  isLoggedIn: boolean;
  activePlan?: string | null;
}

const Plans = ({ isLoggedIn, activePlan }: PlanProps) => {
  // Don't show plans for logged-in users with active plans
  if (isLoggedIn && activePlan) {
    return null;
  }

  const plans = [
    {
      name: "Silver Plan",
      price: "10",
      earnings: {
        silverEarnings: "7",
        goldEarnings: "25",
        diamondEarnings: "50"
      },
      color: "bg-slate-200"
    },
    {
      name: "Gold Plan",
      price: "50",
      earnings: {
        silverEarnings: "8",
        goldEarnings: "35",
        diamondEarnings: "70"
      },
      color: "bg-yellow-100"
    },
    {
      name: "Diamond Plan",
      price: "100",
      earnings: {
        silverEarnings: "9",
        goldEarnings: "45",
        diamondEarnings: "90"
      },
      color: "bg-blue-100"
    }
  ];

  const commonFeatures = [
    "P2P Transactions",
    "Instant & Automatic",
    "Transparency",
    "Decentralized"
  ];

  const handleSubscribe = (planName: string) => {
    console.log(`Subscribing to ${planName}`);
  };

  const renderEarnings = (earnings: PlanFeature) => (
    <div className="space-y-2 my-6">
      <div className="bg-primary/10 p-3 rounded-lg text-center transform hover:scale-105 transition-transform">
        <p className="text-primary font-semibold">${earnings.silverEarnings} from Silver</p>
      </div>
      <div className="bg-primary/10 p-3 rounded-lg text-center transform hover:scale-105 transition-transform">
        <p className="text-primary font-semibold">${earnings.goldEarnings} from Gold</p>
      </div>
      <div className="bg-primary/10 p-3 rounded-lg text-center transform hover:scale-105 transition-transform">
        <p className="text-primary font-semibold">${earnings.diamondEarnings} from Diamond</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-muted-foreground">Select the perfect plan for your needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`relative overflow-hidden hover:shadow-lg transition-shadow ${plan.name === "Diamond Plan" ? "border-primary" : ""}`}
          >
            {plan.name === "Diamond Plan" && (
              <div className="absolute top-0 right-0 p-2">
                <Diamond className="h-6 w-6 text-primary animate-pulse" />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
              <CardDescription className="text-center text-2xl font-bold">
                ${plan.price}
                <span className="text-sm font-normal">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderEarnings(plan.earnings)}
              <div className="space-y-2 mt-6">
                {commonFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                onClick={() => handleSubscribe(plan.name)}
              >
                SUBSCRIBE
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Plans;
