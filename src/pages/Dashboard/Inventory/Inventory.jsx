
{/* Importar Archivos */ }

import React, { useState } from 'react';
import './style.css';

{/* Modal */ }

const Modal = ({ showModal, handleClose, handleSubmit, formData, handleInputChange, activeSection, isEditing }) => {
  
  if (!showModal) return null;

  const renderFields = () => {

    {/* Cambio del modal por seccion */ }

    switch (activeSection) {

      case 'Reactivos':
        
      {/* Modal Seccion Reactivos */ }

        return (
          <>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="Ingrese ID"
                required
              />
            </label>
            <label>
              Nivel:
              <select name="level" value={formData.level} onChange={handleInputChange}>
                <option value="Alto">Alto</option>
                <option value="Medio">Medio</option>
                <option value="Bajo">Bajo</option>
              </select>
            </label>
            <label>
              Tipo:
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                placeholder="Ingrese tipo"
                required
              />
            </label>
            <label>
              Cantidad:
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,4}$/.test(value)) {
                    handleInputChange(e);
                  }
                }}
                placeholder="Ingrese cantidad (4 dígitos)"
                required
              />
            </label>
            <label>
              Unidad de Medida:
              <select name="unit" value={formData.unit} onChange={handleInputChange}>
                <option value="Lts">Lts</option>
                <option value="Grm">Grm</option>
                <option value="Kg">Kg</option>
              </select>
            </label>
            <label>
              Disponibilidad:
              <select name="available" value={formData.available} onChange={handleInputChange}>
                <option value="false">No disponible</option>
                <option value="por_acabarse">Por acabarse</option>
                <option value="true">Disponible</option>
              </select>
            </label>
          </>
        );

      case 'Accesorios':

        {/* Modal Seccion Accesorios */ }

        return (
          <>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="Ingrese ID"
                required
              />
            </label>
            <label>
              Marca:
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                placeholder="Ingrese marca"
                required
              />
            </label>
            <label>
              Disponibilidad:
              <select name="available" value={formData.available} onChange={handleInputChange}>
                <option value="false">No disponible</option>
                <option value="por_acabarse">Por acabarse</option>
                <option value="true">Disponible</option>
              </select>
            </label>
          </>
        );

      case 'Cristalería':

        {/* Modal Seccion Cristalería */ }

        return (
          <>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="Ingrese ID"
                required
              />
            </label>
            <label style={{ marginBottom: '5px' }}>
              Descripción:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Descripción del objeto"
              required
              style={{
                width: '100%',
                height: '100px',
                resize: 'none',
                boxSizing: 'border-box'
              }}
            />
            <label>
              Disponibilidad:
              <select name="available" value={formData.available} onChange={handleInputChange}>
                <option value="false">No disponible</option>
                <option value="por_acabarse">Por acabarse</option>
                <option value="true">Disponible</option>
              </select>
            </label>
          </>
        );

      case 'Muebles':

        {/* Modal Seccion Muebles */ }

        return (
          <>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="Ingrese ID"
                required
              />
            </label>
            <label>
              Color:
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                placeholder="Ingrese color"
                required
              />
            </label>
            <label>
              Material:
              <input
                type="text"
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                placeholder="Ingrese material"
                required
              />
            </label>
            <label>
              ID Lab:
              <input
                type="text"
                name="labId"
                value={formData.labId}
                onChange={handleInputChange}
                placeholder="Ingrese ID Lab"
                required
              />
            </label>
          </>
        );

      case 'Maquinaria':

        {/* Modal Seccion Maquinaria */ }

        return (
          <>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="Ingrese ID"
                required
              />
            </label>
            <label>
              Marca:
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                placeholder="Ingrese marca"
                required
              />
            </label>
            <label>
              Modelo:
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                placeholder="Ingrese modelo"
                required
              />
            </label>
            <label>
              No de Serie:
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleInputChange}
                placeholder="Ingrese número de serie"
                required
              />
            </label>
          </>
        );
      default:
        return null;
    }
  };

  {/* Estructura Basica del Modal */ }

  return (

    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isEditing ? 'Editar' : 'Registrar'} {activeSection}</h2>
        {renderFields()}
        <div className="modal-buttons">
          <button onClick={handleSubmit}>{isEditing ? 'Editar' : 'Registrar'}</button>
          <button onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>

  );
};

{/* Menu Inventario */ }

