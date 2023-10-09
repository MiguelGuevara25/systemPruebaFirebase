import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import { AdminPanelProvider } from "./context/AdminPanelProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AdminPanelProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AdminPanelProvider>
);
