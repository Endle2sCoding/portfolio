import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./configs/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/portfolio">
      <App />
    </Router>
  </StrictMode>
);
