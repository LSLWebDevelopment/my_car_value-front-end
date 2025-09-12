import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { CreateUserProvider } from "./users/contexts/CreateUserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateUserProvider>
      <App />
    </CreateUserProvider>
  </StrictMode>
);
