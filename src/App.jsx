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
        <Route path="/" Component={Home} />
        <Route path="/registrarse" Component={Register} />
        <Route path="/iniciar-sesion" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
