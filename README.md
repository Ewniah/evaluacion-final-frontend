# Evaluación III: Desarrollo de Aplicación Web SPA

Aplicación web de página única (SPA) desarrollada con React para la asignatura de **Programación Front End**.

| Asignatura      | Programación Front End                                     |
|-----------------|------------------------------------------------------------|
| Docente         | Yaleni Gómez Peña                                          |
| Programa        | Ingeniería en Informática / Analista Programador           |
| Integrantes     | Bryan Alegría Pastén                                       |

## Descripción del Proyecto

El objetivo de esta aplicación es resolver la problemática de una empresa que necesita calcular la renta líquida de sus colaboradores. Para esto, se desarrolló una interfaz que permite realizar las operaciones CRUD (Crear, Leer, Modificar y Eliminar) sobre los datos de los trabajadores, los cuales se almacenan en arreglos.

## ✅ Requisitos Cumplidos

Este proyecto implementa todas las funcionalidades solicitadas en la pauta de evaluación:

#### 1. Producto: CRUD y Almacenamiento en Arreglos

* **Ingresar, Modificar, Eliminar y Listar:** Se implementó un CRUD completo para gestionar los datos de los trabajadores.
* **Almacenamiento en Arreglos:** Toda la información de los trabajadores se persiste en la memoria de la aplicación utilizando arreglos de JavaScript.
* **Datos del Trabajador:** El formulario maneja los siguientes campos:
    * Nombre
    * Apellido
    * Renta Bruta
    * Fecha de ingreso
* **Cálculos Automatizados:** La aplicación calcula y muestra automáticamente:
    * El 7% de Salud sobre la renta bruta.
    * El 13% de AFP sobre la renta bruta.
    * La Renta Líquida final (Renta Bruta - Descuentos).
    * La Antigüedad laboral del trabajador.

#### 2. Requisitos del Formulario y Código

* **Validaciones:** El formulario valida que no se ingresen valores nulos y los errores se muestran por pantalla al usuario.
* **Código Claro y Legible:**
    * Se utilizaron nombres descriptivos para variables y funciones.
    * La lógica se separó en funciones claras y concisas.
    * La aplicación está estructurada en componentes de React para una mejor organización y reutilización del código.

#### 3. Desarrollo con Framework

* La aplicación es una **SPA (Single Page Application)** desarrollada íntegramente con el framework **React.js**.

## 🚀 Tecnologías Utilizadas

-   **React.js:** Framework de JavaScript para la construcción de la interfaz.
-   **JavaScript (ES6+):** Lenguaje para la lógica de la aplicación.
-   **CSS3:** Para los estilos, diseño responsivo y layout de dos columnas.
-   **HTML5:** Para la estructura semántica.
-   **Git & GitHub:** Para el control de versiones.

## ⚙️ Instalación y Ejecución

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    *(Recuerda reemplazar la URL por la de tu propio repositorio en GitHub)*
    ```bash
    git clone [https://github.com/Ewniah/evaluacion-final-frontend](https://github.com/Ewniah/evaluacion-final-frontend)
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