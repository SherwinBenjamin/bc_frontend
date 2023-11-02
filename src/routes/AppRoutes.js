import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Admin } from "../pages/Admin";
import { Recipient } from "../pages/Recipient";
import {Validator} from "../pages/Validator";

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/recipient" element={<Recipient />} />
      <Route path="/validator" element={<Validator />} />
    </Routes>
  );
};
