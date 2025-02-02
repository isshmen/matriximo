import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ReferredUsers from "./pages/ReferredUsers";
import BronzeMembers from "./pages/BronzeMembers";
import GoldMembers from "./pages/GoldMembers";
import DiamondMembers from "./pages/DiamondMembers";
import UserProfile from "./pages/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/members" element={<ReferredUsers />} />
          <Route path="/dashboard/bronze-members" element={<BronzeMembers />} />
          <Route path="/dashboard/gold-members" element={<GoldMembers />} />
          <Route path="/dashboard/diamond-members" element={<DiamondMembers />} />
          <Route path="/dashboard/profile/:userId" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;