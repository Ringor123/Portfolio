import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ActivitiesProvider from "./context/ActivitiesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActivitiesProvider>
      <App />
    </ActivitiesProvider>
  </StrictMode>
);
