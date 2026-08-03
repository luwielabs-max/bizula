import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/landing/Home";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Success from "../pages/Auth/Success";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import EmailSent from "../pages/Auth/EmailSent";
import VerifyEmail from "../pages/Auth/VerifyEmail";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Bookings from "../pages/Dashboard/Bookings";
import Services from "../pages/Dashboard/Services";
import Inventory from "../pages/Dashboard/Inventory";
import Sales from "../pages/Dashboard/Sales";
import Customers from "../pages/Dashboard/Customers";
import Payments from "../pages/Dashboard/Payments";
import Settings from "../pages/Dashboard/Settings";
import BookingPage from "../pages/Public/BookingPage";
import Orders from "../pages/Dashboard/Orders";

import WaitlistAdmin from "./pages/WaitlistAdmin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route
          path="/verify-email"
          element={<VerifyEmail />}
        />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="bookings" element={<Bookings />} />

          <Route path="services" element={<Services />} />

          <Route path="inventory" element={<Inventory />} />

          <Route path="sales" element={<Sales />} />

          <Route path="orders" element={<Orders />} />

          <Route path="customers" element={<Customers />} />

          <Route path="payments" element={<Payments />} />

          <Route path="settings" element={<Settings />} />

        </Route>
        <Route
  path="/admin/waitlist"
  element={<WaitlistAdmin />}
/>

    <Route path="/b/:slug" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}