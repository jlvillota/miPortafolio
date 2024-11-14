
# MiPortafolio

Este es un proyecto de portafolio web donde puedes encontrar información sobre mí, mis proyectos y mis habilidades. 
Incluye tres páginas principales: `index.html`, `proyectos.html` y `sobremi.html`, además de archivos CSS y JavaScript 
para estilos y funcionalidades.

## Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
  - [index.html](#indexhtml)
  - [proyectos.html](#proyectoshtml)
  - [sobremi.html](#sobremihtml)
  - [styles.css](#stylescss)
  - [app.js](#appjs)
- [Uso del Proyecto](#uso-del-proyecto)
- [Exportación y Configuración en Git](#exportación-y-configuración-en-git)

---

### Descripción

MiPortafolio es una aplicación web creada para mostrar información profesional, incluir ejemplos de proyectos realizados 
y ofrecer una manera visual y organizada de conocer más sobre mis habilidades. Los componentes de esta página fueron 
desarrollados en HTML, CSS y JavaScript para una experiencia de usuario moderna y responsiva.

---

### Estructura del Proyecto

#### index.html

La página principal (`index.html`) incluye una breve introducción con un título llamativo y una sección de bienvenida. 
Cuenta con una navegación principal y un menú de navegación lateral que proporciona acceso rápido a otras secciones, 
como "Sobre mí", "Portafolio" y "Contacto".

- **Header**: Incluye un menú hamburguesa para móviles y una imagen de perfil.
- **Sección de Introducción**: Presenta un título y descripción inicial de bienvenida.

#### proyectos.html

La página de proyectos (`proyectos.html`) es una galería que muestra los proyectos con los que he trabajado. 
Cada proyecto se presenta en formato de tarjeta con información básica y un botón de enlace a GitHub para detalles adicionales.

- **Tarjetas de Proyectos**: Generadas dinámicamente con JavaScript a través de `app.js`.
- **Mapa de Google Maps**: Un componente para visualizar la ubicación de algunos proyectos clave.

#### sobremi.html

La página `sobremi.html` proporciona una vista detallada de mi perfil profesional. Aquí se incluye información sobre mis 
habilidades, experiencia laboral y objetivos profesionales.

- **Sección de Habilidades**: Muestra un resumen de tecnologías y herramientas.
- **Experiencia**: Descripciones de roles previos y logros alcanzados en mi carrera.

#### styles.css

El archivo `styles.css` contiene los estilos para todo el proyecto. Incluye configuraciones de color, animaciones y estilos 
de diseño responsivo.

- **Estilos Generales**: Define el esquema de colores y tipografía de toda la aplicación.
- **Diseño Responsivo**: Configuraciones específicas para adaptar el portafolio a diferentes tamaños de pantalla.
- **Animaciones**: Añade efectos visuales, como la animación de “wiggle” para el botón de menú.

#### app.js

El archivo `app.js` contiene la lógica para generar las tarjetas de proyectos de manera dinámica, así como la funcionalidad 
para mostrar descripciones de proyectos en un modal emergente.

- **Generación Dinámica de Proyectos**: Crea y muestra cada tarjeta de proyecto en la página `proyectos.html`.
- **Interacción del Usuario**: Implementa la funcionalidad de modales para una descripción más detallada de cada proyecto y 
acceso rápido a su repositorio en GitHub.

---

### Uso del Proyecto

Para visualizar el proyecto, simplemente abre el archivo `index.html` en tu navegador. Desde allí, podrás navegar entre las 
distintas secciones utilizando el menú lateral. 

### Exportación y Configuración en Git

Para configurar y exportar este proyecto en GitHub:

1. **Inicializa el Repositorio**: En el directorio del proyecto, ejecuta `git init`.
2. **Agrega Archivos**: Usa `git add .` para agregar todos los archivos.
3. **Confirma los Cambios**: Confirma con `git commit -m "Initial commit"`.
4. **Sube a GitHub**:
   - Crea un repositorio en tu cuenta de GitHub.
   - Añade el repositorio remoto: `git remote add origin <URL-del-repositorio>`.
   - Sube los archivos: `git push -u origin main`.

### Créditos

Proyecto desarrollado por Jose Luis Villota.
