function toggleNav() {
    const navWrapper = document.querySelector('.nav-wrapper');
    const overlay = document.querySelector('.overlay');
    
    navWrapper.classList.toggle('open');
    overlay.classList.toggle('active');
}
// Función para inicializar el mapa
function initMap() {
    // Opciones para el mapa (puedes personalizarlas según tu preferencia)
    const options = {
        center: { lat: 1.2136, lng: -77.2815 }, // San Juan de Pasto, Colombia
        zoom: 12
    };

    // Crear un nuevo mapa y asignarlo a un contenedor HTML (por ejemplo, un <div> con id="map")
    const map = new google.maps.Map(document.getElementById("map"), options);
}

// Cargar el script de la API de Google Maps dinámicamente
function loadGoogleMaps(apiKey) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}

// Llama a la función para cargar el mapa, reemplaza 'YOUR_API_KEY' con tu clave de API
loadGoogleMaps('AIzaSyDJvgEOYvhjOwQz1gsiWD6-0SQaXtkJG3k');


