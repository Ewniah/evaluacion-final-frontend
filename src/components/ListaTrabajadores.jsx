import React, { useState } from 'react';

function ListaTrabajadores({ trabajadores, handleEditar, handleEliminar }) {
  const [busqueda, setBusqueda] = useState('');

  const formatoMoneda = (numero) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(numero);
  };

  const trabajadoresFiltrados = trabajadores.filter((trabajador) => {
    if (!busqueda) return true;
    const nombreCompleto = `${trabajador.nombre} ${trabajador.apellido}`.toLowerCase();
    return nombreCompleto.includes(busqueda.toLowerCase());
  });

  return (
    <div className="lista-container">
      <h2>Listado de Trabajadores</h2>
      <div className="buscador">
        <input
          type="text"
          placeholder="Busca un trabajador..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="tabla-responsive">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Renta Bruta</th>
              <th>7% Salud</th>
              <th>AFP (13%)</th>
              <th>Renta Líquida</th>
              <th>Fecha Ingreso</th>
              <th>Antigüedad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aca se muestran los trabajadores */}
            {trabajadoresFiltrados.length > 0 ? (
              trabajadoresFiltrados.map(t => ( // t de trabajadores
                <tr key={t.id}>
                  <td>{t.nombre}</td>
                  <td>{t.apellido}</td>
                  <td>{formatoMoneda(t.rentaBruta)}</td>
                  <td>{formatoMoneda(t.salud)}</td>
                  <td>{formatoMoneda(t.afp)}</td>
                  <td>{formatoMoneda(t.rentaLiquida)}</td>
                  {/* Se formatea la fecha en línea */}
                  <td>{t.fechaIngreso.split('-').reverse().join('-')}</td>
                  <td>{t.antiguedad}</td>
                  <td className="acciones">
                    <button onClick={() => handleEditar(t)} className="btn-accion btn-editar">Modificar</button>
                    <button onClick={() => handleEliminar(t.id)} className="btn-accion btn-eliminar">Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: 'center' }}>No se encontraron trabajadores.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaTrabajadores;