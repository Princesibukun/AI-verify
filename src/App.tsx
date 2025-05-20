// import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import VerifyEmail from "./components/pages/VerifyEmailSignup";
import ResetPassword from "./components/pages/ResetPassword";
import VerifyEmailLogin from "./components/pages/VerifyEmailLogin";
import Reset from "./components/pages/Reset";
import ViewPrice from "./components/pages/ViewPrice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/verifylog" element={<VerifyEmailLogin />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/resetpass" element={<Reset />} />
      <Route path="/view" element={<ViewPrice />} />
    </Route>
  )
);

const App = () => (
  <div className="bg-gray-100">
    <RouterProvider router={router} />
  </div>
);

export default App;
