import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes/routes.jsx";
import ModalProviders from "./providers/ModalProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProviders>
    <React.StrictMode>
      <RouterProvider router={route} />
    </React.StrictMode>
  </ModalProviders>
);
