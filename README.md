# Evaluación III: Desarrollo de Aplicación Web SPA (35%)

Aplicación web de página única (SPA) desarrollada con React para la asignatura de **Programación Front End**. El proyecto cumple con los objetivos y criterios de la Unidad III, enfocada en el desarrollo con frameworks JavaScript y la manipulación de arreglos.

| Asignatura      | Programación Front End                                     |
|-----------------|------------------------------------------------------------|
| Docente         | [cite_start]Yaleni Gómez Peña                                 |
| Programa        | [cite_start]Ingeniería en Informática / Analista Programador  |
| Integrantes     | Bryan Alegría Pastén                                  |

## Descripción del Proyecto

[cite_start]El objetivo de esta aplicación es resolver la problemática de una empresa que necesita calcular la renta líquida de sus colaboradores. [cite_start]Para esto, se desarrolló una interfaz que permite realizar las operaciones CRUD (Crear, Leer, Modificar y Eliminar) sobre los datos de los trabajadores, los cuales se almacenan en arreglos.

[cite_start]La aplicación fue construida como un trabajo en dupla, siguiendo las instrucciones y la pauta de evaluación proporcionada.

## ✅ Requisitos Cumplidos

Este proyecto implementa todas las funcionalidades solicitadas en la pauta de evaluación:

#### **1. [cite_start]Producto: CRUD y Almacenamiento en Arreglos (Criterio 3.1.3)** 

* **Ingresar, Modificar, Eliminar y Listar:** Se implementó un CRUD completo para gestionar los datos de los trabajadores.
* [cite_start]**Almacenamiento en Arreglos:** Toda la información de los trabajadores se persiste en la memoria de la aplicación utilizando arreglos de JavaScript.
* **Datos del Trabajador:** El formulario maneja los siguientes campos:
    * [cite_start]Nombre 
    * Apellido 
    * [cite_start]Renta Bruta 
    * [cite_start]Fecha de ingreso 
* **Cálculos Automatizados:** La aplicación calcula y muestra automáticamente:
    * [cite_start]El 7% de Salud sobre la renta bruta.
    * [cite_start]El 13% de AFP sobre la renta bruta.
    * La Renta Líquida final (Renta Bruta - Descuentos).
    * [cite_start]La Antigüedad laboral del trabajador.

#### **2. [cite_start]Requisitos del Formulario y Código (Criterio 3.1.2)** 

* **Validaciones:** El formulario valida que no se ingresen valores nulos y los errores se muestran por pantalla al usuario. También se valida el formato de los datos (ej. solo letras para nombres).
* **Código Claro y Legible:**
    * Se utilizaron nombres descriptivos para variables y funciones.
    * [cite_start]La lógica se separó en funciones claras y concisas.
    * [cite_start]La aplicación está estructurada en componentes de React para una mejor organización y reutilización del código.

#### **3. [cite_start]Desarrollo con Framework (Criterio 3.1.1)** 

* [cite_start]La aplicación es una **SPA (Single Page Application)** desarrollada íntegramente con el framework **React.js**, cumpliendo con el aprendizaje esperado de la unidad.

## 🚀 Tecnologías Utilizadas

- **React.js:** Framework de JavaScript para la construcción de la interfaz.
- **JavaScript (ES6+):** Lenguaje para la lógica de la aplicación.
- **CSS3:** Para los estilos, diseño responsivo y layout de dos columnas.
- **HTML5:** Para la estructura semántica.
- **Git & GitHub:** Para el control de versiones.

## ⚙️ Instalación y Ejecución

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    *(Recuerda reemplazar la URL por la de tu propio repositorio en GitHub)*
    ```bash
    git clone [https://URL-DE-TU-REPOSITORIO.git](https://URL-DE-TU-REPOSITORIO.git)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd nombre-de-la-carpeta-del-proyecto
    ```

3.  **Instala las dependencias necesarias:**
    ```bash
    npm install
    ```

4.  **Inicia la aplicación:**
    ```bash
    npm start
    ```

La aplicación se ejecutará en modo de desarrollo y se abrirá en `http://localhost:3000`.