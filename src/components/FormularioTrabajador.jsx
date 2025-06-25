import React from 'react';

function FormularioTrabajador({ form, setForm, errores, handleSubmit, editandoId, cancelarEdicion }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <div className="formulario-container">
      <h2>{editandoId ? 'Modificar Trabajador' : 'Ingresar Nuevo Trabajador'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
          {errores.nombre && <p className="error-msg">{errores.nombre}</p>}
        </div>

        <div className="input-group">
          <label>Apellido:</label>
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
          {errores.apellido && <p className="error-msg">{errores.apellido}</p>}
        </div>

        <div className="input-group">
          <label>Renta Bruta:</label>
          {/* Se deja en type="number" porque mucho leseo formatearlo en string y pasarlo a number de nuevo. */}
          <input type="number" name="rentaBruta" value={form.rentaBruta} onChange={handleChange} />
          {errores.rentaBruta && <p className="error-msg">{errores.rentaBruta}</p>}
        </div>

        <div className="input-group">
          <label>Fecha de Ingreso:</label>
          <input type="date" name="fechaIngreso" value={form.fechaIngreso} onChange={handleChange} />
          {errores.fechaIngreso && <p className="error-msg">{errores.fechaIngreso}</p>}
        </div>

        <div className="botones-form">
          <button type="submit" className="btn-principal">{editandoId ? 'Guardar Cambios' : 'Agregar Trabajador'}</button>
          {editandoId && <button type="button" onClick={cancelarEdicion} className="btn-secundario">Cancelar</button>}
        </div>
      </form>
    </div>
  );
}

export default FormularioTrabajador;