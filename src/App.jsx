import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home/home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        /> RUTA PROTEGIDA PARA EL DASHBOARD DE ADMIN */}
        <Route path="/" element={<Home />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
