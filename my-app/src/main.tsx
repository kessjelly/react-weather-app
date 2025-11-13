import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <Weather />
    </div>
  </StrictMode>
);
