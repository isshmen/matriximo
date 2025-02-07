
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Diamond, CheckCircle2, Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      color: "bg-slate-200",
      description: "Perfect for those just starting their journey. Basic features with solid earning potential."
    },
    {
      name: "Gold Plan",
      price: "50",
      earnings: {
        silverEarnings: "8",
        goldEarnings: "35",
        diamondEarnings: "70"
      },
      color: "bg-yellow-100",
      description: "For ambitious earners. Enhanced features and increased earning opportunities."
    },
    {
      name: "Diamond Plan",
      price: "100",
      earnings: {
        silverEarnings: "9",
        goldEarnings: "45",
        diamondEarnings: "90"
      },
      color: "bg-blue-100",
      description: "Our premium tier. Maximum earnings and exclusive benefits for serious investors."
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
      <div className="text-center mb-10 flex items-center justify-center gap-2">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => setIsModalOpen(true)}
              >
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click for important plan information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-muted-foreground">Select the perfect plan for your needs</p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Important Information About Plans</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p className="font-semibold">
                Please remember! You cannot upgrade or downgrade your plan in future. Once selected a plan you stick with it!
              </p>
              <p>
                Lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
              </p>
              <p>
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
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
              <div className="flex items-center justify-center gap-2">
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 -mt-1"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{plan.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
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

