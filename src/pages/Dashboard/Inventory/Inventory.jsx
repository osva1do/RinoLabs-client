import Card from "../../../components/card/card";
import SideBar from "../../../components/sidebar/sidebar";
import "./style.css";

const Inventory = () => {
  return (
    <div className="inventory-container">
      <SideBar />
      <div className="inventory-content">
        <div className="card-container">
          <Card css="inventory-card">REACTIVOS</Card>
          <Card css="inventory-card">HERRAMIENTAS</Card>
          <Card css="inventory-card">UTILERÍA</Card>
          <Card css="inventory-card">LABORATORIOS</Card>
        </div>
      </div>
    </div>
  );
};
export default Inventory;
