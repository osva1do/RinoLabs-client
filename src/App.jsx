import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Home/Landing";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Overview from "./pages/Dashboard/Overview";
import Summary from "./pages/Dashboard/Summary/Summary";
import Inventory from "./pages/Dashboard/Inventory/Inventory"

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
        <Route path="/admin" element={<Dashboard />}>
          <Route path="resumen" element={<Summary />} />
          <Route path="inventario" element={<Inventory />} />
          <Route path="overview" element={<Overview />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
