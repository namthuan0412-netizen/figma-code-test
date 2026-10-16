import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProductListScreen } from "./ProductListScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductListScreen />
  </StrictMode>,
);
