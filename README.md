# Maplibre GL JS con Webpack y HMR

Este proyecto configura un entorno de desarrollo con Webpack para usar Maplibre GL JS con soporte para Hot Module Replacement (HMR).

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona el repositorio o descarga los archivos del proyecto.

   ```bash
   git clone https://github.com/tu-usuario/maplibre-project.git
   cd maplibre-project
   ```

2. Instala las dependencias del proyecto 
    ```bash
    npm install
    ```

3. Iniciar el servidor de desarrollo
Para iniciar el servidor de desarrollo con soporte para Hot Module Replacement (HMR), ejecuta:  
    ```bash
    npm start
    ```  
Esto abrirá automáticamente tu navegador en http://localhost:9000 y cargará la aplicación.

## Estructura del proyecto
- src/index.js: Archivo principal de JavaScript donde se inicializa el mapa de Maplibre GL JS.
- src/index.html: Archivo HTML principal que contiene el contenedor del mapa.
- webpack.config.js: Configuración de Webpack.
- .babelrc: Configuración de Babel para transpilar el código JavaScript moderno.
- dist/: Carpeta generada por Webpack que contiene los archivos compilados.