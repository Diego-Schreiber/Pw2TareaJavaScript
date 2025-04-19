# 📋 Gestor de Tareas con Google Apps Script y JavaScript

Este proyecto es un prototipo funcional de un *gestor de tareas, creado utilizando **JavaScript, **HTML* y *Google Apps Script, con integración a una **hoja de cálculo de Google Sheets*. Fue desarrollado como parte del trabajo práctico de la materia, en donde se busca plantear una solución sencilla a un problema real utilizando herramientas web.

---

## 🎯 Propósito del proyecto

El objetivo es crear una aplicación básica donde el usuario pueda:
- Ingresar una tarea y una descripción.
- Enviar esta información a través de un formulario web.
- Guardar los datos automáticamente en una hoja de cálculo de Google Sheets.
- Usar el sistema como una mini base de datos para gestionar tareas con estado inicial *Pendiente*.

Este tipo de herramienta podría aplicarse en pequeñas organizaciones, equipos de estudio o tareas personales.

---

## 📁 Estructura del proyecto

### code.gs – Script principal de servidor (Google Apps Script)

Contiene las funciones clave del backend:

- doGet(): Renderiza el archivo index.html como la interfaz principal del usuario.
- include(filename): Permite incluir otros archivos como script.html dentro del HTML.
- guardarTarea(tarea, descripcion): Recibe los datos desde el formulario y los guarda como una nueva fila en la hoja de cálculo de Google.
- pruebaGuardar(): Función de prueba para agregar datos manualmente desde el entorno de Apps Script.

---

### index.html – Interfaz web

Es la página principal que contiene:
- Un formulario con campos para ingresar una tarea y su descripción.
- Un botón para enviar el formulario.
- Un pequeño mensaje de confirmación.
- La inclusión del archivo script.html donde se encuentra el JavaScript que maneja el envío del formulario.

---

### script.html – Lógica del formulario (JavaScript)

Se ejecuta en el navegador y contiene:

- Un listener para capturar el evento de envío del formulario (submit).
- La función google.script.run.guardarTarea(tarea, descripcion) que envía los datos al servidor.
- Un successHandler y failureHandler que informan al usuario si la operación fue exitosa o falló.

---

## 🧪 Cómo probarlo

1. Abrí la URL publicada del script (en formato https://script.google.com/macros/s/.../exec).
2. Ingresá una tarea y su descripción.
3. Hacé clic en "Guardar Tarea".
4. Verificá que los datos aparezcan en la hoja de cálculo vinculada, en la pestaña llamada Tareas.

---

## 📎 Detalles técnicos

- Los datos se guardan en columnas con este orden:  
  Tarea | Descripción | Fecha de ingreso | Estado (Pendiente)
- La hoja debe tener una pestaña llamada *Tareas*, ya creada y con permisos adecuados.
- El ID de la hoja de cálculo debe estar correctamente referenciado en code.gs.

---

## 👨‍💻 Autores y colaboradores

- *[Tu nombre]*
- *[Nombre de tu compañero/a]*

*GitHub:*  
- Repositorio: [https://github.com/TU-USUARIO/repositorio](https://github.com/TU-USUARIO/repositorio)  
- Usuario colaborador: CarloCorralesD (agregado como revisor del trabajo)

---

## 📌 Notas finales

Este proyecto es un ejemplo de cómo crear soluciones web simples y funcionales con herramientas gratuitas y accesibles. Aunque es una versión básica, se podría extender con más funcionalidades como:
- Estado de la tarea (completado, en progreso, etc.)
- Eliminación o edición de tareas.
- Notificaciones automáticas.

---