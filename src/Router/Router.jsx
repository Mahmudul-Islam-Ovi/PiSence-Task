import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";

import BehavioralAnalytics from "../component/Home/BehavioralAnalytics";
import SummaryDashboard from "../component/Home/SummaryDashboard";
import AttendanceTracking from "../component/Home/AttendanceTracking";
import Analytics from "../component/Home/Analytics";
import Academic from "../component/Home/Academic";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/alytics" element={<BehavioralAnalytics />} />
      <Route path="/" element={<SummaryDashboard />} />
      <Route path="/attendance" element={<AttendanceTracking />} />
      <Route path="/behavioral" element={<Analytics />} />
      <Route path="/academic" element={<Academic />} />
    </Routes>
  );
};

export default Router;
