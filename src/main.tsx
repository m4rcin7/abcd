import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Price from "./pages/Price";
import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
