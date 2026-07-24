import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import Forms from "./pages/Forms";
import Navigation from "./pages/Navigation";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/buttons" element={<Buttons />} />

        <Route path="/cards" element={<Cards />} />

        <Route path="/forms" element={<Forms />} />

        <Route
          path="/navigation"
          element={<Navigation />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}