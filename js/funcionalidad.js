// menu
var id =document.getElementById("menu")
function menuAbrir() {
    id.style.display="flex";
    id.style.justifyContent="end";
}
function menuCerrar() {
    if (id.style.display==="flex") {
        id.style.display="none";
    }
}


const carrusel = document.querySelector('.carrusel');
const imagenes = carrusel.querySelectorAll('.carrusel img');
let indiceActual = 0;

function mostrarImagen() {
    imagenes.forEach((imagen, index) => {
        imagen.style.display = index === indiceActual ? 'block' : 'none';
    });
}
function nextImage() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen();
}

function prevImage() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
}

mostrarImagen();