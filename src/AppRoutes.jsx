import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Workout from "./pages/Workout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/workout" Component={Workout} />
    </Routes>
  );
}
