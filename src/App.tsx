import { Route, Routes } from "react-router-dom";

//Layouts
import MainLayout from "./components/layouts/MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

// Pages
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import VerifyEmail from "./components/pages/VerifyEmailSignup";
import VerifyEmailLogin from "./components/pages/VerifyEmailLogin";
import ResetPassword from "./components/pages/ForgotPassword";
import Reset from "./components/pages/ResetPassword";
import ViewPrice from "./components/pages/ViewPrice";
import DashHome from "./components/pages/DashHome";
import Credit from "./components/pages/Credit";
function App() {
  return (
    <Routes>
      {/* Main layout routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="verify" element={<VerifyEmail />} />
        <Route path="verifylog" element={<VerifyEmailLogin />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="resetpass" element={<Reset />} />
        <Route path="view" element={<ViewPrice />} />
      </Route>

      {/* Dashboard layout routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashHome />} />
        <Route path="/dashboard/credit" element={<Credit />} />
      </Route>
    </Routes>
  );
}

export default App;
