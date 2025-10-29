import React from "react";
import { createRoot } from "react-dom/client";
import MyApp from "./app.jsx";
import "./styles/styles.css";

const root  = createRoot(document.getElementById("root"));
root.render(<MyApp />);