import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProveedorTemaContexto } from "./context/TemaContexto";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <ProveedorTemaContexto>
      <App />
    </ProveedorTemaContexto>
    
  </React.StrictMode>
);
