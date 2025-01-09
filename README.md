# Catedra3IDWMFrontend

Este es el repositorio del **Frontend** para el proyecto **Cátedra 3: Introducción al Desarrollo Web/Móvil**. Este proyecto se desarrolla como parte de un curso sobre desarrollo de aplicaciones web, utilizando tecnologías modernas como **Angular**, **Tailwind CSS** y **Flowbite**.

## Descripción

Este frontend interactúa con un backend API ASP.NET Core y permite realizar las siguientes acciones:

- Registro de nuevos usuarios.
- Autenticación de usuarios (login).
- Visualización de publicaciones en formato de tarjetas (cards).
- Creación de nuevas publicaciones.
- Manejo de rutas protegidas con verificación de JWT (token).

## Tecnologías

- **Angular**: Framework principal para la construcción de la SPA (Single Page Application).
- **Tailwind CSS**: Utilizado para el diseño responsivo y estilo de la interfaz de usuario.
- **Flowbite**: Biblioteca de componentes de UI basada en Tailwind CSS.
- **JWT**: Token de autenticación para manejar sesiones de usuarios.
- **RxJS**: Biblioteca para manejo de operaciones asíncronas.

## Requisitos

Para ejecutar este proyecto, necesitas tener instalados los siguientes programas:

- **Node.js** y **npm** (Node Package Manager)
- **Angular CLI**: Utilizado para generar y servir el proyecto Angular.

## Instalación

Sigue estos pasos para instalar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/xSharkz/Catedra3IDWMFrontend.git
   ```

2. Entra al directorio del proyecto:

   ```bash
   cd Catedra3IDWMFrontend
   ```

3. Instala las dependencias del proyecto utilizando npm:

   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   ng serve
   ```

   Esto iniciará la aplicación en `http://localhost:4200/`.

2. Abre tu navegador y ve a `http://localhost:4200/` para ver la aplicación en acción.

## Rutas Principales

- **/register**: Ruta para el registro de nuevos usuarios.
- **/login**: Ruta para que los usuarios inicien sesión.
- **/posts**: Muestra una lista de publicaciones.
- **/create-post**: Ruta para crear nuevas publicaciones.

## Características

- **Formulario de registro y login**: Permite a los usuarios registrarse y acceder a su cuenta.
- **Visualización de publicaciones**: Muestra publicaciones en formato de tarjeta con título, imagen y fecha.
- **Autenticación con JWT**: Verifica el token de autenticación al recargar la página o acceder a rutas protegidas.
- **Formulario de creación de publicaciones**: Permite crear nuevas publicaciones con un título y una imagen.
