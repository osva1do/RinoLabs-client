import React, { useState, useEffect } from 'react';
import './menu.css';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Opción seleccionada
  const [showDetail, setShowDetail] = useState(false); // Para mostrar el recuadro detallado
  const [showModal, setShowModal] = useState(false); // Para mostrar la ventana emergente
  const [modalTitle, setModalTitle] = useState(""); // Título de la ventana emergente
  const [reactivoData, setReactivoData] = useState({ no: "", nombre: "", cantidad: "", tipo: "", unidad: "", nivel: "" }); // Datos del reactivo (incluido "nivel")
  const [searchTerm, setSearchTerm] = useState(""); // Para buscar en modificar y eliminar
  const [showSearchResult, setShowSearchResult] = useState(false); // Para mostrar resultados de búsqueda en eliminar
  const [reactivos, setReactivos] = useState([]); // Array para almacenar reactivos
  const [accesorios, setAccesorios] = useState([]); // Array para almacenar accesorios
  const [critaleria, setCritaleria] = useState([]); // Array para almacenar critalería
  const [muebles, setMuebles] = useState([]); // Array para almacenar muebles
  const [maquinaria, setMaquinaria] = useState([]); // Array para almacenar maquinaria
  const [alertMessage, setAlertMessage] = useState(""); // Mensaje de alerta

  // Cargar los datos del localStorage cuando el componente se monta
  useEffect(() => {
    const storedReactivos = JSON.parse(localStorage.getItem("reactivos")) || []; // Cargar los datos del localStorage
    setReactivos(storedReactivos);
    const storedAccesorios = JSON.parse(localStorage.getItem("accesorios")) || []; // Cargar accesorios desde localStorage
    setAccesorios(storedAccesorios);
    const storedCritaleria = JSON.parse(localStorage.getItem("critaleria")) || []; // Cargar critalería desde localStorage
    setCritaleria(storedCritaleria);
    const storedMuebles = JSON.parse(localStorage.getItem("muebles")) || []; // Cargar muebles desde localStorage
    setMuebles(storedMuebles);
    const storedMaquinaria = JSON.parse(localStorage.getItem("maquinaria")) || []; // Cargar maquinaria desde localStorage
    setMaquinaria(storedMaquinaria);
  }, []);

  // Guardar los reactivos, accesorios, critalería, muebles y maquinaria en el localStorage cada vez que cambian
  useEffect(() => {
    if (reactivos.length > 0) {
      localStorage.setItem("reactivos", JSON.stringify(reactivos)); // Guardar los datos en el localStorage
    }
    if (accesorios.length > 0) {
      localStorage.setItem("accesorios", JSON.stringify(accesorios)); // Guardar los accesorios en el localStorage
    }
    if (critaleria.length > 0) {
      localStorage.setItem("critaleria", JSON.stringify(critaleria)); // Guardar critalería en el localStorage
    }
    if (muebles.length > 0) {
      localStorage.setItem("muebles", JSON.stringify(muebles)); // Guardar muebles en el localStorage
    }
    if (maquinaria.length > 0) {
      localStorage.setItem("maquinaria", JSON.stringify(maquinaria)); // Guardar maquinaria en el localStorage
    }
  }, [reactivos, accesorios, critaleria, muebles, maquinaria]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowDetail(value !== ""); // Muestra el recuadro solo si hay una opción seleccionada
  };

  const handleButtonClick = (action) => {
    const title = selectedOption === "reactivos"
      ? `${action} Reactivo`
      : selectedOption === "accesorios"
        ? `${action} Accesorio`
        : selectedOption === "critaleria"
          ? `${action} Critalería`
          : selectedOption === "muebles"
            ? `${action} Mueble`
            : selectedOption === "maquinaria"
              ? `${action} Maquinaria`
              : `${action} Herramienta`;

    setModalTitle(title); // Título de la ventana modal
    setShowModal(true); // Muestra la ventana emergente
  };

  const closeModal = () => {
    setShowModal(false); // Cierra la ventana emergente
    setReactivoData({ no: "", nombre: "", cantidad: "", tipo: "", unidad: "", nivel: "" }); // Reinicia datos
  };

  const handleNoChange = (e) => {
    const value = e.target.value.toUpperCase().replace(/[^0-9A-Z-]/g, "");
    setReactivoData((prevData) => ({ ...prevData, no: value }));
  };

  const handleNombreChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setReactivoData((prevData) => ({ ...prevData, nombre: value }));
  };

  const handleCantidadChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Permitir solo números y punto
    setReactivoData((prevData) => ({ ...prevData, cantidad: value }));
  };

  const handleNivelChange = (e) => {
    const value = e.target.value;
    setReactivoData((prevData) => ({ ...prevData, nivel: value }));
  };

  const handleSearch = () => {
    const foundItem = selectedOption === "reactivos"
      ? reactivos.find(item => item.no === searchTerm) // Buscar en reactivos
      : selectedOption === "accesorios"
        ? accesorios.find(item => item.no === searchTerm) // Buscar en accesorios
        : selectedOption === "critaleria"
          ? critaleria.find(item => item.no === searchTerm) // Buscar en critalería
          : selectedOption === "muebles"
            ? muebles.find(item => item.no === searchTerm) // Buscar en muebles
            : selectedOption === "maquinaria"
              ? maquinaria.find(item => item.no === searchTerm) // Buscar en maquinaria
              : null; // Por si no seleccionamos un inventario válido

    if (foundItem) {
      setReactivoData(foundItem);
      setShowSearchResult(true); // Mostrar el resultado de la búsqueda
    } else {
      alert("No se encontró el elemento con ese ID.");
      setShowSearchResult(false); // No mostrar resultados si no se encuentra el elemento
    }
  };

  const handleRegister = () => {
    const existingItem = selectedOption === "reactivos"
      ? reactivos.find(item => item.no === reactivoData.no || item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase())
      : selectedOption === "accesorios"
        ? accesorios.find(item => item.no === reactivoData.no || item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase())
        : selectedOption === "critaleria"
          ? critaleria.find(item => item.no === reactivoData.no || item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase())
          : selectedOption === "muebles"
            ? muebles.find(item => item.no === reactivoData.no || item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase())
            : selectedOption === "maquinaria"
              ? maquinaria.find(item => item.no === reactivoData.no || item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase())
              : null;

    if (existingItem) {
      alert(`El item con el ID "${reactivoData.no}" o el nombre "${reactivoData.nombre}" ya existe.`);
    } else {
      if (selectedOption === "reactivos") {
        setReactivos([...reactivos, { ...reactivoData }]);
      } else if (selectedOption === "accesorios") {
        setAccesorios([...accesorios, { ...reactivoData }]);
      } else if (selectedOption === "critaleria") {
        setCritaleria([...critaleria, { ...reactivoData }]);
      } else if (selectedOption === "muebles") {
        setMuebles([...muebles, { ...reactivoData }]);
      } else if (selectedOption === "maquinaria") {
        setMaquinaria([...maquinaria, { ...reactivoData }]);
      }
      setAlertMessage(`El ${selectedOption === "reactivos" ? "reactivo" : selectedOption === "accesorios" ? "accesorio" : selectedOption} "${reactivoData.nombre}" ha sido agregado.`); // Mensaje de alerta
      setTimeout(() => setAlertMessage(""), 3000); // Ocultar el mensaje después de 3 segundos
      closeModal(); // Cerrar modal después de registrar
    }
  };

  const handleModify = () => {
    const existingItem = selectedOption === "reactivos"
      ? reactivos.find(item => item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase() && item.no !== reactivoData.no)
      : selectedOption === "accesorios"
        ? accesorios.find(item => item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase() && item.no !== reactivoData.no)
        : selectedOption === "critaleria"
          ? critaleria.find(item => item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase() && item.no !== reactivoData.no)
          : selectedOption === "muebles"
            ? muebles.find(item => item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase() && item.no !== reactivoData.no)
            : selectedOption === "maquinaria"
              ? maquinaria.find(item => item.nombre.toLowerCase() === reactivoData.nombre.toLowerCase() && item.no !== reactivoData.no)
              : null;

    if (existingItem) {
      alert(`El nombre "${reactivoData.nombre}" ya está registrado con otro ID.`);
    } else {
      const updatedItems = selectedOption === "reactivos"
        ? reactivos.map(item => item.no === reactivoData.no ? reactivoData : item)
        : selectedOption === "accesorios"
          ? accesorios.map(item => item.no === reactivoData.no ? reactivoData : item)
          : selectedOption === "critaleria"
            ? critaleria.map(item => item.no === reactivoData.no ? reactivoData : item)
            : selectedOption === "muebles"
              ? muebles.map(item => item.no === reactivoData.no ? reactivoData : item)
              : selectedOption === "maquinaria"
                ? maquinaria.map(item => item.no === reactivoData.no ? reactivoData : item)
                : null;

      if (selectedOption === "reactivos") {
        setReactivos(updatedItems);
      } else if (selectedOption === "accesorios") {
        setAccesorios(updatedItems);
      } else if (selectedOption === "critaleria") {
        setCritaleria(updatedItems);
      } else if (selectedOption === "muebles") {
        setMuebles(updatedItems);
      } else if (selectedOption === "maquinaria") {
        setMaquinaria(updatedItems);
      }

      setAlertMessage(`El ${selectedOption === "reactivos" ? "reactivo" : selectedOption === "accesorios" ? "accesorio" : selectedOption} con ID "${reactivoData.no}" ha sido modificado.`); // Mensaje de alerta para modificación
      setTimeout(() => setAlertMessage(""), 3000); // Ocultar el mensaje después de 3 segundos
      closeModal();
    }
  };

  const handleDelete = () => {
    const updatedItems = selectedOption === "reactivos"
      ? reactivos.filter(item => item.no !== reactivoData.no)
      : selectedOption === "accesorios"
        ? accesorios.filter(item => item.no !== reactivoData.no)
        : selectedOption === "critaleria"
          ? critaleria.filter(item => item.no !== reactivoData.no)
          : selectedOption === "muebles"
            ? muebles.filter(item => item.no !== reactivoData.no)
            : selectedOption === "maquinaria"
              ? maquinaria.filter(item => item.no !== reactivoData.no)
              : [];

    if (selectedOption === "reactivos") {
      setReactivos(updatedItems);
    } else if (selectedOption === "accesorios") {
      setAccesorios(updatedItems);
    } else if (selectedOption === "critaleria") {
      setCritaleria(updatedItems);
    } else if (selectedOption === "muebles") {
      setMuebles(updatedItems);
    } else if (selectedOption === "maquinaria") {
      setMaquinaria(updatedItems);
    }

    setAlertMessage(`El ${selectedOption === "reactivos" ? "reactivo" : selectedOption === "accesorios" ? "accesorio" : selectedOption} con ID "${reactivoData.no}" ha sido eliminado.`); // Mensaje de alerta para eliminación
    setTimeout(() => setAlertMessage(""), 3000); // Ocultar el mensaje después de 3 segundos
    closeModal();
  };

  const handleSearchChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z-0-9\-]/g, ""); // Solo letras y guiones
    setSearchTerm(sanitizedInput);
  };

  const sortedItems = selectedOption === "reactivos"
    ? [...reactivos].sort((a, b) => a.no.localeCompare(b.no))
    : selectedOption === "accesorios"
      ? [...accesorios].sort((a, b) => a.no.localeCompare(b.no))
      : selectedOption === "critaleria"
        ? [...critaleria].sort((a, b) => a.no.localeCompare(b.no))
        : selectedOption === "muebles"
          ? [...muebles].sort((a, b) => a.no.localeCompare(b.no))
          : selectedOption === "maquinaria"
            ? [...maquinaria].sort((a, b) => a.no.localeCompare(b.no))
            : [];

  return (
    <div className="menu-container" style={{ position: 'relative' }}>
      <div className="top-buttons">
        <button className="perfil-button">Perfil</button>
        <button className="logout-button">Cerrar sesión</button>
      </div>

      <div className="recuadro"></div> {/* Recuadro existente */}
      <h1 className="menu-title">Menú Búsqueda</h1>
      <img 
        src="/img/logo-tesci.png"
        alt="Descripción de la imagen"
        className="menu-imagen"
      />

      {/* Recuadro "1" */}
      <div className="recuadro-1">
        <label htmlFor="inventario">Inventario:</label>
        <select id="inventario" onChange={handleSelectChange} value={selectedOption}>
          <option value="">Selecciona una opción</option>
          <option value="reactivos">Reactivos</option>
          <option value="accesorios">Accesorios</option>
          <option value="critaleria">Critalería</option>
          <option value="muebles">Muebles</option>
          <option value="maquinaria">Maquinaria</option>
        </select>

        {/* Botones de acción */}
        <div className="button-container">
          <button 
            onClick={() => handleButtonClick("Insertar")}
            disabled={!selectedOption}
          >
            Insertar
          </button>
          <button 
            onClick={() => handleButtonClick("Modificar")}
            disabled={!selectedOption || !showSearchResult}
          >
            Modificar
          </button>
          <button 
            onClick={() => handleButtonClick("Eliminar")}
            disabled={!selectedOption || !showSearchResult}
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* Recuadro para la opción seleccionada */}
      {showDetail && (
        <div className={`recuadro-detalle ${selectedOption}`}>
          <h2>{selectedOption === "reactivos" ? "Reactivos" : selectedOption === "accesorios" ? "Accesorios" : selectedOption === "critaleria" ? "Critalería" : selectedOption === "muebles" ? "Muebles" : selectedOption === "maquinaria" ? "Maquinaria" : ""}</h2>

          {/* Se añadió: Caja de texto y botón de búsqueda */}
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Buscar por ID..." 
              value={searchTerm} 
              onChange={handleSearchChange} // Cambio aquí
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Buscar</button>
          </div>

          {/* Mostrar la tabla completa o el resultado de la búsqueda */}
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      {selectedOption === "accesorios" && <th>Marca</th>}
      {selectedOption === "accesorios" || selectedOption === "muebles" || selectedOption === "maquinaria" ? (
        <th>Disponibilidad</th>
      ) : null}
      {selectedOption === "critaleria" && <th>Disponibilidad</th>}
      {selectedOption === "muebles" && <th>Color</th>}
      {selectedOption === "muebles" && <th>ID Lab</th>}
      {selectedOption === "maquinaria" && <th>Modelo</th>}
      {selectedOption === "maquinaria" && <th>No. de Serie</th>}
      {selectedOption === "reactivos" && <th>Cantidad</th>}
      {selectedOption === "reactivos" && <th>Unidad</th>}
      {selectedOption === "reactivos" && <th>Tipo</th>}
      {selectedOption === "reactivos" && <th>Nivel</th>}
    </tr>
  </thead>
  <tbody>
    {(showSearchResult ? [reactivoData] : sortedItems).map(item => (
      <tr key={item.no}>
        <td>{item.no}</td>
        <td>{item.nombre}</td>
        {selectedOption === "accesorios" && <td>{item.marca}</td>}
        {selectedOption === "accesorios" || selectedOption === "muebles" || selectedOption === "maquinaria" ? (
          <td>{item.disponibilidad}</td>
        ) : null}
        {selectedOption === "critaleria" && <td>{item.disponibilidad}</td>}
        {selectedOption === "muebles" && <td>{item.color}</td>}
        {selectedOption === "muebles" && <td>{item.idLab}</td>}
        {selectedOption === "maquinaria" && <td>{item.modelo}</td>}
        {selectedOption === "maquinaria" && <td>{item.noSerie}</td>}
        {selectedOption === "reactivos" && <td>{item.cantidad}</td>}
        {selectedOption === "reactivos" && <td>{item.unidad}</td>}
        {selectedOption === "reactivos" && <td>{item.tipo}</td>}
        {selectedOption === "reactivos" && <td>{item.nivel}</td>}
      </tr>
    ))}
  </tbody>
</table>
        </div>
      )}

      {/* Ventana Modal */}
      {showModal && (
  <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h2>{modalTitle}</h2>
        <span className="close-button" onClick={closeModal}>×</span>
      </div>
      <div className="form-group">
        <label htmlFor="no">ID:</label>
        <input 
          id="no" 
          type="text" 
          value={reactivoData.no} 
          onChange={handleNoChange} 
          readOnly={modalTitle.includes("Eliminar")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input 
          id="nombre" 
          type="text" 
          value={reactivoData.nombre} 
          onChange={handleNombreChange} 
          readOnly={modalTitle.includes("Eliminar")}
        />
      </div>

      {/* Condiciones para cada inventario */}
      {selectedOption === "reactivos" && (
        <>
          <div className="form-group">
            <label htmlFor="cantidad">Cantidad:</label>
            <input 
              id="cantidad" 
              type="text" 
              value={reactivoData.cantidad} 
              onChange={handleCantidadChange} 
              readOnly={modalTitle.includes("Eliminar")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="unidad">Unidad:</label>
            <select 
              id="unidad" 
              value={reactivoData.unidad} 
              onChange={(e) => setReactivoData({ ...reactivoData, unidad: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Unidad</option>
              <option value="ML">ML</option>
              <option value="L">L</option>
              <option value="KG">KG</option>
              <option value="G">G</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo:</label>
            <select 
              id="tipo" 
              value={reactivoData.tipo} 
              onChange={(e) => setReactivoData({ ...reactivoData, tipo: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Tipo</option>
              <option value="sólido">Sólido</option>
              <option value="líquido">Líquido</option>
              <option value="gaseoso">Gaseoso</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="nivel">Nivel:</label>
            <select 
              id="nivel" 
              value={reactivoData.nivel} 
              onChange={handleNivelChange} 
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Nivel</option>
              <option value="Alto">Alto</option>
              <option value="Medio">Medio</option>
              <option value="Bajo">Bajo</option>
            </select>
          </div>
        </>
      )}

      {selectedOption === "accesorios" && (
        <>
          <div className="form-group">
            <label htmlFor="marca">Marca:</label>
            <select 
              id="marca" 
              value={reactivoData.marca} 
              onChange={(e) => setReactivoData({ ...reactivoData, marca: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Marca</option>
              <option value="Marca1">Marca 1</option>
              <option value="Marca2">Marca 2</option>
              <option value="Marca3">Marca 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="disponibilidad">Disponibilidad:</label>
            <select 
              id="disponibilidad" 
              value={reactivoData.disponibilidad} 
              onChange={(e) => setReactivoData({ ...reactivoData, disponibilidad: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Disponibilidad</option>
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
              <option value="En tránsito">En tránsito</option>
            </select>
          </div>
        </>
      )}

      {selectedOption === "critaleria" && (
        <>
          <div className="form-group">
            <label htmlFor="disponibilidad">Disponibilidad:</label>
            <input 
              id="disponibilidad" 
              type="text" 
              value={reactivoData.cantidad} 
              onChange={handleCantidadChange} 
              readOnly={modalTitle.includes("Eliminar")}
            />
          </div>
        </>
      )}

      {selectedOption === "muebles" && (
        <>
                  <div className="form-group">
            <label htmlFor="disponibilidad">Disponibilidad:</label>
            <select 
              id="disponibilidad" 
              value={reactivoData.disponibilidad} 
              onChange={(e) => setReactivoData({ ...reactivoData, disponibilidad: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Disponibilidad</option>
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
              <option value="En tránsito">En tránsito</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <select 
              id="color" 
              value={reactivoData.color} 
              onChange={(e) => setReactivoData({ ...reactivoData, color: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Color</option>
              <option value="Rojo">Rojo</option>
              <option value="Azul">Azul</option>
              <option value="Verde">Verde</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="material">Material:</label>
            <select 
              id="material" 
              value={reactivoData.material} 
              onChange={(e) => setReactivoData({ ...reactivoData, material: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Material</option>
              <option value="Madera">Madera</option>
              <option value="Metal">Metal</option>
              <option value="Plástico">Plástico</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="disponibilidad">Disponibilidad:</label>
            <input 
              id="disponibilidad" 
              type="text" 
              value={reactivoData.cantidad} 
              onChange={handleCantidadChange} 
              readOnly={modalTitle.includes("Eliminar")}
            />
          </div>
        </>
      )}

      {selectedOption === "maquinaria" && (
        <>
          <div className="form-group">
            <label htmlFor="marca">Marca:</label>
            <select 
              id="marca" 
              value={reactivoData.marca} 
              onChange={(e) => setReactivoData({ ...reactivoData, marca: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Marca</option>
              <option value="Marca1">Marca 1</option>
              <option value="Marca2">Marca 2</option>
              <option value="Marca3">Marca 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="modelo">Modelo:</label>
            <select 
              id="modelo" 
              value={reactivoData.modelo} 
              onChange={(e) => setReactivoData({ ...reactivoData, modelo: e.target.value })}
              disabled={modalTitle.includes("Eliminar")}
            >
              <option value="">Selecciona Modelo</option>
              <option value="Modelo1">Modelo 1</option>
              <option value="Modelo2">Modelo 2</option>
              <option value="Modelo3">Modelo 3</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="noSerie">No. de Serie::</label>
            <input 
              id="noSerie" 
              type="text" 
              value={reactivoData.cantidad} 
              onChange={handleCantidadChange} 
              readOnly={modalTitle.includes("Eliminar")}
            />
          </div>
        </>
      )}
            <div className="modal-actions">
              <button 
                onClick={modalTitle.includes("Insertar") ? handleRegister : modalTitle.includes("Modificar") ? handleModify : handleDelete}
              >
                {modalTitle.includes("Insertar") ? "Insertar" : modalTitle.includes("Modificar") ? "Modificar" : "Eliminar"}
              </button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Alerta de acción */}
      {alertMessage && (
        <div className="alert">{alertMessage}</div>
      )}
    </div>
  );
};

export default Menu;
