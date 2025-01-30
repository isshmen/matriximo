import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [referrerAddress, setReferrerAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const plans = [
    {
      name: "Silver",
      cost: "10 BUSD",
      id: 1,
      features: ["Basic Access", "7-9 BUSD Referral Reward", "30 Days Duration"],
      description: "Perfect for getting started"
    },
    {
      name: "Gold",
      cost: "50 BUSD",
      id: 2,
      features: ["Enhanced Access", "25-45 BUSD Referral Reward", "30 Days Duration"],
      description: "Most popular choice"
    },
    {
      name: "Diamond",
      cost: "100 BUSD",
      id: 3,
      features: ["Premium Access", "50-90 BUSD Referral Reward", "30 Days Duration"],
      description: "For power users"
    }
  ];

  const handleSubscribe = async (planId: number) => {
    setLoading(true);
    try {
      // TODO: Implement web3 connection and contract interaction
      toast({
        title: "Coming Soon",
        description: "Web3 integration will be implemented in the next update",
      });
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe to the plan",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Subscription Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose your subscription plan and start earning rewards through our referral program
        </p>
      </div>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Referrer Address (Optional)"
          value={referrerAddress}
          onChange={(e) => setReferrerAddress(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {plan.name}
                <Badge variant={plan.id === 2 ? "default" : "secondary"}>
                  {plan.id === 2 ? "Popular" : plan.cost}
                </Badge>
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={() => handleSubscribe(plan.id)}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  `Subscribe for ${plan.cost}`
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>All subscriptions are valid for 30 days and can be renewed</p>
        <p>Referral rewards vary based on your plan tier</p>
      </div>
    </div>
  );
};

export default Index;