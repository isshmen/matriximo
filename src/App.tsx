import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReferredUsers from "./pages/ReferredUsers";
import BronzeMembers from "./pages/BronzeMembers";
import GoldMembers from "./pages/GoldMembers";
import DiamondMembers from "./pages/DiamondMembers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/referred-users" element={<ReferredUsers />} />
          <Route path="/bronze-members" element={<BronzeMembers />} />
          <Route path="/gold-members" element={<GoldMembers />} />
          <Route path="/diamond-members" element={<DiamondMembers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;