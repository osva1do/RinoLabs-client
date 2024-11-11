import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Home/Landing";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ProtectedRoute from "./components/ProtectedRoute";

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
        <Route path="/" Component={Landing} />
        <Route path="/registrarse" Component={Register} />
        <Route path="/iniciar-sesion" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
