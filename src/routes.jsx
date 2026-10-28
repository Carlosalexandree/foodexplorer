import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Details/Home/index";
import { Dish } from "./pages/Dish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prato/:id" element={<Dish />} />
    </Routes>
  );
}