import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import SurahProvider from "./context/SurahProvider";
import { AudioProvider } from "./context/AudioContext";


createRoot(document.getElementById("root")).render(
  <AudioProvider>
    <SurahProvider>
      <RouterProvider router={router} />
    </SurahProvider>
  </AudioProvider>
);
