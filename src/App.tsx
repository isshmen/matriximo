import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import BronzeMembers from "./pages/BronzeMembers";
import GoldMembers from "./pages/GoldMembers";
import DiamondMembers from "./pages/DiamondMembers";
import ReferredUsers from "./pages/ReferredUsers";
import UserBronzeMembers from "./pages/user/UserBronzeMembers";
import UserGoldMembers from "./pages/user/UserGoldMembers";
import UserDiamondMembers from "./pages/user/UserDiamondMembers";
import UserReferredMembers from "./pages/user/UserReferredMembers";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Add redirect from root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/members" element={<ReferredUsers />} />
        <Route path="/dashboard/bronze-members" element={<BronzeMembers />} />
        <Route path="/dashboard/gold-members" element={<GoldMembers />} />
        <Route path="/dashboard/diamond-members" element={<DiamondMembers />} />
        <Route path="/:userId" element={<UserProfile />} />
        <Route path="/:userId/referred-members" element={<UserReferredMembers />} />
        <Route path="/:userId/bronze-members" element={<UserBronzeMembers />} />
        <Route path="/:userId/gold-members" element={<UserGoldMembers />} />
        <Route path="/:userId/diamond-members" element={<UserDiamondMembers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;