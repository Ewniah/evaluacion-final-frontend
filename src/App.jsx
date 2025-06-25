import React, { useState } from "react";
import "./App.css";
import FormularioTrabajador from "./components/FormularioTrabajador";
import ListaTrabajadores from "./components/ListaTrabajadores";
// Se importan todos los componentes necesarios

function App() {
  const [trabajadores, setTrabajadores] = useState([
    { id: 1, nombre: "Alan", apellido: "Mese", rentaBruta: 850000, fechaIngreso: "2022-03-15" },
    { id: 2, nombre: "Vicente", apellido: "Pizarro", rentaBruta: 920000, fechaIngreso: "2021-07-20" }
  ]);

  const [form, setForm] = useState({ nombre: "", apellido: "", rentaBruta: "", fechaIngreso: "" });
  const [editandoId, setEditandoId] = useState(null);
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    const trabajadorData = {
      ...form,
      rentaBruta: Number(form.rentaBruta)
    };

    if (editandoId) {
      setTrabajadores(trabajadores.map(tra => tra.id === editandoId ? { ...tra, ...trabajadorData } : tra));
      setEditandoId(null);
    } else {
      setTrabajadores([...trabajadores, { id: Date.now(), ...trabajadorData }]);
    }
    setForm({ nombre: "", apellido: "", rentaBruta: "", fechaIngreso: "" });
  };

  const calcularAntiguedad = (fechaIngreso) => {
    if (!fechaIngreso) return "N/A";
    const hoy = new Date();
    const ingreso = new Date(fechaIngreso);
    let anios = hoy.getFullYear() - ingreso.getFullYear();
    let meses = hoy.getMonth() - ingreso.getMonth();
    if (meses < 0 || (meses === 0 && hoy.getDate() < ingreso.getDate())) { anios--; meses += 12; }
    return `${anios} años y ${meses} meses`;
  };

  const trabajadoresCalculados = trabajadores.map(trabajador => ({
      ...trabajador,
      salud: trabajador.rentaBruta * 0.07,
      afp: trabajador.rentaBruta * 0.13,
      rentaLiquida: trabajador.rentaBruta - (trabajador.rentaBruta * 0.07) - (trabajador.rentaBruta * 0.13),
      antiguedad: calcularAntiguedad(trabajador.fechaIngreso)
    }));
  
  const handleEditar = (trabajador) => {
    setEditandoId(trabajador.id);
    setForm({
      nombre: trabajador.nombre,
      apellido: trabajador.apellido,
      rentaBruta: trabajador.rentaBruta,
      fechaIngreso: trabajador.fechaIngreso
    });
    setErrores({});
  };
  
  const validarFormulario = () => {
    const nuevosErrores = {};
    const regexSoloLetras = /^[A-Za-z\u00C0-\u017F\s]+$/;
    
    if (!form.rentaBruta || Number(form.rentaBruta) <= 0) {
      nuevosErrores.rentaBruta = "La renta bruta debe ser un número positivo";
    }
    if (!form.nombre.trim()) { nuevosErrores.nombre = "El nombre es obligatorio"; }
    else if (!regexSoloLetras.test(form.nombre)) { nuevosErrores.nombre = "El nombre solo puede contener letras y espacios"; }
    if (!form.apellido.trim()) { nuevosErrores.apellido = "El apellido es obligatorio"; }
    else if (!regexSoloLetras.test(form.apellido)) { nuevosErrores.apellido = "El apellido solo puede contener letras y espacios"; }
    if (!form.fechaIngreso) { nuevosErrores.fechaIngreso = "La fecha de ingreso es obligatoria"; }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleEliminar = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar a este trabajador?")) {
      setTrabajadores(trabajadores.filter(tra => tra.id !== id));
    }
  };

  const limpiarFormularioYCancelar = () => {
    setEditandoId(null);
    setForm({ nombre: "", apellido: "", rentaBruta: "", fechaIngreso: "" });
    setErrores({});
  };

  return (
    <div className="App">
      <header>
        <h1>Gestión de Trabajadores y Cálculo de Renta</h1>
      </header>
      <main className="layout-container">
        <div className="columna-izquierda">
          <FormularioTrabajador
            form={form}
            setForm={setForm}
            errores={errores}
            handleSubmit={handleSubmit}
            editandoId={editandoId}
            cancelarEdicion={limpiarFormularioYCancelar}
          />
        </div>
        <div className="columna-derecha">
          <ListaTrabajadores
            trabajadores={trabajadoresCalculados}
            handleEditar={handleEditar}
            handleEliminar={handleEliminar}
          />
        </div>
      </main>
    </div>
  );
}

export default App;