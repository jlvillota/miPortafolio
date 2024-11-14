// funcion para el nav
function toggleNav() {
    const navWrapper = document.querySelector('.nav-wrapper');
    const overlay = document.querySelector('.overlay');
    
    navWrapper.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Función para inicializar el mapa
function initMap() {
    // Opciones para el mapa se carga con las coordenadas de San Juan de Pasto
    const options = {
        center: { lat: 1.2136, lng: -77.2815 }, // San Juan de Pasto, Colombia
        zoom: 12
    };

    // Se crea un nuevo mapa y asignarlo a un contenedor HTML (por ejemplo, un <div> con id="map")
    const map = new google.maps.Map(document.getElementById("map"), options);
}

// Aqui Carga el script de la API de Google Maps dinámicamente
function loadGoogleMaps(apiKey) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}

// Aqui se llama a la función para cargar el mapa, aqui se pone la llave 
//que genera google para el acceso de la api de google maps
loadGoogleMaps('AIzaSyDJvgEOYvhjOwQz1gsiWD6-0SQaXtkJG3k');


//                          DOM para crear las tarjetas
// Datos de las tarjetas para facilitar la creación dinámica
const projects = [
    {
        imgSrc: "../assets/img/java.jpg",
        imgAlt: "java",
        title: "Proyecto Java",
        text: "Una aplicación de escritorio en Java para gestión de inventarios permite registrar, actualizar y consultar productos, controlar stock, y generar reportes en tiempo real. Ideal para pequeñas y medianas empresas que buscan optimizar el control de su inventario desde una interfaz intuitiva y eficiente.",
        githubLink: "https://github.com/jlvillota1302/BodegaDTV"
    },
    {
        imgSrc: "../assets/img/htmlcss.png",
        imgAlt: "HTML, CSS y JavaScript",
        title: "Proyecto HTML y CSS",
        text: "Un portafolio web desarrollado con HTML, CSS y JavaScript que presenta los servicios y habilidades de un developer full stack. La interfaz incluye secciones como Sobre Mí, Portafolio y Contacto, y muestra proyectos destacados mediante tarjetas interactivas",
        githubLink: "https://github.com/jlvillota/miPortafolio"
    }
];

// Seleccionamos el contenedor de portafolio
const portfolioSection = document.getElementById("portfolio");

// Función para crear una tarjeta de proyecto
function createCard(project) {
    // Crea el elemento de tarjeta
    const card = document.createElement("div");
    card.classList.add("card");

    // Crea la imagen
    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.imgAlt;
    img.classList.add("card-java");

    // Crea el cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Crea el título de la tarjeta
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = project.title;

    // Crea el texto de la tarjeta
    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = project.text;

    // Crea el enlace de GitHub
    const link = document.createElement("a");
    link.classList.add("btn_github");
    link.href = project.githubLink;
    link.textContent = "GitHub";
    link.target = "_blank"; // Abre el enlace en una nueva pestaña

    // Añade los elementos al cuerpo de la tarjeta
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(link);

    // Añade la imagen y el cuerpo de la tarjeta a la tarjeta
    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

// Agrega todas las tarjetas al contenedor de portafolio
projects.forEach(project => {
    const card = createCard(project);
    portfolioSection.appendChild(card);
});



