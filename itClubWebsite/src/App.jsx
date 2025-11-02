import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/card";
import Home from "./routes/home";
import MainLayout from "./layouts/main";

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
