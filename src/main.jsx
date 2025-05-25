import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import SurahProvider from "./context/SurahProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SurahProvider>
      <RouterProvider
        router={router}
        fallbackElement={<p>Loading...</p>} // ✅ important for SSR + hydration
      />
    </SurahProvider>
  </StrictMode>
);
