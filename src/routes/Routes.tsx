import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import ExchangeRate from "../pages/exchangeRate/ExchangeRate";
import SideBarLayout from "../layout/SideBarLayout";
import DashboardLayout from "../layout/DashboardLayout";
import { ProtectedRoutes } from "./ProtectedRoutes";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <SideBarLayout />
            </ProtectedRoutes>
          }
        >
          <Route
            index
            element={
              <ProtectedRoutes>
                <DashboardLayout />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/exchange-rate"
            element={
              <ProtectedRoutes>
                <ExchangeRate />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default Router;