const Inventory = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState('Reactivos');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    level: 'Alto',
    type: '',
    quantity: '',
    unit: 'Lts',
    available: false,
    brand: '',
    model: '',
    serialNumber: '',
    description: '',
    color: '',
    material: '',
    labId: '',
  });


  {/* Cargar informacion a las tablas (Info de prueba) */ }

  const reactiveItems = [
    { id: 1, level: 'Alto', type: 'Ácido', quantity: 10, unit: 'L', available: true },
    { id: 2, level: 'Medio', type: 'Base', quantity: 5, unit: 'L', available: true },
    { id: 3, level: 'Bajo', type: 'Neutro', quantity: 20, unit: 'L', available: false },
  ];

  const toolItems = [
    { id: 1, brand: 'Marca A', available: true },
    { id: 2, brand: 'Marca B', available: false },
    { id: 3, brand: 'Marca C', available: true },
  ];

  const glasswareItems = [
    { id: 1, description: 'Vaso de precipitados', available: true },
    { id: 2, description: 'Matraz Erlenmeyer', available: true },
    { id: 3, description: 'Pipeta', available: false },
  ];

  const furnitureItems = [
    { id: 1, color: 'Rojo', material: 'Madera', labId: 'Lab001' },
    { id: 2, color: 'Azul', material: 'Metal', labId: 'Lab002' },
    { id: 3, color: 'Verde', material: 'Plástico', labId: 'Lab003' },
  ];

  const machineryItems = [
    { id: 1, brand: 'Marca X', model: 'Modelo A', serialNumber: '12345' },
    { id: 2, brand: 'Marca Y', model: 'Modelo B', serialNumber: '67890' },
    { id: 3, brand: 'Marca Z', model: 'Modelo C', serialNumber: '54321' },
  ];

  {/* Acciones con los botones de los Modales */}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterClick = () => {
    setIsEditing(false);
    setShowModal(true);
  };

  const handleEditClick = (section) => {
    setActiveSection(section);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      id: '',
      level: 'Alto', // Restablecer a valor por defecto
      type: '',
      quantity: '',
      unit: 'Lts', // Restablecer a valor por defecto
      available: false,
      brand: '',
      model: '',
      serialNumber: '',
      description: '',
      color: '',
      material: '',
      labId: '',
    });
  };

  const handleSubmit = () => {
    // Aquí podrías agregar la lógica para registrar los datos
    console.log('Datos registrados:', formData);
    setShowModal(false);
  };

  {/* Cargar info de las Tablas */}

  const getTableHeaders = () => {
    switch (activeSection) {
      case 'Reactivos':
        return ['ID', 'Nivel', 'Tipo', 'Cantidad', 'Unidad de Medida', 'Disponibilidad'];
      case 'Accesorios':
        return ['ID', 'Marca', 'Disponibilidad'];
      case 'Cristalería':
        return ['ID', 'Descripción', 'Disponibilidad'];
      case 'Muebles':
        return ['ID', 'Color', 'Material', 'ID Lab'];
      case 'Maquinaria':
        return ['ID', 'Marca', 'Modelo', 'No Serie'];
      default:
        return [];
    }
  };

  const getTableData = () => {
    switch (activeSection) {
      case 'Reactivos':
        return reactiveItems;
      case 'Accesorios':
        return toolItems;
      case 'Cristalería':
        return glasswareItems;
      case 'Muebles':
        return furnitureItems;
      case 'Maquinaria':
        return machineryItems;
      default:
        return [];
    }
  };

  return (
    <div className="inventory-container">

      {/* Encabezado */}
      <div className="header">
        <h1>Inventario</h1>
        <div className="search-container">
          <div className="InputContainer">
            <input
              placeholder="Buscar"
              id="input"
              className="input"
              name="text"
              type="text"
            />
          </div>

          <button className="button">
            <span>
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path>
              </svg>
            </span>
          </button>

        </div>
      </div>

      {/* Barra de secciones */}
      <div className="section-bar">
        <div className="section-options">
          <button
            className={activeSection === 'Reactivos' ? 'active' : ''}
            onClick={() => setActiveSection('Reactivos')}
          >
            Reactivos
          </button>
          <button
            className={activeSection === 'Accesorios' ? 'active' : ''}
            onClick={() => setActiveSection('Accesorios')}
          >
            Accesorios
          </button>
          <button
            className={activeSection === 'Cristalería' ? 'active' : ''}
            onClick={() => setActiveSection('Cristalería')}
          >
            Cristalería
          </button>
          <button
            className={activeSection === 'Muebles' ? 'active' : ''}
            onClick={() => setActiveSection('Muebles')}
          >
            Muebles
          </button>
          <button
            className={activeSection === 'Maquinaria' ? 'active' : ''}
            onClick={() => setActiveSection('Maquinaria')}
          >
            Maquinaria
          </button>
        </div>
        <button className="register-button" onClick={handleRegisterClick}>
          Registrar
        </button>
      </div>

      {/* Tabla de datos */}
      <table className="inventory-table">
        <thead>
          <tr>
            {getTableHeaders().map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {getTableData().map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
              <td>
                <button className="edit-button" onClick={() => handleEditClick(activeSection)}>
                  Editar
                </button>
                <button className="delete-button">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para registrar */}
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
        activeSection={activeSection}
        isEditing={isEditing}
      />
    </div>
  );
};

export default Inventory;
