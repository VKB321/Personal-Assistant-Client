import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./auth/ProtectedRoute";

import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import Contact from "./views/Contacts";
import PublicChat from "./views/PublicChat";
import Login from "./views/Login";
import Signup from "./views/Signup";

import Overview from "./views/dashboard/Overview";
import OwnerChat from "./views/dashboard/OwnerChat";
import NotificationRules from "./views/dashboard/NotificationRules";
import Trading from "./views/dashboard/Trading";
import Jobs from "./views/dashboard/Jobs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<PublicChat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/agent" element={<OwnerChat />} />
          <Route path="/dashboard/notifications" element={<NotificationRules />} />
          <Route path="/dashboard/trading" element={<Trading />} />
          <Route path="/dashboard/jobs" element={<Jobs />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
