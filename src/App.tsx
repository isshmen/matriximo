import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import ReferredUsers from "./pages/ReferredUsers";
import UserReferredMembers from "./pages/user/UserReferredMembers";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/members" element={<ReferredUsers />} />
        <Route path="/:userId" element={<UserProfile />} />
        <Route path="/:userId/referred-members" element={<UserReferredMembers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;