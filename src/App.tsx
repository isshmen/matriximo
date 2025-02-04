
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import ReferredUsers from "./pages/ReferredUsers";
import UserReferredMembers from "./pages/user/UserReferredMembers";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  // This is temporary - should be replaced with actual wallet connection logic
  const isLoggedIn = true;
  const walletInfo = {
    address: "0x3d...B6",
    balance: {
      busd: "1,234.56",
      bnb: "0.5"
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header 
          isLoggedIn={isLoggedIn}
          walletAddress={walletInfo.address}
          walletBalance={walletInfo.balance}
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/members" element={<ReferredUsers />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/:userId" element={<UserProfile />} />
            <Route path="/:userId/referred-members" element={<UserReferredMembers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
