import React, { useState, useEffect } from 'react';
import './menu.css';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Opción seleccionada
  const [showDetail, setShowDetail] = useState(false); // Para mostrar el recuadro detallado
  const [showModal, setShowModal] = useState(false); // Para mostrar la ventana emergente
  const [modalTitle, setModalTitle] = useState(""); // Título de la ventana emergente
  const [reactivoData, setReactivoData] = useState({ no: "", nombre: "", cantidad: "", tipo: "", unidad: "", imagen: "" }); // Datos del reactivo
  const [searchTerm, setSearchTerm] = useState(""); // Para buscar en modificar y eliminar
  const [showSearchResult, setShowSearchResult] = useState(false); // Para mostrar resultados de búsqueda en eliminar
  const [reactivos, setReactivos] = useState([]); // Array para almacenar reactivos
  const [alertMessage, setAlertMessage] = useState(""); // Mensaje de alerta

  // Cargar los datos del localStorage cuando el componente se monta
  useEffect(() => {
    const storedReactivos = JSON.parse(localStorage.getItem("reactivos")) || []; // Cargar los datos del localStorage
    setReactivos(storedReactivos);
  }, []);

  // Guardar los reactivos en el localStorage cada vez que cambian
  useEffect(() => {
    if (reactivos.length > 0) {
      localStorage.setItem("reactivos", JSON.stringify(reactivos)); // Guardar los datos en el localStorage
    }
  }, [reactivos]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowDetail(value !== ""); // Muestra el recuadro solo si hay una opción seleccionada
  };

  const handleButtonClick = (action) => {
    setModalTitle(`${action} ${selectedOption === "reactivos" ? "reactivo" : "herramienta"}`);
    setShowModal(true); // Muestra la ventana emergente
  };

  const closeModal = () => {
    setShowModal(false); // Cierra la ventana emergente
    setReactivoData({ no: "", nombre: "", cantidad: "", tipo: "", unidad: "", imagen: "" }); // Reinicia datos
    setSearchTerm(""); // Reinicia término de búsqueda
    setShowSearchResult(false); // Reinicia el estado de búsqueda
  };

  // Funciones para manejar las entradas de los campos según las restricciones solicitadas
  const handleNoChange = (e) => {
    // Solo permite números del 0 al 9, letras de la 'a' a la 'z' en mayúsculas y el signo '-'.
    const value = e.target.value.toUpperCase().replace(/[^0-9A-Z-]/g, "");
    setReactivoData((prevData) => ({ ...prevData, no: value }));
  };

  const handleNombreChange = (e) => {
    // Solo permite letras (mayúsculas y minúsculas).
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setReactivoData((prevData) => ({ ...prevData, nombre: value }));
  };

  const handleCantidadChange = (e) => {
    // Solo permite números del 0 al 9.
    const value = e.target.value.replace(/[^0-9]/g, "");
    setReactivoData((prevData) => ({ ...prevData, cantidad: value }));
  };

  const handleSearch = () => {
    // Simulación de búsqueda: reemplazar con lógica real
    const foundReactivo = reactivos.find(reactivo => reactivo.no === searchTerm || reactivo.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
    if (foundReactivo) {
      setReactivoData(foundReactivo);
      setShowSearchResult(true);
    } else {
      alert("No se encontró el reactivo.");
      setShowSearchResult(false);
    }
  };

  const handleRegister = () => {
    // Verificar si ya existe un reactivo con el mismo No. o Nombre
    const existingReactivo = reactivos.find(reactivo => reactivo.no === reactivoData.no || reactivo.nombre.toLowerCase() === reactivoData.nombre.toLowerCase());
    
    if (existingReactivo) {
      // Si ya existe, mostrar alerta
      alert(`El reactivo con el No. "${reactivoData.no}" o el nombre "${reactivoData.nombre}" ya existe.`);
    } else {
      // Si no existe, agregar el reactivo
      setReactivos([...reactivos, { ...reactivoData }]);
      closeModal(); // Cerrar modal después de registrar
    }
  };

  const handleModify = () => {
    // Verificar si el nombre que estamos intentando modificar ya existe (excluyendo el reactivo actual)
    const existingReactivo = reactivos.find(reactivo => 
      reactivo.nombre.toLowerCase() === reactivoData.nombre.toLowerCase() && reactivo.no !== reactivoData.no
    );

    if (existingReactivo) {
      // Si ya existe, mostrar alerta
      alert(`El nombre "${reactivoData.nombre}" ya está registrado con otro No.`);
    } else {
      // Modificar el reactivo en la lista
      const updatedReactivos = reactivos.map(reactivo =>
        reactivo.no === reactivoData.no ? reactivoData : reactivo
      );
      setReactivos(updatedReactivos);
      setAlertMessage(`El reactivo con No. "${reactivoData.no}" ha sido modificado.`); // Mensaje de modificación
      setTimeout(() => setAlertMessage(""), 3000); // Eliminar mensaje después de 3 segundos
      closeModal();
    }
  };

  const handleDelete = () => {
    // Eliminar el reactivo de la lista
    const updatedReactivos = reactivos.filter(reactivo => reactivo.no !== reactivoData.no);
    setReactivos(updatedReactivos);
    setAlertMessage(`El reactivo con No. "${reactivoData.no}" ha sido eliminado.`); // Mensaje de eliminación
    setTimeout(() => setAlertMessage(""), 3000); // Eliminar mensaje después de 3 segundos
    closeModal();
  };

  return (
    <div className="menu-container" style={{ position: 'relative' }}>
      <div className="recuadro"></div> {/* Recuadro existente */}
      <h1 className="menu-title">Menú Búsqueda</h1> {/* Título encima del recuadro */}
      <img 
        src="/img/logo-tesci.png" // Reemplaza con la URL de tu imagen
        alt="Descripción de la imagen"
        className="menu-imagen"
      />
      
      {/* Recuadro "1" */}
      <div className="recuadro-1">
        <label htmlFor="inventario">Inventario:</label>
        <select id="inventario" onChange={handleSelectChange} value={selectedOption}>
          <option value="">Selecciona una opción</option>
          <option value="reactivos">Reactivos</option>
          <option value="herramientas">Herramientas</option>
        </select>
        
        {/* Botones de acción */}
        <div className="button-container">
          <button onClick={() => handleButtonClick("Insertar")}>Insertar</button>
          <button onClick={() => handleButtonClick("Modificar")}>Modificar</button>
          <button onClick={() => handleButtonClick("Eliminar")}>Eliminar</button>
        </div>
      </div>

      {/* Recuadro para la opción seleccionada */}
      {showDetail && (
        <div className={`recuadro-detalle ${selectedOption}`}>
          <h2>{selectedOption === "reactivos" ? "Reactivos" : "Herramientas"}</h2>

          {/* Se añadió: Caja de texto y botón de búsqueda */}
          {selectedOption === "reactivos" && (
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Buscar reactivo..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="search-input"
              />
              <button onClick={handleSearch} className="search-button">Buscar</button>
            </div>
          )}

          {selectedOption === "reactivos" && (
            <table>
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>REACTIVO</th>
                  <th>CANTIDAD</th>
                  <th>UNIDAD</th>
                  <th>TIPO</th>
                  <th>IMAGEN</th>
                </tr>
              </thead>
              <tbody>
                {reactivos.map((reactivo, index) => (
                  <tr key={index}>
                    <td>{reactivo.no}</td>
                    <td>{reactivo.nombre}</td>
                    <td>{reactivo.cantidad}</td>
                    <td>{reactivo.unidad}</td>
                    <td>{reactivo.tipo}</td>
                    <td>{reactivo.imagen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Modal de insertar/modificar/eliminar */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <h2>{modalTitle}</h2>

            {/* Ventana de Insertar Reactivo */}
            {modalTitle === "Insertar reactivo" && (
              <div>
                <label>No:</label>
                <input 
                  type="text" 
                  name="no" 
                  value={reactivoData.no} 
                  onChange={handleNoChange} 
                  maxLength="10" 
                />
                <label>Nombre:</label>
                <input 
                  type="text" 
                  name="nombre" 
                  value={reactivoData.nombre} 
                  onChange={handleNombreChange} 
                  maxLength="50" 
                />
                <label>Cantidad:</label>
                <input 
                  type="text" 
                  name="cantidad" 
                  value={reactivoData.cantidad} 
                  onChange={handleCantidadChange} 
                  maxLength="5" 
                />
                <label>Unidad:</label>
                <select name="unidad" value={reactivoData.unidad} onChange={(e) => setReactivoData({ ...reactivoData, unidad: e.target.value })}>
                  <option value="">Selecciona unidad</option>
                  <option value="mL">mL</option>
                  <option value="L">L</option>
                  <option value="Kg">Kg</option>
                  <option value="g">g</option>
                </select>

                <label>Tipo:</label>
                <select name="tipo" value={reactivoData.tipo} onChange={(e) => setReactivoData({ ...reactivoData, tipo: e.target.value })}>
                  <option value="sólido">Sólido</option>
                  <option value="líquido">Líquido</option>
                  <option value="ácido">Ácido</option>
                </select>

                <label>Imagen:</label>
                <button onClick={() => alert('Agregar imagen')}>Agregar imagen</button>

                <button onClick={handleRegister}>Registrar reactivo</button>
              </div>
            )}

            {/* Ventana de Modificar Reactivo */}
            {modalTitle === "Modificar reactivo" && (
              <div>
                <label>Buscar por No o Nombre:</label>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleSearch}>Buscar</button>

                {showSearchResult && (
                  <div>
                    <label>No:</label>
                    <input type="text" name="no" value={reactivoData.no} readOnly onChange={handleNoChange} />

                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={reactivoData.nombre} onChange={handleNombreChange} />

                    <label>Cantidad:</label>
                    <input type="text" name="cantidad" value={reactivoData.cantidad} onChange={handleCantidadChange} />

                    <label>Tipo:</label>
                    <select name="tipo" value={reactivoData.tipo} onChange={(e) => setReactivoData({ ...reactivoData, tipo: e.target.value })}>
                      <option value="sólido">Sólido</option>
                      <option value="líquido">Líquido</option>
                      <option value="ácido">Ácido</option>
                    </select>

                    <label>Unidad:</label>
                    <select name="unidad" value={reactivoData.unidad} onChange={(e) => setReactivoData({ ...reactivoData, unidad: e.target.value })}>
                      <option value="mL">mL</option>
                      <option value="L">L</option>
                      <option value="Kg">Kg</option>
                      <option value="g">g</option>
                    </select>

                    <button onClick={handleModify}>Modificar</button>
                  </div>
                )}
              </div>
            )}

            {/* Ventana de Eliminar Reactivo */}
            {modalTitle === "Eliminar reactivo" && (
              <div>
                <label>Buscar por No o Nombre:</label>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleSearch}>Buscar</button>

                {showSearchResult && (
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>NO.</th>
                          <th>REACTIVO</th>
                          <th>CANTIDAD</th>
                          <th>TIPO</th>
                          <th>UNIDAD</th>
                          <th>IMAGEN</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{reactivoData.no}</td>
                          <td>{reactivoData.nombre}</td>
                          <td>{reactivoData.cantidad}</td>
                          <td>{reactivoData.tipo}</td>
                          <td>{reactivoData.unidad}</td>
                          <td>{reactivoData.imagen}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button onClick={handleDelete}>Eliminar</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Alerta de modificación/eliminación */}
      {alertMessage && (
        <div className="alert-message">
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Menu;
