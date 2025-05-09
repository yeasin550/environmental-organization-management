import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import router from './Routes/Routes.jsx';
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
