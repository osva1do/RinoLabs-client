import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "./style.css";

const BarChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [chartType, setChartType] = useState("reactivos");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `/api/${chartType}`;
        const response = await axios.get(`http://localhost:3000${endpoint}`);

        const labels = response.data.map((item) => item.nombre);
        const values = response.data.map((item) => item.cantidad);

        setData({
          labels: labels,
          datasets: [
            {
              label: `Cantidad de ${
                chartType.charAt(0).toUpperCase() + chartType.slice(1)
              }`,
              data: values,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [chartType]);

  return (
    <div>
      <h1>
        Inventario de <br />{" "}
        {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
      </h1>

      <div style={{ width: "80%", margin: "auto" }}>
        <Bar data={data} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {data.labels.map((label, index) => (
          <div key={index} style={{ margin: "0 10px", textAlign: "center" }}>
            <img
              src={`ruta/a/imagenes/${label}.png`}
              alt={label}
              style={{ width: "50px", height: "50px" }}
            />{" "}
            {/* Ajusta la ruta */}
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div className="radio-button-container">
        <div className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="radio1"
            name="radio-group"
            value="reactivos"
            checked={chartType === "reactivos"}
            onChange={() => setChartType("reactivos")}
          />
          <label className="radio-button__label" for="radio1">
            <span className="radio-button__custom"></span>
            Reactivos
          </label>
        </div>

        <div className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="radio2"
            name="radio-group"
            value="reactivos"
            checked={chartType === "herramientas"}
            onChange={() => setChartType("herramientas")}
          />
          <label className="radio-button__label" for="radio2">
            <span className="radio-button__custom"></span>
            Herramientas
          </label>
        </div>

        <div className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="radio3"
            name="radio-group"
            value="reactivos"
            checked={chartType === "cristaleria"}
            onChange={() => setChartType("cristaleria")}
          />
          <label className="radio-button__label" for="radio3">
            <span className="radio-button__custom"></span>
            Cristalería
          </label>
        </div>

        <div className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="radio4"
            name="radio-group"
            value="reactivos"
            checked={chartType === "utileria"}
            onChange={() => setChartType("utileria")}
          />
          <label className="radio-button__label" for="radio4">
            <span className="radio-button__custom"></span>
            Utilería
          </label>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
