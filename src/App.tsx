/** @format */

import React from "react";
import "./themes/fontTheme.scss";
import "./App.scss";
import "./themes/header.scss";
import "./themes/layout.scss";
import "./themes/sidebar.scss";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Users from "./pages/Users/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="admin" element={<RequireAuth />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
