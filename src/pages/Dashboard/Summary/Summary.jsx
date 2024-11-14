import { Link } from "react-router-dom";
import Card from "../../../components/card/card";
import BarChart from "../../../components/charts/bars/bar-chart";
import "./style.css";
import Icon from "../../../components/icon/icon";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  return (
    <div className="grid-container">
      <Link to="/admin/inventario">
        <Card css="card inventory">
          Inventario <br /> General
          <img src="/img/checklist.png" alt="" />
          <Icon css="card-icon" icon={faCircleChevronRight} />
        </Card>
      </Link>
      <Link to="asignaciones">
        <Card css="card assigns">
          Asignaciones de Laboratorio
          <img src="/img/microscope.png" alt="" />
          <Icon css="card-icon" icon={faCircleChevronRight} />
        </Card>
      </Link>
      <Card css="banner" />
      <Card css="charts">
        <BarChart />
      </Card>
      <div className="cards-container">
        <Card css="card">TARJETA 1</Card>
        <Card css="card">TARJETA 1</Card>
        <Card css="card">TARJETA 1</Card>
        <Card css="card">TARJETA 1</Card>
      </div>
    </div>
  );
};

export default Summary;
