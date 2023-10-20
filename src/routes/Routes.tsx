import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import ExchangeRate from "../pages/exchangeRate/ExchangeRate";
import SideBarLayout from "../layout/SideBarLayout";
import DashboardLayout from "../layout/DashboardLayout";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SideBarLayout />}>
          <Route index element={<DashboardLayout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exchange-rate" element={<ExchangeRate />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default Router;
