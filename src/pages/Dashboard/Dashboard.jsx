import { Link, Outlet } from "react-router-dom";
import BarChart from "../../components/charts/bars/bar-chart";
import Card from "../../components/card/card";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import "./style.css";
import Icon from "../../components/icon/icon";
import { fa0, faGear } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-container">
          <img src="/img/logo.png" alt="TESCI" className="logo" />
        </div>
        <div className="dashboard-navigation">
          <nav>
            <Link to="resumen">RESUMEN</Link>
            <Link to="inventario">INVENTARIO</Link>
            <Link to="prestamos">ADMIN 3</Link>
            <Link to="asignaciones">ADMIN 4</Link>
          </nav>
        </div>
        <div className="buttons">
          <Icon icon={faGear} />
          <img
            src="/img/ejemplo-perfil.jpeg"
            alt=""
            className="header-profile"
          />
        </div>
      </header>

      <div className="content-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
