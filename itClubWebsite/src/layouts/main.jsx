import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
function MainLayout({ children }) {
  return (
    <div className="app-container max-w-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
