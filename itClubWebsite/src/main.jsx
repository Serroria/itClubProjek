import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Impor komponen App utama
import "./index.css"; // (Jika kamu punya file index.css untuk styling global)

// Ini adalah kode yang "memulai" React
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
