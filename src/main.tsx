import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Price from "./pages/Price";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="price" element={<Price />} />
          <Route path="resources" element={<Resources />} />
          <Route path="solutions" element={<Solutions />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
