import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./components/protectedRoute";
import { AuthProvider } from "./hooks/useAuth";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WatchNow from "./pages/WatchNow";
import Secret from "./pages/Secret";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="price" element={<Price />} />
            <Route path="resources" element={<Resources />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route
              path="/secret"
              element={
                <ProtectedRoute>
                  <Secret />
                </ProtectedRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="watch-now" element={<WatchNow />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);
